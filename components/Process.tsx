import Reveal from './Reveal';
import styles from './Process.module.css';

const steps = [
  { n: '01', t: 'Discover', d: 'Workshops, audits and a sharp brief.' },
  { n: '02', t: 'Design', d: 'Brand systems, motion, and 3D direction.' },
  { n: '03', t: 'Build', d: 'Next.js + Three.js, deployed at the edge.' },
  { n: '04', t: 'Grow', d: 'GEO, content and compounding improvements.' },
];

export default function Process() {
  return (
    <section id="process" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">How we work</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            From brief to <span className="gradient-text">shipping fast.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            Four phases. No retainer theatre. No endless decks.
          </p>
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90}>
              <span className={styles.num}>{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
