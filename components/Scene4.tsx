'use client';

import { useRef } from 'react';
import { useSceneProgress } from '@/hooks/useSceneProgress';
import Reveal from './Reveal';
import styles from './Scene.module.css';

const steps = [
  { n: '01', title: 'DISCOVER', dur: '2 DAYS', desc: 'Tight kickoff. Funnel tear-down, stack audit, real brief.' },
  { n: '02', title: 'DESIGN', dur: '1–2 WEEKS', desc: 'Identity, motion, interaction — one visual language.' },
  { n: '03', title: 'BUILD', dur: '4–8 WEEKS', desc: 'Next.js, Three.js, edge-deployed. Weekly drops.' },
  { n: '04', title: 'GROW', dur: 'ONGOING', desc: 'GEO, content, automation. We keep the momentum going.' },
];

/**
 * Scene 4 — CENTRAL BEAM
 * 4 process steps appear around the center as the user scrolls.
 * Left steps come from the left, right from the right, all
 * angled toward the center (the central beam in the video).
 */
export default function Scene4() {
  const ref = useRef<HTMLElement | null>(null);
  const p = useSceneProgress(ref);

  const headerOp = Math.min(1, p / 0.1);

  // Each step has its own entry window
  const stepWindow = (idx: number) => {
    const start = 0.1 + idx * 0.12;
    return Math.max(0, Math.min(1, (p - start) / 0.25));
  };

  const xFor = (side: 'left' | 'right', local: number) => {
    const from = side === 'left' ? -600 : 600;
    return from * (1 - local);
  };

  const zFor = (local: number) => 200 - local * 200;

  const opFor = (local: number) =>
    local < 0.05 ? 0 : local > 0.95 ? Math.max(0, 1 - (local - 0.95) * 20) : 1;

  return (
    <div className="scene-inner" ref={(el) => { ref.current = el?.parentElement ?? null; }}>
      <Reveal
        className={`${styles.panel} ${styles.beamHeader}`}
        style={{ opacity: headerOp }}
      >
        <span className="eyebrow">process.run</span>
        <h2 className="h2" style={{ marginTop: '0.5rem' }}>
          FROM BRIEF TO<br />SHIPPING FAST.
        </h2>
      </Reveal>

      {steps.map((s, i) => {
        const local = stepWindow(i);
        const side: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
        const x = xFor(side, local);
        const z = zFor(local);
        const op = opFor(local);
        const rotY = side === 'left' ? 4 - local * 4 : -4 + local * 4;

        return (
          <Reveal
            key={s.n}
            className={`${styles.panel} ${styles[`beamStep${s.n}`]}`}
            style={{
              transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotY}deg)`,
              opacity: op,
            }}
          >
            <div className={styles.step}>
              <span className={styles.sN}>// {s.n}</span>
              <h3 className={styles.sTitle}>{s.title}</h3>
              <span className={styles.sDur}>{s.dur}</span>
              <p className={styles.sDesc}>{s.desc}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
