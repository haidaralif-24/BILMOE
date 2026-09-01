'use client';

import { motion, useReducedMotion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import ComicBurst from '@/components/ComicBurst';
import { colors } from '@/lib/design-tokens';

export default function WhoWeAre() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-snap relative min-h-screen w-full overflow-hidden bg-[#f7f1e4] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <motion.div
        className="pointer-events-none absolute top-6 right-6 z-20 opacity-80 sm:top-10 sm:right-10"
        animate={prefersReduced ? undefined : { rotate: [0, 2.5, -1.5, 0] }}
        transition={prefersReduced ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ComicBurst
          className="h-20 w-20 sm:h-28 sm:w-28"
          fill={colors.warning}
          stroke={colors.ink}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-6 left-6 z-20 opacity-80 sm:bottom-10 sm:left-10"
        animate={prefersReduced ? undefined : { rotate: [0, -2.5, 1.5, 0] }}
        transition={prefersReduced ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ComicBurst
          className="h-20 w-20 sm:h-28 sm:w-28"
          fill={colors.warning}
          stroke={colors.ink}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(247,241,228,0.0)_42%,rgba(247,241,228,0.6)_82%,#f7f1e4_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(247,241,228,0.65),transparent_25%,transparent_75%,rgba(247,241,228,0.85))]" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-5xl flex-col items-center justify-center text-center sm:min-h-[calc(100vh-12rem)]"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.35em]" style={{ color: colors.ink }}>
          About B-ILMOE
        </p>

        <h2 className="mb-8 font-display text-5xl font-bold tracking-tight text-[#16110a] sm:text-6xl md:text-7xl">
          <BlurText text="Who are we?" delay={150} animateBy="words" direction="bottom" className="justify-center font-display" />
        </h2>

        <p className="max-w-3xl font-sans text-base leading-8 text-[#16110a]/70 sm:text-lg sm:leading-9">
          B-ILMOE adalah platform media dan penelitian independen yang didedikasikan untuk membuka ruang eksplorasi ilmu pengetahuan, karya seni, dan dinamika sosial-politik bagi generasi muda. Kami percaya bahwa setiap rasa ingin tahu berhak dipublikasikan secara tepercaya, ilmiah, dan mudah diakses oleh semua kalangan.
        </p>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-8">
          <div className="comic-tilt-1 rounded-2xl border-4 p-6 transition-transform hover:-translate-y-1" style={{ backgroundColor: colors.stem, borderColor: colors.ink, boxShadow: `6px 6px 0 ${colors.ink}` }}>
            <h3 className="heading-outline-sm mb-2 font-display text-xl font-bold">Eksplorasi</h3>
            <p className="text-xs leading-6 font-medium" style={{ color: colors.ink }}>Wadah terbuka untuk riset, ide-ide inovatif, dan wawasan interdisipliner.</p>
          </div>

          <div className="comic-tilt-2 rounded-2xl border-4 p-6 transition-transform hover:-translate-y-1" style={{ backgroundColor: colors.arts, borderColor: colors.ink, boxShadow: `6px 6px 0 ${colors.ink}` }}>
            <h3 className="heading-outline-sm mb-2 font-display text-xl font-bold">Publikasi</h3>
            <p className="text-xs leading-6 font-medium" style={{ color: colors.ink }}>Menghadirkan karya tulis dan karya seni berkualitas teruji secara berkala.</p>
          </div>

          <div className="comic-tilt-3 rounded-2xl border-4 p-6 transition-transform hover:-translate-y-1" style={{ backgroundColor: colors.social, borderColor: colors.ink, boxShadow: `6px 6px 0 ${colors.ink}` }}>
            <h3 className="heading-outline-sm mb-2 font-display text-xl font-bold">Aksesibilitas</h3>
            <p className="text-xs leading-6 font-medium" style={{ color: colors.ink }}>Menyuarakan literasi sains dan sosial dengan penyampaian yang inklusif.</p>
          </div>
        </div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] bottom-0 z-30 border-t-4 border-dashed"
        style={{ borderColor: colors.ink }}
      />
    </section>
  );
}
