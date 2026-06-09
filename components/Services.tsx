import Reveal from './Reveal';
import styles from './Services.module.css';

const services = [
  {
    n: '01',
    title: 'AI Automation',
    blurb:
      'Custom agents, RAG pipelines, and workflow automations that ship work, not slides.',
    bullets: [
      'gpt_driven_assistants',
      'tool_integration',
      'closed_loop_feedback',
    ],
  },
  {
    n: '02',
    title: 'Websites',
    blurb:
      'Scroll-driven, three-dimensional websites that turn visitors into believers — built on Next.js, Three.js, and obsession.',
    bullets: ['3d_webgl_storytelling', 'app_router_rsc', 'edge_deployed'],
  },
  {
    n: '03',
    title: 'Imagery',
    blurb:
      'Brand-grade photography, product renders and motion — generated or captured, always on brand.',
    bullets: ['product_lifestyle', 'generative_campaigns', 'on_site_direction'],
  },
  {
    n: '04',
    title: 'GEO / SEO',
    blurb:
      'We make your brand the answer — for Google, for ChatGPT, for every search surface that matters in 2026.',
    bullets: ['generative_engine_opt', 'technical_audit', 'topical_authority'],
  },
  {
    n: '05',
    title: 'Hosting',
    blurb:
      'LiteSpeed-powered edge hosting managed by humans, with 99.99% uptime and zero migration drama.',
    bullets: ['wordpress_node', 'free_migrations', 'human_support'],
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">// services.discipline</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            Five disciplines
            <br />
            <span className="gradient-text">one studio</span>
            <span className="cyan-bracket">.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className={styles.intro}>
            We work in tight squads with founders and marketing leaders — shipping
            category-defining digital experiences that perform.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 70} className={styles.card}>
              <div className="frame">
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <span className={styles.num}>/{s.n}</span>
                    <span className={styles.status}>
                      <span className={styles.statusDot} />
                      ACTIVE
                    </span>
                  </div>
                  <h3>{s.title}</h3>
                  <p className={styles.blurb}>{s.blurb}</p>
                  <ul className={styles.bullets}>
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <span className="cyan-bracket">→</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
