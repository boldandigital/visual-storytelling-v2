import styles from './ServicesSimple.module.css';

const SERVICES = [
  {
    n: '01',
    t: 'Brand Worlds',
    d: 'Strategy, identity, naming, visual systems. The thinking before the building.',
  },
  {
    n: '02',
    t: 'Websites',
    d: 'Three-dimensional web. Scroll-driven narratives. Performance budgets under 100kB.',
  },
  {
    n: '03',
    t: 'Imagery',
    d: 'Product stills, motion loops, AI-rendered brand photography. From a single brief.',
  },
  {
    n: '04',
    t: 'AI Automation',
    d: 'Agent pipelines, retrieval systems, on-device inference. Real shipping software.',
  },
  {
    n: '05',
    t: 'Hosting',
    d: 'LiteSpeed + QUIC.cloud edge. WordPress and Next.js, both with the same obsession.',
  },
];

export default function ServicesSimple() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>— SERVICES / 01</span>
        <h2 className={styles.h2}>What we ship.</h2>
      </div>
      <ol className={styles.list}>
        {SERVICES.map((s) => (
          <li key={s.n} className={styles.row}>
            <span className={styles.num}>{s.n}</span>
            <span className={styles.title}>{s.t}</span>
            <span className={styles.desc}>{s.d}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
