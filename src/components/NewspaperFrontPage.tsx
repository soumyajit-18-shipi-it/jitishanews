import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData, PhotoItem } from '../types';

interface NewspaperFrontPageProps {
  data: NewspaperData['frontPage'];
  masthead: NewspaperData['masthead'];
  heroPhoto: PhotoItem;
  onOpenPhoto: (photo: PhotoItem) => void;
}

export function NewspaperFrontPage({
  data,
  masthead,
  heroPhoto,
  onOpenPhoto,
}: NewspaperFrontPageProps) {
  return (
    <article
      id="front-page"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      {/* 1. Full Masthead */}
      <NewspaperMasthead data={masthead} />

      {/* 2. Breaking News Banner Across Columns */}
      <div className="border-b-2 border-[#242321] pb-3 mb-6 text-center">
        <span className="font-meta text-[11px] font-bold tracking-[0.3em] uppercase bg-[#C98591] text-[#FFFDF7] px-3 py-0.5 inline-block mb-1.5">
          {data.breakingTag}!
        </span>
        <h2 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#242321] leading-[1.05]">
          {data.mainHeadline}
        </h2>
      </div>

      {/* 3. Multi-Column Front Page Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (3 cols): Side Story — Experts Confirm */}
        <div className="lg:col-span-3 space-y-4 border-b lg:border-b-0 lg:border-r border-[#242321]/30 pb-6 lg:pb-0 lg:pr-6 text-left">
          <div className="border-b border-[#242321]/20 pb-1 mb-2">
            <span className="font-meta text-[10px] font-bold tracking-widest text-[#C98591] uppercase">
              {data.sideStamp}
            </span>
          </div>

          <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#242321] leading-tight">
            {data.sideHeadline}
          </h3>

          <p className="font-body-news text-xs sm:text-sm text-[#242321]/85 leading-relaxed">
            <span className="font-headline text-2xl font-bold float-left mr-1.5 leading-none">
              S
            </span>
            {data.sideArticle}
          </p>

          {/* Cute Editorial Handwritten Annotation */}
          <div className="p-3 bg-[#EBCDBB]/40 border-l-2 border-[#C98591] mt-4">
            <p className="font-handwriting text-2xl text-[#49364C] leading-snug">
              "Oye hoye, sohniye!" ♡
            </p>
          </div>
        </div>

        {/* Center Column (6 cols): Her Prominent Front-Page Photograph */}
        <div className="lg:col-span-6 flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => onOpenPhoto(heroPhoto)}
            className="w-full bg-[#F5F0E5] p-2.5 border-2 border-[#242321] shadow-md cursor-pointer group relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-neutral-200 relative">
              <img
                src={heroPhoto.url}
                alt="Front page photograph of Jitisha"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-meta text-xs tracking-widest uppercase">
                <Eye size={16} /> TAP TO ENLARGE PHOTOGRAPH
              </div>
            </div>

            {/* Inset Photo Caption with Editorial Details */}
            <div className="mt-3 text-left">
              <div className="flex items-center justify-between border-t border-[#242321]/30 pt-2 mb-1">
                <span className="font-meta text-[10px] font-bold tracking-widest text-[#242321] uppercase">
                  FIGURE 1.0 // {heroPhoto.title}
                </span>
                <span className="font-meta text-[10px] text-[#242321]/60">
                  {heroPhoto.dateOrMemory}
                </span>
              </div>
              <p className="font-body-news text-xs sm:text-sm text-[#242321]/90 italic leading-snug">
                "{data.mainCaption}"
              </p>
            </div>
          </motion.div>

          {/* Handwritten Annotation near Photo */}
          <div className="mt-3 text-center">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#C98591]">
              "{data.mainAnnotation}"
            </span>
          </div>
        </div>

        {/* Right Column (3 cols): Side Story — Local Boy Smiling */}
        <div className="lg:col-span-3 space-y-4 border-t lg:border-t-0 lg:border-l border-[#242321]/30 pt-6 lg:pt-0 lg:pl-6 text-left">
          <div className="border-b border-[#242321]/20 pb-1 mb-2">
            <span className="font-meta text-[10px] font-bold tracking-widest text-[#49364C] uppercase">
              LOCAL DISPATCH
            </span>
          </div>

          <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#242321] leading-tight">
            {data.localBoyHeadline}
          </h3>

          <p className="font-body-news text-xs sm:text-sm text-[#242321]/85 leading-relaxed">
            <span className="font-headline text-2xl font-bold float-left mr-1.5 leading-none">
              S
            </span>
            {data.localBoyArticle}
          </p>

          <div className="p-3 bg-[#A99ABB]/20 border-l-2 border-[#49364C] mt-4">
            <p className="font-handwriting text-2xl text-[#49364C]">
              "{data.localBoyAnnotation}"
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom Newspaper Footnote & Issue Navigation */}
      <div className="mt-10 pt-4 border-t-2 border-[#242321] flex flex-wrap items-center justify-between text-[11px] font-meta font-bold tracking-wider uppercase text-[#242321]/70">
        <span>THE JITISHA TIMES — PAGE 01</span>
        <span>CONTINUED ON PAGE 02 ↓</span>
        <span>AUTHENTIC PRINT EDITION</span>
      </div>
    </article>
  );
}
