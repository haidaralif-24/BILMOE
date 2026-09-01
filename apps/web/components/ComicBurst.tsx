interface ComicBurstProps {
  className?: string;
  fill?: string;
  stroke?: string;
}

/**
 * A hand-drawn-style spiky star burst, matching the doodle accents used
 * throughout the print materials. Purely decorative — kept small and used
 * sparingly as a corner accent, not as a repeated pattern.
 */
export default function ComicBurst({ className = '', fill = '#FCD717', stroke = '#16110A' }: ComicBurstProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <path
        d="M50 2 L58 34 L88 18 L64 42 L98 46 L64 56 L84 84 L54 64 L50 98 L44 64 L14 82 L36 54 L2 48 L36 40 L16 12 L46 32 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </svg>
  );
}
