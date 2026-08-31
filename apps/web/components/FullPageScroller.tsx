'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type FullPageScrollerProps = {
  children: ReactNode;
};

const TRANSITION_MS = 680;
const WHEEL_THRESHOLD = 22;
const TOUCH_THRESHOLD = 55;

export default function FullPageScroller({ children }: FullPageScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef(false);
  const indexRef = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const unlockTimer = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getSections = () =>
      Array.from(container.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && child.dataset.fullpageSection === 'true'
      );

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncIndex = () => {
      const sections = getSections();
      if (!sections.length) return;

      const scrollTop = container.scrollTop;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, i) => {
        const distance = Math.abs(section.offsetTop - scrollTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      indexRef.current = closestIndex;
    };

    const goTo = (nextIndex: number) => {
      const sections = getSections();
      if (lockedRef.current || nextIndex < 0 || nextIndex >= sections.length) return;

      lockedRef.current = true;
      indexRef.current = nextIndex;

      container.scrollTo({
        top: sections[nextIndex].offsetTop,
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
      });

      if (unlockTimer.current !== null) window.clearTimeout(unlockTimer.current);
      unlockTimer.current = window.setTimeout(() => {
        lockedRef.current = false;
      }, prefersReducedMotion.matches ? 80 : TRANSITION_MS);
    };

    const navigate = (direction: 1 | -1) => {
      syncIndex();
      goTo(indexRef.current + direction);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
      event.preventDefault();
      navigate(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, button, a, [contenteditable="true"]')) return;

      if (event.key === 'Home') {
        event.preventDefault();
        goTo(0);
        return;
      }
      if (event.key === 'End') {
        event.preventDefault();
        goTo(getSections().length - 1);
        return;
      }

      let direction: 1 | -1 | 0 = 0;
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') direction = 1;
      if (event.key === 'ArrowUp' || event.key === 'PageUp') direction = -1;
      if (!direction) return;

      event.preventDefault();
      navigate(direction);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartY.current !== null) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      const endY = event.changedTouches[0]?.clientY;
      const delta = endY === undefined ? 0 : touchStartY.current - endY;
      touchStartY.current = null;
      if (Math.abs(delta) >= TOUCH_THRESHOLD) navigate(delta > 0 ? 1 : -1);
    };

    const onScroll = () => {
      if (!lockedRef.current) syncIndex();
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    syncIndex();

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      if (unlockTimer.current !== null) window.clearTimeout(unlockTimer.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="full-page-scroller h-dvh w-full overflow-x-hidden overflow-y-auto overscroll-none"
      style={{ scrollSnapType: 'none', WebkitOverflowScrolling: 'touch' }}
    >
      {children}
    </div>
  );
}
