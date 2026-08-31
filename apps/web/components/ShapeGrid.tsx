'use client';

import React, { useEffect, useRef } from 'react';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

type ShapeGridProps = {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
  shape?: 'square' | 'hexagon' | 'circle' | 'triangle';
  hoverTrailAmount?: number;
};

type Cell = { x: number; y: number };

export default function ShapeGrid({
  direction = 'right',
  speed = 1,
  borderColor = 'rgba(173,237,80,0.18)',
  squareSize = 42,
  hoverFillColor = 'rgba(173,237,80,0.16)',
  shape = 'square',
  hoverTrailAmount = 8,
}: ShapeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef<Cell | null>(null);
  const trailRef = useRef<Cell[]>([]);
  const opacityRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const key = (cell: Cell) => `${cell.x},${cell.y}`;

    const drawShape = (cx: number, cy: number, size: number, flip = false) => {
      ctx.beginPath();
      if (shape === 'circle') {
        ctx.arc(cx, cy, size * 0.32, 0, Math.PI * 2);
      } else if (shape === 'hexagon') {
        for (let i = 0; i < 6; i++) {
          const angle = Math.PI / 3 * i;
          const x = cx + size * 0.42 * Math.cos(angle);
          const y = cy + size * 0.42 * Math.sin(angle);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
      } else if (shape === 'triangle') {
        const points = flip
          ? [[cx, cy + size * 0.42], [cx + size * 0.42, cy - size * 0.42], [cx - size * 0.42, cy - size * 0.42]]
          : [[cx, cy - size * 0.42], [cx + size * 0.42, cy + size * 0.42], [cx - size * 0.42, cy + size * 0.42]];
        points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.closePath();
      } else {
        ctx.rect(cx - size / 2, cy - size / 2, size, size);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const ox = ((offsetRef.current.x % squareSize) + squareSize) % squareSize;
      const oy = ((offsetRef.current.y % squareSize) + squareSize) % squareSize;
      const cols = Math.ceil(width / squareSize) + 3;
      const rows = Math.ceil(height / squareSize) + 3;

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const cx = col * squareSize + ox + squareSize / 2;
          const cy = row * squareSize + oy + squareSize / 2;
          const cell = { x: col, y: row };
          const alpha = opacityRef.current.get(key(cell)) ?? 0;

          if (alpha > 0) {
            ctx.globalAlpha = alpha;
            ctx.fillStyle = hoverFillColor;
            drawShape(cx, cy, squareSize, (col + row) % 2 !== 0);
            ctx.fill();
            ctx.globalAlpha = 1;
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1;
          drawShape(cx, cy, squareSize);
          ctx.stroke();
        }
      }

      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.hypot(width, height) / 2);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(0.72, 'rgba(0,0,0,0.08)');
      gradient.addColorStop(1, 'rgba(0,0,0,0.72)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const update = () => {
      const step = Math.max(speed, 0.1);
      if (direction === 'right' || direction === 'diagonal') offsetRef.current.x -= step;
      if (direction === 'left' || direction === 'diagonal') offsetRef.current.x += step;
      if (direction === 'up' || direction === 'diagonal') offsetRef.current.y += step;
      if (direction === 'down' || direction === 'diagonal') offsetRef.current.y -= step;

      const targets = new Map<string, number>();
      if (hoveredRef.current) targets.set(key(hoveredRef.current), 1);
      trailRef.current.forEach((cell, i) => targets.set(key(cell), (trailRef.current.length - i) / (trailRef.current.length + 1)));

      for (const [cellKey, value] of opacityRef.current) {
        const target = targets.get(cellKey) ?? 0;
        const next = value + (target - value) * 0.15;
        if (next < 0.005) opacityRef.current.delete(cellKey);
        else opacityRef.current.set(cellKey, next);
      }
      for (const [cellKey, target] of targets) {
        if (!opacityRef.current.has(cellKey)) opacityRef.current.set(cellKey, target * 0.15);
      }

      draw();
      if (visible) frameRef.current = requestAnimationFrame(update);
    };

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const col = Math.floor((event.clientX - rect.left - offsetRef.current.x) / squareSize);
      const row = Math.floor((event.clientY - rect.top - offsetRef.current.y) / squareSize);
      const next = { x: col, y: row };
      if (!hoveredRef.current || hoveredRef.current.x !== col || hoveredRef.current.y !== row) {
        if (hoveredRef.current && hoverTrailAmount > 0) {
          trailRef.current.unshift({ ...hoveredRef.current });
          trailRef.current = trailRef.current.slice(0, hoverTrailAmount);
        }
        hoveredRef.current = next;
      }
    };

    const handleLeave = () => { hoveredRef.current = null; };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && frameRef.current === null) frameRef.current = requestAnimationFrame(update);
      if (!visible && frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    });

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);
    observer.observe(canvas);
    frameRef.current = requestAnimationFrame(update);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor, shape, hoverTrailAmount]);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />;
}
