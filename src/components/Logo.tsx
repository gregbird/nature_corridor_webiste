type LogoProps = {
  variant?: 'paper' | 'reversed';
  className?: string;
};

// Irish Nature Corridor logo: a corridor arc (the connecting curve) with
// two stems rising into simplified blooms — drawn entirely in brand colours.
// The arc represents ecological connectivity; the blooms represent habitats.
const arcColor = '#14262B';
const bloomColor = '#14262B';
const paperArc = '#F4F2EC';

export default function Logo({ variant = 'paper', className = '' }: LogoProps) {
  const ink = variant === 'reversed' ? paperArc : arcColor;

  return (
    <svg
      viewBox="0 0 200 48"
      className={className}
      role="img"
      aria-label="Irish Nature Corridor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mark: corridor arc + two stems + two blooms */}
      <g>
        {/* Left stem */}
        <line x1="14" y1="40" x2="14" y2="22" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        {/* Right stem */}
        <line x1="34" y1="40" x2="34" y2="16" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        {/* Corridor arc connecting the two */}
        <path d="M14 22 Q24 6, 34 16" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        {/* Left bloom — small circle */}
        <circle cx="14" cy="18" r="4.5" fill="none" stroke={bloomColor === arcColor ? ink : bloomColor} strokeWidth="2" />
        {/* Right bloom — slightly larger filled dot */}
        <circle cx="34" cy="11" r="3" fill={ink} />
      </g>
      {/* Wordmark */}
      <text
        x="50"
        y="24"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill={ink}
        letterSpacing="0.2"
      >
        Irish Nature
      </text>
      <text
        x="50"
        y="40"
        fontFamily="Poppins, sans-serif"
        fontSize="13"
        fontWeight="200"
        fill={ink}
        letterSpacing="0.8"
      >
        CORRIDOR
      </text>
    </svg>
  );
}
