import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Pause, Play, Square, ZoomIn, ZoomOut, ChevronRight, HelpCircle, Sparkles, BookOpen } from 'lucide-react';
import { Chapter } from '../types';
import { tts, splitIntoSentences } from '../utils/speech';

interface PassageViewerProps {
  chapter: Chapter;
  onProceedToQuiz: () => void;
  isModalMode?: boolean;
  onCloseModal?: () => void;
  highlightClueText?: string;
}

export const PassageViewer: React.FC<PassageViewerProps> = ({
  chapter,
  onProceedToQuiz,
  isModalMode = false,
  onCloseModal,
  highlightClueText,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const [playbackRate, setPlaybackRate] = useState<number>(0.95);
  const [fontSizeClass, setFontSizeClass] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-lg');
  const [voiceName, setVoiceName] = useState<string>(tts.getVoiceDisplayName());
  const [showVoiceSelect, setShowVoiceSelect] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const sentences = splitIntoSentences(chapter.fullPassage);

  useEffect(() => {
    const updateVoice = () => {
      setVoiceName(tts.getVoiceDisplayName());
      setVoices(tts.getVoices());
    };
    updateVoice();
    const unsubscribe = tts.subscribe(updateVoice);
    return () => {
      unsubscribe();
      tts.stop();
    };
  }, []);

  const handlePlay = () => {
    if (isPaused) {
      tts.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      setIsPlaying(true);
      setIsPaused(false);
      tts.setRate(playbackRate);
      tts.speak(
        chapter.fullPassage,
        (idx) => {
          setActiveSentenceIndex(idx);
        },
        () => {
          setIsPlaying(false);
          setIsPaused(false);
          setActiveSentenceIndex(null);
        }
      );
    }
  };

  const handlePause = () => {
    tts.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    tts.stop();
    setIsPlaying(false);
    setIsPaused(false);
    setActiveSentenceIndex(null);
  };

  const handleSpeedChange = (rate: number) => {
    setPlaybackRate(rate);
    tts.setRate(rate);
  };

  const handleSelectVoice = (v: SpeechSynthesisVoice) => {
    tts.setSelectedVoice(v);
    setVoiceName(tts.getVoiceDisplayName());
    setShowVoiceSelect(false);
  };

  const handlePreviewVoice = () => {
    tts.speakSingleText("Hello detectives! I will read this Standard 7 English chapter for you.");
  };

  return (
    <div className={`w-full ${isModalMode ? 'max-w-3xl' : 'max-w-4xl'} mx-auto p-4 sm:p-6`}>
      {/* Chapter Title and Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider">
              Unit {chapter.unitNumber} • Std 7 English
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Theme: {chapter.theme}
            </span>
          </div>

          {/* Font sizing */}
          <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700 text-xs">
            <span className="text-slate-400 mr-1">Text Size:</span>
            <button
              onClick={() => setFontSizeClass('text-base')}
              className={`px-2 py-0.5 rounded ${fontSizeClass === 'text-base' ? 'bg-amber-400 text-slate-900 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSizeClass('text-lg')}
              className={`px-2 py-0.5 rounded ${fontSizeClass === 'text-lg' ? 'bg-amber-400 text-slate-900 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSizeClass('text-xl')}
              className={`px-2 py-0.5 rounded ${fontSizeClass === 'text-xl' ? 'bg-amber-400 text-slate-900 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              A++
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          {chapter.title}
        </h1>
        <p className="text-sm text-slate-300 mt-1 font-medium">
          {chapter.subtitle}
        </p>

        {/* Read Aloud Audio Control Panel with Indian English Female Voice */}
        <div className="mt-5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 mr-1">
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span>Read Aloud</span>
              </div>

              {/* Play / Pause / Stop buttons */}
              {!isPlaying ? (
                <button
                  id="btn-tts-play"
                  onClick={handlePlay}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 cursor-pointer transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isPaused ? 'Resume Voice' : 'Listen with Voice'}</span>
                </button>
              ) : (
                <button
                  id="btn-tts-pause"
                  onClick={handlePause}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer transition-all"
                >
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </button>
              )}

              {(isPlaying || isPaused) && (
                <button
                  id="btn-tts-stop"
                  onClick={handleStop}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold cursor-pointer transition-all"
                  title="Stop read aloud"
                >
                  <Square className="w-3 h-3 fill-current" />
                  <span>Stop</span>
                </button>
              )}
            </div>

            {/* Speed settings */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="text-slate-400">Speed:</span>
              {[0.8, 0.95, 1.1, 1.25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleSpeedChange(rate)}
                  className={`px-2 py-1 rounded-md cursor-pointer transition-colors ${
                    playbackRate === rate
                      ? 'bg-slate-700 text-teal-300 font-bold border border-teal-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {rate === 0.95 ? 'Normal (0.95x)' : `${rate}x`}
                </button>
              ))}
            </div>
          </div>

          {/* Indian English Female Reader Indicator Bar */}
          <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
                <span className="text-sm">🇮🇳</span>
                <span>Indian English Female Reader</span>
                <span className="text-[10px] text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-500/20">
                  en-IN
                </span>
              </div>

              <span className="text-slate-400 text-[11px] truncate max-w-[200px] sm:max-w-xs">
                Voice: <span className="text-slate-200 font-medium">{voiceName}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="btn-preview-voice"
                onClick={handlePreviewVoice}
                className="px-2.5 py-1 rounded-lg bg-slate-700/70 hover:bg-slate-700 text-slate-200 text-[11px] font-medium transition-colors"
                title="Hear short test sample of the Indian English female voice"
              >
                Sample Preview 🔊
              </button>

              {voices.length > 1 && (
                <div className="relative">
                  <button
                    type="button"
                    id="btn-toggle-voice-menu"
                    onClick={() => setShowVoiceSelect(!showVoiceSelect)}
                    className="px-2 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-amber-300 text-[11px] border border-slate-600"
                  >
                    Change Voice ▾
                  </button>

                  {showVoiceSelect && (
                    <div className="absolute right-0 top-full mt-1 w-64 max-h-56 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-30 space-y-1">
                      <div className="px-2 py-1 text-[10px] uppercase font-bold text-amber-400">
                        Available Voices
                      </div>
                      {voices
                        .filter(v => v.lang.startsWith('en') || v.lang.includes('IN'))
                        .map(v => (
                          <button
                            key={v.name}
                            type="button"
                            onClick={() => handleSelectVoice(v)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs truncate transition-colors ${
                              tts.getSelectedVoice()?.name === v.name
                                ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/40'
                                : 'text-slate-300 hover:bg-slate-800'
                            }`}
                          >
                            {v.lang.includes('IN') ? '🇮🇳 ' : ''}{v.name}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Passage Text Container */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
        <div className={`leading-relaxed tracking-normal font-normal text-slate-200 space-y-4 ${fontSizeClass}`}>
          {sentences.map((sentence, sIdx) => {
            const isSpeakingNow = activeSentenceIndex === sIdx;
            const isClueMatch = highlightClueText && sentence.toLowerCase().includes(highlightClueText.toLowerCase().slice(0, 20));

            return (
              <span
                key={sIdx}
                className={`inline transition-all duration-200 rounded px-1 py-0.5 ${
                  isSpeakingNow
                    ? 'bg-amber-400/30 text-amber-200 underline decoration-amber-400 font-semibold'
                    : isClueMatch
                    ? 'bg-emerald-500/25 text-emerald-200 border-b-2 border-emerald-400'
                    : 'text-slate-200'
                }`}
              >
                {sentence}{' '}
              </span>
            );
          })}
        </div>

        {/* Detective Clue highlight note if present */}
        {highlightClueText && (
          <div className="mt-6 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-start gap-2.5 text-xs text-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-300">Detective Clue Found in Text: </span>
              <span className="italic">"{highlightClueText}"</span>
            </div>
          </div>
        )}

        {/* Bottom Proceed Button */}
        {!isModalMode && (
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Read carefully! All 20 questions are based on this passage.</span>
            </div>

            <button
              id="btn-proceed-to-questions"
              onClick={() => {
                tts.stop();
                onProceedToQuiz();
              }}
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
            >
              <span>Solve 20 Detective Questions</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {isModalMode && onCloseModal && (
          <div className="mt-6 text-center">
            <button
              onClick={onCloseModal}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold cursor-pointer"
            >
              Back to Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
