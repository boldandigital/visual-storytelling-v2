'use client';

import { useEffect, useState } from 'react';
import styles from './HUD.module.css';

/**
 * Minimal HUD chrome. Not a frame around the page — a few text
 * annotations anchored to the viewport corners. Subtle, monospace,
 * cyan. Designed to feel like telemetry, not a website nav.
 */
export default function HUD() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toISOString().slice(11, 19) + ' UTC');
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className={styles.hud} aria-hidden="true">
      {/* Top-left: brand mark */}
      <a href="#top" className={styles.tl}>
        <span className={styles.mark}>
          <span className={styles.markB}>B</span>
          <span className={styles.markPlus}>+</span>
          <span className={styles.markD}>D</span>
        </span>
        <span className={styles.brand}>
          BOLD_AND_DIGITAL
        </span>
      </a>

      {/* Top-right: live time + status */}
      <div className={styles.tr}>
        <span className={styles.statusDot} />
        <span>SYSTEM ONLINE</span>
        <span className={styles.sep}>·</span>
        <span>{time}</span>
      </div>

      {/* Bottom-left: scroll cue */}
      <div className={styles.bl}>
        <span>SCROLL ↓</span>
      </div>

      {/* Bottom-right: corner bracket */}
      <span className={`${styles.corner} ${styles.br}`} />
      <span className={`${styles.corner} ${styles.tlCorner}`} />
    </div>
  );
}
