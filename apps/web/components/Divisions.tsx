'use client';

import { motion, useReducedMotion } from 'framer-motion';
import CardSwap, { Card } from '@/components/CardSwap';
import { colors } from '@/lib/design-tokens';

const divisions = [
  {
    title: 'ARTS',
    description: 'Creativity, literature, culture, and visual expression.',
    accent: colors.stem,
  },
  {
    title: 'SOCIAL',
    description: 'Society, economics, history, psychology, and human behavior.',
    accent: colors.text,
  },
  {
    title: 'STEM',
    description: 'Science, technology, engineering, and mathematics.',
    accent: colors.stem,
  },
];

export default function Divisions() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,0.055),transparent_38%)]" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:gap-8"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, transform: 'translate3d(0,40px,0)' }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, transform: 'translate3d(0,0,0)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-xl lg:pr-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Explore BILMOE
          </p>
          <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Our Divisions
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Three spaces for curiosity, research, creativity, and discovery.
          </p>
        </div>

        <div className="relative h-[440px] w-full min-w-0 sm:h-[500px] lg:h-[460px]">
          <CardSwap
            width="min(42vw, 560px)"
            height="300px"
            cardDistance={42}
            verticalDistance={38}
            delay={5000}
            pauseOnHover={false}
            skewAmount={4}
            easing="elastic"
          >
            {divisions.map((division, index) => (
              <Card
                key={division.title}
                className="cursor-pointer flex flex-col justify-between overflow-hidden border-white/10 bg-zinc-900/95 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.32)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.42)] sm:p-9"
                style={{ borderColor: `${division.accent}30` }}
              >
                <div>
                  <div
                    className="mb-7 h-1 w-16 rounded-full"
                    style={{ backgroundColor: division.accent }}
                  />
                  <span className="text-xs font-semibold tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {division.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                    {division.description}
                  </p>
                  <div
                    className="mt-6 h-px w-full opacity-20"
                    style={{ backgroundColor: division.accent }}
                  />
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/30">
                    Tap to swap
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </motion.div>
    </section>
  );
}
