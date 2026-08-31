'use client';

import StrokeText from '@/components/StrokeText';
import { colors } from '@/lib/design-tokens';

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black px-4">
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
  );
}
