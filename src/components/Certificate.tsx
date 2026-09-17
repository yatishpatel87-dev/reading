import React from 'react';
import { motion } from 'motion/react';
import { Award, Printer, RotateCcw, Share2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DetectiveCertificateData } from '../types';

interface CertificateProps {
  data: DetectiveCertificateData;
  onBackToMenu: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({ data, onBackToMenu }) => {
  const [copied, setCopied] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const text = `🏆 Reading Detective Certificate awarded to ${data.studentName} for Std 7 English (${data.chapterTitle}) with ${Math.round(data.accuracy)}% accuracy & ${data.score} score! Rank: ${data.rankTitle}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Reading Detective Certificate - Std 7 English',
          text,
          url: window.location.href,
        });
      } catch {
        // Fallback copy
        copyToClipboard(text);
      }
    } else {
      copyToClipboard(text);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 print:hidden">
        <button
          id="btn-back-to-menu"
          onClick={onBackToMenu}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold cursor-pointer transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>New Detective Case</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            id="btn-share-cert"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold cursor-pointer transition-colors"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Copied Details!' : 'Share'}</span>
          </button>

          <button
            id="btn-print-cert"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold shadow-md shadow-amber-500/20 cursor-pointer transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Certificate / PDF</span>
          </button>
        </div>
      </div>

      {/* Certificate Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        id="certificate-print-area"
        className="relative bg-gradient-to-br from-[#fcfbf7] via-[#fffdf9] to-[#f7f4ec] text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-12 border-8 border-amber-600/30 overflow-hidden"
      >
        {/* Inner Ornate Border */}
        <div className="absolute inset-3 sm:inset-5 border-2 border-amber-500/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 border border-dashed border-amber-400/50 rounded-lg pointer-events-none" />

        {/* Corner Decors */}
        <div className="absolute top-7 left-7 w-8 h-8 border-t-2 border-l-2 border-amber-600 pointer-events-none" />
        <div className="absolute top-7 right-7 w-8 h-8 border-t-2 border-r-2 border-amber-600 pointer-events-none" />
        <div className="absolute bottom-7 left-7 w-8 h-8 border-b-2 border-l-2 border-amber-600 pointer-events-none" />
        <div className="absolute bottom-7 right-7 w-8 h-8 border-b-2 border-r-2 border-amber-600 pointer-events-none" />

        {/* Certificate Content */}
        <div className="relative z-10 text-center space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <div className="inline-flex items-center justify-center gap-2 text-amber-700 font-bold tracking-[0.25em] text-xs uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Gujarat State Board & NCERT • Standard 7 English
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-amber-950 font-certificate">
              CERTIFICATE OF EXCELLENCE
            </h1>
            <p className="text-sm font-semibold tracking-widest text-amber-800 uppercase">
              READING DETECTIVE BUREAU
            </p>
          </div>

          {/* Recipient Text */}
          <div className="py-2 space-y-2">
            <p className="text-sm text-slate-600 italic">This is proudly presented to certify that</p>
            <div className="inline-block relative">
              <span className="text-3xl sm:text-5xl font-extrabold text-amber-900 border-b-2 border-amber-600/60 pb-1 px-8 font-certificate tracking-wide">
                {data.studentName}
              </span>
            </div>
            <p className="text-sm text-slate-700 max-w-xl mx-auto pt-2 leading-relaxed">
              has successfully analyzed the textual passage, listened with focus, and solved all 20 comprehension challenges with stellar detective precision for the chapter:
            </p>
            <p className="text-lg sm:text-xl font-bold text-slate-900">
              "{data.chapterTitle}"
            </p>
          </div>

          {/* Stats Badges */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Score</p>
              <p className="text-xl sm:text-2xl font-black text-amber-950">{data.score} / {data.maxScore}</p>
            </div>
            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Accuracy</p>
              <p className="text-xl sm:text-2xl font-black text-emerald-800">{Math.round(data.accuracy)}%</p>
            </div>
            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Time</p>
              <p className="text-xl sm:text-2xl font-black text-slate-800">{Math.floor(data.timeSpentSeconds / 60)}m {data.timeSpentSeconds % 60}s</p>
            </div>
          </div>

          {/* Rank Banner */}
          <div className="inline-block bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-amber-50 font-bold px-6 py-2 rounded-full shadow text-sm tracking-wide">
            ⭐ Special Rank: {data.rankTitle} ⭐
          </div>

          {/* Footer Seals and Signatures */}
          <div className="pt-6 border-t border-amber-200/80 grid grid-cols-3 items-end text-center text-xs text-slate-600 gap-4">
            {/* Issue Date & ID */}
            <div className="text-left">
              <p className="text-[10px] uppercase text-slate-500 font-semibold">Certificate ID</p>
              <p className="font-mono text-slate-700 font-bold text-[11px]">{data.certificateId}</p>
              <p className="text-[10px] uppercase text-slate-500 font-semibold mt-1">Date Issued</p>
              <p className="font-semibold text-slate-800">{data.issueDate}</p>
            </div>

            {/* Official Gold Seal */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 border-4 border-amber-700 flex flex-col items-center justify-center text-amber-950 shadow-lg relative transform hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-amber-950" />
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight text-center leading-none mt-0.5">
                  OFFICIAL SEAL<br/>STD 7 ENGLISH
                </span>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right">
              <div className="font-certificate italic text-lg sm:text-xl text-amber-900 font-bold border-b border-slate-400 pb-1">
                Reading Master
              </div>
              <p className="text-[10px] uppercase text-slate-500 font-semibold mt-1">Chief English Examiner</p>
              <p className="text-[11px] font-medium text-slate-700">Reading Detective Bureau</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
