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
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x0a0c14,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xc6ff3d, 0xff3fae, 0xc6ff3d],
              rightCars: [0x3fd7ff, 0xc6ff3d, 0x3fd7ff],
              sticks: 0x3fd7ff,
            },
          }}
        />
      </motion.div>
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

