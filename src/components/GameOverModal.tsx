import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RotateCcw, Heart, ArrowRight } from 'lucide-react';
import { sounds } from '../utils/audio';

interface GameOverModalProps {
  score: number;
  solvedCount: number;
  totalQuestions: number;
  onRetry: () => void;
  onContinueWithExtraLife: () => void;
  onExitToMenu: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  score,
  solvedCount,
  totalQuestions,
  onRetry,
  onContinueWithExtraLife,
  onExitToMenu,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md bg-slate-900 border-2 border-rose-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-5"
      >
        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 mx-auto flex items-center justify-center animate-bounce">
          <AlertTriangle className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-black text-white font-heading">
            Case Cold! Out of Lives ❤️
          </h2>
          <p className="text-xs text-rose-300 font-medium font-gujarati">
            તમારા ત્રણેય Lives ખતમ થઈ ગયા છે! તમે {totalQuestions} માંથી {solvedCount} પ્રશ્નો પૂર્ણ કર્યા.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-around">
          <div>
            <p className="text-[11px] text-slate-400 uppercase font-semibold">Points</p>
            <p className="text-xl font-bold text-amber-400">{score}</p>
          </div>
          <div className="h-8 w-px bg-slate-700" />
          <div>
            <p className="text-[11px] text-slate-400 uppercase font-semibold">Progress</p>
            <p className="text-xl font-bold text-sky-400">{solvedCount} / {totalQuestions}</p>
          </div>
        </div>

        <div className="space-y-2.5 pt-2">
          <button
            onClick={onContinueWithExtraLife}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Heart className="w-4 h-4 fill-current text-rose-600" />
            <span>Grant 1 Extra Life & Continue Investigation</span>
          </button>

          <button
            onClick={onRetry}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart Chapter (Fresh 3 Lives)</span>
          </button>

          <button
            onClick={onExitToMenu}
            className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 font-medium"
          >
            Choose Different Chapter
          </button>
        </div>
      </motion.div>
    </div>
  );
};
