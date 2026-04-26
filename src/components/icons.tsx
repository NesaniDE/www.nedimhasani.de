import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function NesaniLogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="nesani-cube-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cfcfcf" />
        </linearGradient>
        <linearGradient id="nesani-cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8a8a8" />
          <stop offset="1" stopColor="#5e5e5e" />
        </linearGradient>
        <linearGradient id="nesani-cube-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7a7a7a" />
          <stop offset="1" stopColor="#3a3a3a" />
        </linearGradient>
      </defs>
      {/* top face */}
      <path
        d="M32 6 L56 18 L32 30 L8 18 Z"
        fill="url(#nesani-cube-top)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.6"
      />
      {/* left face */}
      <path
        d="M8 18 L32 30 L32 58 L8 46 Z"
        fill="url(#nesani-cube-left)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.6"
      />
      {/* right face */}
      <path
        d="M56 18 L32 30 L32 58 L56 46 Z"
        fill="url(#nesani-cube-right)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.6"
      />
      {/* inner accents */}
      <path
        d="M14 22 L20 25 M44 25 L50 22 M32 38 L32 52"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function CpuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.6 10.7l6.8-3.4M8.6 13.3l6.8 3.4" />
    </svg>
  );
}

export function ChatBubbleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1 4.6A8 8 0 0 1 21 12z" />
      <path d="M8 11h8M8 15h5" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
    </svg>
  );
}
