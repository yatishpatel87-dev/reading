import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Timer, Target, Flame, Volume2, VolumeX, BookOpen, AlertCircle } from 'lucide-react';
import { sounds } from '../utils/audio';

interface DetectiveHUDProps {
  studentName: string;
  avatarEmoji: string;
  chapterTitle: string;
  currentQuestionIndex: number;
  totalQuestions: number;
  lives: number;
  maxLives: number;
  score: number;
  streak: number;
  timeRemaining: number;
  maxTime: number;
  onOpenPassageDrawer?: () => void;
  isSoundMuted: boolean;
  onToggleSound: () => void;
}

export const DetectiveHUD: React.FC<DetectiveHUDProps> = ({
  studentName,
  avatarEmoji,
  chapterTitle,
  currentQuestionIndex,
  totalQuestions,
  lives,
  maxLives,
  score,
  streak,
  timeRemaining,
  maxTime,
  onOpenPassageDrawer,
  isSoundMuted,
  onToggleSound,
}) => {
  const isTimeCritical = timeRemaining <= 5 && timeRemaining > 0;
  const timePercent = Math.max(0, Math.min(100, (timeRemaining / maxTime) * 100));

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left: Student & Chapter Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-amber-400/10 border border-amber-500/40 flex items-center justify-center text-xl shadow-inner shrink-0">
              {avatarEmoji}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-200 tracking-wide">{studentName}</span>
                <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/30">
                  Std 7
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate max-w-[140px] sm:max-w-[220px]">
                {chapterTitle}
              </p>
            </div>
          </div>

          {/* Center: Lives ❤️ and Timer ⏱️ */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* 3 Lives Display */}
            <div className="flex items-center gap-1 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/80">
              <span className="text-[11px] font-bold text-slate-400 mr-1 hidden sm:inline">LIVES:</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: maxLives }).map((_, idx) => {
                  const isAlive = idx < lives;
                  return (
                    <motion.div
                      key={idx}
                      initial={false}
                      animate={
                        isAlive
                          ? { scale: [1, 1.15, 1], filter: 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.6))' }
                          : { scale: 0.85, opacity: 0.25, filter: 'none' }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isAlive
                            ? 'text-rose-500 fill-rose-500'
                            : 'text-slate-600 fill-slate-700'
                        }`}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Timer ⏱️ with progress ring / bar */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-colors ${
              isTimeCritical
                ? 'bg-rose-950/70 border-rose-500 text-rose-300 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                : 'bg-slate-800/80 border-slate-700/80 text-cyan-300'
            }`}>
              <Timer className={`w-4 h-4 ${isTimeCritical ? 'text-rose-400 animate-spin' : 'text-cyan-400'}`} />
              <span className="font-mono font-bold text-sm tracking-wider">
                {timeRemaining}s
              </span>
            </div>
          </div>

          {/* Right: Score, Streak, Sound Toggle, Clue Passage */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Multiplier */}
            {streak > 1 && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="hidden sm:flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2 py-1 rounded-lg text-xs font-bold"
              >
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{streak}x Streak</span>
              </motion.div>
            )}

            {/* Score 🎯 */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/80">
              <Target className="w-4 h-4 text-amber-400" />
              <span className="font-mono font-extrabold text-amber-300 text-sm">{score}</span>
            </div>

            {/* Read Passage Button */}
            {onOpenPassageDrawer && (
              <button
                id="btn-inspect-passage"
                onClick={onOpenPassageDrawer}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold cursor-pointer transition-colors"
                title="Read Clue Passage"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Passage</span>
              </button>
            )}

            {/* Sound Toggle */}
            <button
              id="btn-toggle-sound"
              onClick={onToggleSound}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 cursor-pointer transition-colors"
              title={isSoundMuted ? 'Unmute sound' : 'Mute sound'}
            >
              {isSoundMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Question Progress Bar */}
        <div className="mt-2.5 flex items-center gap-3">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 min-w-[100px]">
            <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          </div>

          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Remaining timer bar */}
          <div className="w-16 sm:w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                isTimeCritical ? 'bg-rose-500' : 'bg-cyan-400'
              }`}
              style={{ width: `${timePercent}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
