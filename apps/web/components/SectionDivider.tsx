'use client';

import { useReducedMotion } from 'framer-motion';
import { colors } from '@/lib/design-tokens';

type SectionDividerProps = {
  color?: 'stem' | 'arts' | 'social';
  intensity?: number;
  height?: number;
};

const DEFAULT_INTENSITY = 0.25;
const DEFAULT_HEIGHT = 2;

export function SectionDivider({ color = 'stem', intensity = DEFAULT_INTENSITY, height = DEFAULT_HEIGHT }: SectionDividerProps) {
  const prefersReduced = useReducedMotion();

  // Color mapping for division colors only
  const colorMap = {
    stem: colors.stem,
    arts: colors.arts,
    social: colors.social,
  };

  const accentColor = colorMap[color] || colors.stem;

  // If prefers-reduced-motion, simplify to a thin solid line
  const lineHeight = typeof height === 'number' ? `${height}px` : height;
  const stopPercent = Math.round(intensity * 100);

  const lineStyle = {
    height: lineHeight,
    borderTop: `1px solid ${accentColor}`,
    borderBottom: `1px solid ${accentColor}`,
    background: `linear-gradient(180deg, ${accentColor}${stopPercent > 0 ? `${stopPercent}%` : ''}, transparent 0%)`,
    willChange: prefersReduced ? 'height' : 'height, box-shadow',
  };

  const glowStyle = intensity > 0 && !prefersReduced ? {
    borderTop: `2px solid ${accentColor}`,
    borderBottom: `2px solid ${accentColor}`,
    boxShadow: `
      0 0 1px ${accentColor},
      0 0 6px ${accentColor},
      0 0 12px ${accentColor}${intensity * 0.3},
      0 0 24px ${accentColor}${intensity * 0.15},
    `,
  } : undefined;

  return (
    <div
      style={lineStyle}
      className="pointer-events-none"
      aria-hidden="true"
    >
      {glowStyle && <div className="absolute inset-0" style={glowStyle} />}
    </div>
  );
}