import styles from './WorkSimple.module.css';

const WORK = [
  { name: 'LiteSpeed', tag: 'edge / cdn' },
  { name: 'QUIC.cloud', tag: 'cdn / r&d' },
  { name: 'aaads', tag: 'ad-tech / brand' },
];

export default function WorkSimple() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>— WORK / 02</span>
        <h2 className={styles.h2}>Recent.</h2>
      </div>
      <ul className={styles.list}>
        {WORK.map((w) => (
          <li key={w.name} className={styles.row}>
            <span className={styles.name}>{w.name}</span>
            <span className={styles.tag}>{w.tag}</span>
            <span className={styles.arrow}>→</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
