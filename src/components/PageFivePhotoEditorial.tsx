import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { NewspaperMasthead } from './NewspaperMasthead';
import type { NewspaperData, PhotoItem } from '../types';

interface PageFivePhotoEditorialProps {
  data: NewspaperData['pageFiveEditorial'];
  masthead: NewspaperData['masthead'];
  photos: PhotoItem[];
  onOpenPhoto: (photo: PhotoItem) => void;
}

export function PageFivePhotoEditorial({
  data,
  masthead,
  photos,
  onOpenPhoto,
}: PageFivePhotoEditorialProps) {
  // Curated editorial portraits: photo-3, photo-4, photo-6, photo-8, photo-10
  const editorialPhotos = photos.slice(2, 7);

  return (
    <article
      id="page-five"
      className="relative max-w-5xl mx-auto my-8 sm:my-14 bg-[#FFFDF7] text-[#242321] p-6 sm:p-12 rounded-sm shadow-xl border-2 border-[#242321] paper-sheet-shadow overflow-hidden"
    >
      <NewspaperMasthead data={masthead} compact={true} />

      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-[#242321] pb-2 mb-8 text-xs font-meta font-bold tracking-widest uppercase">
        <span className="text-[#C98591]">{data.pageNumber}</span>
        <span className="bg-[#242321] text-[#FFFDF7] px-2.5 py-0.5">EXCLUSIVE PORTRAIT GALLERY</span>
        <span className="text-[#242321]/70">CENTRE SPREAD</span>
      </div>

      {/* Main Headline & Subhead */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-headline font-black text-3xl sm:text-5xl text-[#242321] tracking-tight uppercase leading-tight mb-3">
          {data.headline}
        </h2>
        <p className="font-headline font-bold text-lg sm:text-xl text-[#C98591] italic mb-3">
          "{data.subheadline}"
        </p>
        <p className="font-body-news text-xs sm:text-sm text-[#242321]/70 max-w-md mx-auto">
          {data.leadQuote}
        </p>
      </div>

      {/* Asymmetrical Newspaper Photo Spread */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start my-8">
        {/* Large Portrait (7 cols) */}
        {editorialPhotos[0] && (
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => onOpenPhoto(editorialPhotos[0])}
            className="md:col-span-7 bg-[#F5F0E5] p-3 border-2 border-[#242321] shadow-md cursor-pointer group"
          >
            <div className="aspect-[4/5] overflow-hidden bg-neutral-200 relative">
              <img
                src={editorialPhotos[0].url}
                alt={editorialPhotos[0].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-meta text-xs tracking-widest uppercase">
                <Eye size={16} /> TAP TO ENLARGE
              </div>
            </div>
            <div className="mt-3 text-left">
              <div className="flex items-center justify-between border-t border-[#242321]/30 pt-2 mb-1">
                <span className="font-meta font-bold text-xs uppercase tracking-wider text-[#242321]">
                  PLATE 01 // {editorialPhotos[0].title}
                </span>
                <span className="font-handwriting text-xl text-[#C98591]">
                  "Kinni soni!" ♡
                </span>
              </div>
              <p className="font-body-news text-xs text-[#242321]/80 italic">
                {editorialPhotos[0].caption}
              </p>
            </div>
          </motion.div>
        )}

        {/* Stacked Right Column Photos (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          {editorialPhotos.slice(1, 3).map((photo, i) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => onOpenPhoto(photo)}
              className="bg-[#F5F0E5] p-2.5 border-2 border-[#242321] shadow-xs cursor-pointer group"
            >
              <div className="aspect-[3/2] overflow-hidden bg-neutral-200 relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-meta text-xs tracking-widest uppercase">
                  <Eye size={16} /> VIEW
                </div>
              </div>
              <div className="mt-2 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-meta text-[10px] font-bold uppercase tracking-wider text-[#242321]">
                    PLATE 0{i + 2} // {photo.title}
                  </span>
                  <span className="font-handwriting text-lg text-[#C98591]">
                    {i === 0 ? "Those eyes, though. ♡" : "Effortlessly pretty. ♡"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Two Additional Photos Across Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#242321]/30">
        {editorialPhotos.slice(3, 5).map((photo, idx) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => onOpenPhoto(photo)}
            className="bg-[#F5F0E5] p-2.5 border-2 border-[#242321] shadow-xs cursor-pointer group flex gap-4 items-center"
          >
            <div className="w-24 h-24 shrink-0 overflow-hidden bg-neutral-200 border border-[#242321]">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-left">
              <span className="font-meta text-[10px] font-bold uppercase tracking-widest text-[#49364C] block">
                SPECIAL DISPATCH 0{idx + 4}
              </span>
              <h4 className="font-headline font-bold text-sm text-[#242321] mt-0.5">
                {photo.title}
              </h4>
              <p className="font-handwriting text-xl text-[#C98591]">
                {idx === 0
                  ? "Honestly, how are you this adorable? ♡"
                  : "Someone clearly forgot to distribute ordinary beauty. ♡"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-3 border-t border-[#242321]/30 flex justify-between text-[11px] font-meta text-[#242321]/70 uppercase font-semibold">
        <span>THE JITISHA TIMES // PAGE 05</span>
        <span>TURN TO PAGE 06 FOR THE INVESTIGATION →</span>
      </div>
    </article>
  );
}
