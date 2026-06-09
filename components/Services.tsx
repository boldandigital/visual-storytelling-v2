import Reveal from './Reveal';
import styles from './Services.module.css';

const services = [
  {
    n: '01',
    title: 'AI Automation',
    blurb:
      'Custom agents, RAG pipelines, and workflow automations that ship work, not slides.',
    bullets: ['GPT-driven assistants', 'Internal tool integrations', 'Closed-loop feedback'],
  },
  {
    n: '02',
    title: 'Websites',
    blurb:
      'Scroll-driven, three-dimensional websites that turn visitors into believers — built on Next.js, Three.js, and obsession.',
    bullets: ['3D & WebGL storytelling', 'App Router + RSC', 'Edge-deployed for speed'],
  },
  {
    n: '03',
    title: 'Imagery',
    blurb:
      'Brand-grade photography, product renders and motion — generated or captured, always on brand.',
    bullets: ['Product & lifestyle', 'Generative campaigns', 'On-site direction'],
  },
  {
    n: '04',
    title: 'GEO / SEO',
    blurb:
      'We make your brand the answer — for Google, for ChatGPT, for every search surface that matters in 2026.',
    bullets: ['Generative Engine Optimization', 'Technical SEO audits', 'Topical authority content'],
  },
  {
    n: '05',
    title: 'Hosting',
    blurb:
      'LiteSpeed-powered edge hosting managed by humans, with 99.99% uptime and zero migration drama.',
    bullets: ['WordPress & Node', 'Free migrations', 'Human support, no tickets'],
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">What we do</span>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            Five disciplines. <span className="gradient-text">One studio.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            We work in tight squads with founders and marketing leaders — shipping
            category-defining digital experiences that perform.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className={styles.card}>
              <div className="glass">
                <div className={styles.cardInner}>
                  <span className={styles.num}>{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul className={styles.bullets}>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
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
