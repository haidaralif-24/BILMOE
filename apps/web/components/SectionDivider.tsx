'use client';

import { useReducedMotion } from 'framer-motion';
import { colors } from '@/lib/design-tokens';

type SectionDividerProps = {
  color?: 'stem' | 'arts' | 'social';
  intensity?: number;
  height?: number;
};

const DEFAULT_INTENSITY = 0.2;
const DEFAULT_HEIGHT = 1;

export function SectionDivider({ color = 'stem', intensity = DEFAULT_INTENSITY, height = DEFAULT_HEIGHT }: SectionDividerProps) {
  const prefersReduced = useReducedMotion();

  // Color mapping for division colors only
  const colorMap = {
    stem: colors.stem,
    arts: colors.arts,
    social: colors.social,
  };

  const accentColor = colorMap[color] || colors.stem;

  // If prefers-reduced-motion, use very subtle line only
  const lineHeight = typeof height === 'number' ? `${height}px` : '1px';
  const opacity = prefersReduced ? 0.15 : intensity;
  const shadowAlpha = Math.max(0.02, Math.round(intensity * 0.15) / 100);

  const lineStyle = {
    height: lineHeight,
    borderTop: `1px solid ${accentColor}`,
    borderBottom: `1px solid ${accentColor}`,
    background: 'transparent',
    // Very subtle shadow - almost invisible
    boxShadow: `
      0 0 1px rgba(${hexToRgb(accentColor)}, ${opacity}),
      0 0 3px rgba(${hexToRgb(accentColor)}, ${opacity * 0.3}),
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

// Helper to convert hex to rgb for box-shadow
function hexToRgb(hex: string): string {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    return `${parseInt(cleanHex[0] + cleanHex[0], 16)} ${parseInt(cleanHex[1] + cleanHex[1], 16)} ${parseInt(cleanHex[2] + cleanHex[2], 16)}`;
  }
  if (cleanHex.length === 6) {
    return `${parseInt(cleanHex.slice(0, 2), 16)} ${parseInt(cleanHex.slice(2, 4), 16)} ${parseInt(cleanHex.slice(4, 6), 16)}`;
  }
  return '0 0 0';
}