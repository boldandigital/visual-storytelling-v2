'use client';

import styles from './Marquee.module.css';

/**
 * Marquee — horizontally scrolling text band (@gadgetindesign water-bottle
 * video reference). Used between the hero and the editorial sections.
 */
const ITEMS = [
  'Brand Worlds',
  '—',
  'Strategy & Code',
  '—',
  'Three-Dimensional Web',
  '—',
  'AI Automation',
  '—',
  'Hosting',
  '—',
  'LiteSpeed',
  '—',
  'QUIC.cloud',
  '—',
  'Ship It.',
];

export default function Marquee() {
  // Duplicate items 3x so the scroll loop is seamless
  const items = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
