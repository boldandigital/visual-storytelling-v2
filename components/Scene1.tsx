'use client';

import { useRef } from 'react';
import { useSceneProgress } from '@/hooks/useSceneProgress';
import Reveal from './Reveal';
import styles from './Scene.module.css';

/**
 * Scene 1 — ABYSS
 * The H1 flies in from the right and slows to center, like a
 * approaching craft. The eyebrow and lead parallax at different
 * rates, the CTA fades in.
 */
export default function Scene1() {
  const ref = useRef<HTMLElement | null>(null);
  const p = useSceneProgress(ref);

  // Per-panel motion as a function of scene progress p (0..1)
  // Each panel has an entry window: it flies in as p approaches
  // its target, then holds.
  // Z is very large (up to 1000px back) for dramatic perspective.
  // Scale is inverse-Z (1 - z/1000) so panels visibly shrink as
  // they go back in Z, like objects in the world.
  // H1 is fully visible at p=0 (the "first frame") and stays there
  // — we don't gate the hero behind scroll motion.
  // All panels keep the -50% horizontal translate baked in so they
  // remain centered as CSS sets `left: 50%`.
  const h1X = -200 * p;                         // 0 → -200 (subtle drift)
  const h1Transform = `translate3d(calc(-50% + ${h1X}px), 0, 0) scale(${1})`;
  // Eyebrow: stay close to z=0 so it's fully visible. Just a tiny
  // x-drift on scroll to keep it from feeling glued.
  const eyebrowTransform = `translate3d(calc(-50% + ${p * 100}px), 0, 0) scale(${1})`;
  const leadTransform = `translate3d(-50%, 0, 0) scale(${1})`;
  const ctaTransform = `translate3d(-50%, 0, 0) scale(${1})`;

  return (
    <div className="scene-inner" ref={(el) => { ref.current = el?.parentElement ?? null; }}>
      <Reveal
        className={`${styles.panel} ${styles.abyssTags}`}
        style={{ opacity: 1 }}
      >
        <span>brand</span>
        <span>websites</span>
        <span>imagery</span>
        <span>ai</span>
        <span>hosting</span>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssEyebrow}`}
        style={{
          transform: eyebrowTransform,
          opacity: 1,
        }}
      >
        <span className="eyebrow">./initialize_studio --brand=boldandigital</span>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssH1}`}
        style={{
          transform: h1Transform,
          opacity: 1,
        }}
      >
        <h1 className={`h1 ${styles.h1Layered}`}>
          <span className={`${styles.line} ${styles.thin}`}>we build</span>
          <span className={`${styles.line} ${styles.thin} ${styles.italic}`}>
            &amp; strategy
          </span>
          <span className={`${styles.line} ${styles.bold} ${styles.accent}`}>
            <span className={styles.caret}>_</span>scroll-driven
            <span className={styles.caret}>_</span>
          </span>
          <span className={`${styles.line} ${styles.thin}`}>digital worlds.</span>
        </h1>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssLead}`}
        style={{
          transform: leadTransform,
          opacity: 1,
        }}
      >
        <p className="lead">
          <span className="prompt">{'>'}</span> A design and engineering studio for brands shaping tomorrow. Three-dimensional web. AI automation. Razor-sharp brand strategy. One shipping crew.
        </p>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssCTA}`}
        style={{
          transform: ctaTransform,
          opacity: 1,
        }}
      >
        <a href="#contact" className="btn">INITIALIZE_PROJECT <span className="arrow">→</span></a>
        <a href="#services" className="btn btn--ghost">SEE_THE_WORK <span className="arrow">→</span></a>
      </Reveal>
    </div>
  );
}
