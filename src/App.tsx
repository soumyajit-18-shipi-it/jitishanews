import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { newspaperData } from './config/princessData';
import { NewspaperNavbar } from './components/NewspaperNavbar';
import { NewspaperOpeningFold } from './components/NewspaperOpeningFold';
import { NewspaperFrontPage } from './components/NewspaperFrontPage';
import { PageTwoStoryBehind } from './components/PageTwoStoryBehind';
import { PageThreeGaming } from './components/PageThreeGaming';
import { PageFourPunjabiChronicles } from './components/PageFourPunjabiChronicles';
import { PageFivePhotoEditorial } from './components/PageFivePhotoEditorial';
import { PageSixInvestigation } from './components/PageSixInvestigation';
import { NewspaperMiniGame } from './components/NewspaperMiniGame';
import { SpecialInsert } from './components/SpecialInsert';
import { FinalPrincessPage } from './components/FinalPrincessPage';
import { AudioPlayer } from './components/AudioPlayer';
import { PhotoLightbox } from './components/PhotoLightbox';
import type { PhotoItem } from './types';

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Background Audio Controller — Exclusively Diljit Dosanjh "Lover"
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Active section tracker for navigation indicator
  const [activeSection, setActiveSection] = useState('front-page');

  // Lightbox State for Photographs
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const handleOpenPhoto = (photo: PhotoItem) => {
    setActivePhoto(photo);
  };

  const handleClosePhoto = () => {
    setActivePhoto(null);
  };

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = newspaperData.photos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % newspaperData.photos.length;
    setActivePhoto(newspaperData.photos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = newspaperData.photos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + newspaperData.photos.length) % newspaperData.photos.length;
    setActivePhoto(newspaperData.photos[prevIndex]);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio playback requires user interaction:', err);
        });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (newVol === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Section observer to update active navbar link
  useEffect(() => {
    const sectionIds = [
      'front-page',
      'page-two',
      'page-three',
      'page-four',
      'page-five',
      'page-six',
      'mini-game',
      'special-insert',
      'final-page',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E5] text-[#242321] relative selection:bg-[#C98591]/30 selection:text-[#242321]">
      {/* 1. Newspaper Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#C98591] z-50 origin-left pointer-events-none"
      />

      {/* 2. Audio Element for Diljit Dosanjh - Lover */}
      <audio
        ref={audioRef}
        src={newspaperData.music.audioUrl}
        loop
        preload="auto"
      />

      {/* 3. Newspaper Navbar with Active Indicators & Drawer for Mobile */}
      <NewspaperNavbar
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        activeSection={activeSection}
      />

      {/* 4. Bottom-Right Floating Music Player Controller */}
      <AudioPlayer
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        isMuted={isMuted}
        onToggleMute={toggleMute}
        volume={volume}
        onChangeVolume={handleVolumeChange}
      />

      {/* 5. Interactive Photo Lightbox for Newspaper Archive */}
      <PhotoLightbox
        photo={activePhoto}
        onClose={handleClosePhoto}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />

      {/* 6. Continuous Newspaper Experience (Warm Paper Background Across Entire Site) */}
      <main className="relative z-20 px-2 sm:px-6 py-4">
        {/* OPENING — THE NEWSPAPER ARRIVES (Desk Scene & Folded Paper Unfold) */}
        <NewspaperOpeningFold
          data={newspaperData.masthead}
          frontData={newspaperData.frontPage}
          heroPhotoUrl={newspaperData.photos[0].url}
          onOpenEdition={() => {
            if (!isPlaying) togglePlay();
          }}
        />

        {/* PAGE 01 — FRONT PAGE (Breaking News & Headline Scoop) */}
        <NewspaperFrontPage
          data={newspaperData.frontPage}
          masthead={newspaperData.masthead}
          heroPhoto={newspaperData.photos[0]}
          onOpenPhoto={handleOpenPhoto}
        />

        {/* PAGE 02 — HOW IT ALL STARTED... (Origins: 13 November 2026) */}
        <PageTwoStoryBehind
          data={newspaperData.pageTwo}
          masthead={newspaperData.masthead}
        />

        {/* PAGE 03 — EXCLUSIVE GAMING REPORT (Free Fire Dispatch) */}
        <PageThreeGaming
          data={newspaperData.pageThreeGaming}
          masthead={newspaperData.masthead}
        />

        {/* PAGE 04 — THE PUNJABI CHRONICLES */}
        <PageFourPunjabiChronicles
          data={newspaperData.pageFourPunjabi}
          masthead={newspaperData.masthead}
        />

        {/* PAGE 05 — THE CUTEST GIRL EDITORIAL (Photo Spread) */}
        <PageFivePhotoEditorial
          data={newspaperData.pageFiveEditorial}
          masthead={newspaperData.masthead}
          photos={newspaperData.photos}
          onOpenPhoto={handleOpenPhoto}
        />

        {/* PAGE 06 — A VERY SERIOUS INVESTIGATION */}
        <PageSixInvestigation
          data={newspaperData.pageSixInvestigation}
          masthead={newspaperData.masthead}
        />

        {/* PAGE 07 — THE JITISHA DETECTOR (3 Hidden Secrets Mini-Game) */}
        <NewspaperMiniGame
          data={newspaperData.miniGame}
          masthead={newspaperData.masthead}
        />

        {/* SPECIAL EXTRA — EDITORIAL NEWSPAPER INSERT */}
        <SpecialInsert
          data={newspaperData.specialInsert}
        />

        {/* THE FINAL PAGE — THE PRINCESS OF SOUMYAJIT'S HEART (Reserved Exclusively for Finale) */}
        <FinalPrincessPage
          data={newspaperData.finalPrincessPage}
          masthead={newspaperData.masthead}
          portrait={newspaperData.photos[1]}
          onOpenPhoto={handleOpenPhoto}
          onReplay={handleScrollToTop}
        />
      </main>
    </div>
  );
}

export default App;
