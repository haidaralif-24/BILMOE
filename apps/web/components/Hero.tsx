'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import StrokeText from '@/components/StrokeText';
import Hyperspeed from '@/components/Hyperspeed';
import { colors } from '@/lib/design-tokens';

const bgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black px-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        variants={prefersReduced ? reducedFade : bgVariants}
        initial="hidden"
        animate="visible"
      >
        <Hyperspeed />
      </motion.div>
      {/* Dark scrim so the hero text stays readable over the road */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/25" />
      <StrokeText
        text="B-ILMOE"
        strokeColor={colors.stem}
        fillColor={colors.text}
        strokeWidth={1.4}
        drawDuration={1.6}
        fillDelay={0.3}
        stagger={0.06}
        ease="power2.out"
        trigger="mount"
        fillMode="wipe"
        fontSize={140}
        fontWeight={700}
        letterSpacing={-4}
        className="relative z-10 max-w-full font-display"
      />
    </div>
  );
}

