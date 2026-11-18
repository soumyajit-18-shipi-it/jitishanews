import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Heart, ArrowUp, Sparkles, Feather, Maximize2 } from 'lucide-react';
import type { NewspaperData, PhotoItem } from '../types';

interface FinalPrincessPageProps {
  data: NewspaperData['finalPrincessPage'];
  masthead: NewspaperData['masthead'];
  portrait?: PhotoItem;
  onOpenPhoto?: (photo: PhotoItem) => void;
  onReplay?: () => void;
}

export const FinalPrincessPage: React.FC<FinalPrincessPageProps> = ({
  data,
  masthead,
  portrait,
  onOpenPhoto,
  onReplay,
}) => {
  return (
    <section id="final-page" className="w-full max-w-4xl mx-auto my-12 px-4 select-none">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FFFDF7] border-4 border-[#242321] p-6 sm:p-12 shadow-[12px_12px_0px_#242321] rounded-sm overflow-hidden"
      >
        {/* Newspaper Sub-Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#242321] text-xs font-meta font-bold tracking-widest uppercase text-[#242321]/70 mb-8">
          <span>{data.pageNumber}</span>
          <span className="text-[#C98591] flex items-center gap-1.5">
            <Crown size={14} className="fill-current text-[#C98591]" />
            {data.editorialLabel}
          </span>
          <span>{masthead.date}</span>
        </div>

        {/* Top Preamble Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-[#242321]/5 rounded-full border border-[#242321]/15 text-[11px] font-meta uppercase font-bold tracking-widest text-[#242321]/80">
            <Feather size={12} className="text-[#C98591]" />
            <span>Special Final Proclamation</span>
          </div>

          <h2 className="font-headline font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#242321]">
            {data.headline}
          </h2>

          <div className="w-20 h-[2px] bg-[#C98591] mx-auto my-4" />

          <div className="space-y-1 text-sm sm:text-base font-body text-[#242321]/80 italic">
            {data.preamble.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Main Emotional Declaration Box */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#F5F0E5] border-2 border-[#242321] p-6 sm:p-10 my-8 text-center shadow-[6px_6px_0px_#242321]"
        >
          {/* Subtle Crown Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFFDF7] border-2 border-[#242321] shadow-sm text-[#C98591] mb-4">
            <Crown size={28} className="fill-current" />
          </div>

          <h1 className="font-headline font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#242321] uppercase mb-2">
            {data.centralDeclaration.line1}
          </h1>

          <div className="font-headline font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#C98591] uppercase flex items-center justify-center gap-3">
            <span>{data.centralDeclaration.line2}</span>
            <Heart size={28} className="fill-current text-[#C98591] inline-block animate-pulse" />
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-[1px] w-16 bg-[#242321]/30" />
            <Sparkles size={16} className="text-[#C98591]" />
            <div className="h-[1px] w-16 bg-[#242321]/30" />
          </div>

          {/* Promises / Declarations */}
          <div className="max-w-xl mx-auto space-y-3 font-body text-base sm:text-lg text-[#242321]/90">
            {data.promises.map((promise, idx) => (
              <p key={idx} className={idx === 0 ? 'font-bold text-[#242321]' : ''}>
                {promise}
              </p>
            ))}
          </div>

          {/* Punjabi Blessing Quote */}
          <div className="mt-8 pt-6 border-t border-[#242321]/20">
            <p className="font-handwriting text-2xl sm:text-3xl text-[#49364C] leading-snug">
              &ldquo;{data.punjabiBlessing}&rdquo;
            </p>
            <p className="font-meta text-[11px] tracking-widest uppercase text-[#242321]/50 mt-1">
              (A sincere wish, straight from the heart)
            </p>
          </div>
        </motion.div>

        {/* Featured Portrait of Jitisha (if provided) */}
        {portrait && (
          <div className="my-10 max-w-sm mx-auto">
            <div
              onClick={() => onOpenPhoto && onOpenPhoto(portrait)}
              className="group cursor-pointer bg-[#F5F0E5] p-3 border-2 border-[#242321] shadow-[4px_4px_0px_#242321] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-[#242321]/20 bg-[#242321]/5">
                <img
                  src={portrait.url}
                  alt="Jitisha"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-[#FFFDF7]/90 rounded-xs shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} className="text-[#242321]" />
                </div>
              </div>
              <div className="pt-3 pb-1 text-center">
                <p className="font-headline font-bold text-sm text-[#242321]">
                  Official Royal Portrait — The Princess of Soumyajit&apos;s Heart
                </p>
                <p className="font-meta text-[10px] tracking-widest uppercase text-[#242321]/60 mt-0.5">
                  Click to inspect photograph in archive
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Closing Warm Words & Handwritten Sign-off */}
        <div className="mt-10 pt-8 border-t-2 border-[#242321] text-center max-w-xl mx-auto space-y-4">
          <p className="font-body text-sm sm:text-base text-[#242321]/80 leading-relaxed">
            {data.closingLines}
          </p>

          <div className="pt-4">
            <p className="font-headline italic text-sm text-[#242321]/60">
              {data.signOff}
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#C98591] font-bold mt-1">
              {data.author}
            </p>
          </div>
        </div>

        {/* Bottom Replay Action & Masthead Footer */}
        <div className="mt-12 pt-6 border-t border-[#242321]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-meta text-[11px] tracking-widest text-[#242321]/60 uppercase text-center sm:text-left">
            <span>THE JITISHA TIMES &bull; SPECIAL EDITION COMPLETE</span>
          </div>

          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#242321] text-[#F5F0E5] font-meta text-xs font-bold tracking-widest uppercase shadow-[3px_3px_0px_#C98591] hover:bg-[#C98591] hover:text-[#FFFDF7] transition-all cursor-pointer active:translate-y-0.5 active:shadow-none"
          >
            <ArrowUp size={14} />
            <span>{data.replayCta}</span>
          </button>
        </div>
      </motion.article>
    </section>
  );
};
