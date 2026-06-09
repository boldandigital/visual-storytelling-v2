'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './EndOfTransmission.module.css';

/**
 * Full-viewport overlay that fades in at the very end of the scroll,
 * replacing the Sass "S" frame of the video with the Bold And Digital
 * brand reveal. Triggers on scroll progress 0.88 → 0.96.
 */
export default function EndOfTransmission() {
  const [intensity, setIntensity] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        const start = 0.88;
        const end = 0.96;
        if (progress < start) {
          setIntensity(0);
        } else {
          const raw = (progress - start) / (end - start);
          const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
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
      className={styles.wrap}
      style={{ opacity: intensity }}
      aria-hidden="true"
    >
      <div className={styles.backing} />

      <div className={styles.mark}>
        <svg viewBox="0 0 200 100" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* B */}
          <g filter="url(#glow)">
            <rect x="10" y="10" width="40" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
            <rect x="18" y="18" width="6" height="64" fill="currentColor" />
            <rect x="10" y="10" width="20" height="6" fill="currentColor" />
            <rect x="10" y="44" width="20" height="6" fill="currentColor" />
            <rect x="10" y="84" width="20" height="6" fill="currentColor" />
            <rect x="10" y="44" width="6" height="46" fill="currentColor" />
          </g>
          {/* D */}
          <g filter="url(#glow)">
            <rect x="80" y="10" width="40" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
            <rect x="88" y="18" width="6" height="64" fill="currentColor" />
            <rect x="80" y="10" width="20" height="6" fill="currentColor" />
            <rect x="80" y="84" width="20" height="6" fill="currentColor" />
            <rect x="80" y="10" width="6" height="80" fill="currentColor" />
          </g>
          {/* Center dot */}
          <circle cx="65" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className={styles.label}>
        <span className={styles.eyebrow}>// END_OF_TRANSMISSION</span>
        <span className={styles.brandName}>
          <span className="bk">[</span>
          BOLD_AND_DIGITAL
          <span className="bk">]</span>
        </span>
        <span className={styles.subline}>
          visual_storytelling_studio · est. 2022
        </span>
      </div>
    </div>
  );
}
