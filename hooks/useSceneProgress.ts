'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the local scroll progress within a section:
 *   0 = section is at the top of the viewport (just entered the user's view)
 *   1 = section is about to leave the viewport (top edge is at viewport bottom)
 *
 * More precisely: progress = how much the user has scrolled PAST
 * the section's start, divided by the section's height. So when
 * the section is fully on screen at the top, progress is 0; when
 * the user scrolls the section's height worth of content, progress
 * is 1 and the section is at the bottom of the viewport.
 */
export function useSceneProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf: number | null = null;
    const update = () => {
      // Distance from top of section to top of viewport
      const rect = el.getBoundingClientRect();
      // The section is `el.offsetHeight` tall. The user has scrolled
      // `-rect.top` pixels past the section's start. So progress =
      // -rect.top / offsetHeight, clamped to [0, 1].
      const h = el.offsetHeight || rect.height || 1;
      const raw = -rect.top / h;
      setProgress(Math.max(0, Math.min(1, raw)));
      raf = null;
    };
    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return progress;
}
