import { motion } from 'framer-motion';
import { Newspaper, ArrowDown } from 'lucide-react';
import type { NewspaperData } from '../types';

interface NewspaperOpeningFoldProps {
  data: NewspaperData['masthead'];
  frontData: NewspaperData['frontPage'];
  heroPhotoUrl: string;
  onOpenEdition: () => void;
}

export function NewspaperOpeningFold({
  data,
  frontData,
  heroPhotoUrl,
  onOpenEdition,
}: NewspaperOpeningFoldProps) {
  const handleUnfold = () => {
    onOpenEdition();
    const frontPage = document.getElementById('front-page');
    if (frontPage) {
      setTimeout(() => {
        frontPage.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <section
      id="newspaper-opening"
      className="relative min-h-[92vh] flex flex-col items-center justify-center p-4 sm:p-8 bg-[#F5F0E5] text-[#242321] overflow-hidden select-none"
    >
      {/* Intro Desk Inscription */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 relative z-10"
      >
        <span className="font-meta text-xs tracking-[0.3em] uppercase text-[#49364C] font-bold block mb-2">
          SPECIAL MORNING DELIVERY
        </span>
        <p className="font-handwriting text-3xl sm:text-4xl text-[#C98591]">
          "Today's edition has something special for you."
        </p>
      </motion.div>

      {/* Folded Newspaper Container */}
      <div className="relative z-10 max-w-4xl w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-2xl bg-[#FFFDF7] p-6 sm:p-10 rounded-sm shadow-xl border-2 border-[#242321] relative overflow-hidden"
        >
          {/* Subtle Center Crease Line with Paper Shadow */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

          {/* Masthead Header Banner */}
          <div className="border-b-2 border-[#242321] pb-3 mb-6 text-center">
            <div className="flex items-center justify-between text-[10px] font-meta uppercase font-bold tracking-widest text-[#242321]/70 mb-1">
              <span>{data.edition}</span>
              <span>{data.date}</span>
            </div>
            <h2 className="font-headline font-black text-4xl sm:text-6xl tracking-tight uppercase text-[#242321]">
              {data.title}
            </h2>
            <p className="font-meta text-[11px] font-bold tracking-[0.2em] text-[#C98591] uppercase mt-1">
              {data.subtitle}
            </p>
          </div>

          {/* Folded Paper Preview: Breaking Headline & Hero Photo */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-4">
            <div className="sm:col-span-7 text-left space-y-3">
              <span className="inline-block px-2.5 py-0.5 bg-[#C98591] text-[#FFFDF7] text-[10px] font-meta font-bold tracking-widest uppercase">
                {frontData.breakingTag}
              </span>
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-[#242321] leading-tight">
                {frontData.mainHeadline}
              </h3>
              <p className="font-body-news text-xs sm:text-sm text-[#242321]/80 leading-relaxed italic">
                "{frontData.sideArticle}"
              </p>
              <p className="font-handwriting text-2xl text-[#C98591]">
                "{frontData.mainAnnotation}"
              </p>
            </div>

            {/* Frontpage Portrait Snippet */}
            <div className="sm:col-span-5 relative">
              <div className="border-2 border-[#242321] p-1.5 bg-[#F5F0E5] shadow-md">
                <div className="aspect-[3/4] overflow-hidden bg-neutral-200">
                  <img
                    src={heroPhotoUrl}
                    alt="Front page photograph of Jitisha"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#242321] text-[#FFFDF7] font-meta font-bold text-[9px] tracking-widest uppercase rotate-3 shadow-md">
                EXCLUSIVE
              </div>
            </div>
          </div>

          {/* Unfold Action Button */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-[#242321]/30 text-center">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleUnfold}
              className="px-8 py-3.5 bg-[#242321] text-[#F5F0E5] hover:bg-[#C98591] transition-all rounded-sm font-headline font-bold tracking-widest text-sm uppercase shadow-lg cursor-pointer inline-flex items-center gap-3"
            >
              <Newspaper size={16} />
              <span>READ TODAY'S EDITION</span>
              <ArrowDown size={16} className="animate-bounce" />
            </motion.button>

            <span className="block font-meta text-[11px] text-[#242321]/60 tracking-wider mt-2 uppercase font-medium">
              TAP TO UNFOLD ALL PAGES
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
