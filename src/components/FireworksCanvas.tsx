import React, { useEffect, useRef } from 'react';
import { sounds } from '../utils/audio';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
  flicker: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  trail: { x: number; y: number; alpha: number }[];
}

const PALETTES = [
  ['#f59e0b', '#fbbf24', '#fef08a', '#d97706'], // Gold & Amber
  ['#ef4444', '#f87171', '#fca5a5', '#dc2626'], // Crimson & Coral
  ['#10b981', '#34d399', '#6ee7b7', '#059669'], // Emerald Green
  ['#06b6d4', '#22d3ee', '#67e8f9', '#0891b2'], // Electric Cyan
  ['#ec4899', '#f472b6', '#fbcfe8', '#db2777'], // Magenta
  ['#8b5cf6', '#a78bfa', '#c4b5fd', '#7c3aed'], // Royal Purple
];

export const FireworksCanvas: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const rockets: Rocket[] = [];
    const particles: Particle[] = [];

    const createExplosion = (x: number, y: number, colorPalette: string[]) => {
      sounds.playFirecrackerExplosion();
      const count = 75 + Math.floor(Math.random() * 45);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 6;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1.0,
          color,
          size: 2 + Math.random() * 3,
          decay: 0.012 + Math.random() * 0.018,
          flicker: Math.random() > 0.4
        });
      }
    };

    const launchRocket = (startX?: number, targetHeight?: number) => {
      const x = startX !== undefined ? startX : width * 0.15 + Math.random() * (width * 0.7);
      const targetY = targetHeight !== undefined ? targetHeight : height * 0.12 + Math.random() * (height * 0.35);
      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const color = palette[0];

      sounds.playFirecrackerLaunch();

      rockets.push({
        x,
        y: height,
        targetY,
        vy: - (9 + Math.random() * 5),
        color,
        trail: []
      });
    };

    // Auto launch periodic firecrackers
    let lastLaunchTime = Date.now();
    let launchInterval = 450; // ms

    // Launch initial salvo
    setTimeout(() => launchRocket(width * 0.3), 100);
    setTimeout(() => launchRocket(width * 0.7), 350);
    setTimeout(() => launchRocket(width * 0.5), 600);

    const render = () => {
      // Semi-transparent clear for motion blur trail effect
      ctx.fillStyle = 'rgba(10, 15, 30, 0.22)';
      ctx.fillRect(0, 0, width, height);

      const now = Date.now();
      if (now - lastLaunchTime > launchInterval) {
        launchRocket();
        lastLaunchTime = now;
        launchInterval = 400 + Math.random() * 600;
      }

      // Update and draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y, alpha: 1.0 });
        if (r.trail.length > 8) r.trail.shift();

        r.y += r.vy;
        r.vy += 0.04; // slight deceleration

        // Draw trail
        for (let t = 0; t < r.trail.length; t++) {
          const pt = r.trail[t];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2 * (t / r.trail.length), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${0.4 * (t / r.trail.length)})`;
          ctx.fill();
        }

        // Rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (r.y <= r.targetY || r.vy >= -1) {
          const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
          createExplosion(r.x, r.y, palette);
          rockets.splice(i, 1);
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // gravity
        p.vx *= 0.98; // air drag
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.5 : p.alpha;

        ctx.save();
        ctx.globalAlpha = Math.max(0, currentAlpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      launchRocket(clickX, clickY);
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-10 cursor-pointer"
      title="Tap anywhere to launch firecrackers!"
    />
  );
};
