'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './EndOfTransmission.module.css';

/**
 * Brand reveal: a full-viewport backing that fades in starting at
 * scroll 92% so the BD mark sits OVER the Sass "S" frame at the end
 * of the video, then resolves to a clean black backdrop with the
 * brand mark for the very end of the page.
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
        // Fade in at the very end of the contact scene
        const start = 0.92;
        const end = 0.99;
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
        <svg viewBox="0 0 220 110" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="endGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="bdGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#4a6cff" />
            </linearGradient>
          </defs>

          {/* Outer segmented ring */}
          <circle
            cx="110"
            cy="55"
            r="48"
            fill="none"
            stroke="url(#bdGrad)"
            strokeWidth="2"
            strokeDasharray="240 70"
            transform="rotate(-90 110 55)"
            filter="url(#endGlow)"
          />

          {/* B */}
          <g filter="url(#endGlow)">
            <rect x="22" y="22" width="36" height="66" fill="none" stroke="#00ffff" strokeWidth="2" />
            <rect x="28" y="28" width="4" height="54" fill="#00ffff" />
            <rect x="22" y="22" width="18" height="4" fill="#00ffff" />
            <rect x="22" y="53" width="18" height="4" fill="#00ffff" />
            <rect x="22" y="84" width="18" height="4" fill="#00ffff" />
            <rect x="22" y="53" width="4" height="35" fill="#00ffff" />
          </g>

          {/* + */}
          <g filter="url(#endGlow)">
            <rect x="92" y="53" width="36" height="4" fill="#00ffff" />
            <rect x="108" y="37" width="4" height="36" fill="#00ffff" />
          </g>

          {/* D */}
          <g filter="url(#endGlow)">
            <rect x="162" y="22" width="36" height="66" fill="none" stroke="#4a6cff" strokeWidth="2" />
            <rect x="168" y="28" width="4" height="54" fill="#4a6cff" />
            <rect x="162" y="22" width="18" height="4" fill="#4a6cff" />
            <rect x="162" y="84" width="18" height="4" fill="#4a6cff" />
            <rect x="162" y="22" width="4" height="66" fill="#4a6cff" />
          </g>
        </svg>
      </div>

      <div className={styles.label}>
        <span className={styles.eyebrow}>// END_OF_TRANSMISSION</span>
        <span className={styles.brandName}>
          <span className="bk">[</span>
          BOLD_AND_DIGITAL
          <span className="bk">]</span>
        </span>
        <span className={styles.subline}>visual_storytelling_studio · est. 2022</span>
        <span className={styles.signoff}>
          <a href="mailto:hello@boldandigital.com">hello@boldandigital.com</a>
        </span>
      </div>
    </div>
  );
}
