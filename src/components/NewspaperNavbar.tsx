import { useState } from 'react';
import { Newspaper, Menu, X, Volume2, VolumeX, Heart, BookOpen } from 'lucide-react';

interface NewspaperNavbarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  activeSection: string;
}

export function NewspaperNavbar({
  isPlaying,
  onTogglePlay,
  activeSection,
}: NewspaperNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'front-page', label: 'Front Page', pageNo: '01' },
    { id: 'page-two', label: 'Origins', pageNo: '02' },
    { id: 'page-three', label: 'Gaming', pageNo: '03' },
    { id: 'page-four', label: 'Punjabi', pageNo: '04' },
    { id: 'page-five', label: 'Portraits', pageNo: '05' },
    { id: 'page-six', label: 'Inquiry', pageNo: '06' },
    { id: 'mini-game', label: 'Puzzle', pageNo: '07' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[#F5F0E5]/95 backdrop-blur-md border-b-2 border-[#242321] shadow-xs select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between text-[#242321]">
          {/* Left: Newspaper Masthead Logo */}
          <a
            href="#newspaper-opening"
            className="flex items-center gap-2 hover:text-[#C98591] transition-colors shrink-0"
          >
            <Newspaper size={18} className="text-[#242321]" />
            <span className="font-headline font-black text-base sm:text-lg tracking-tight uppercase">
              THE JITISHA TIMES
            </span>
          </a>

          {/* Centre (Desktop only): Clean Nav with Active Indicator */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 font-meta text-[11px] tracking-widest uppercase font-bold text-[#242321]/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 cursor-pointer transition-colors ${
                    isActive ? 'text-[#C98591]' : 'hover:text-[#C98591]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C98591]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Audio Control & Special Extra + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={onTogglePlay}
              className="px-2.5 py-1 rounded-sm border border-[#242321]/50 text-[#242321] hover:text-[#C98591] hover:border-[#C98591] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-meta font-bold tracking-wider"
              title={isPlaying ? 'Pause Song' : 'Play Song: Lover by Diljit Dosanjh'}
            >
              {isPlaying ? (
                <>
                  <Volume2 size={15} className="text-[#C98591]" />
                  <span className="hidden sm:inline">Lover</span>
                </>
              ) : (
                <>
                  <VolumeX size={15} />
                  <span className="hidden sm:inline">Music</span>
                </>
              )}
            </button>

            {/* Special Extra Button */}
            <button
              onClick={() => handleNavClick('special-insert')}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-[#242321] text-[#F5F0E5] text-xs font-meta font-bold tracking-widest uppercase hover:bg-[#C98591] transition-colors cursor-pointer shadow-xs"
            >
              <Heart size={11} className="fill-current text-[#C98591]" />
              <span>Special Extra</span>
            </button>

            {/* Mobile Index / Menu Trigger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-sm border border-[#242321]/50 text-[#242321] hover:bg-[#242321] hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-meta font-bold"
              aria-label="Open Table of Contents"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="hidden xs:inline">INDEX</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Vertical Contents Drawer Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 z-40 bg-[#F5F0E5] border-b-2 border-[#242321] shadow-2xl p-6 select-none animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#242321]/30 pb-3 mb-4">
            <span className="font-headline font-bold text-sm uppercase tracking-wider text-[#242321] flex items-center gap-2">
              <BookOpen size={16} /> TABLE OF CONTENTS
            </span>
            <span className="text-[10px] font-meta font-bold text-[#C98591] uppercase">
              7 PAGES + SPECIAL REVEAL
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#242321]/15 text-left">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="py-3 flex items-center justify-between text-[#242321] hover:text-[#C98591] transition-colors font-headline text-base"
              >
                <div className="flex items-center gap-3">
                  <span className="font-meta font-bold text-xs text-[#C98591]">
                    PAGE {link.pageNo}
                  </span>
                  <span>{link.label}</span>
                </div>
                <span className="text-xs text-[#242321]/40">→</span>
              </button>
            ))}

            <button
              onClick={() => handleNavClick('special-insert')}
              className="py-3 flex items-center justify-between text-[#242321] hover:text-[#C98591] font-headline text-base"
            >
              <div className="flex items-center gap-3">
                <span className="font-meta font-bold text-xs text-[#49364C]">EXTRA</span>
                <span>Special Insert</span>
              </div>
              <span className="text-xs text-[#242321]/40">→</span>
            </button>

            <button
              onClick={() => handleNavClick('final-page')}
              className="py-3 flex items-center justify-between text-[#C98591] font-headline font-bold text-base"
            >
              <div className="flex items-center gap-3">
                <span className="font-meta font-bold text-xs text-[#C98591]">FINALE</span>
                <span>The Final Edition</span>
              </div>
              <span className="text-xs text-[#C98591]">★</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
