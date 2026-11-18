import React, { useEffect } from 'react';
import type { PhotoItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#1F1E1C]/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Newspaper Archival Plate Container */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row bg-[#F5F0E5] border-2 border-[#242321] shadow-2xl overflow-hidden rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#F5F0E5] text-[#242321] hover:bg-[#242321] hover:text-[#FFFDF7] border border-[#242321] shadow-md transition-all cursor-pointer"
          title="Close (Esc)"
        >
          <X size={18} />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[#F5F0E5] text-[#242321] hover:bg-[#242321] hover:text-[#FFFDF7] border border-[#242321] shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
          title="Previous (Arrow Left)"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[#F5F0E5] text-[#242321] hover:bg-[#242321] hover:text-[#FFFDF7] border border-[#242321] shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 md:right-[380px]"
          title="Next (Arrow Right)"
        >
          <ChevronRight size={20} />
        </button>

        {/* Left Side: Photo Frame View */}
        <div className="flex-1 bg-[#1A1918] p-4 sm:p-6 flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border-2 border-[#FFFDF7]"
          />
        </div>

        {/* Right Side: Editorial Archival Story */}
        <div className="w-full md:w-[380px] p-6 sm:p-8 flex flex-col justify-between bg-[#FFFDF7] text-[#242321] border-t md:border-t-0 md:border-l-2 md:border-[#242321] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-[#C98591] text-xs uppercase tracking-widest mb-2 font-meta font-bold">
              <span>{photo.tag || photo.dateOrMemory || "PRESS PHOTOGRAPH"}</span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl text-[#242321] font-bold mb-3">
              {photo.title}
            </h3>

            {/* Handwritten annotation if present */}
            {photo.annotation && (
              <div className="p-3 bg-[#EBCDBB]/40 border-l-3 border-[#C98591] mb-4">
                <p className="font-handwriting text-2xl text-[#49364C] leading-snug">
                  "{photo.annotation}"
                </p>
              </div>
            )}

            <p className="font-body-news text-xs sm:text-sm text-[#242321]/80 leading-relaxed mb-4">
              {photo.caption}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#242321]/20 flex items-center justify-between text-xs font-meta uppercase font-bold text-[#242321]/70">
            <span>THE KHUSI TIMES // ARCHIVE</span>
            <span className="font-handwriting text-2xl text-[#C98591] lowercase tracking-normal">
              soniyo ♡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
