'use client';

import { useRef } from 'react';
import { useSceneProgress } from '@/hooks/useSceneProgress';
import Reveal from './Reveal';
import styles from './Scene.module.css';

const services = [
  { n: '01', title: 'AI AUTOMATION', desc: 'Custom agents, RAG pipelines, workflow automations that ship work, not slides.' },
  { n: '02', title: 'WEBSITES', desc: 'Scroll-driven 3D sites. Next.js, Three.js, edge-deployed.' },
  { n: '03', title: 'IMAGERY', desc: 'Brand-grade photography and motion. Generated or captured.' },
  { n: '04', title: 'GEO / SEO', desc: 'Make your brand the answer. For Google, for ChatGPT, for every search surface that matters.' },
  { n: '05', title: 'HOSTING', desc: 'LiteSpeed edge hosting. 99.99% uptime. Zero migration drama.' },
];

/**
 * Scene 2 — WARP TUNNEL
 * Each service card flies past the camera as the user scrolls
 * through the scene. Cards enter from off-screen (X=-2000),
 * accelerate across the viewport, and exit the other side.
 * The Z position varies so they pass at different depths.
 */
export default function Scene2() {
  const ref = useRef<HTMLElement | null>(null);
  const p = useSceneProgress(ref);

  // Per-panel motion as a function of scene progress p (0..1)
  const headerOp = Math.min(1, p / 0.15);

  return (
    <div className="scene-inner" ref={(el) => { ref.current = el?.parentElement ?? null; }}>
      <Reveal
        className={`${styles.panel} ${styles.warpHeader}`}
        style={{ opacity: headerOp }}
      >
        <span className="eyebrow">services.discipline</span>
        <h2 className="h2" style={{ marginTop: '0.5rem' }}>
          FIVE DISCIPLINES.<br />ONE SHIPPING CREW.
        </h2>
      </Reveal>

      {services.map((s, i) => {
        // Each service has a 0.4-wide "appear window" within the scene.
        // Stagger so they appear sequentially.
        const start = 0.05 + i * 0.12;
        const local = Math.max(0, Math.min(1, (p - start) / 0.4));
        // Fly from X=-1800 (far left) to X=+1800 (far right) over the window
        const x = -1800 + local * 3600;
        // Z goes from 1200 (very far back) to 200 (close) to -400 (past camera)
        const z = 1200 - local * 1600;
        // Scale shrinks dramatically when far in Z, grows large when close
        const scale = 0.3 + (1 - z / 1200) * 0.7;
        // Yaw angle: rotateY from 25deg (side view) to -25deg (other side view)
        const rotY = 25 - local * 50;
        // Opacity fades in and out
        const op = local < 0.05 ? 0 : local > 0.95 ? Math.max(0, 1 - (local - 0.95) * 20) : 1;

        return (
          <Reveal
            key={s.n}
            className={`${styles.panel} ${styles[`warpService${s.n}`]}`}
            style={{
              transform: `translate3d(${x}px, 0, ${z}px) scale(${scale}) rotateY(${rotY}deg)`,
              opacity: op,
            }}
          >
            <div className={styles.serviceItem}>
              <span className={styles.svcN}>/ {s.n}</span>
              <h3 className={styles.svcTitle}>{s.title}</h3>
              <p className={styles.svcDesc}>{s.desc}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
