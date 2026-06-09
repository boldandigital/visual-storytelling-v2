import Reveal from './Reveal';
import styles from './Process.module.css';

const steps = [
  {
    n: '01',
    title: 'Discover',
    duration: '2 days',
    desc: 'A tight kickoff. We pull apart your funnel, audit your stack, and write the brief that actually de-risks the work.',
  },
  {
    n: '02',
    title: 'Design',
    duration: '1–2 weeks',
    desc: 'Identity, motion, interaction — designed in a single visual language that ships the same way it looks in Figma.',
  },
  {
    n: '03',
    title: 'Build',
    duration: '4–8 weeks',
    desc: 'Next.js, Three.js, edge-deployed. We ship in weekly drops so you see real progress, not slide decks.',
  },
  {
    n: '04',
    title: 'Grow',
    duration: 'ongoing',
    desc: 'GEO, content, automation. We keep the momentum going past launch so the project pays for itself.',
  },
];

export default function Process() {
  return (
    <section id="process" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">// process.run</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h2">
            FROM BRIEF TO
            <br />
            SHIPPING FAST.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="lead" style={{ marginBottom: '4rem' }}>
            <span className="prompt">{'>'}</span> Four phases. No retainer theatre. No endless decks.
          </p>
        </Reveal>

        <ol className={styles.list}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepN}>// {s.n}</span>
                  <span className={styles.stepDuration}>{s.duration}</span>
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
                <span className={styles.stepAccent} />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
