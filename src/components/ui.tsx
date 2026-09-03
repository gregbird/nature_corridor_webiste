import { ReactNode } from 'react';

// Reusable section divider — thin 1px ink rule echoing the brand guidelines
type DividerProps = {
  className?: string;
};
export function Divider({ className = '' }: DividerProps) {
  return <hr className={`border-0 border-t border-ink/20 my-0 ${className}`} />;
}

// Section wrapper with consistent padding
type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};
export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}

// Eyebrow label — Medium 500, small, uppercase, cornflower accent dot
type EyebrowProps = {
  children: ReactNode;
  className?: string;
};
export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p className={`flex items-center gap-2 font-medium text-[13px] uppercase tracking-[0.15em] text-ink/60 ${className}`}>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cornflower" aria-hidden="true" />
      {children}
    </p>
  );
}

// Headline with SemiBold/ExtraLight pairing — key phrase bold, rest light
type HeadlineProps = {
  bold: string;
  light?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
};
export function Headline({ bold, light, className = '', as: Tag = 'h2' }: HeadlineProps) {
  return (
    <Tag className={`font-extralight text-ink leading-[1.15] tracking-tight ${className}`}>
      <strong className="font-semibold">{bold}</strong>
      {light && <> {light}</>}
    </Tag>
  );
}

// Numbered marker — large ExtraLight 200 with cornflower accent
type NumberMarkerProps = {
  number: string;
  className?: string;
};
export function NumberMarker({ number, className = '' }: NumberMarkerProps) {
  return (
    <span
      className={`font-extralight text-3xl text-ink/25 tabular-nums ${className}`}
      aria-hidden="true"
    >
      {number}
    </span>
  );
}
