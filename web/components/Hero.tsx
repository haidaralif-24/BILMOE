'use client';

import Hyperspeed from '@/components/Hyperspeed';
import StrokeText from '@/components/StrokeText';
import { hyperspeedPresets } from '@/components/HyperSpeedPresets';
import { colors } from '@/lib/design-tokens';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 px-4">
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
      </div>
    </section>
  );
}
