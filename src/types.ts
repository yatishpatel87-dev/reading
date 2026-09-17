export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  clueSentence?: string;
  category: 'factual' | 'inference' | 'vocabulary' | 'grammar' | 'theme';
}

export interface Chapter {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  summary: string;
  fullPassage: string;
  questions: Question[];
}

export interface StudentProfile {
  name: string;
  std: string;
  school?: string;
  avatarId: string;
}

export type GameStage = 
  | 'onboarding' 
  | 'passage_reading' 
  | 'quiz' 
  | 'game_over' 
  | 'celebration' 
  | 'certificate';

export interface QuizProgress {
  currentIndex: number;
  selectedAnswers: (number | null)[];
  isAnswered: boolean;
  score: number;
  streak: number;
  maxStreak: number;
  lives: number;
  timeRemaining: number;
  totalTimeSpentSeconds: number;
  correctCount: number;
  wrongCount: number;
  feedbackState: 'idle' | 'correct' | 'wrong';
}

export interface DetectiveCertificateData {
  studentName: string;
  chapterTitle: string;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSpentSeconds: number;
  rankTitle: string;
  issueDate: string;
  certificateId: string;
}
