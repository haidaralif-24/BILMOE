'use client';

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import StrokeText from '@/components/StrokeText';
import ComicBackground from '@/components/ComicBackground';
import ComicBurst from '@/components/ComicBurst';
import { colors } from '@/lib/design-tokens';

const bgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};

const logoIntro: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
};

const reducedLogoIntro: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};

const taglineIntro: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, delay: 1.35, ease: [0.22, 1, 0.36, 1] } },
};

const reducedTaglineIntro: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};

function HeroInner({ prefersReduced }: { prefersReduced: boolean }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.68, 0.95], [1, 1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[#f7f1e4]">
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={prefersReduced ? undefined : { opacity: heroOpacity, scale: heroScale }}
        variants={prefersReduced ? reducedFade : bgVariants}
        initial="hidden"
        animate="visible"
      >
        <ComicBackground />
      </motion.div>

      <ComicBurst
        className="pointer-events-none absolute top-16 left-[6%] z-[2] h-16 w-16 rotate-[-12deg] sm:h-24 sm:w-24"
        fill={colors.warning}
        stroke={colors.ink}
      />
      <ComicBurst
        className="pointer-events-none absolute right-[7%] bottom-20 z-[2] h-10 w-10 rotate-[8deg] sm:h-14 sm:w-14"
        fill={colors.arts}
        stroke={colors.ink}
      />

      <motion.div
        className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-7 px-4 text-center"
        style={prefersReduced ? undefined : { opacity: contentOpacity, scale: heroScale, y: heroY, willChange: 'transform, opacity' }}
      >
        <motion.div
          className="mx-auto w-full max-w-full"
          variants={prefersReduced ? reducedLogoIntro : logoIntro}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={prefersReduced ? undefined : 'will-change-transform'}
            animate={prefersReduced ? undefined : { x: [0, 3, -2, 1, 0], y: [0, -5, 2, -3, 0], rotate: [0, 0.3, -0.25, 0.15, 0] }}
            transition={prefersReduced ? undefined : { duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          >
            <StrokeText
              text="B-ILMOE"
              strokeColor={colors.ink}
              fillColor={colors.ink}
              strokeWidth={1.8}
              drawDuration={1.8}
              fillDelay={0.3}
              stagger={0.07}
              ease="power2.out"
              trigger="mount"
              fillMode="none"
              fontSize={140}
              fontWeight={400}
              fontFamily="var(--font-display)"
              letterSpacing={-4}
              glow={false}
              className="font-display mx-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-2xl px-4 sm:px-6"
          variants={prefersReduced ? reducedTaglineIntro : taglineIntro}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={prefersReduced ? undefined : 'will-change-transform'}
            animate={prefersReduced ? undefined : { x: [0, -2, 2, -1, 0], y: [0, 3, -2, 2, 0], rotate: [0, -0.2, 0.2, -0.12, 0] }}
            transition={prefersReduced ? undefined : { duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          >
            <div className="comic-panel comic-tilt-2 comic-tail relative rounded-2xl bg-[#fffaf0] px-6 py-5 text-center sm:px-10 sm:py-6">
              <p className="font-sans text-sm leading-7 text-[#16110a]/80 sm:text-base sm:leading-8">
                Menyediakan wadah eksplorasi ilmu, memublikasikan penelitian teruji, dan mewujudkan media yang mudah diakses
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-[#f7f1e4]" />
    );
  }

  return <HeroInner prefersReduced={prefersReduced ?? false} />;
}
