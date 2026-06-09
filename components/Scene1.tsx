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
  const h1X = 1200 - p * 1500;   // 1200 → -300 (flies in from far right, lands centered)
  const h1Z = 800 - p * 720;     // 800 → 80 (dramatic back-to-front)
  const h1Scale = 0.4 + p * 0.6; // 0.4 → 1.0 (visibly scales up as it approaches)
  const h1RotY = 12 - p * 12;    // 12deg → 0 (slight tilt toward camera on arrival)
  const h1Op = p < 0.05 ? 0 : Math.min(1, (p - 0.05) / 0.15);

  const eyebrowX = -800 + p * 800; // -800 → 0 (flies in from far left)
  const eyebrowZ = 600 - p * 540;  // 600 → 60
  const eyebrowScale = 0.5 + p * 0.5;
  const eyebrowOp = Math.min(1, p / 0.1);

  const leadY = 200 - p * 200;     // 200 → 0 (rises into place from below)
  const leadZ = 400 - p * 360;
  const leadScale = 0.6 + p * 0.4;
  const leadOp = p < 0.3 ? 0 : Math.min(1, (p - 0.3) / 0.2);

  const ctaZ = 300 - p * 240;
  const ctaScale = 0.7 + p * 0.3;
  const ctaOp = p < 0.5 ? 0 : Math.min(1, (p - 0.5) / 0.15);

  return (
    <div className="scene-inner" ref={(el) => { ref.current = el?.parentElement ?? null; }}>
      <Reveal
        className={`${styles.panel} ${styles.abyssEyebrow}`}
        style={{
          transform: `translate3d(${eyebrowX}px, 0, ${eyebrowZ}px) scale(${eyebrowScale})`,
          opacity: eyebrowOp,
        }}
      >
        <span className="eyebrow">./initialize_studio --brand=boldandigital</span>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssH1}`}
        style={{
          transform: `translate3d(${h1X}px, 0, ${h1Z}px) scale(${h1Scale}) rotateY(${h1RotY}deg)`,
          opacity: h1Op,
        }}
      >
        <h1 className="h1">
          <span className={styles.line}>WE BUILD</span>
          <span className={`${styles.line} ${styles.accent}`}>
            <span className={styles.caret}>_</span>SCROLL-DRIVEN
            <span className={styles.caret}>_</span>
          </span>
          <span className={styles.line}>DIGITAL WORLDS.</span>
        </h1>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssLead}`}
        style={{
          transform: `translate3d(-50%, ${leadY}px, ${leadZ}px) scale(${leadScale})`,
          opacity: leadOp,
        }}
      >
        <p className="lead">
          <span className="prompt">{'>'}</span> A design and engineering studio for brands shaping tomorrow. Three-dimensional web. AI automation. Razor-sharp brand strategy. One shipping crew.
        </p>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.abyssCTA}`}
        style={{
          transform: `translate3d(-50%, 0, ${ctaZ}px) scale(${ctaScale})`,
          opacity: ctaOp,
        }}
      >
        <a href="#contact" className="btn">INITIALIZE_PROJECT <span className="arrow">→</span></a>
        <a href="#services" className="btn btn--ghost">SEE_THE_WORK <span className="arrow">→</span></a>
      </Reveal>
    </div>
  );
}
