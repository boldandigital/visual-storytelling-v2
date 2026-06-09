'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LogoOverlay.module.css';

/**
 * Full-viewport overlay that fades in over the last 0.2s of the scroll-bound
 * video, replacing the stray Sass "S" logo with the Bold And Digital mark.
 *
 * Trigger: scroll progress > 0.83 (i.e. the final 17% of the document)
 *          with a smooth ease-in over the last 8% of the timeline.
 *
 * Uses scrollY-based detection, not IntersectionObserver, because the overlay
 * is fixed and needs to fade in *while* the video is showing the logo frame.
 */
export default function LogoOverlay() {
  const [intensity, setIntensity] = useState(0); // 0..1
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;

        // Fade in over the final 17% of scroll, with ease-in
        const start = 0.83;
        const end = 0.92;
        if (progress < start) {
          setIntensity(0);
        } else {
          const raw = (progress - start) / (end - start);
          // ease-in-out cubic
          const eased =
            raw < 0.5
              ? 4 * raw * raw * raw
              : 1 - Math.pow(-2 * raw + 2, 3) / 2;
          setIntensity(Math.max(0, Math.min(1, eased)));
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`${styles.wrap}`}
      style={{ opacity: intensity }}
      aria-hidden="true"
    >
      {/* Dark backing — solid black behind the logo to fully occlude the Sass mark */}
      <div className={styles.backing} />

      {/* BD logo (large) */}
      <div className={styles.logo}>
        <img
          src="/logo-1024.png"
          alt="Bold And Digital"
          className={styles.logoImg}
        />
      </div>

      {/* Label below the logo */}
      <div className={styles.label}>
        <span className={styles.eyebrow}>// END_OF_TRANSMISSION</span>
        <span className={styles.brandName}>
          <span className="cyan-bracket">[</span>
          BOLD_AND_DIGITAL
          <span className="cyan-bracket">]</span>
        </span>
      </div>
    </div>
  );
}
