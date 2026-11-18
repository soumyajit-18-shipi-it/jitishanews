import React from 'react';

// Ornate Corner Filigree (SVG)
export const GoldCorner: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = 'w-12 h-12', position = 'top-left' }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${rotation} pointer-events-none fill-current text-[#D4AF37]`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5,5 L45,5 C42,15 35,22 25,25 C22,35 15,42 5,45 Z"
        fill="#D4AF37"
        opacity="0.25"
      />
      <path
        d="M2,2 L55,2 C50,15 40,25 25,30 C20,45 10,55 2,58 L2,2 Z"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
      />
      <path
        d="M8,8 Q35,8 40,30 Q25,35 8,15 Z"
        fill="none"
        stroke="#E5C158"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3" fill="#D4AF37" />
      <circle cx="28" cy="12" r="2" fill="#E5C158" />
      <circle cx="12" cy="28" r="2" fill="#E5C158" />
      <path
        d="M2,2 L95,2 Q80,10 70,25 Q55,40 50,70 Q40,85 2,95"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeDasharray="2,3"
      />
    </svg>
  );
};

// Royal Crest / Tiara Emblem
export const RoyalCrest: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Outer Laurel Garland */}
    <path
      d="M20,60 C20,85 40,105 60,105 C80,105 100,85 100,60"
      stroke="#D4AF37"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="1,4"
    />
    <path
      d="M15,55 C12,45 18,35 25,45 C20,30 30,25 35,35 C32,20 45,18 48,30"
      stroke="#8A9A86"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M105,55 C108,45 102,35 95,45 C100,30 90,25 85,35 C88,20 75,18 72,30"
      stroke="#8A9A86"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Shield Base */}
    <path
      d="M35,35 Q60,25 85,35 Q85,75 60,95 Q35,75 35,35 Z"
      fill="#4A0E17"
      stroke="#D4AF37"
      strokeWidth="3"
    />
    {/* Inner Shield Accent */}
    <path
      d="M42,42 Q60,34 78,42 Q78,70 60,86 Q42,70 42,42 Z"
      fill="#380911"
      stroke="#E5C158"
      strokeWidth="1.5"
    />
    {/* Royal Tiara Crown */}
    <path
      d="M46,65 L52,50 L60,60 L68,50 L74,65 Z"
      fill="#D4AF37"
      stroke="#FFF2B2"
      strokeWidth="1.5"
    />
    <circle cx="52" cy="48" r="2" fill="#E27B88" />
    <circle cx="60" cy="45" r="2.5" fill="#E27B88" />
    <circle cx="68" cy="48" r="2" fill="#E27B88" />
    {/* Initial 'P' for Princess */}
    <text
      x="60"
      y="80"
      fontFamily="'Playfair Display', serif"
      fontSize="16"
      fontWeight="bold"
      fill="#FFF3DC"
      textAnchor="middle"
    >
      P
    </text>
  </svg>
);

// Botanical Floral Flourish Divider
export const FloralDivider: React.FC<{ className?: string }> = ({ className = 'w-48' }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className} mx-auto`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]/80" />
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C97B86] flex-shrink-0">
      <path
        d="M12 4C13.5 7 17 9 20 9C17 11 15 14 15 17C13 14 11 14 9 17C9 14 7 11 4 9C7 9 10.5 7 12 4Z"
        fill="#C97B86"
      />
      <circle cx="12" cy="11" r="2" fill="#D4AF37" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]/80" />
  </div>
);

// Wax Seal Component with Ribbons
export const WaxSeal: React.FC<{
  monogram?: string;
  onClick?: () => void;
  className?: string;
  isBroken?: boolean;
}> = ({ monogram = 'P', onClick, className = '', isBroken = false }) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`}
      title={isBroken ? "Wax seal opened" : "Click to break seal"}
    >
      {/* Burgundy Ribbons trailing underneath */}
      <div className="absolute -bottom-6 flex gap-2 pointer-events-none">
        <div
          className="w-4 h-10 bg-[#4A0E17] shadow-sm transform -rotate-12"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)' }}
        />
        <div
          className="w-4 h-10 bg-[#5E131F] shadow-sm transform rotate-12"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)' }}
        />
      </div>

      {/* Wax Medallion */}
      <div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-[#8A1828]/50 transition-all duration-500 ${
          isBroken
            ? 'bg-[#3A0910] scale-95 opacity-80'
            : 'bg-gradient-to-br from-[#7B1726] via-[#5A0E1A] to-[#380810] shadow-[#4A0E17]/50'
        }`}
        style={{
          boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.25), 0 4px 12px rgba(56, 9, 17, 0.45)',
        }}
      >
        {/* Subtle irregular wax edge */}
        <div className="absolute inset-1 rounded-full border border-[#D4AF37]/40 pointer-events-none" />

        {isBroken ? (
          <div className="relative">
            <span className="font-serif-royal text-xl text-[#D4AF37]/60 font-bold line-through">
              {monogram}
            </span>
            <div className="absolute inset-0 border-t border-b border-[#D4AF37]/40 rotate-45" />
          </div>
        ) : (
          <span className="font-serif-royal text-2xl text-[#E5C158] font-bold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {monogram}
          </span>
        )}
      </div>
    </div>
  );
};
