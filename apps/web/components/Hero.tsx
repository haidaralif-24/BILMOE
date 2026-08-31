'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Hyperspeed from '@/components/Hyperspeed';
import StrokeText from '@/components/StrokeText';
import ParticleField from '@/components/ParticleField';
import BorderGlow from '@/components/BorderGlow';
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
              background: 0x0A0C14,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xC6FF3D, 0xFF3FAE, 0xC6FF3D],
              rightCars: [0x3FD7FF, 0xC6FF3D, 0x3FD7FF],
              sticks: 0x3FD7FF,
            },
          }}
        />
      </motion.div>

      <div className="absolute inset-0 z-[5]">
        <ParticleField
          particleCount={60}
          particleColor={colors.stem}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <BorderGlow
          backgroundColor={colors.surface}
          glowColor="85 80 65"
          colors={[colors.stem, colors.arts, colors.social]}
          animated
          glowIntensity={1.2}
          glowRadius={50}
          borderRadius={20}
          className="px-12 py-8 sm:px-16 sm:py-10"
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
            className="max-w-full font-display"
          />
        </BorderGlow>
      </div>
    </div>
  );
}
