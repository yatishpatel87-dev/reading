import React, { useState, useEffect, useRef } from 'react';
import { Chapter, GameStage, StudentProfile, QuizProgress, DetectiveCertificateData } from './types';
import { STD7_CHAPTERS } from './data/chapters';
import { StudentEntry } from './components/StudentEntry';
import { PassageViewer } from './components/PassageViewer';
import { QuestionCard } from './components/QuestionCard';
import { DetectiveHUD } from './components/DetectiveHUD';
import { FireworksCanvas } from './components/FireworksCanvas';
import { DigitalTrophy } from './components/DigitalTrophy';
import { Certificate } from './components/Certificate';
import { PassageDrawerModal } from './components/PassageDrawerModal';
import { GameOverModal } from './components/GameOverModal';
import { CustomPassageModal } from './components/CustomPassageModal';
import { sounds } from './utils/audio';

const QUESTION_TIMER_SECONDS = 30;
const MAX_LIVES = 3;

export default function App() {
  const [stage, setStage] = useState<GameStage>('onboarding');
  const [student, setStudent] = useState<StudentProfile>({
    name: '',
    std: 'Std 7',
    avatarId: 'sleuth-girl-1',
  });
  const [currentChapter, setCurrentChapter] = useState<Chapter>(STD7_CHAPTERS[0]);

  // Quiz State
  const [quizState, setQuizState] = useState<QuizProgress>({
    currentIndex: 0,
    selectedAnswers: [],
    isAnswered: false,
    score: 0,
    streak: 0,
    maxStreak: 0,
    lives: MAX_LIVES,
    timeRemaining: QUESTION_TIMER_SECONDS,
    totalTimeSpentSeconds: 0,
    correctCount: 0,
    wrongCount: 0,
    feedbackState: 'idle',
  });

  // UI Modals
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeClueSentence, setActiveClueSentence] = useState<string | undefined>();
  const [isGameOverOpen, setIsGameOverOpen] = useState(false);
  const [isCustomPassageOpen, setIsCustomPassageOpen] = useState(false);
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  // Timer Ref
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getAvatarEmoji = (id: string) => {
    switch (id) {
      case 'sleuth-boy-1': return '👦';
      case 'sleuth-girl-2': return '🕵️‍♀️';
      case 'sleuth-boy-2': return '🕵️‍♂️';
      case 'sherlock': return '🧠';
      case 'star': return '⭐';
      default: return '👧';
    }
  };

  // Timer effect for Quiz Stage
  useEffect(() => {
    if (stage !== 'quiz' || quizState.isAnswered || isGameOverOpen || isDrawerOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setQuizState((prev) => {
        if (prev.timeRemaining <= 1) {
          // Time expired for this question!
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeExpired(prev);
          return {
            ...prev,
            timeRemaining: 0,
            totalTimeSpentSeconds: prev.totalTimeSpentSeconds + 1,
          };
        }

        if (prev.timeRemaining <= 6) {
          sounds.playTick();
        }

        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
          totalTimeSpentSeconds: prev.totalTimeSpentSeconds + 1,
        };
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stage, quizState.currentIndex, quizState.isAnswered, isGameOverOpen, isDrawerOpen]);

  const handleTimeExpired = (prev: QuizProgress) => {
    sounds.playWrong();
    sounds.playHeartLost();

    const newLives = prev.lives - 1;
    const isOutOfLives = newLives <= 0;

    const newAnswers = [...prev.selectedAnswers];
    newAnswers[prev.currentIndex] = -1; // -1 denotes timed out

    setQuizState((state) => ({
      ...state,
      isAnswered: true,
      selectedAnswers: newAnswers,
      lives: Math.max(0, newLives),
      streak: 0,
      wrongCount: state.wrongCount + 1,
      feedbackState: 'wrong',
    }));

    if (isOutOfLives) {
      setTimeout(() => {
        setIsGameOverOpen(true);
      }, 900);
    }
  };

  // Start game from profile entry
  const handleStartGame = (profile: StudentProfile, chapter: Chapter) => {
    setStudent(profile);
    setCurrentChapter(chapter);
    setStage('passage_reading');
  };

  // From Passage reading to Quiz
  const handleProceedToQuiz = () => {
    setQuizState({
      currentIndex: 0,
      selectedAnswers: new Array(currentChapter.questions.length).fill(null),
      isAnswered: false,
      score: 0,
      streak: 0,
      maxStreak: 0,
      lives: MAX_LIVES,
      timeRemaining: QUESTION_TIMER_SECONDS,
      totalTimeSpentSeconds: 0,
      correctCount: 0,
      wrongCount: 0,
      feedbackState: 'idle',
    });
    setStage('quiz');
  };

  // Select Question Option
  const handleSelectOption = (optionIndex: number) => {
    if (quizState.isAnswered) return;

    if (timerRef.current) clearInterval(timerRef.current);

    const question = currentChapter.questions[quizState.currentIndex];
    const isCorrect = optionIndex === question.correctIndex;

    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[quizState.currentIndex] = optionIndex;

    if (isCorrect) {
      sounds.playCorrect();
      const timeBonus = quizState.timeRemaining * 2;
      const streakBonus = quizState.streak * 20;
      const pointsGained = 100 + timeBonus + streakBonus;
      const nextStreak = quizState.streak + 1;

      setQuizState((prev) => ({
        ...prev,
        isAnswered: true,
        selectedAnswers: newAnswers,
        score: prev.score + pointsGained,
        streak: nextStreak,
        maxStreak: Math.max(prev.maxStreak, nextStreak),
        correctCount: prev.correctCount + 1,
        feedbackState: 'correct',
      }));
    } else {
      sounds.playWrong();
      sounds.playHeartLost();

      const newLives = quizState.lives - 1;
      const isDead = newLives <= 0;

      setQuizState((prev) => ({
        ...prev,
        isAnswered: true,
        selectedAnswers: newAnswers,
        lives: Math.max(0, newLives),
        streak: 0,
        wrongCount: prev.wrongCount + 1,
        feedbackState: 'wrong',
      }));

      if (isDead) {
        setTimeout(() => {
          setIsGameOverOpen(true);
        }, 1000);
      }
    }
  };

  // Move to next question or complete case
  const handleNextQuestion = () => {
    const nextIdx = quizState.currentIndex + 1;
    if (nextIdx >= currentChapter.questions.length) {
      // 🎆 Case Finished! Jump to Sky Firecrackers & Digital Trophy Celebration!
      setStage('celebration');
    } else {
      setQuizState((prev) => ({
        ...prev,
        currentIndex: nextIdx,
        isAnswered: false,
        timeRemaining: QUESTION_TIMER_SECONDS,
        feedbackState: 'idle',
      }));
    }
  };

  // Continue with Extra Life after Game Over
  const handleContinueWithExtraLife = () => {
    setIsGameOverOpen(false);
    setQuizState((prev) => ({
      ...prev,
      lives: 1,
      isAnswered: false,
      timeRemaining: QUESTION_TIMER_SECONDS,
      feedbackState: 'idle',
    }));
  };

  // Retry Chapter
  const handleRetryChapter = () => {
    setIsGameOverOpen(false);
    handleProceedToQuiz();
  };

  // Toggle Sound
  const handleToggleSound = () => {
    const nextState = !isSoundMuted;
    setIsSoundMuted(nextState);
    sounds.setMuted(nextState);
  };

  // Prepare Certificate Data
  const certificateData: DetectiveCertificateData = {
    studentName: student.name || 'Std 7 Detective',
    chapterTitle: currentChapter.title,
    score: quizState.score,
    maxScore: currentChapter.questions.length * 150,
    accuracy: (quizState.correctCount / Math.max(1, currentChapter.questions.length)) * 100,
    timeSpentSeconds: quizState.totalTimeSpentSeconds,
    rankTitle:
      quizState.correctCount >= 18
        ? 'Master Reading Detective (⭐⭐⭐)'
        : quizState.correctCount >= 14
        ? 'Senior Detective Inspector (⭐⭐)'
        : quizState.correctCount >= 10
        ? 'Junior Reading Detective (⭐)'
        : 'Apprentice Detective Sleuth',
    issueDate: new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    certificateId: `DET-7-${Math.floor(100000 + Math.random() * 900000)}`,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top HUD bar during Quiz stage */}
      {stage === 'quiz' && (
        <DetectiveHUD
          studentName={student.name}
          avatarEmoji={getAvatarEmoji(student.avatarId)}
          chapterTitle={currentChapter.title}
          currentQuestionIndex={quizState.currentIndex}
          totalQuestions={currentChapter.questions.length}
          lives={quizState.lives}
          maxLives={MAX_LIVES}
          score={quizState.score}
          streak={quizState.streak}
          timeRemaining={quizState.timeRemaining}
          maxTime={QUESTION_TIMER_SECONDS}
          onOpenPassageDrawer={() => {
            setActiveClueSentence(undefined);
            setIsDrawerOpen(true);
          }}
          isSoundMuted={isSoundMuted}
          onToggleSound={handleToggleSound}
        />
      )}

      {/* Main Content Areas based on Game Stage */}
      <main className="flex-1 flex flex-col justify-center relative">
        {stage === 'onboarding' && (
          <StudentEntry
            onStartGame={handleStartGame}
            onOpenCustomPassage={() => setIsCustomPassageOpen(true)}
          />
        )}

        {stage === 'passage_reading' && (
          <PassageViewer
            chapter={currentChapter}
            onProceedToQuiz={handleProceedToQuiz}
          />
        )}

        {stage === 'quiz' && (
          <QuestionCard
            question={currentChapter.questions[quizState.currentIndex]}
            questionNumber={quizState.currentIndex + 1}
            totalQuestions={currentChapter.questions.length}
            selectedOptionIndex={quizState.selectedAnswers[quizState.currentIndex]}
            isAnswered={quizState.isAnswered}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextQuestion}
            onInspectClue={(clue) => {
              setActiveClueSentence(clue);
              setIsDrawerOpen(true);
            }}
            isLastQuestion={quizState.currentIndex === currentChapter.questions.length - 1}
          />
        )}

        {stage === 'celebration' && (
          <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-10">
            {/* Sky Firecrackers Canvas: 'fire crackres havama ude' */}
            <FireworksCanvas active={true} />

            {/* Gleaming Digital Trophy: 'digital trophy male jevu animate karjo' */}
            <DigitalTrophy
              studentName={student.name}
              score={quizState.score}
              maxScore={currentChapter.questions.length * 150}
              accuracy={(quizState.correctCount / currentChapter.questions.length) * 100}
              chapterTitle={currentChapter.title}
              onViewCertificate={() => setStage('certificate')}
              onPlayAgain={() => setStage('onboarding')}
            />
          </div>
        )}

        {stage === 'certificate' && (
          <div className="py-8">
            <Certificate
              data={certificateData}
              onBackToMenu={() => setStage('onboarding')}
            />
          </div>
        )}
      </main>

      {/* Drawer modal to read passage while solving */}
      <PassageDrawerModal
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        chapter={currentChapter}
        highlightClueText={activeClueSentence}
      />

      {/* Game Over Modal when 3 lives lost */}
      {isGameOverOpen && (
        <GameOverModal
          score={quizState.score}
          solvedCount={quizState.currentIndex + 1}
          totalQuestions={currentChapter.questions.length}
          onRetry={handleRetryChapter}
          onContinueWithExtraLife={handleContinueWithExtraLife}
          onExitToMenu={() => {
            setIsGameOverOpen(false);
            setStage('onboarding');
          }}
        />
      )}

      {/* Custom Passage Input Modal */}
      <CustomPassageModal
        isOpen={isCustomPassageOpen}
        onClose={() => setIsCustomPassageOpen(false)}
        onApplyCustomChapter={(customChapter) => {
          setCurrentChapter(customChapter);
        }}
      />
    </div>
  );
}
