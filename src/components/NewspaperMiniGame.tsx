import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData } from '../types';

interface NewspaperMiniGameProps {
  data: NewspaperData['miniGame'];
  masthead: NewspaperData['masthead'];
}

export function NewspaperMiniGame({ data, masthead }: NewspaperMiniGameProps) {
  const [foundClues, setFoundClues] = useState<string[]>([]);
  const [latestFound, setLatestFound] = useState<string | null>(null);

  const handleClueClick = (clueId: string) => {
    if (!foundClues.includes(clueId)) {
      const updated = [...foundClues, clueId];
      setFoundClues(updated);
      const clue = data.clues.find((c) => c.id === clueId);
      if (clue) setLatestFound(clue.foundText);

      // Confetti upon completing the 3rd discovery
      if (updated.length === 3) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C98591', '#49364C', '#A99ABB', '#F5EEDC'],
        });
      }
    }
  };

  const isCompleted = foundClues.length === 3;

  return (
    <article
      id="mini-game"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      <NewspaperMasthead data={masthead} compact={true} />

      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-[#242321] pb-2 mb-8 text-xs font-meta font-bold tracking-widest uppercase">
        <span className="text-[#C98591]">{data.sectionTag}</span>
        <span className="bg-[#C98591] text-[#FFFDF7] px-2.5 py-0.5">INTERACTIVE PUZZLE</span>
        <span className="text-[#242321]/70">SCORE: {foundClues.length}/3 SECRETS</span>
      </div>

      {/* Game Title */}
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="font-headline font-black text-2xl sm:text-4xl text-[#242321] tracking-tight uppercase leading-tight mb-2">
          {data.headline}
        </h2>
        <p className="font-headline font-bold text-base sm:text-lg text-[#C98591] italic mb-2">
          "{data.subheadline}"
        </p>
        <p className="font-body-news text-xs sm:text-sm text-[#242321]/80 max-w-xl mx-auto">
          {data.instructions}
        </p>
      </div>

      {/* Dedicated Separated Progress Indicator */}
      <div className="max-w-xs mx-auto mb-8 p-3 bg-[#F5F0E5] border-2 border-[#242321] text-center shadow-xs">
        <span className="font-meta text-[10px] font-bold tracking-[0.25em] text-[#242321] uppercase block mb-1">
          SECRETS DISCOVERED
        </span>
        <span className="font-headline font-black text-2xl text-[#C98591] tracking-widest block">
          {foundClues.length} / 3
        </span>
      </div>

      {/* Newspaper Search Area */}
      <div className="relative min-h-[380px] sm:min-h-[420px] bg-[#F5F0E5] border-2 border-[#242321] p-6 sm:p-10 shadow-inner overflow-hidden select-none">
        {/* Decorative News Columns Background */}
        <div className="grid grid-cols-3 gap-6 opacity-30 pointer-events-none text-[11px] font-body-news leading-relaxed">
          <div>
            <p className="font-headline font-bold text-sm mb-1 uppercase">WEATHER DISPATCH</p>
            <p>High temperatures of warmth and affection recorded across the region. The day brightens whenever she smiles.</p>
          </div>
          <div>
            <p className="font-headline font-bold text-sm mb-1 uppercase">SMILE CENSUS</p>
            <p>Over ten thousand spontaneous smiles reported. Medical authorities link the phenomenon directly to her presence.</p>
          </div>
          <div>
            <p className="font-headline font-bold text-sm mb-1 uppercase">ARCHIVAL NOTE</p>
            <p>Special edition printings shall remain in permanent circulation to celebrate her charm.</p>
          </div>
        </div>

        {/* 1. Clue 1: Handwritten note saying "Soniyo" */}
        <div
          onClick={() => handleClueClick('clue-1')}
          className={`absolute top-12 left-8 sm:left-20 p-2 sm:p-3 rounded-md border cursor-pointer transition-all ${
            foundClues.includes('clue-1')
              ? 'bg-[#C98591] text-white border-[#242321] shadow-md scale-105'
              : 'border-dashed border-[#242321]/40 hover:border-[#C98591] hover:scale-105 bg-[#FFFDF7]'
          }`}
          title="Tap secret discovery!"
        >
          <span className="font-handwriting text-2xl sm:text-3xl block">
            Soniyo... ♡
          </span>
          <span className="font-meta text-[9px] font-bold tracking-widest uppercase block mt-0.5">
            {foundClues.includes('clue-1') ? '✓ SECRET 1 DISCOVERED' : '🔍 TAP SECRET'}
          </span>
        </div>

        {/* 2. Clue 2: Little Illustrated Flower */}
        <div
          onClick={() => handleClueClick('clue-2')}
          className={`absolute top-24 right-8 sm:right-24 p-3 rounded-md border cursor-pointer transition-all ${
            foundClues.includes('clue-2')
              ? 'bg-[#49364C] text-white border-[#242321] shadow-md scale-105'
              : 'border-dashed border-[#242321]/40 hover:border-[#49364C] hover:scale-105 bg-[#FFFDF7]'
          }`}
          title="Tap secret discovery!"
        >
          <div className="flex items-center gap-1.5">
            <Flower2
              size={20}
              className={foundClues.includes('clue-2') ? 'text-rose-200' : 'text-[#C98591]'}
            />
            <span className="font-headline font-bold text-sm">ROSE BLOSSOM</span>
          </div>
          <span className="font-meta text-[9px] font-bold tracking-widest uppercase block mt-1">
            {foundClues.includes('clue-2') ? '✓ SECRET 2 DISCOVERED' : '🔍 TAP SECRET'}
          </span>
        </div>

        {/* 3. Clue 3: Newspaper clipping saying "Kinni soni!" */}
        <div
          onClick={() => handleClueClick('clue-3')}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 p-3 sm:p-4 rounded-md border rotate-[-2deg] cursor-pointer transition-all ${
            foundClues.includes('clue-3')
              ? 'bg-[#EBCDBB] text-[#242321] border-[#242321] shadow-md scale-105 font-bold'
              : 'border-dashed border-[#242321]/40 hover:border-[#242321] hover:scale-105 bg-[#FFFDF7]'
          }`}
          title="Tap secret discovery!"
        >
          <span className="font-handwriting text-2xl sm:text-3xl text-[#49364C] block">
            "Kinni soni!" ♡
          </span>
          <span className="font-meta text-[9px] font-bold tracking-widest uppercase block text-center mt-1">
            {foundClues.includes('clue-3') ? '✓ SECRET 3 DISCOVERED' : '🔍 TAP SECRET'}
          </span>
        </div>

        {/* Live Finding Toast Message */}
        {latestFound && !isCompleted && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#242321] text-[#F5EEDC] text-xs font-meta tracking-wider rounded shadow-lg uppercase font-semibold">
            {latestFound}
          </div>
        )}

        {/* Completion Reveal Box with Animated "VERIFIED!" Stamp */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute inset-4 bg-[#FFFDF7]/98 border-2 border-[#242321] p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xs"
            >
              <div className="w-16 h-16 rounded-full bg-[#C98591] text-white flex items-center justify-center mb-3 shadow-md">
                <Award size={32} />
              </div>

              {/* Animated Editorial Stamp */}
              <motion.div
                initial={{ scale: 2, rotate: -25, opacity: 0 }}
                animate={{ scale: 1, rotate: -6, opacity: 1 }}
                transition={{ type: 'spring', damping: 10, delay: 0.15 }}
                className="px-4 py-1 border-2 border-[#C98591] text-[#C98591] font-headline font-black text-xl tracking-widest uppercase shadow-xs mb-3"
              >
                {data.completionBadge}
              </motion.div>

              <h3 className="font-headline font-black text-xl sm:text-3xl text-[#242321] leading-tight mb-2 max-w-xl">
                {data.successHeadline}
              </h3>
              <p className="font-body-news text-sm sm:text-base text-[#242321]/80 max-w-md italic mb-4">
                "{data.successMessage}"
              </p>
              <div className="px-4 py-1.5 bg-[#242321] text-white text-xs font-meta tracking-widest uppercase font-bold">
                ✓ ALL 3 CLUES ARCHIVED IN THE JITISHA TIMES
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-3 border-t border-[#242321]/30 flex justify-between text-[11px] font-meta text-[#242321]/70 uppercase font-semibold">
        <span>THE JITISHA TIMES // PAGE 07</span>
        <span>TURN TO SPECIAL INSERT →</span>
      </div>
    </article>
  );
}
