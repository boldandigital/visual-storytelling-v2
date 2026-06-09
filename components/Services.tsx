import Reveal from './Reveal';
import styles from './Services.module.css';

const services = [
  {
    n: '01',
    title: 'AI Automation',
    summary: 'Custom agents, RAG pipelines and workflow automations that ship work, not slides.',
    tags: ['gpt_driven', 'tool_integration', 'closed_loop'],
  },
  {
    n: '02',
    title: 'Websites',
    summary: 'Scroll-driven, three-dimensional websites that turn visitors into believers — built on Next.js, Three.js and obsession.',
    tags: ['3d_webgl', 'app_router_rsc', 'edge_deployed'],
  },
  {
    n: '03',
    title: 'Imagery',
    summary: 'Brand-grade photography, product renders and motion — generated or captured, always on brand.',
    tags: ['product_lifestyle', 'generative_campaigns', 'on_site_direction'],
  },
  {
    n: '04',
    title: 'GEO / SEO',
    summary: 'We make your brand the answer — for Google, for ChatGPT, for every search surface that matters in 2026.',
    tags: ['generative_engine_opt', 'technical_audit', 'topical_authority'],
  },
  {
    n: '05',
    title: 'Hosting',
    summary: 'LiteSpeed-powered edge hosting managed by humans, with 99.99% uptime and zero migration drama.',
    tags: ['wordpress_node', 'free_migrations', 'human_support'],
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      {/* Diagonal cyan streaks — abstraction of the warp-dive moment */}
      <div className={styles.streaks} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={styles.streak}
            style={{ animationDelay: `${i * 0.15}s`, top: `${i * 8}%` }}
          />
        ))}
      </div>

      <div className="container">
        <Reveal>
          <span className="eyebrow">// services.discipline</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h2">
            FIVE DISCIPLINES.
            <br />
            ONE SHIPPING CREW.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="lead" style={{ marginBottom: '4rem' }}>
            <span className="prompt">{'>'}</span> We work in tight squads with founders and marketing leaders — shipping category-defining digital experiences that perform.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardN}>/ {s.n}</span>
                  <span className={styles.cardStatus}>ACTIVE</span>
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardSummary}>{s.summary}</p>
                <ul className={styles.cardTags}>
                  {s.tags.map((t) => (
                    <li key={t} className={styles.cardTag}>
                      <span className="bk">→</span> {t}
                    </li>
                  ))}
                </ul>
                {/* HUD corner brackets */}
                <span className={`${styles.bracket} ${styles.bTL}`} />
                <span className={`${styles.bracket} ${styles.bTR}`} />
                <span className={`${styles.bracket} ${styles.bBL}`} />
                <span className={`${styles.bracket} ${styles.bBR}`} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
