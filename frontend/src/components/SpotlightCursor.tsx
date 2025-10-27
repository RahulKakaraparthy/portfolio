import React from 'react';

const SpotlightCursor: React.FC = () => {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const posRef = React.useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const enabledRef = React.useRef<boolean>(true);

  React.useEffect(() => {
    // Disable on coarse pointers (most touch devices)
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      enabledRef.current = false;
      if (overlayRef.current) overlayRef.current.style.display = 'none';
      return;
    }

    const radius = 220; // spotlight radius (px) — big circle

    const apply = () => {
      if (!overlayRef.current) return;
      const { x, y } = posRef.current;
      overlayRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,0,0,0) 0, rgba(0,0,0,0) ${radius}px, rgba(0,0,0,0.55) ${radius + 1}px, rgba(0,0,0,0.55) 100%)`;
      rafRef.current = null;
    };

    const queue = (x: number, y: number) => {
      posRef.current = { x, y };
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(apply);
      }
    };

    const onMove = (e: MouseEvent) => queue(e.clientX, e.clientY);
    const onLeave = () => queue(window.innerWidth / 2, window.innerHeight / 2);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) queue(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    // Initialize once mounted
    apply();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchmove', onTouch);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ transition: 'background 80ms linear' }}
      aria-hidden="true"
    />
  );
};

export default SpotlightCursor;
