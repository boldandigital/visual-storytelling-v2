import styles from './ProcessSimple.module.css';

const STEPS = [
  { n: '01', t: 'Brief', d: 'A 30-minute call. We listen, ask sharp questions, and quote a fixed price.' },
  { n: '02', t: 'Strategy', d: 'Naming, narrative, and visual direction. Two weeks, three rounds.' },
  { n: '03', t: 'Build', d: 'Design + engineering in lockstep. Weekly demos. Shipped in 6–10 weeks.' },
  { n: '04', t: 'Operate', d: 'Hosting, observability, AI automation. The studio is on retainer after launch.' },
];

export default function ProcessSimple() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>— PROCESS / 03</span>
        <h2 className={styles.h2}>How we ship.</h2>
      </div>
      <div className={styles.grid}>
        {STEPS.map((s) => (
          <div key={s.n} className={styles.card}>
            <div className={styles.cardNum}>{s.n}</div>
            <div className={styles.cardTitle}>{s.t}</div>
            <div className={styles.cardDesc}>{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
