import React from 'react';
import { Volume2, VolumeX, Play, Pause, Newspaper } from 'lucide-react';
import { newspaperData } from '../config/princessData';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  volume: number;
  onChangeVolume: (val: number) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isPlaying,
  onTogglePlay,
  isMuted,
  onToggleMute,
  volume,
  onChangeVolume,
}) => {
  const [showControls, setShowControls] = React.useState(false);

  return (
    <aside
      aria-label="Newspaper acoustic player"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Expanded Controls Drawer */}
      <div
        className={`flex items-center gap-2 px-3.5 py-2 bg-[#F5F0E5] border-2 border-[#242321] shadow-xl transition-all duration-300 rounded-sm ${
          showControls
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col text-left pr-2">
          <span className="font-headline text-xs text-[#242321] font-bold tracking-wide truncate max-w-[130px]">
            {newspaperData.music.title}
          </span>
          <span className="font-meta text-[9px] text-[#C98591] tracking-wider uppercase font-bold">
            {isPlaying ? 'PLAYING PRESS AUDIO' : 'MUTED'}
          </span>
        </div>

        <button
          onClick={onToggleMute}
          className="p-1 text-[#242321] hover:text-[#C98591] transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={(e) => onChangeVolume(parseFloat(e.target.value))}
          className="w-16 h-1 accent-[#242321] cursor-pointer"
        />
      </div>

      {/* Aesthetic Pill Button */}
      <button
        onClick={onTogglePlay}
        className={`relative group h-10 px-4 flex items-center gap-2 border-2 border-[#242321] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer rounded-sm ${
          isPlaying
            ? 'bg-[#242321] text-[#F5F0E5]'
            : 'bg-[#F5F0E5] text-[#242321] hover:bg-[#FFFDF7]'
        }`}
        title={isPlaying ? 'Pause Melody' : 'Play Press Waltz'}
      >
        {isPlaying ? (
          <>
            <Pause size={13} className="fill-current text-[#C98591]" />
            <span className="font-meta text-xs tracking-wider uppercase font-bold">MELODY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C98591] animate-ping" />
          </>
        ) : (
          <>
            <Play size={13} className="fill-current" />
            <span className="font-meta text-xs tracking-wider uppercase font-bold">AUDIO</span>
            <Newspaper size={12} className="text-[#C98591]" />
          </>
        )}
      </button>
    </aside>
  );
};
