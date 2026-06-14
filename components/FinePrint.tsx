import styles from './FinePrint.module.css';

/**
 * FinePrint — the "vertical signature" Mantis-style.
 * Tiny mono text running along the right edge. Pure decoration.
 */
export default function FinePrint() {
  return (
    <>
      <div className={styles.leftEdge} aria-hidden="true">
        <span>v5 — 2026/06/14 — bold and digital — all rights reserved</span>
      </div>
      <div className={styles.rightEdge} aria-hidden="true">
        <span>make your work</span>
        <span>the answer.</span>
      </div>
    </>
  );
}
