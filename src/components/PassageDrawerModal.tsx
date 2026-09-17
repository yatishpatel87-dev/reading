import React from 'react';
import { motion } from 'motion/react';
import { X, BookOpen, Volume2 } from 'lucide-react';
import { Chapter } from '../types';
import { PassageViewer } from './PassageViewer';

interface PassageDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapter: Chapter;
  highlightClueText?: string;
}

export const PassageDrawerModal: React.FC<PassageDrawerModalProps> = ({
  isOpen,
  onClose,
  chapter,
  highlightClueText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-white font-heading">
              Passage Clue Book: {chapter.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 sm:p-4">
          <PassageViewer
            chapter={chapter}
            onProceedToQuiz={onClose}
            isModalMode={true}
            onCloseModal={onClose}
            highlightClueText={highlightClueText}
          />
        </div>
      </motion.div>
    </div>
  );
};
