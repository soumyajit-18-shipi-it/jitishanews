import { motion } from 'framer-motion';
import { CheckCircle2, Search } from 'lucide-react';
import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData, InvestigationFinding } from '../types';

interface PageSixInvestigationProps {
  data: NewspaperData['pageSixInvestigation'];
  masthead: NewspaperData['masthead'];
}

export function PageSixInvestigation({
  data,
  masthead,
}: PageSixInvestigationProps) {
  return (
    <article
      id="page-six"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      <NewspaperMasthead data={masthead} compact={true} />

      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-[#242321] pb-2 mb-8 text-xs font-meta font-bold tracking-widest uppercase">
        <span className="text-[#C98591]">{data.pageNumber}</span>
        <span className="bg-[#49364C] text-[#FFFDF7] px-2.5 py-0.5">FORMAL COMMITTEE INQUIRY</span>
        <span className="text-[#242321]/70">VERIFIED DOSSIER</span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#242321] text-[#F5EEDC] font-meta text-[10px] font-bold tracking-widest uppercase mb-3">
          <Search size={12} /> SPECIAL INQUIRY REPORT
        </div>
        <h2 className="font-headline font-black text-3xl sm:text-5xl text-[#242321] tracking-tight uppercase leading-tight mb-3">
          {data.headline}
        </h2>
        <p className="font-body-news text-xs sm:text-sm text-[#242321]/80 max-w-xl mx-auto italic">
          {data.intro}
        </p>
      </div>

      {/* Findings List in Newspaper Investigative Style */}
      <div className="space-y-4 my-8">
        {data.findings.map((item: InvestigationFinding, idx: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="p-4 sm:p-5 bg-[#F5F0E5] border border-[#242321]/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#242321] text-[#F5EEDC] font-meta font-bold text-xs flex items-center justify-center shrink-0">
                0{idx + 1}
              </span>
              <div>
                <span className="font-meta text-[10px] font-bold tracking-widest text-[#C98591] uppercase block">
                  {item.number}
                </span>
                <h3 className="font-headline font-bold text-lg text-[#242321]">
                  {item.subject}
                </h3>
              </div>
            </div>

            <div className="sm:max-w-md text-left">
              <p className="font-body-news text-xs sm:text-sm text-[#242321]/90">
                {item.verdict}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 text-xs font-meta font-bold text-[#49364C] uppercase">
              <CheckCircle2 size={16} className="text-[#C98591]" />
              <span>CONFIRMED</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Official Verdict Sealed Stamp */}
      <div className="mt-10 p-6 sm:p-8 bg-[#EBCDBB]/40 border-2 border-[#242321] text-center relative overflow-hidden">
        <div className="w-12 h-0.5 bg-[#242321] mx-auto mb-3" />
        <span className="font-meta text-[11px] font-bold tracking-[0.25em] text-[#C98591] uppercase block mb-2">
          OFFICIAL VERDICT OF THE EDITORIAL BOARD
        </span>
        <p className="font-headline font-bold text-2xl sm:text-3xl text-[#242321] leading-snug max-w-2xl mx-auto">
          "{data.editorialVerdict}"
        </p>
        <div className="w-12 h-0.5 bg-[#242321] mx-auto mt-3" />
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-3 border-t border-[#242321]/30 flex justify-between text-[11px] font-meta text-[#242321]/70 uppercase font-semibold">
        <span>THE JITISHA TIMES // PAGE 06</span>
        <span>TURN TO PAGE 07 FOR THE JITISHA DETECTOR →</span>
      </div>
    </article>
  );
}
