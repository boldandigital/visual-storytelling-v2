'use client';

import { useRef } from 'react';
import { useSceneProgress } from '@/hooks/useSceneProgress';
import Reveal from './Reveal';
import styles from './Scene.module.css';

/**
 * Scene 5 — REVEAL
 * The contact terminal lifts into place from below and the header
 * tilts in. The whole scene tilts slightly forward, like a
 * control panel rising up to meet the camera.
 */
export default function Scene5() {
  const ref = useRef<HTMLElement | null>(null);
  const p = useSceneProgress(ref);

  const headerX = -400 + p * 400; // -400 → 0
  const headerOp = p < 0.05 ? 0 : Math.min(1, (p - 0.05) / 0.15);

  const terminalY = 200 - p * 200; // 200 → 0
  const terminalZ = 100 - p * 100;
  const terminalRotX = 12 - p * 12;
  const terminalOp = p < 0.2 ? 0 : Math.min(1, (p - 0.2) / 0.25);

  return (
    <div className="scene-inner" ref={(el) => { ref.current = el?.parentElement ?? null; }}>
      <Reveal
        className={`${styles.panel} ${styles.revealHeader}`}
        style={{
          transform: `translate3d(${headerX}px, 0, 80px)`,
          opacity: headerOp,
        }}
      >
        <span className="eyebrow">contact.terminal</span>
        <h2 className="h2" style={{ marginTop: '0.5rem' }}>
          HAVE A BOLD IDEA?<br />
          <span className="cyan">LET'S SHIP IT.</span>
        </h2>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.revealContact}`}
        style={{
          transform: `translate3d(-50%, ${terminalY}px, ${terminalZ}px) rotateX(${terminalRotX}deg)`,
          opacity: terminalOp,
        }}
      >
        <div className={styles.terminal}>
          <div className={styles.tHeader}>
            <div className={styles.tDots}><span /><span /><span /></div>
            <span className={styles.tPath}>~/boldandigital/contact --init</span>
          </div>
          <div className={styles.tBody}>
            <div className={styles.tLine}>
              <span className={styles.tPrompt}>$</span>
              <span>init_project --brand=</span>
              <span className="cyan">"your_company"</span>
            </div>
            <div className={styles.tLine}>
              <span className="cyan">→</span>
              <span className="dim"> checking intake</span>
              <span className={styles.tCaret}>█</span>
            </div>
            <div className={styles.statusGrid}>
              <div className={styles.statusCell}>
                <span className={styles.statusK}>STATUS</span>
                <span className={styles.statusV}><span className={styles.dot} /> ACCEPTING Q3 BRIEFS</span>
              </div>
              <div className={styles.statusCell}>
                <span className={styles.statusK}>REPLY</span>
                <span className={styles.statusV}>&lt; 24H</span>
              </div>
              <div className={styles.statusCell}>
                <span className={styles.statusK}>DURATION</span>
                <span className={styles.statusV}>2 — 12 WEEKS</span>
              </div>
              <div className={styles.statusCell}>
                <span className={styles.statusK}>REGION</span>
                <span className={styles.statusV}>EU-WEST · REMOTE</span>
              </div>
            </div>
            <div className={styles.tLine} style={{ marginTop: '1.5rem' }}>
              <span className={styles.tPrompt}>$</span>
              <a href="mailto:hello@boldandigital.com" className={styles.tAction}>
                ping hello@boldandigital.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
