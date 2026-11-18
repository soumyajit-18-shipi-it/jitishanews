import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Sparkles, Feather } from 'lucide-react';
import type { NewspaperData } from '../types';

interface SpecialInsertProps {
  data: NewspaperData['specialInsert'];
}

export const SpecialInsert: React.FC<SpecialInsertProps> = ({ data }) => {
  return (
    <section id="special-insert" className="w-full max-w-4xl mx-auto my-12 px-4 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FFFDF7] border-2 border-dashed border-[#242321]/40 p-6 sm:p-10 shadow-[6px_6px_0px_rgba(36,35,33,0.15)] rounded-sm rotate-[-0.4deg] hover:rotate-0 transition-transform duration-500"
      >
        {/* Paper clip / bookmark pin at top right */}
        <div className="absolute -top-3 right-8 flex items-center gap-1.5 px-3 py-1 bg-[#242321] text-[#F5F0E5] font-meta text-[10px] tracking-widest uppercase font-bold shadow-sm">
          <Bookmark size={12} className="text-[#C98591]" />
          <span>{data.badge}</span>
        </div>

        {/* Section tag */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#242321]/15 text-[#242321]/70 font-meta text-[10px] tracking-widest uppercase font-bold">
          <Feather size={12} className="text-[#C98591]" />
          <span>{data.sectionTag}</span>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs text-[#C98591] font-meta tracking-wider uppercase font-bold">
            <Sparkles size={13} />
            <span>Editorial Supplement</span>
            <Sparkles size={13} />
          </div>

          <h3 className="font-headline font-black text-2xl sm:text-3xl tracking-tight text-[#242321] uppercase">
            {data.headline}
          </h3>

          <p className="font-headline italic text-[#49364C] text-sm sm:text-base">
            {data.subhead}
          </p>

          <div className="w-16 h-[1.5px] bg-[#C98591]/50 mx-auto my-3" />

          <div className="space-y-4 text-left font-body text-sm sm:text-base leading-relaxed text-[#242321]/90">
            {data.noteParagraphs.map((para, i) => (
              <p key={i} className="first-letter:font-headline first-letter:text-3xl first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-black first-letter:text-[#C98591]">
                {para}
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-[#242321]/15 flex items-center justify-between">
            <span className="font-meta text-[10px] tracking-wider text-[#242321]/50 uppercase">
              Dispatch No. 13-11 // For Jitisha
            </span>
            <span className="font-handwriting text-xl sm:text-2xl text-[#C98591] font-medium">
              {data.closingPhrase}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
