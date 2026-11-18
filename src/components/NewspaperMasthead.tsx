import type { NewspaperData } from '../types';

interface NewspaperMastheadProps {
  data: NewspaperData['masthead'];
  compact?: boolean;
}

export function NewspaperMasthead({ data, compact = false }: NewspaperMastheadProps) {
  if (compact) {
    return (
      <header className="w-full border-b-2 border-[#242321] pb-2 mb-4 text-[#242321] select-none">
        <div className="flex items-center justify-between text-[11px] font-meta uppercase tracking-wider font-semibold">
          <span>{data.edition}</span>
          <span className="font-headline font-black text-lg tracking-tight">THE JITISHA TIMES</span>
          <span>{data.date}</span>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full border-b-4 border-[#242321] pb-4 mb-8 text-[#242321] select-none">
      {/* Top Thin Meta Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#242321]/40 pb-1.5 mb-2 text-[10px] sm:text-[11px] font-meta tracking-widest uppercase font-semibold text-[#242321]/80">
        <span>{data.edition}</span>
        <span className="hidden md:inline">{data.issueNo}</span>
        <span>{data.price}</span>
        <span className="text-[#C98591] font-bold">{data.weather}</span>
      </div>

      {/* Main Massive Newspaper Nameplate */}
      <div className="text-center py-2 sm:py-4">
        <h1 className="font-headline font-black text-4xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none text-[#242321]">
          {data.title}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="h-[1px] bg-[#242321] flex-1 max-w-xs" />
          <p className="font-meta text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C98591] uppercase">
            {data.subtitle}
          </p>
          <div className="h-[1px] bg-[#242321] flex-1 max-w-xs" />
        </div>
      </div>

      {/* Date & Motto Bar with Double Border Rules */}
      <div className="news-double-border py-1.5 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-meta font-bold tracking-wider uppercase text-[#242321]">
        <span>PUBLISHED IN HER HONOUR</span>
        <span className="text-center font-serif tracking-widest">{data.date}</span>
        <span>CIRCULATION: 01 VERY SPECIAL COPY</span>
      </div>
    </header>
  );
}
