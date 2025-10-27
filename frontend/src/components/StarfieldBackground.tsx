import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number; // radius
  a: number; // alpha
  twinkle: number; // twinkle speed
  baseA: number; // base alpha
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const _ctx = canvas.getContext('2d', { alpha: true });
    if (!_ctx) return;
    const ctx = _ctx as CanvasRenderingContext2D;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let lastTime = performance.now();
    let spawnCooldown = 0; // seconds until next possible meteor

    const config = {
      starCountBase: 220,
      starCountDesktop: 420,
      meteorMinInterval: 6, // seconds
      meteorChancePerSec: 0.12,
      milkyWayAngle: -20 * Math.PI / 180, // -20deg
      milkyWayWidth: 160, // px at 1x, scaled by dpr
      hazeStrength: 0.08,
      bg: '#0a192f',
      starColor: 'rgba(100,255,218,',
      meteorColor: 'rgba(255,255,255,',
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    }

    function initStars() {
      const count = (width < 768 ? config.starCountBase : config.starCountDesktop);
      stars = [];

      // Milky Way band definition: line through center with given angle
      const cx = width / 2;
      const cy = height / 2;
      const angle = config.milkyWayAngle;
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      for (let i = 0; i < count; i++) {
        let x: number, y: number;
        // Bias star positions toward the milky way band
        while (true) {
          x = Math.random() * width;
          y = Math.random() * height;
          // distance from point to infinite line through (cx,cy) with angle
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.abs(dx * sin - dy * cos);
          const bias = Math.max(0, 1 - dist / config.milkyWayWidth);
          // Accept with higher probability if closer to band
          if (Math.random() < 0.35 + 0.6 * bias) break;
        }

        const r = Math.random() * 1.2 + 0.2; // 0.2 - 1.4
        const baseA = 0.15 + Math.random() * 0.45; // 0.15 - 0.6
        const twinkle = 0.5 + Math.random() * 1.5; // Hz-ish
        stars.push({ x, y, r, a: baseA, twinkle, baseA });
      }
    }

    function spawnMeteor(dt: number) {
      spawnCooldown = Math.max(0, spawnCooldown - dt);
      if (spawnCooldown > 0) return;
      if (Math.random() > config.meteorChancePerSec * dt) return;

      // Spawn from top-left quadrant, fly to bottom-right
      const startEdge = Math.random();
      let x = startEdge < 0.5 ? -50 : Math.random() * width * 0.4;
      let y = startEdge < 0.5 ? Math.random() * height * 0.4 : -50;

      const speed = 600 + Math.random() * 400; // px/s
      const angle = (20 + Math.random() * 15) * Math.PI / 180; // 20-35deg
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      const maxLife = 0.8 + Math.random() * 0.8; // seconds
      meteors.push({ x, y, vx, vy, life: 0, maxLife });
      spawnCooldown = config.meteorMinInterval + Math.random() * 6;
    }

    function drawBackground() {
      ctx.clearRect(0, 0, width, height);
      // subtle space gradient background over base body color
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(10, 25, 47, 0)');
      g.addColorStop(1, 'rgba(2, 12, 27, 0.2)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    }

    function drawMilkyWayHaze() {
      // Soft haze along the band
      const angle = config.milkyWayAngle;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(angle);

      const hazeWidth = config.milkyWayWidth * 2;
      const grad = ctx.createLinearGradient(0, -hazeWidth, 0, hazeWidth);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(0.5, `rgba(255,255,255,${config.hazeStrength})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.fillStyle = grad;
      ctx.globalCompositeOperation = 'screen';
      ctx.fillRect(-width, -hazeWidth, width * 2, hazeWidth * 2);
      ctx.restore();
      ctx.globalCompositeOperation = 'source-over';
    }

    function drawStars(t: number) {
      const TWO_PI = Math.PI * 2;
      for (const s of stars) {
        // twinkle using a slow sin wave
        const tw = (Math.sin((t * s.twinkle + s.x * 0.01 + s.y * 0.01)) + 1) * 0.5; // 0..1
        const alpha = Math.min(1, Math.max(0, s.baseA * (0.6 + 0.8 * tw)));
        ctx.fillStyle = `${config.starColor}${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, TWO_PI);
        ctx.fill();
      }
    }

    function drawMeteors(dt: number) {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life += dt;
        if (m.life > m.maxLife) {
          meteors.splice(i, 1);
          continue;
        }
        m.x += m.vx * dt;
        m.y += m.vy * dt;

        const p = m.life / m.maxLife; // 0..1
        const alpha = 1 - p;
        const len = 120 + 180 * (1 - p); // tail length decreases as it fades

        // Draw tail
        const angle = Math.atan2(m.vy, m.vx);
        const tx = Math.cos(angle);
        const ty = Math.sin(angle);
        const tailX = m.x - tx * len;
        const tailY = m.y - ty * len;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `${config.meteorColor}${alpha})`);
        grad.addColorStop(1, `${config.meteorColor}0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // bright head
        ctx.fillStyle = `${config.meteorColor}${alpha})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function tick(now: number) {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      drawBackground();
      drawMilkyWayHaze();
      drawStars(now * 0.001);
      drawMeteors(dt);
      spawnMeteor(dt);

      animationRef.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener('resize', resize);
    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default StarfieldBackground;
