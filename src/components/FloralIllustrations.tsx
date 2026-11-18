import React from 'react';

// Velvet Red Rose
export const VelvetRedRose: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Stem & Leaves */}
    <path d="M50 52 Q53 82 48 95" stroke="#4F634A" strokeWidth="3" strokeLinecap="round" />
    <path d="M51 68 Q65 60 67 72 Q53 74 51 68 Z" fill="#697D64" stroke="#4F634A" strokeWidth="0.75" />
    <path d="M49 76 Q34 68 36 80 Q48 81 49 76 Z" fill="#697D64" stroke="#4F634A" strokeWidth="0.75" />
    {/* Rose Petals Layering */}
    <ellipse cx="50" cy="40" rx="22" ry="20" fill="#4A0E1F" />
    <ellipse cx="50" cy="38" rx="19" ry="17" fill="#681F35" />
    <path d="M35 38 Q45 22 62 30 Q68 45 52 50 Q36 48 35 38 Z" fill="#8C2542" />
    <path d="M40 34 Q52 24 60 36 Q55 45 42 42 Z" fill="#B84B5B" />
    <circle cx="50" cy="35" r="7" fill="#D45B6C" />
    <circle cx="51" cy="34" r="3" fill="#F6DDE2" opacity="0.8" />
  </svg>
);

// Blush Pink Rose
export const BlushPinkRose: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path d="M50 50 Q48 80 52 95" stroke="#5C7057" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 66 Q64 58 66 70 Q52 72 50 66 Z" fill="#7A8F75" />
    <ellipse cx="50" cy="38" rx="22" ry="20" fill="#B35D6F" />
    <ellipse cx="50" cy="36" rx="19" ry="17" fill="#DDA7B0" />
    <path d="M36 36 Q46 22 64 28 Q68 44 54 48 Q38 46 36 36 Z" fill="#E8B8C0" />
    <path d="M42 32 Q52 24 58 34 Q54 42 44 40 Z" fill="#F6DDE2" />
    <circle cx="50" cy="33" r="5" fill="#FFF2F5" />
  </svg>
);

// White Lily
export const WhiteLily: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path d="M50 55 Q49 80 51 95" stroke="#5C7057" strokeWidth="2.5" strokeLinecap="round" />
    {/* Lily Petals with Soft Ivory & Gold Touches */}
    <path d="M50 15 Q58 38 50 55 Q42 38 50 15 Z" fill="#FFF9F2" stroke="#E9DCCB" strokeWidth="1" />
    <path d="M28 30 Q44 40 50 55 Q38 45 28 30 Z" fill="#FBF5ED" stroke="#E9DCCB" strokeWidth="1" />
    <path d="M72 30 Q56 40 50 55 Q62 45 72 30 Z" fill="#FBF5ED" stroke="#E9DCCB" strokeWidth="1" />
    <path d="M34 50 Q46 54 50 55 Q42 62 34 50 Z" fill="#F5EBDD" />
    <path d="M66 50 Q54 54 50 55 Q58 62 66 50 Z" fill="#F5EBDD" />
    {/* Golden Stamens */}
    <line x1="50" y1="52" x2="43" y2="34" stroke="#C7A46A" strokeWidth="1.5" />
    <circle cx="43" cy="34" r="2" fill="#C7A46A" />
    <line x1="50" y1="52" x2="57" y2="34" stroke="#C7A46A" strokeWidth="1.5" />
    <circle cx="57" cy="34" r="2" fill="#C7A46A" />
  </svg>
);

