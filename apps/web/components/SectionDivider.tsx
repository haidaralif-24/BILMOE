'use client';

import { useReducedMotion } from 'framer-motion';
import { colors } from '@/lib/design-tokens';

type SectionDividerProps = {
  color?: 'stem' | 'arts' | 'social';
  intensity?: number;
  height?: number;
};

const DEFAULT_INTENSITY = 0.4;
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

  // If prefers-reduced-motion, use solid line only
  const lineHeight = typeof height === 'number' ? `${height}px` : '2px';
  const opacity = prefersReduced ? 0.3 : 1;
  const shadowBlur = Math.max(1, Math.round(intensity * 20));

  const lineStyle = {
    height: lineHeight,
    borderTop: `1px solid ${accentColor}`,
    borderBottom: `1px solid ${accentColor}`,
    backgroundColor: 'transparent',
    boxShadow: `
      0 0 1px ${accentColor}${intensity > 0 ? `${opacity}` : '0'},
      0 0 ${shadowBlur}px ${accentColor}${intensity > 0 ? `${opacity * 0.3}` : '0'},
    `,
    willChange: prefersReduced ? 'height' : 'height, box-shadow',
  };

  return (
    <div
      style={lineStyle}
      className="pointer-events-none"
      aria-hidden="true"
    />
  );
}