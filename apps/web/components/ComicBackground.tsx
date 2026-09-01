'use client';

import { useEffect, useRef, useState } from 'react';
import ComicBurst from '@/components/ComicBurst';

type ComicBackgroundProps = {
  className?: string;
};

const stickerFills = ['#FCD717', '#FF5CA1', '#ADED50', '#FF7B1C'];

/**
 * Comic-book backdrop: Ben-Day halftone dots, faint speed lines, and a few
 * slowly drifting burst stickers. Purely decorative — aria-hidden and
 * pointer-events-none. Static when prefers-reduced-motion.
 */
export default function ComicBackground({ className = '' }: ComicBackgroundProps) {
  const [reduced, setReduced] = useState(false);
  const stickerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);
    if (media.matches) return;

    let rafId = 0;
    let t = 0;
    let last = performance.now();
    const update = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;
      rafId = requestAnimationFrame(update);
      stickerRefs.current.forEach((el, i) => {
        if (!el) return;
        const phase = i * 1.7;
        el.style.transform = `translate(${Math.sin(t * 0.35 + phase) * 14}px, ${Math.cos(t * 0.28 + phase) * 10}px) rotate(${Math.sin(t * 0.2 + phase) * 6}deg)`;
      });
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="comic-rays absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(22,17,10,0.075) 1px, transparent 1.5px)',
          backgroundSize: '16px 16px',
          backgroundPosition: '8px 8px',
        }}
      />
      {[0, 1, 2].map(i => (
        <div
          key={i}
          ref={el => { stickerRefs.current[i] = el; }}
          className="absolute opacity-90"
          style={{
            top: `${[12, 78, 42][i]}%`,
            left: `${[6, 88, 82][i]}%`,
          }}
        >
          <ComicBurst
            className="h-12 w-12 sm:h-16 sm:w-16"
            fill={stickerFills[i]}
            stroke="#16110A"
          />
        </div>
      ))}
    </div>
  );
}
