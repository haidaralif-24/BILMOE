'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import MoltenMetal from '@/components/MoltenMetal';
import SplitText from '@/components/SplitText';
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
    <div className="relative h-screen w-full overflow-hidden bg-bil-bg">
      <motion.div
        className="absolute inset-0 z-0"
        variants={prefersReduced ? reducedFade : bgVariants}
        initial="hidden"
        animate="visible"
      >
        <MoltenMetal
          color1={colors.stem}
          color2={colors.arts}
          color3={colors.social}
          backgroundColor={colors.bg}
          speed={0.3}
          scale={3.5}
          detail={4}
          glow={1.4}
          coreSize={0.08}
          swirl={0.8}
          brightness={1.2}
          blackPoint={0.04}
          grain
          grainIntensity={0.04}
        />
      </motion.div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <SplitText
          text="B-ILMOE"
          tag="h1"
          splitType="chars"
          delay={80}
          duration={1.25}
          ease="power3.out"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-bil-text"
        />
      </div>
    </div>
  );
}
