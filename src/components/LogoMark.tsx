type LogoMarkProps = {
  variant?: 'paper' | 'reversed';
  className?: string;
};

// Simplified mark: arc + one stem + one bloom — used below 24px
export default function LogoMark({ variant = 'paper', className = '' }: LogoMarkProps) {
  const ink = variant === 'reversed' ? '#F4F2EC' : '#14262B';
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Irish Nature Corridor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="16" y1="42" x2="16" y2="24" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 24 Q28 8, 40 20" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="20" r="5" fill="none" stroke={ink} strokeWidth="2.5" />
    </svg>
  );
}
