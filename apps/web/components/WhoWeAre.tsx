'use client';

import { motion, useReducedMotion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import { colors } from '@/lib/design-tokens';

export default function WhoWeAre() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black px-6 py-28 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(173,237,80,0.035),transparent_45%)]" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center text-center"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em]"
          style={{ color: colors.stem }}
        >
          About B-ILMOE
        </p>

        <h2 className="mb-8 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          <BlurText
            text="Who are we?"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="justify-center font-display"
          />
        </h2>

        <p className="max-w-3xl font-sans text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
          B-ILMOE adalah platform media dan penelitian independen yang didedikasikan untuk membuka ruang eksplorasi ilmu pengetahuan, karya seni, dan dinamika sosial-politik bagi generasi muda. Kami percaya bahwa setiap rasa ingin tahu berhak dipublikasikan secara tepercaya, ilmiah, dan mudah diakses oleh semua kalangan.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 w-full max-w-4xl">
          <div
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
            style={{ boxShadow: `0 0 20px ${colors.stem}08` }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-2" style={{ color: colors.stem }}>Eksplorasi</h3>
            <p className="text-xs leading-6 text-white/60">
              Wadah terbuka untuk riset, ide-ide inovatif, dan wawasan interdisipliner.
            </p>
          </div>

          <div
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
            style={{ boxShadow: `0 0 20px ${colors.arts}08` }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-2" style={{ color: colors.arts }}>Publikasi</h3>
            <p className="text-xs leading-6 text-white/60">
              Menghadirkan karya tulis dan karya seni berkualitas teruji secara berkala.
            </p>
          </div>

          <div
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
            style={{ boxShadow: `0 0 20px ${colors.social}08` }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-2" style={{ color: colors.social }}>Aksesibilitas</h3>
            <p className="text-xs leading-6 text-white/60">
              Menyuarakan literasi sains dan sosial dengan penyampaian yang inklusif.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
