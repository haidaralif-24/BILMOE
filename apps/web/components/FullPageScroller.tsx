'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type FullPageScrollerProps = {
  children: ReactNode;
};

const TRANSITION_MS = 720;
const WHEEL_THRESHOLD = 18;
const TOUCH_THRESHOLD = 55;

export default function FullPageScroller({ children }: FullPageScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = () => Array.from(container.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement && child.dataset.fullpageSection === 'true'
    );

    let index = 0;

    const syncIndex = () => {
      const current = sections();
      const closest = current.reduce((best, section, i) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        return distance < best.distance ? { i, distance } : best;
      }, { i: index, distance: Number.POSITIVE_INFINITY });
      index = closest.i;
    };

    const goTo = (nextIndex: number) => {
      const current = sections();
      if (lockedRef.current || nextIndex < 0 || nextIndex >= current.length) return;

      lockedRef.current = true;
      index = nextIndex;
      current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      window.setTimeout(() => {
        lockedRef.current = false;
      }, TRANSITION_MS);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
      event.preventDefault();
      syncIndex();
      goTo(index + (event.deltaY > 0 ? 1 : -1));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return;

      let direction = 0;
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') direction = 1;
      if (event.key === 'ArrowUp' || event.key === 'PageUp') direction = -1;
      if (!direction) return;

      event.preventDefault();
      syncIndex();
      goTo(index + direction);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      const endY = event.changedTouches[0]?.clientY;
      if (endY === undefined) return;

      const delta = touchStartY.current - endY;
      touchStartY.current = null;
      if (Math.abs(delta) < TOUCH_THRESHOLD) return;

      syncIndex();
      goTo(index + (delta > 0 ? 1 : -1));
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="full-page-scroller h-screen overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}
