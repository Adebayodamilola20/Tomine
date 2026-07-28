import Lenis from 'lenis';
import { useEffect } from 'react';

/**
 * Inertial page scrolling, matching the main site. Anchor links are routed
 * through Lenis so jumping to a section glides instead of snapping, and the
 * whole thing is skipped for anyone who asks for reduced motion.
 */
let instance: Lenis | null = null;

/** Freeze the page behind the lightbox (and let it go again on close). */
export const lockScroll = (locked: boolean) => {
  if (locked) instance?.stop();
  else instance?.start();
};

export function useSmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    instance = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      // Small screens also have the sticky section rail to clear.
      const clearance = window.matchMedia('(max-width: 900px)').matches ? 142 : 96;
      lenis.scrollTo(target as HTMLElement, { offset: -clearance });
    };

    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);
}
