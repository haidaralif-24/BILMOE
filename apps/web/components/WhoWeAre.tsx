'use client';

import { motion, useReducedMotion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import Orb from '@/components/Orb';
import { colors } from '@/lib/design-tokens';

export default function WhoWeAre() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-snap relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-75">
        <div className="h-[105vw] w-[105vw] max-h-[850px] max-w-[850px] sm:h-[700px] sm:w-[700px]">
          <Orb hue={145} hoverIntensity={0.35} rotateOnHover backgroundColor="#000000" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.78)_82%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_25%,transparent_75%,rgba(0,0,0,0.65))]" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-5xl flex-col items-center justify-center text-center sm:min-h-[calc(100vh-12rem)]"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: colors.stem }}>
          About B-ILMOE
        </p>

        <h2 className="mb-8 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          <BlurText text="Who are we?" delay={150} animateBy="words" direction="bottom" className="justify-center font-display" />
        </h2>

        <p className="max-w-3xl font-sans text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
          B-ILMOE adalah platform media dan penelitian independen yang didedikasikan untuk membuka ruang eksplorasi ilmu pengetahuan, karya seni, dan dinamika sosial-politik bagi generasi muda. Kami percaya bahwa setiap rasa ingin tahu berhak dipublikasikan secara tepercaya, ilmiah, dan mudah diakses oleh semua kalangan.
        </p>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-8">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6 backdrop-blur-md transition-colors hover:border-white/20" style={{ boxShadow: `0 0 20px ${colors.stem}08` }}>
            <h3 className="mb-2 font-display text-lg font-bold" style={{ color: colors.stem }}>Eksplorasi</h3>
            <p className="text-xs leading-6 text-white/60">Wadah terbuka untuk riset, ide-ide inovatif, dan wawasan interdisipliner.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6 backdrop-blur-md transition-colors hover:border-white/20" style={{ boxShadow: `0 0 20px ${colors.arts}08` }}>
            <h3 className="mb-2 font-display text-lg font-bold" style={{ color: colors.arts }}>Publikasi</h3>
            <p className="text-xs leading-6 text-white/60">Menghadirkan karya tulis dan karya seni berkualitas teruji secara berkala.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6 backdrop-blur-md transition-colors hover:border-white/20" style={{ boxShadow: `0 0 20px ${colors.social}08` }}>
            <h3 className="mb-2 font-display text-lg font-bold" style={{ color: colors.social }}>Aksesibilitas</h3>
            <p className="text-xs leading-6 text-white/60">Menyuarakan literasi sains dan sosial dengan penyampaian yang inklusif.</p>
          </div>
        </div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-[linear-gradient(to_bottom,transparent,rgba(173,237,80,0.025)_45%,rgba(173,237,80,0.07)_82%,rgba(173,237,80,0.12))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] bottom-0 z-30 h-px bg-[linear-gradient(to_right,transparent,rgba(173,237,80,0.12)_20%,rgba(173,237,80,0.28)_50%,rgba(173,237,80,0.12)_80%,transparent)] shadow-[0_0_18px_rgba(173,237,80,0.12)]"
      />
    </section>
  );
}
