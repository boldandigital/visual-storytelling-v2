'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [now, setNow] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        d.toISOString().slice(11, 19) + ' UTC'
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      {/* Vertical cyan beams — abstraction of the abyss looking up */}
      <div className={styles.beams} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.beam} style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>

      {/* Top status bar */}
      <div className={`container ${styles.statusBar}`}>
        <span className={styles.statusItem}>
          <span className={styles.statusKey}>SYS</span>
          <span className={styles.statusVal}>ONLINE</span>
        </span>
        <span className={styles.statusItem}>
          <span className={styles.statusKey}>LAT</span>
          <span className={styles.statusVal}>12MS</span>
        </span>
        <span className={styles.statusItem}>
          <span className={styles.statusKey}>REG</span>
          <span className={styles.statusVal}>EU-WEST</span>
        </span>
        <span className={styles.statusItem}>
          <span className={styles.statusKey}>T</span>
          <span className={styles.statusVal}>{now}</span>
        </span>
      </div>

      <div className={`container ${styles.body}`}>
        <span className={styles.eyebrow}>
          <span className="bk">{'>'}</span> ./initialize_studio --brand=boldandigital
        </span>

        <h1 className={styles.h1}>
          <span className={styles.line}>WE BUILD</span>
          <span className={`${styles.line} ${styles.lineAccent}`}>SCROLL-DRIVEN</span>
          <span className={styles.line}>DIGITAL WORLDS.</span>
        </h1>

        <p className={styles.lead}>
          <span className="bk">{'>'}</span> Bold And Digital is a design and engineering studio for brands shaping tomorrow. We fuse three-dimensional web, AI automation and razor-sharp brand strategy into one shipping crew.
        </p>

        <div className={styles.cta}>
          <a href="#contact" className="btn">
            INITIALIZE_PROJECT <span className="arrow">→</span>
          </a>
          <a href="#work" className="btn btn--ghost">
            SEE_THE_WORK <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
