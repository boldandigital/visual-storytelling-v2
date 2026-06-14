'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroOrbit.module.css';

/**
 * HeroOrbit — Animated 3D product hero.
 *
 * Pattern (from 3 reference videos, Jun 14 2026):
 *  - LOOP recorder: 3D product rotates on the right, text transitions on the left.
 *  - Mantis tutorial: 3D product viewer with keyframed text.
 *  - @gadgetindesign: 3D water bottle rotates against cinematic background, marquee text.
 *
 * Implementation:
 *  - LEFT (40%): text column with 3 stacked H1s that fade through on scroll.
 *  - RIGHT (60%): bowl video + CSS-driven 360° spin container wrapping the video
 *    so the product feels like it's rotating in 3D.
 *  - The hero is one viewport tall — text cycles are time-based (setInterval)
 *    so the rotation feels alive even before the user scrolls.
 */
export default function HeroOrbit() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Cycle the 3 phrases every 2.8s — feels like the LOOP recorder's
  // "Record music easily on the go. → Ready, Steady, Record. → $299 — Buy Now."
  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % 3);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Make sure the video plays on mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      // autoplay can be blocked; that's OK
    });
  }, []);

  return (
    <section className={styles.hero} id="top">
      {/* Brand wordmark (top-left) */}
      <a href="#top" className={styles.brandMark} aria-label="Bold And Digital">
        <span className={styles.brandNavy}>BOLD</span>
        <span className={styles.brandSlash}>/</span>
        <span className={styles.brandNavy}>DIGITAL</span>
        <span className={styles.brandDot} />
      </a>

      {/* Thin top nav (Loop Recorder style) */}
      <nav className={styles.nav}>
        <a href="#services">/services</a>
        <a href="#work">/work</a>
        <a href="#process">/process</a>
        <a href="#contact" className={styles.navCta}>
          /start <span className={styles.navArrow}>→</span>
        </a>
      </nav>

      {/* 50/50 split: text LEFT, product RIGHT */}
      <div className={styles.split}>
        {/* LEFT — text column with 3 cycling phrases */}
        <div className={styles.text}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>BOLD AND DIGITAL — DESIGN ENGINEERING STUDIO</span>
          </div>

          <div className={styles.h1Stack} aria-live="polite">
            <h1
              className={`${styles.h1} ${phraseIndex === 0 ? styles.h1Active : ''}`}
            >
              Brand worlds<span className={styles.period}>.</span>
            </h1>
            <h1
              className={`${styles.h1} ${phraseIndex === 1 ? styles.h1Active : ''}`}
            >
              Strategy &amp; code<span className={styles.period}>.</span>
            </h1>
            <h1
              className={`${styles.h1} ${phraseIndex === 2 ? styles.h1Active : ''}`}
            >
              Ship it<span className={styles.period}>.</span>
            </h1>
          </div>

          <p className={styles.lead}>
            A design and engineering studio for brands shaping tomorrow. Three-dimensional web. AI automation. Razor-sharp brand strategy. One shipping crew.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.cta}>
              Initialize Project
              <span className={styles.ctaArrow}>→</span>
            </a>
            <a href="#work" className={styles.ctaGhost}>
              See the work
            </a>
          </div>

          <div className={styles.footMeta}>
            <span className={styles.footMetaLabel}>SERVICES</span>
            <span>brand</span>
            <span className={styles.footMetaSep}>·</span>
            <span>websites</span>
            <span className={styles.footMetaSep}>·</span>
            <span>imagery</span>
            <span className={styles.footMetaSep}>·</span>
            <span>ai</span>
            <span className={styles.footMetaSep}>·</span>
            <span>hosting</span>
          </div>
        </div>

        {/* RIGHT — orbital bowl (3D product hero) */}
        <div className={styles.product}>
          {/* CSS spin wrapper reinforces the orbital camera move in the video */}
          <div className={styles.spinWrap}>
            <video
              ref={videoRef}
              className={styles.bowlVideo}
              src="/videos/hero-bowl-orbital.mp4"
              poster="/images/hero-bowl-orbital-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          {/* Price tag (LOOP recorder "$299 — Buy Now" pattern) */}
          <div className={styles.priceTag}>
            <span className={styles.priceLabel}>FROM</span>
            <span className={styles.priceValue}>$4,800</span>
            <span className={styles.priceUnit}>USD</span>
          </div>

          {/* Product label (vertical, right edge) */}
          <div className={styles.productLabel}>
            <span>BOWL-01 / 3D ASSET / LOOP</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <span>SCROLL</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
