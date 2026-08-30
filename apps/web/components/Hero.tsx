'use client';

import GhostFibers from '@/components/GhostFibers';
import DepthText from '@/components/DepthText';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <GhostFibers className="absolute inset-0 z-0" />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <DepthText
          text="B-ILMOE"
          pointerTracking
          fontSize="clamp(3rem, 12vw, 8rem)"
        />
      </div>
    </div>
  );
}
