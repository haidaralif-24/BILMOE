'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { colors } from '@/lib/design-tokens';

type SectionDividerProps = {
  color?: 'stem' | 'arts' | 'social';
  intensity?: number;
  height?: string | number;
};

const DEFAULT_INTENSITY = 0.12;
const DEFAULT_HEIGHT = '1px';

export function SectionDivider({ color = 'stem', intensity = DEFAULT_INTENSITY, height = DEFAULT_HEIGHT }: SectionDividerProps) {
  const prefersReduced = useReducedMotion();

  // Color mapping for division colors only
  const colorMap = {
    stem: colors.stem,
    arts: colors.arts,
    social: colors.social,
  };

  const accentColor = colorMap[color] || colors.stem;

  // If prefers-reduced-motion, simplify to a thin line without glow animation
  const lineHeight = typeof height === 'number' ? `${height}px` : height;
  const lineStyle = {
    height: lineHeight,
    borderTop: `1px solid ${accentColor}${intensity > 0 ? `${Math.round(intensity * 100)}%` : ''}`,
    background: `linear-gradient(transparent 0%, ${accentColor}${intensity > 0 ? `${Math.round(intensity * 100)}%` : ''}, transparent 100%)`,
    willChange: prefersReduced ? 'height' : 'height, box-shadow',
  };

  const glowStyle = intensity > 0 && !prefersReduced ? {
    borderImage: `linear-gradient(to bottom, ${accentColor}${intensity}, transparent) 1`,
    boxShadow: `
      0 0 1px ${accentColor}${intensity * 0.3},
      0 0 4px ${accentColor}${intensity * 0.15},
      0 0 12px ${accentColor}${intensity * 0.08},
      0 0 24px ${accentColor}${intensity * 0.04}
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