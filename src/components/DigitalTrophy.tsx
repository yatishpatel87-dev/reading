import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, Star } from 'lucide-react';
import { sounds } from '../utils/audio';

interface DigitalTrophyProps {
  studentName: string;
  score: number;
  maxScore: number;
  accuracy: number;
  chapterTitle: string;
  onViewCertificate: () => void;
  onPlayAgain: () => void;
}

export const DigitalTrophy: React.FC<DigitalTrophyProps> = ({
  studentName,
  score,
  maxScore,
  accuracy,
  chapterTitle,
  onViewCertificate,
  onPlayAgain,
}) => {
  useEffect(() => {
    sounds.playVictoryFanfare();
  }, []);

  const getRankBadge = () => {
    if (accuracy >= 90) return { rank: 'Master Reading Detective', grade: 'A+ (Super Sleuth)', color: 'text-amber-400', badge: '⭐⭐⭐' };
    if (accuracy >= 75) return { rank: 'Senior Detective Inspector', grade: 'A (Sharp Eye)', color: 'text-emerald-400', badge: '⭐⭐' };
    if (accuracy >= 50) return { rank: 'Junior Detective', grade: 'B (Good Clue Finder)', color: 'text-sky-400', badge: '⭐' };
    return { rank: 'Rookie Detective Trainee', grade: 'Keep Investigating!', color: 'text-purple-400', badge: '🔍' };
  };

  const rankInfo = getRankBadge();

  return (
    <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto">
      {/* Background Rotating Sunburst Rays */}
      <div className="absolute -top-16 w-96 h-96 pointer-events-none opacity-40 animate-spin" style={{ animationDuration: '30s' }}>
        <div className="w-full h-full rounded-full bg-radial from-amber-400/30 via-yellow-600/10 to-transparent blur-2xl" />
      </div>

      {/* Trophy Badge Container */}
      <motion.div
        initial={{ scale: 0.2, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.15 }}
        className="relative group mb-6"
      >
        {/* Glowing Aura Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/50 via-yellow-300/40 to-amber-600/50 blur-xl animate-pulse" />

        {/* 3D Trophy Card */}
        <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-3xl bg-gradient-to-b from-amber-500/20 via-slate-900/90 to-slate-950 border border-amber-400/50 shadow-2xl backdrop-blur-md p-4 flex flex-col items-center justify-between trophy-float">
          {/* Sparkles */}
          <div className="absolute -top-3 -right-3 text-amber-300 animate-bounce">
            <Sparkles className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
          </div>
          <div className="absolute top-1/2 -left-4 text-yellow-200">
            <Star className="w-6 h-6 fill-amber-400 animate-pulse" />
          </div>

          {/* Trophy Graphic */}
          <div className="mt-2 relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-100 flex items-center justify-center shadow-lg shadow-amber-500/40 border-2 border-yellow-200">
              <Award className="w-16 h-16 sm:w-20 sm:h-20 text-slate-950 fill-amber-900/20" />
            </div>
            {/* Medallion Badge */}
            <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-amber-400 text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
              STD 7
            </div>
          </div>

          {/* Engraved Plaque */}
          <div className="w-full bg-gradient-to-r from-amber-950 via-amber-900/90 to-amber-950 border border-amber-500/60 rounded-xl px-3 py-2 text-center shadow-inner">
            <p className="text-[10px] uppercase tracking-wider text-amber-300/80 font-bold">DIGITAL TROPHY AWARD</p>
            <p className="text-amber-100 font-bold truncate text-sm sm:text-base tracking-wide font-heading">
              {studentName}
            </p>
            <p className="text-[11px] text-amber-300 font-medium">{rankInfo.badge} {rankInfo.rank}</p>
          </div>
        </div>
      </motion.div>

      {/* Congratulations Announcement */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="space-y-2 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          CASE SOLVED & DETECTIVE HONORS
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 font-heading">
          Congratulations, {studentName}!
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg font-gujarati">
          તમે ધોરણ 7 ના ચેપ્ટર <span className="font-semibold text-amber-300 font-sans">"{chapterTitle}"</span> ના તમામ પ્રશ્નો સફળતાપૂર્વક ઉકેલ્યા છે!
        </p>
      </motion.div>

      {/* Score and Accuracy Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45 }}
        className="grid grid-cols-3 gap-3 w-full max-w-md mb-8"
      >
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Score</p>
          <p className="text-2xl font-black text-amber-400 mt-0.5">{score}</p>
          <p className="text-[10px] text-slate-500">Max: {maxScore}</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Accuracy</p>
          <p className="text-2xl font-black text-emerald-400 mt-0.5">{Math.round(accuracy)}%</p>
          <p className="text-[10px] text-slate-500">{rankInfo.grade}</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 text-center backdrop-blur-sm">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Rank</p>
          <p className="text-sm font-bold text-sky-400 mt-1 truncate">{rankInfo.rank.split(' ')[0]}</p>
          <p className="text-[10px] text-slate-400">Class 7 Star</p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
      >
        <button
          id="btn-view-certificate"
          onClick={onViewCertificate}
          className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Award className="w-5 h-5" />
          <span>Get Official Certificate 🏆</span>
        </button>

        <button
          id="btn-play-again"
          onClick={onPlayAgain}
          className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm cursor-pointer transition-all"
        >
          Next Chapter 📖
        </button>
      </motion.div>

      <p className="mt-5 text-xs text-slate-400">
        ✨ Click anywhere in the sky to launch more firecrackers!
      </p>
    </div>
  );
};
