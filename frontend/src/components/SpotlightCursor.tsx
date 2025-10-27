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

      import React from 'react';

      const SPOT_RADIUS = 120; // px, radius of the glow
      const BLUR = 80; // px, softness of the glow
      const OPACITY = 0.22; // overall opacity

      const SpotlightCursor: React.FC = () => {
        const spotRef = React.useRef<HTMLDivElement | null>(null);
        const rafRef = React.useRef<number | null>(null);
        const pos = React.useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

        React.useEffect(() => {
          if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
            if (spotRef.current) spotRef.current.style.display = 'none';
            return;
          }

          let target = { ...pos.current };
          let animating = false;

          const move = (x: number, y: number) => {
            target = { x, y };
            if (!animating) animate();
          };

          const animate = () => {
            animating = true;
            // Smooth follow
            pos.current.x += (target.x - pos.current.x) * 0.18;
            pos.current.y += (target.y - pos.current.y) * 0.18;
            if (spotRef.current) {
              spotRef.current.style.transform = `translate3d(${pos.current.x - SPOT_RADIUS}px, ${pos.current.y - SPOT_RADIUS}px, 0)`;
            }
            if (Math.abs(pos.current.x - target.x) > 0.5 || Math.abs(pos.current.y - target.y) > 0.5) {
              rafRef.current = requestAnimationFrame(animate);
            } else {
              animating = false;
            }
          };

          const onMove = (e: MouseEvent) => move(e.clientX, e.clientY);
          const onLeave = () => move(window.innerWidth / 2, window.innerHeight / 2);
          window.addEventListener('mousemove', onMove, { passive: true });
          window.addEventListener('mouseleave', onLeave, { passive: true });

          // Start at center
          move(window.innerWidth / 2, window.innerHeight / 2);

          return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          };
        }, []);

        // The actual glowing spot
        return (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 40,
              mixBlendMode: 'lighten',
            }}
            aria-hidden="true"
          >
            <div
              ref={spotRef}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: SPOT_RADIUS * 2,
                height: SPOT_RADIUS * 2,
                borderRadius: '50%',
                background: `rgba(255,255,255,${OPACITY})`,
                filter: `blur(${BLUR}px)`,
                pointerEvents: 'none',
                willChange: 'transform',
                transition: 'background 0.2s',
              }}
            />
          </div>
        );
      };
      export default SpotlightCursor;
