'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrow}`} data-mounted={mounted}>
          Visual storytelling studio · Est. 2022
        </span>
        <h1 className={styles.title} data-mounted={mounted}>
          We build <span className="gradient-text">scroll-driven</span> digital
          experiences for the brands shaping <em>tomorrow</em>.
        </h1>
        <p className={styles.lede} data-mounted={mounted}>
          Bold And Digital is a design and engineering studio that blends
          three-dimensional web, AI automation and razor-sharp brand strategy
          into one shipping crew.
        </p>
        <div className={styles.actions} data-mounted={mounted}>
          <a href="#contact" className="btn btn-primary">
            Start a project →
          </a>
          <a href="#work" className="btn btn-ghost">
            See the work
          </a>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span>Scroll</span>
          <span className={styles.line} />
        </div>
      </div>
    </section>
  );
}
