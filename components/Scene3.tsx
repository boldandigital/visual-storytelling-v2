'use client';

import { useRef } from 'react';
import { useSceneProgress } from '@/hooks/useSceneProgress';
import Reveal from './Reveal';
import styles from './Scene.module.css';

const projects = [
  { n: '01', year: '2025', client: 'LiteSpeed', desc: 'Brand refresh for the team behind the fastest web server on the planet.' },
  { n: '02', year: '2025', client: 'QUIC.cloud', desc: 'Developer-first product site with interactive latency demos.' },
  { n: '03', year: '2024', client: 'AAADS', desc: 'Custom GPT agents + RAG system. Campaign turnaround: days → hours.' },
  { n: '04', year: '2024', client: 'Atlas Studio', desc: 'Generative photo + motion pipeline. Zero shoots. Full campaign in 14 days.' },
];

/**
 * Scene 3 — CYBERNETIC CITY
 * The work log panel is fixed on the left; rows populate as the
 * user scrolls. The header on the right tilts in from the side.
 */
export default function Scene3() {
  const ref = useRef<HTMLElement | null>(null);
  const p = useSceneProgress(ref);

  const headerX = 600 - p * 700; // 600 → -100 (fly in from right)
  const headerOp = p < 0.05 ? 0 : Math.min(1, (p - 0.05) / 0.15);

  const listOp = p < 0.15 ? 0 : Math.min(1, (p - 0.15) / 0.2);
  // Tilt the list slightly with scroll — like it's attached to a surface
  const listRotX = 3 + p * -3;
  const listRotY = -4 + p * 4;

  return (
    <div className="scene-inner" ref={(el) => { ref.current = el?.parentElement ?? null; }}>
      <Reveal
        className={`${styles.panel} ${styles.cityHeader}`}
        style={{
          transform: `translate3d(${headerX}px, 0, 80px)`,
          opacity: headerOp,
        }}
      >
        <span className="eyebrow">selected_work.log</span>
        <h2 className="h2" style={{ marginTop: '0.5rem' }}>
          WE BUILD WITH<br />THE BOLD.
        </h2>
      </Reveal>

      <Reveal
        className={`${styles.panel} ${styles.cityList}`}
        style={{
          transform: `translate3d(0, 0, 0) rotateX(${listRotX}deg) rotateY(${listRotY}deg)`,
          opacity: listOp,
        }}
      >
        <ol className={styles.workList}>
          {projects.map((proj) => (
            <li key={proj.n}>
              <span className={styles.wN}>{proj.n}</span>
              <span className={styles.wYear}>{proj.year}</span>
              <span className={styles.wClient}>{proj.client}</span>
              <span className={styles.wDesc}>{proj.desc}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}
