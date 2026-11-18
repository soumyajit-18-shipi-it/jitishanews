import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData } from '../types';

interface PageTwoStoryBehindProps {
  data: NewspaperData['pageTwo'];
  masthead: NewspaperData['masthead'];
}

export function PageTwoStoryBehind({ data, masthead }: PageTwoStoryBehindProps) {
  return (
    <article
      id="page-two"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      <NewspaperMasthead data={masthead} compact={true} />

      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-[#242321] pb-2 mb-8 text-xs font-meta font-bold tracking-widest uppercase">
        <span className="text-[#C98591]">{data.pageNumber}</span>
        <span className="bg-[#242321] text-[#F5EEDC] px-2.5 py-0.5">SPECIAL RETROSPECTIVE</span>
        <span className="text-[#242321]/70">{data.dateStamp}</span>
      </div>

      {/* Main Headline & Subhead */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-headline font-black text-3xl sm:text-5xl text-[#242321] tracking-tight uppercase leading-tight mb-3">
          {data.headline}
        </h2>
        <p className="font-meta text-xs sm:text-sm font-semibold tracking-widest text-[#49364C] uppercase">
          {data.subhead}
        </p>
      </div>

      {/* Editorial Spread with Center Pull Quote */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start my-6">
        {/* Left Column Text */}
        <div className="md:col-span-4 text-left space-y-4">
          <p className="font-body-news text-sm sm:text-base text-[#242321]/85 leading-relaxed">
            <span className="font-headline text-3xl font-bold float-left mr-2 leading-none text-[#242321]">
              I
            </span>
            {data.articleParagraphs[0]}
          </p>

          <p className="font-body-news text-sm sm:text-base text-[#242321]/85 leading-relaxed">
            {data.articleParagraphs[1]}
          </p>

          <span className="block font-meta text-[11px] font-bold text-[#C98591] tracking-widest uppercase pt-2">
            — {data.byline}
          </span>
        </div>

        {/* Center Prominent Editorial Pull Quote */}
        <div className="md:col-span-4 flex flex-col justify-center text-center p-6 sm:p-8 bg-[#F5F0E5] border-2 border-[#242321] shadow-md my-auto">
          <div className="w-10 h-0.5 bg-[#C98591] mx-auto mb-4" />
          <p className="font-headline font-bold italic text-xl sm:text-2xl text-[#242321] leading-snug">
            "{data.pullQuote}"
          </p>
          <div className="w-10 h-0.5 bg-[#C98591] mx-auto mt-4" />
          <span className="font-meta text-[10px] tracking-widest uppercase text-[#49364C] font-bold mt-2">
            OFFICIAL STATEMENT RECORDED
          </span>
        </div>

        {/* Right Column Text & Hand Note */}
        <div className="md:col-span-4 text-left space-y-4">
          <p className="font-body-news text-sm sm:text-base text-[#242321]/85 leading-relaxed">
            {data.articleParagraphs[2]}
          </p>

          <div className="p-4 bg-[#EBCDBB]/40 border-l-3 border-[#C98591] mt-6">
            <span className="text-[10px] font-meta font-bold tracking-widest text-[#242321] uppercase block mb-1">
              EDITOR'S NOTE:
            </span>
            <p className="font-handwriting text-2xl text-[#49364C] leading-snug">
              "And from that day onward, every conversation became my favourite moment." ♡
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-3 border-t border-[#242321]/30 flex justify-between text-[11px] font-meta text-[#242321]/70 uppercase font-semibold">
        <span>THE JITISHA TIMES // PAGE 02</span>
        <span>TURN TO PAGE 03 FOR GAMING INCIDENT REPORT →</span>
      </div>
    </article>
  );
}
