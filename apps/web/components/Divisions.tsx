'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { colors } from '@/lib/design-tokens';

type Division = {
  title: string;
  description: string;
  accent: string;
};

const divisions: Division[] = [
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-zinc-950 px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_42%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Explore BILMOE
          </p>
          <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Our Divisions
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Three spaces for curiosity, research, creativity, and discovery.
          </p>
        </div>

        <div className="relative mx-auto flex min-h-[540px] max-w-5xl items-center justify-center">
          {divisions.map((division, index) => {
            const positions = [
              { x: -170, y: -70, rotate: -7, z: 20 },
              { x: 0, y: 0, rotate: 2, z: 30 },
              { x: 170, y: 70, rotate: 7, z: 20 },
            ];
            const position = positions[index];

            return (
              <motion.article
                key={division.title}
                className="absolute flex h-[360px] w-[min(76vw,330px)] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 p-7 shadow-2xl backdrop-blur-xl sm:h-[390px] sm:p-9"
                style={{ zIndex: position.z, borderColor: `${division.accent}30` }}
                initial={
                  prefersReduced
                    ? { opacity: 1 }
                    : { opacity: 0, x: 0, y: 60, rotate: 0, scale: 0.92 }
                }
                whileInView={
                  prefersReduced
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        x: position.x,
                        y: position.y,
                        rotate: position.rotate,
                        scale: 1,
                      }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  prefersReduced
                    ? undefined
                    : { y: position.y - 12, scale: 1.035, rotate: 0 }
                }
              >
                <div>
                  <div
                    className="mb-8 h-1 w-16 rounded-full"
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
                  <p className="text-sm leading-7 text-white/55 sm:text-base">
                    {division.description}
                  </p>
                  <div
                    className="mt-7 h-px w-full opacity-20"
                    style={{ backgroundColor: division.accent }}
                  />
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/30">
                    Discover the division
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
