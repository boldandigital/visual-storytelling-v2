import Reveal from './Reveal';
import styles from './Work.module.css';

const projects = [
  {
    year: '2025',
    cat: 'performance_infrastructure',
    client: 'LiteSpeed',
    desc: 'Brand refresh and scroll-driven product storytelling for the team behind the fastest web server on the planet.',
  },
  {
    year: '2025',
    cat: 'edge_cdn',
    client: 'QUIC.cloud',
    desc: 'Developer-first product site with interactive latency demos and conversion-focused content ops.',
  },
  {
    year: '2024',
    cat: 'ai_automation',
    client: 'AAADS',
    desc: 'Custom GPT agents and a closed-loop RAG system that cut campaign turnaround from days to hours.',
  },
  {
    year: '2024',
    cat: 'generative_imagery',
    client: 'Atlas Studio',
    desc: 'Generative photo + motion pipeline for an editorial brand — zero shoots, full campaign in 14 days.',
  },
];

export default function Work() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">// selected_work.log</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h2">
            WE BUILD WITH
            <br />
            THE BOLD.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="lead" style={{ marginBottom: '4rem' }}>
            <span className="prompt">{'>'}</span> A small sample of teams that trust us to ship the impossible.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <ul className={styles.log}>
            {projects.map((p, i) => (
              <li key={p.client} className={styles.row}>
                <span className={styles.idx}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.cat}>{p.cat}</span>
                <span className={styles.year}>{p.year}</span>
                <span className={styles.client}>{p.client}</span>
                <span className={styles.desc}>{p.desc}</span>
                <a className={styles.exec} href="#contact">
                  <span className="bk">[</span>EXECUTE<span className="bk">]</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
