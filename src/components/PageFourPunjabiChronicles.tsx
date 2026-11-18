import { motion } from 'framer-motion';
import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData, PunjabiPhraseItem } from '../types';

interface PageFourPunjabiChroniclesProps {
  data: NewspaperData['pageFourPunjabi'];
  masthead: NewspaperData['masthead'];
}

export function PageFourPunjabiChronicles({
  data,
  masthead,
}: PageFourPunjabiChroniclesProps) {
  return (
    <article
      id="page-four"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      <NewspaperMasthead data={masthead} compact={true} />

      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-[#242321] pb-2 mb-8 text-xs font-meta font-bold tracking-widest uppercase">
        <span className="text-[#C98591]">{data.pageNumber}</span>
        <span className="bg-[#242321] text-[#FFFDF7] px-2.5 py-0.5">SPECIAL CULTURAL SUPPLEMENT</span>
        <span className="text-[#242321]/70">LITERARY ARCHIVE</span>
      </div>

      {/* Main Feature Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-meta text-xs tracking-[0.25em] text-[#C98591] uppercase font-bold block mb-1">
          {data.subtitle}
        </span>
        <h2 className="font-headline font-black text-3xl sm:text-6xl text-[#242321] tracking-tight uppercase leading-none mb-3">
          {data.sectionTitle}
        </h2>
        <div className="h-0.5 bg-[#242321] w-28 mx-auto mt-4" />
      </div>

      {/* 3x2 Grid of Handwritten Overlaid Newspaper Clippings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-6">
        {data.phrases.map((item: PunjabiPhraseItem, index: number) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4, rotate: index % 2 === 0 ? 1 : -1 }}
            className="p-5 sm:p-6 bg-[#F5F0E5] border-2 border-[#242321] shadow-xs relative flex flex-col justify-between overflow-hidden group select-none"
          >
            {/* Ink Stamp Badge in Top Corner */}
            <div className="flex items-center justify-between border-b border-[#242321]/20 pb-2 mb-4">
              <span className="font-meta text-[10px] font-bold tracking-widest text-[#242321]/60 uppercase">
                ENTRY NO. 0{index + 1}
              </span>
              <span
                className="px-2 py-0.5 border border-[#242321] text-[9px] font-meta font-bold tracking-widest uppercase rotate-2 shadow-xs"
                style={{
                  backgroundColor: index % 2 === 0 ? '#C98591' : '#49364C',
                  color: '#FFFDF7',
                }}
              >
                {item.stamp}
              </span>
            </div>

            {/* Prominent Handwritten Punjabi Phrase */}
            <div className="my-2">
              <h3 className="font-handwriting text-3xl sm:text-4xl text-[#242321] leading-snug group-hover:text-[#C98591] transition-colors">
                "{item.phrase}"
              </h3>
            </div>

            {/* Editorial Meaning & English Context */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#242321]/30">
              <p className="font-body-news text-xs text-[#242321]/80 leading-relaxed italic">
                {item.meaning}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial Bottom Quote Banner */}
      <div className="mt-10 p-6 bg-[#EBCDBB]/40 border-2 border-[#242321] text-center">
        <p className="font-headline font-bold text-xl sm:text-2xl text-[#242321] mb-1">
          {data.editorNote}
        </p>
        <span className="font-handwriting text-2xl text-[#C98591]">
          (Certified by the chief editor with infinite smiles) ♡
        </span>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-3 border-t border-[#242321]/30 flex justify-between text-[11px] font-meta text-[#242321]/70 uppercase font-semibold">
        <span>THE JITISHA TIMES // PAGE 04</span>
        <span>TURN TO PAGE 05 FOR PORTRAIT EDITORIAL →</span>
      </div>
    </article>
  );
}
