import Reveal from './Reveal';
import styles from './Work.module.css';

const projects = [
  {
    name: 'LiteSpeed',
    tag: 'Performance infrastructure',
    desc:
      'Brand refresh and scroll-driven product storytelling for the team behind the fastest web server on the planet.',
  },
  {
    name: 'QUIC.cloud',
    tag: 'Edge CDN',
    desc:
      'Developer-first product site with interactive latency demos and conversion-focused content ops.',
  },
  {
    name: 'aaads',
    tag: 'AI Automation',
    desc:
      'Custom GPT agents and a closed-loop RAG system that cut campaign turnaround from days to hours.',
  },
];

export default function Work() {
  return (
    <section id="work" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">Selected work</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            We build with <span className="gradient-text">the bold.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            A small sample of teams that trust us to ship the impossible.
          </p>
        </Reveal>

        <ul className={styles.list}>
          {projects.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 100}>
              <a className={`glass ${styles.row}`} href="#contact">
                <div className={styles.left}>
                  <span className={styles.tag}>{p.tag}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className={styles.arrow} aria-hidden="true">
                  →
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
