import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Sparkles, AlertCircle, ArrowRight, Eye, Lightbulb, Volume2, VolumeX } from 'lucide-react';
import { Question } from '../types';
import { tts } from '../utils/speech';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
  onNextQuestion: () => void;
  onInspectClue: (clueSentence?: string) => void;
  isLastQuestion: boolean;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionIndex,
  isAnswered,
  onSelectOption,
  onNextQuestion,
  onInspectClue,
  isLastQuestion,
}) => {
  const isCorrect = selectedOptionIndex === question.correctIndex;
  const [isReadingQuestion, setIsReadingQuestion] = useState(false);

  useEffect(() => {
    setIsReadingQuestion(false);
    return () => {
      tts.stop();
    };
  }, [question.id]);

  const handleToggleReadQuestion = () => {
    if (isReadingQuestion) {
      tts.stop();
      setIsReadingQuestion(false);
    } else {
      setIsReadingQuestion(true);
      const textToRead = `${question.question}. Option A: ${question.options[0]}. Option B: ${question.options[1]}. Option C: ${question.options[2]}. Option D: ${question.options[3]}.`;
      tts.speakSingleText(textToRead, () => {
        setIsReadingQuestion(false);
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-6">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 15 }}
        animate={
          isAnswered && !isCorrect
            ? { x: [0, -10, 10, -8, 8, -4, 4, 0], opacity: 1, y: 0 }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.4 }}
        className={`bg-slate-900/90 border rounded-2xl p-6 sm:p-8 shadow-2xl transition-colors duration-300 relative ${
          !isAnswered
            ? 'border-slate-800'
            : isCorrect
            ? 'border-emerald-500/70 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
            : 'border-rose-500/70 shadow-[0_0_25px_rgba(244,63,94,0.2)]'
        }`}
      >
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
              {question.category}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-read-question-aloud"
              onClick={handleToggleReadQuestion}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors border ${
                isReadingQuestion
                  ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title="Listen to question in Indian English voice"
            >
              {isReadingQuestion ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-teal-300 animate-pulse" />
                  <span>Stop Reading</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Read 🇮🇳</span>
                </>
              )}
            </button>

            {/* Clue inspection button */}
            <button
              id="btn-inspect-clue"
              onClick={() => onInspectClue(question.clueSentence)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold cursor-pointer transition-colors"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Passage Clue</span>
            </button>
          </div>
        </div>

        {/* Question Text */}
        <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed mb-6 font-heading">
          {question.question}
        </h2>

        {/* 4 Multiple Choice Options */}
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedOptionIndex === idx;
            const isTargetCorrect = idx === question.correctIndex;

            let optionStyle = 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600';
            let badgeStyle = 'bg-slate-700 text-slate-300';

            if (isAnswered) {
              if (isTargetCorrect) {
                // 🟢 Correct option
                optionStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400';
                badgeStyle = 'bg-emerald-500 text-slate-950 font-bold';
              } else if (isSelected && !isTargetCorrect) {
                // 🔴 Wrong selected option
                optionStyle = 'bg-rose-950/70 border-rose-500 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.3)] ring-1 ring-rose-400';
                badgeStyle = 'bg-rose-500 text-white font-bold';
              } else {
                optionStyle = 'opacity-40 bg-slate-800/40 border-slate-800 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                id={`btn-option-${idx}`}
                disabled={isAnswered}
                onClick={() => onSelectOption(idx)}
                className={`w-full p-4 rounded-xl border text-left flex items-start justify-between gap-3 cursor-pointer transition-all duration-200 group ${optionStyle} ${
                  !isAnswered ? 'active:scale-[0.99]' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${badgeStyle}`}>
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="text-sm sm:text-base font-medium pt-0.5 leading-snug">
                    {option}
                  </span>
                </div>

                {isAnswered && isTargetCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 animate-bounce" />
                )}
                {isAnswered && isSelected && !isTargetCorrect && (
                  <XCircle className="w-6 h-6 text-rose-400 shrink-0 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Rationale Box */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-6 p-4 rounded-xl border ${
                isCorrect
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
                {isCorrect ? (
                  <>
                    <span className="text-lg">🟢</span>
                    <span className="text-emerald-300">Spot On, Detective! (+100 Points)</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg">🔴</span>
                    <span className="text-rose-300">Clue Missed (-1 Life ❤️)</span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {question.explanation}
              </p>

              {question.clueSentence && (
                <div className="mt-2.5 pt-2.5 border-t border-slate-700/60 flex items-start gap-2 text-xs">
                  <span className="font-bold text-amber-300 shrink-0">Passage Clue:</span>
                  <span className="italic text-slate-300">"{question.clueSentence}"</span>
                </div>
              )}

              {/* Next Question / Finish Action */}
              <div className="mt-4 flex justify-end">
                <button
                  id="btn-next-question"
                  onClick={onNextQuestion}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 cursor-pointer transition-all transform hover:-translate-y-0.5"
                >
                  <span>{isLastQuestion ? 'View Detective Verdict & Trophy 🏆' : 'Next Question ➡️'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
