'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import StrokeText from '@/components/StrokeText';
import SoftAurora from '@/components/SoftAurora';
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

const logoIntro: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.94,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.15,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const reducedLogoIntro: Variants = {
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
        <SoftAurora />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/20" />

      <motion.div
        className="relative z-10 w-full max-w-full"
        variants={prefersReduced ? reducedLogoIntro : logoIntro}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={
            prefersReduced
              ? undefined
              : {
                  x: [0, 3, -2, 1, 0],
                  y: [0, -5, 2, -3, 0],
                  rotate: [0, 0.3, -0.25, 0.15, 0],
                }
          }
          transition={
            prefersReduced
              ? undefined
              : {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }
          }
        >
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
            className="font-display"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
