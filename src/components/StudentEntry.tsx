import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, User, Sparkles, Volume2, HelpCircle, Heart, Timer, Trophy, ChevronRight, PenTool } from 'lucide-react';
import { Chapter, StudentProfile } from '../types';
import { STD7_CHAPTERS } from '../data/chapters';

interface StudentEntryProps {
  onStartGame: (profile: StudentProfile, chapter: Chapter) => void;
  onOpenCustomPassage: () => void;
}

const AVATARS = [
  { id: 'sleuth-girl-1', emoji: '👧', label: 'Detective Ananya' },
  { id: 'sleuth-boy-1', emoji: '👦', label: 'Detective Aarav' },
  { id: 'sleuth-girl-2', emoji: '🕵️‍♀️', label: 'Inspector Diya' },
  { id: 'sleuth-boy-2', emoji: '🕵️‍♂️', label: 'Inspector Kabir' },
  { id: 'sherlock', emoji: '🧠', label: 'Master Sleuth' },
  { id: 'star', emoji: '⭐', label: 'Class 7 Champ' },
];

export const StudentEntry: React.FC<StudentEntryProps> = ({ onStartGame, onOpenCustomPassage }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].id);
  const [selectedChapterId, setSelectedChapterId] = useState<string>(STD7_CHAPTERS[0].id);
  const [error, setError] = useState('');

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('કૃપા કરીને તમારું નામ દાખલ કરો (Please enter your name)!');
      return;
    }
    const chapter = STD7_CHAPTERS.find(c => c.id === selectedChapterId) || STD7_CHAPTERS[0];
    onStartGame(
      {
        name: name.trim(),
        std: 'Std 7',
        avatarId: selectedAvatar,
      },
      chapter
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Title & Tagline Banner */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>GUJARAT BOARD & NCERT • STD 7 ENGLISH COMPREHENSION</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-yellow-400 font-heading">
          Reading Detective 🔍
        </h1>

        <p className="text-slate-300 text-base max-w-xl mx-auto font-gujarati">
          ધોરણ 7 ના અંગ્રેજી ચેપ્ટર્સ વાંચો, અવાજથી સાંભળો (Read Aloud), 20 પ્રશ્નોના જવાબો આપો, 3 Lives બચાવો અને ડિજિટલ ટ્રોફી અને સર્ટિફિકેટ જીતો!
        </p>

        {/* Feature Flow Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-medium text-slate-300">
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <User className="w-3.5 h-3.5 text-pink-400" /> Student Name
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Passage
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <Volume2 className="w-3.5 h-3.5 text-teal-400" /> Read Aloud
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> 20 Questions
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <Timer className="w-3.5 h-3.5 text-cyan-400" /> Timer
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <Heart className="w-3.5 h-3.5 text-red-400" /> 3 Lives
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" /> Certificate
          </span>
        </div>
      </div>

      <form onSubmit={handleStart} className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Student Identity */}
        <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm tracking-wider uppercase">
              <User className="w-4 h-4" />
              <span>Step 1: Detective Profile</span>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="student-name" className="block text-sm font-semibold text-slate-200 mb-1.5">
                વિદ્યાર્થીનું નામ (Student Name) <span className="text-rose-400">*</span>
              </label>
              <input
                id="student-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Ex: Ananya Patel / આરાધ્યા પટેલ"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base"
                autoFocus
              />
              {error && <p className="text-rose-400 text-xs mt-1.5 font-medium">{error}</p>}
            </div>

            {/* Standard (Pre-filled as Std 7) */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Standard</label>
                <div className="px-3 py-2 rounded-xl bg-slate-800/60 border border-slate-700/80 text-amber-300 font-bold text-sm">
                  Standard 7 (ધોરણ ૭)
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Subject</label>
                <div className="px-3 py-2 rounded-xl bg-slate-800/60 border border-slate-700/80 text-sky-300 font-bold text-sm">
                  English Text
                </div>
              </div>
            </div>

            {/* Choose Avatar */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Choose Detective Avatar
              </label>
              <div className="grid grid-cols-3 gap-2">
                {AVATARS.map((av) => (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setSelectedAvatar(av.id)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      selectedAvatar === av.id
                        ? 'bg-amber-500/20 border-amber-400 text-white scale-105 shadow-md shadow-amber-500/10'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-2xl">{av.emoji}</span>
                    <span className="text-[10px] font-medium truncate w-full text-center">{av.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <p className="text-xs text-slate-400 leading-relaxed">
              💡 <span className="font-semibold text-slate-300">Rules:</span> You will get 20 comprehension questions based on the passage. You have <span className="text-rose-400 font-bold">3 Lives ❤️</span> and 30 seconds per question. Answer right to score detective points!
            </p>
          </div>
        </div>

        {/* Right Column: Chapter Selection */}
        <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm tracking-wider uppercase">
                <BookOpen className="w-4 h-4" />
                <span>Step 2: Choose Std 7 English Chapter</span>
              </div>

              {/* Custom Passage Button */}
              <button
                type="button"
                id="btn-custom-passage"
                onClick={onOpenCustomPassage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold cursor-pointer transition-colors"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Custom / Teacher Text</span>
              </button>
            </div>

            {/* Chapters List */}
            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {STD7_CHAPTERS.map((chap) => {
                const isSelected = selectedChapterId === chap.id;
                return (
                  <div
                    key={chap.id}
                    onClick={() => setSelectedChapterId(chap.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 shadow-md shadow-amber-500/10'
                        : 'bg-slate-800/50 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300'
                      }`}>
                        U{chap.unitNumber}
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-100">{chap.title}</h3>
                          <span className="text-[10px] bg-slate-800 text-amber-300 px-1.5 py-0.5 rounded border border-slate-700">
                            20 Qs
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">{chap.subtitle}</p>
                        <p className="text-[11px] text-amber-400/80 font-medium">Theme: {chap.theme}</p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <input
                        type="radio"
                        name="selectedChapter"
                        checked={isSelected}
                        onChange={() => setSelectedChapterId(chap.id)}
                        className="w-4 h-4 text-amber-400 accent-amber-400"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Start Adventure Button */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              id="btn-start-reading"
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Begin Reading & Detective Investigation</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
