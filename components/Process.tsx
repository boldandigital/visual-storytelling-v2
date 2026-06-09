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
          <span className="eyebrow">// process.run</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            From brief
            <br />
            <span className="gradient-text">to shipping fast</span>
            <span className="cyan-bracket">.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className={styles.intro}>
            Four phases. No retainer theatre. No endless decks.
          </p>
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <div className="frame">
                <div className={styles.stepInner}>
                  <div className={styles.stepHeader}>
                    <span className={styles.num}>[{s.n}]</span>
                    <span className={styles.arrow}>
                      <span className="cyan-bracket">→</span>
                    </span>
                  </div>
                  <h3 className={styles.title}>{s.t}</h3>
                  <p className={styles.desc}>{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
