'use client';

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import gsap from 'gsap';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-3xl border bg-zinc-900 [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.15,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'linear',
  children,
}) => {
  const config =
    easing === 'elastic'
      ? { ease: 'elastic.out(0.55,0.85)', durDrop: 1.05, durMove: 1.05, durReturn: 1.05, promoteOverlap: 0.55, returnDelay: 0.05 }
      : { ease: 'power2.inOut', durDrop: 0.7, durMove: 0.7, durReturn: 0.7, promoteOverlap: 0.35, returnDelay: 0.1 };

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);
  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    if (!total) return;

    const ctx = gsap.context(() => {
      refs.forEach((r, i) => {
        if (r.current) placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      });

      const swap = () => {
        if (order.current.length < 2 || tlRef.current?.isActive()) return;

        const [front, ...rest] = order.current;
        const elFront = refs[front].current;
        if (!elFront) return;

        const tl = gsap.timeline({
          onComplete: () => {
            order.current = [...rest, front];
            tlRef.current = null;
          },
        });
        tlRef.current = tl;

        tl.to(elFront, {
          y: '+=420',
          duration: config.durDrop,
          ease: config.ease,
          force3D: true,
        });

        tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);

        rest.forEach((idx, i) => {
          const el = refs[idx].current;
          if (!el) return;
          const slot = makeSlot(i, cardDistance, verticalDistance, total);
          tl.set(el, { zIndex: slot.zIndex }, 'promote');
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease,
              force3D: true,
            },
            `promote+=${i * 0.1}`
          );
        });

        const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
        tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
        tl.set(elFront, { zIndex: backSlot.zIndex }, 'return');
        tl.to(
          elFront,
          {
            x: backSlot.x,
            y: backSlot.y,
            z: backSlot.z,
            duration: config.durReturn,
            ease: config.ease,
            force3D: true,
          },
          'return'
        );
      };

      swap();
      intervalRef.current = window.setInterval(swap, delay);

      if (pauseOnHover && container.current) {
        const node = container.current;
        const pause = () => {
          tlRef.current?.pause();
          if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.resume();
          if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener('mouseenter', pause);
        node.addEventListener('mouseleave', resume);

        return () => {
          node.removeEventListener('mouseenter', pause);
          node.removeEventListener('mouseleave', resume);
        };
      }
    }, container);

    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
      tlRef.current?.kill();
      tlRef.current = null;
      ctx.revert();
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, refs]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div ref={container} className="relative mx-auto h-full w-full perspective-[900px] overflow-visible">
      {rendered}
    </div>
  );
};

export default CardSwap;
