import { Mic, Gamepad2 } from 'lucide-react';
import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData } from '../types';

interface PageThreeGamingProps {
  data: NewspaperData['pageThreeGaming'];
  masthead: NewspaperData['masthead'];
}

export function PageThreeGaming({ data, masthead }: PageThreeGamingProps) {
  return (
    <article
      id="page-three"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      <NewspaperMasthead data={masthead} compact={true} />

      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-[#242321] pb-2 mb-8 text-xs font-meta font-bold tracking-widest uppercase">
        <span className="text-[#49364C]">{data.pageNumber}</span>
        <span className="bg-[#C98591] text-[#FFFDF7] px-2.5 py-0.5">EXCLUSIVE SPECIAL REPORT</span>
        <span className="text-[#242321]/70">SPECIAL INVESTIGATION UNIT</span>
      </div>

      {/* Main Punchy News Headline */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h2 className="font-headline font-black text-2xl sm:text-4xl md:text-5xl text-[#242321] tracking-tight uppercase leading-tight mb-4">
          {data.headline}
        </h2>
        <div className="h-0.5 bg-[#242321] max-w-md mx-auto" />
      </div>

      {/* Two-Column Newspaper Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-6">
        {/* Left Column: Official Report & Pullquote */}
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="font-body-news text-sm sm:text-base text-[#242321]/85 leading-relaxed">
            <span className="font-headline text-3xl font-bold float-left mr-2 leading-none text-[#242321]">
              A
            </span>
            {data.article}
          </p>

          {/* Pullquote Box */}
          <div className="p-6 bg-[#F5F0E5] border-l-4 border-[#242321] shadow-xs my-4">
            <p className="font-headline font-bold italic text-lg sm:text-xl text-[#242321] leading-snug">
              "{data.pullQuote}"
            </p>
            <span className="font-meta text-[11px] font-bold tracking-widest text-[#C98591] uppercase mt-2 block">
              — CONFESSED UNDER INTERROGATION
            </span>
          </div>

          <p className="font-body-news text-sm text-[#242321]/80 leading-relaxed">
            Medical personnel confirm that this condition is known as "Immediate Acoustic Infatuation." It is considered completely harmless, though highly memorable for the individual involved.
          </p>
        </div>

        {/* Right Column: Retro Gaming Microphone & Incident Report Box */}
        <div className="md:col-span-5 bg-[#F5F0E5] p-6 border-2 border-[#242321] shadow-md">
          <div className="flex items-center justify-between border-b border-[#242321]/20 pb-3 mb-4">
            <span className="font-meta font-bold text-xs uppercase tracking-widest text-[#242321] flex items-center gap-1.5">
              <Gamepad2 size={16} /> INCIDENT DOSSIER
            </span>
            <span className="px-2 py-0.5 bg-[#49364C] text-white text-[9px] font-meta font-bold uppercase">
              CONFIDENTIAL
            </span>
          </div>

          {/* Microphone Graphic */}
          <div className="p-4 bg-[#FFFDF7] border border-[#242321]/30 rounded-sm text-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#242321] text-[#F5F0E5] flex items-center justify-center mx-auto mb-2 shadow-inner">
              <Mic size={28} className="text-[#EBCDBB]" />
            </div>
            <span className="font-meta text-xs font-bold tracking-wider text-[#242321] uppercase block">
              MIC STATUS: ACTIVE (SPEECHLESS)
            </span>
            <span className="font-handwriting text-xl text-[#C98591]">
              "Hello? Can you hear me?" ♡
            </span>
          </div>

          {/* Official Findings List */}
          <div className="space-y-2 text-xs font-meta text-[#242321]/85 border-t border-[#242321]/20 pt-3">
            <div className="flex justify-between py-1 border-b border-[#242321]/10">
              <span className="font-semibold text-[#242321]/60">STATUS:</span>
              <span className="font-bold">{data.incidentReport.status}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#242321]/10">
              <span className="font-semibold text-[#242321]/60">WITNESS:</span>
              <span className="font-bold">{data.incidentReport.witness}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold text-[#242321]/60">DIAGNOSIS:</span>
              <span className="font-bold text-[#C98591]">{data.incidentReport.diagnosis}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-3 border-t border-[#242321]/30 flex justify-between text-[11px] font-meta text-[#242321]/70 uppercase font-semibold">
        <span>THE JITISHA TIMES // PAGE 03</span>
        <span>TURN TO PAGE 04 FOR THE PUNJABI CHRONICLES →</span>
      </div>
    </article>
  );
}
