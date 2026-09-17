export interface SpeechController {
  isPlaying: boolean;
  isPaused: boolean;
  currentSentenceIndex: number;
  rate: number;
  speak: (text: string, onSentenceChange?: (index: number) => void, onEnd?: () => void) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  setRate: (rate: number) => void;
}

export function splitIntoSentences(text: string): string[] {
  // Splits by period, question mark, exclamation mark followed by space or newline, while keeping punctuation
  const matches = text.match(/[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g);
  if (!matches) return [text];
  return matches.map(s => s.trim()).filter(s => s.length > 0);
}

// Known female keywords and Indian voice indicators
const FEMALE_VOICE_HINTS = [
  'neerja', 'heera', 'veena', 'priya', 'swara', 'kavya', 'ananya', 'aditi',
  'lekha', 'sangeeta', 'female', 'woman', 'girl', 'zira', 'samantha', 'victoria',
  'jenny', 'karen', 'serena', 'tessa', 'fiona'
];

const MALE_VOICE_HINTS = [
  'rishi', 'ravi', 'prabhat', 'mohan', 'male', 'man', 'boy', 'david', 'george',
  'mark', 'guy', 'daniel', 'james', 'oliver'
];

export class TextToSpeechManager {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private isPaused = false;
  private sentences: string[] = [];
  private currentSentenceIdx = 0;
  private rate = 0.95; // Crisp, clear pace for Std 7 educational reading
  private pitch = 1.1; // Warm, natural female vocal tone
  private onSentenceCallback?: (index: number) => void;
  private onEndCallback?: () => void;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private availableVoices: SpeechSynthesisVoice[] = [];
  private listeners: (() => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
    }
  }

  private initVoices() {
    if (!this.synth) return;

    const loadVoices = () => {
      this.availableVoices = this.synth?.getVoices() || [];
      this.autoSelectIndianFemaleVoice();
      this.notifyListeners();
    };

    loadVoices();

    if (typeof this.synth.onvoiceschanged !== 'undefined') {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  private autoSelectIndianFemaleVoice() {
    if (!this.availableVoices || this.availableVoices.length === 0) return;

    // 1. Highest priority: Indian English (en-IN or en_IN) female voices
    const indianVoices = this.availableVoices.filter(v => {
      const langLower = v.lang.toLowerCase().replace('_', '-');
      const nameLower = v.name.toLowerCase();
      return (
        langLower === 'en-in' ||
        langLower.startsWith('en-in') ||
        nameLower.includes('india') ||
        nameLower.includes('indian')
      );
    });

    // 1a. Indian English with explicit female marker or female name
    const indianFemale = indianVoices.find(v => {
      const nameLower = v.name.toLowerCase();
      const isFemale = FEMALE_VOICE_HINTS.some(h => nameLower.includes(h));
      const isMale = MALE_VOICE_HINTS.some(h => nameLower.includes(h));
      return isFemale && !isMale;
    });

    if (indianFemale) {
      this.selectedVoice = indianFemale;
      return;
    }

    // 1b. Indian English voices that are NOT explicitly male
    const indianNonMale = indianVoices.find(v => {
      const nameLower = v.name.toLowerCase();
      return !MALE_VOICE_HINTS.some(h => nameLower.includes(h));
    });

    if (indianNonMale) {
      this.selectedVoice = indianNonMale;
      return;
    }

    // 1c. Any Indian voice
    if (indianVoices.length > 0) {
      this.selectedVoice = indianVoices[0];
      return;
    }

    // 2. Fallback: Any English female voice with en-IN language code set on utterance
    const englishFemaleVoices = this.availableVoices.filter(v => {
      const langLower = v.lang.toLowerCase();
      const nameLower = v.name.toLowerCase();
      const isEnglish = langLower.startsWith('en');
      const isFemale = FEMALE_VOICE_HINTS.some(h => nameLower.includes(h));
      const isMale = MALE_VOICE_HINTS.some(h => nameLower.includes(h));
      return isEnglish && isFemale && !isMale;
    });

    if (englishFemaleVoices.length > 0) {
      this.selectedVoice = englishFemaleVoices[0];
      return;
    }

    // 3. Any English voice
    const anyEnglish = this.availableVoices.find(v => v.lang.toLowerCase().startsWith('en'));
    this.selectedVoice = anyEnglish || this.availableVoices[0] || null;
  }

  public subscribe(callback: () => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(cb => cb());
  }

  public isAvailable(): boolean {
    return Boolean(this.synth);
  }

  public getRate(): number {
    return this.rate;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.availableVoices;
  }

  public getIndianVoices(): SpeechSynthesisVoice[] {
    return this.availableVoices.filter(v => {
      const lang = v.lang.toLowerCase().replace('_', '-');
      const name = v.name.toLowerCase();
      return lang.startsWith('en-in') || name.includes('india') || name.includes('indian');
    });
  }

  public getSelectedVoice(): SpeechSynthesisVoice | null {
    if (!this.selectedVoice && this.availableVoices.length > 0) {
      this.autoSelectIndianFemaleVoice();
    }
    return this.selectedVoice;
  }

  public setSelectedVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice;
    this.notifyListeners();
  }

  public getVoiceDisplayName(): string {
    const v = this.getSelectedVoice();
    if (!v) return 'Indian English Female Reader (en-IN)';

    const isIndian = v.lang.toLowerCase().includes('in') || v.name.toLowerCase().includes('india');
    if (isIndian) {
      // Clean up common system prefixes
      const cleanName = v.name.replace(/Microsoft\s*|Google\s*|Online\s*|\(Natural\)\s*|- English.*|\(India\).*/gi, '').trim();
      return `${cleanName || 'Indian Voice'} (Indian English Female 🇮🇳)`;
    }

    return `${v.name.slice(0, 20)} (Indian Accent en-IN mode 🇮🇳)`;
  }

  public setRate(rate: number) {
    this.rate = rate;
    if (this.isSpeaking && !this.isPaused) {
      const currentIdx = this.currentSentenceIdx;
      this.stop();
      this.playFromSentence(currentIdx);
    }
  }

  public setPitch(pitch: number) {
    this.pitch = pitch;
  }

  public speak(fullText: string, onSentenceChange?: (idx: number) => void, onEnd?: () => void) {
    if (!this.synth) return;
    this.stop();

    this.sentences = splitIntoSentences(fullText);
    this.currentSentenceIdx = 0;
    this.onSentenceCallback = onSentenceChange;
    this.onEndCallback = onEnd;

    this.playFromSentence(0);
  }

  public speakSingleText(text: string, onEnd?: () => void) {
    if (!this.synth) return;
    this.stop();

    this.isSpeaking = true;
    this.isPaused = false;

    const utterance = new SpeechSynthesisUtterance(text);
    // Indian English female voice config
    utterance.lang = 'en-IN';
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    const voice = this.getSelectedVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('TTS speak error:', e);
      this.isSpeaking = false;
      this.isPaused = false;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  private playFromSentence(idx: number) {
    if (!this.synth || idx >= this.sentences.length) {
      this.isSpeaking = false;
      this.isPaused = false;
      if (this.onEndCallback) this.onEndCallback();
      return;
    }

    this.currentSentenceIdx = idx;
    this.isSpeaking = true;
    this.isPaused = false;

    if (this.onSentenceCallback) {
      this.onSentenceCallback(idx);
    }

    const utterance = new SpeechSynthesisUtterance(this.sentences[idx]);
    
    // Explicitly configure Indian English locale and female voice characteristics
    utterance.lang = 'en-IN';
    utterance.rate = this.rate;
    utterance.pitch = this.pitch; // 1.1 for female pitch

    const voice = this.getSelectedVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      if (this.isSpeaking && !this.isPaused) {
        this.playFromSentence(idx + 1);
      }
    };

    utterance.onerror = (e) => {
      console.warn('TTS playback note:', e);
      this.isSpeaking = false;
      this.isPaused = false;
      if (this.onEndCallback) this.onEndCallback();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  public resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentSentenceIdx = 0;
      this.currentUtterance = null;
    }
  }

  public getStatus() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      currentSentenceIdx: this.currentSentenceIdx,
      totalSentences: this.sentences.length,
      rate: this.rate
    };
  }
}

export const tts = new TextToSpeechManager();
