'use client';

import AmbientBowl from './AmbientBowl';
import styles from './Hero.module.css';

/**
 * Hero — Mantis-style single-viewport composition.
 * Bowl on the left, typography on the right. No scroll, no fly-in,
 * no opacity gates. The product in its world.
 */
export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.left}>
        <AmbientBowl />
      </div>

      <div className={styles.right}>
        <span className={styles.eyebrow}>./initialize_studio --brand=boldandigital</span>

        <h1 className={styles.h1}>
          <span className={styles.thin}>we build</span>
          <span className={styles.italic}>&amp; strategy</span>
          <span className={styles.bold}>
            <span className={styles.caret}>_</span>scroll-driven
            <span className={styles.caret}>_</span>
          </span>
          <span className={styles.thin}>digital worlds.</span>
        </h1>

        <p className={styles.lead}>
          A design and engineering studio for brands shaping tomorrow.
          Three-dimensional web. AI automation. Razor-sharp brand strategy.
          One shipping crew.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            Initialize project
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#services" className={styles.ctaGhost}>
            See the work
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