// Baby's Breath Spray
export const BabysBreath: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path d="M50 90 L50 45" stroke="#7A8F75" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 65 Q40 50 30 40" stroke="#7A8F75" strokeWidth="1.5" />
    <path d="M50 55 Q62 45 70 35" stroke="#7A8F75" strokeWidth="1.5" />
    <path d="M50 45 Q45 30 40 20" stroke="#7A8F75" strokeWidth="1.5" />
    <path d="M50 45 Q55 30 60 20" stroke="#7A8F75" strokeWidth="1.5" />
    {/* Tiny Delicate White Floral Florets */}
    {[
      { cx: 30, cy: 38 },
      { cx: 24, cy: 42 },
      { cx: 35, cy: 32 },
      { cx: 70, cy: 34 },
      { cx: 76, cy: 38 },
      { cx: 65, cy: 28 },
      { cx: 40, cy: 18 },
      { cx: 34, cy: 22 },
      { cx: 60, cy: 18 },
      { cx: 66, cy: 22 },
      { cx: 50, cy: 12 },
    ].map((pt, i) => (
      <circle key={i} cx={pt.cx} cy={pt.cy} r={3} fill="#FFFDF8" stroke="#E5C158" strokeWidth="0.75" />
    ))}
  </svg>
);

// Eucalyptus Greenery
export const EucalyptusSprig: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path d="M50 95 Q48 50 52 10" stroke="#546650" strokeWidth="2" strokeLinecap="round" />
    {[
      { y: 25, side: -1 },
      { y: 38, side: 1 },
      { y: 52, side: -1 },
      { y: 66, side: 1 },
      { y: 80, side: -1 },
    ].map((leaf, i) => (
      <ellipse
        key={i}
        cx={50 + leaf.side * 14}
        cy={leaf.y}
        rx="12"
        ry="8"
        transform={`rotate(${leaf.side * 25} ${50 + leaf.side * 14} ${leaf.y})`}
        fill="#A6AD91"
        stroke="#546650"
        strokeWidth="1"
        opacity="0.9"
      />
    ))}
  </svg>
);

// Champagne Satin Ribbon Bow
export const SatinRibbonBow: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Left Loop */}
    <path
      d="M48 45 C30 25 15 35 22 55 C26 65 44 50 48 45 Z"
      fill="#C7A46A"
      stroke="#B38F54"
      strokeWidth="1.5"
    />
    <path d="M26 38 C28 48 38 52 46 47" stroke="#FFF5DC" strokeWidth="1" opacity="0.6" />
    {/* Right Loop */}
    <path
      d="M52 45 C70 25 85 35 78 55 C74 65 56 50 52 45 Z"
      fill="#C7A46A"
      stroke="#B38F54"
      strokeWidth="1.5"
    />
    <path d="M74 38 C72 48 62 52 54 47" stroke="#FFF5DC" strokeWidth="1" opacity="0.6" />
    {/* Knot Center */}
    <circle cx="50" cy="46" r="6" fill="#B38F54" stroke="#FFF5DC" strokeWidth="1" />
    {/* Ribbon Tails */}
    <path
      d="M47 50 Q38 75 32 88 L42 85 Q47 70 49 52 Z"
      fill="#C7A46A"
      stroke="#B38F54"
      strokeWidth="1"
    />
    <path
      d="M53 50 Q62 75 68 88 L58 85 Q53 70 51 52 Z"
      fill="#C7A46A"
      stroke="#B38F54"
      strokeWidth="1"
    />
  </svg>
);

// Vintage Fountain Pen Illustration
export const FountainPen: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <g transform="rotate(-35 50 50)">
      {/* Pen Barrel */}
      <rect x="46" y="10" width="8" height="50" rx="3" fill="#681F35" stroke="#C7A46A" strokeWidth="1" />
      <rect x="45" y="60" width="10" height="6" fill="#C7A46A" />
      {/* Golden Nib */}
      <polygon points="50,85 45,66 55,66" fill="#C7A46A" stroke="#9E7F46" strokeWidth="1" />
      <line x1="50" y1="66" x2="50" y2="80" stroke="#4A0E1F" strokeWidth="1" />
      <circle cx="50" cy="74" r="1.5" fill="#4A0E1F" />
    </g>
  </svg>
);
