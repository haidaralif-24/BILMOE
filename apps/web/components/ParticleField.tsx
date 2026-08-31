'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleFieldProps {
  particleCount?: number;
  particleColor?: string;
  className?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  particleCount = 60,
  particleColor = '#ADED50',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 rounded-full pointer-events-none';
      particle.style.backgroundColor = particleColor;
      particle.style.opacity = '0';

      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      container.appendChild(particle);
      particles.push(particle);
    }

    let raf: number;
    const animate = () => {
      const time = Date.now() * 0.001;
      particles.forEach((particle, i) => {
        const t = time + i * 0.7;
        const x = Math.sin(t * 0.5) * 20 + Math.cos(t * 0.3) * 30;
        const y = Math.cos(t * 0.4) * 15 + Math.sin(t * 0.6) * 25;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = (Math.sin(t * 2) * 0.5 + 0.5).toString();
      });
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      particles.forEach(p => {
        if (p.parentNode) p.parentNode.removeChild(p);
      });
    };
  }, [particleCount, particleColor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  );
};

export default ParticleField;
