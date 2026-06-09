import Reveal from './Reveal';
import styles from './Work.module.css';

const projects = [
  {
    name: 'LiteSpeed',
    tag: 'performance_infrastructure',
    desc:
      'Brand refresh and scroll-driven product storytelling for the team behind the fastest web server on the planet.',
    year: '2025',
  },
  {
    name: 'QUIC.cloud',
    tag: 'edge_cdn',
    desc:
      'Developer-first product site with interactive latency demos and conversion-focused content ops.',
    year: '2025',
  },
  {
    name: 'aaads',
    tag: 'ai_automation',
    desc:
      'Custom GPT agents and a closed-loop RAG system that cut campaign turnaround from days to hours.',
    year: '2024',
  },
];

export default function Work() {
  return (
    <section id="work" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">// selected_work.log</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            We build with
            <br />
            <span className="gradient-text">the bold</span>
            <span className="cyan-bracket">.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className={styles.intro}>
            A small sample of teams that trust us to ship the impossible.
          </p>
        </Reveal>

        <ul className={styles.list}>
          {projects.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90}>
              <a className={`frame ${styles.row}`} href="#contact">
                <div className={styles.left}>
                  <div className={styles.metaRow}>
                    <span className={styles.tag}>{p.tag}</span>
                    <span className={styles.year}>// {p.year}</span>
                  </div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.arrow} aria-hidden="true">
                    <span className="cyan-bracket">[</span>
                    <span className={styles.arrowText}>EXECUTE</span>
                    <span className="cyan-bracket">]</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
