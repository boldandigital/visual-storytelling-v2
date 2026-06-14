import styles from './Sections.module.css';

/**
 * Sections — clean editorial column below the hero.
 * No 3D, no scroll-bound animations, no parallax.
 * Just typography, whitespace, and intent.
 */
export default function Sections() {
  return (
    <div className={styles.wrap}>
      {/* ── SERVICES ── */}
      <section id="services" className={styles.section}>
        <span className={styles.eyebrow}>01 — Disciplines</span>
        <h2 className={styles.h2}>Five services. One shipping crew.</h2>

        <ol className={styles.list}>
          <li className={styles.item}>
            <span className={styles.num}>01</span>
            <div>
              <h3 className={styles.h3}>AI automation</h3>
              <p className={styles.body}>
                Custom agents, RAG pipelines, workflow automations that ship work, not slides.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.num}>02</span>
            <div>
              <h3 className={styles.h3}>Websites</h3>
              <p className={styles.body}>
                Scroll-driven 3D sites. Next.js, Three.js, edge-deployed.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.num}>03</span>
            <div>
              <h3 className={styles.h3}>Imagery</h3>
              <p className={styles.body}>
                Brand-grade photography and motion. Generated or captured.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.num}>04</span>
            <div>
              <h3 className={styles.h3}>GEO / SEO</h3>
              <p className={styles.body}>
                Make your brand the answer. For Google, for ChatGPT, for every search surface that matters.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.num}>05</span>
            <div>
              <h3 className={styles.h3}>Hosting</h3>
              <p className={styles.body}>
                LiteSpeed edge hosting. 99.99% uptime. Zero migration drama.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ── WORK ── */}
      <section id="work" className={styles.section}>
        <span className={styles.eyebrow}>02 — Selected work</span>
        <h2 className={styles.h2}>We build with the bold.</h2>

        <ul className={styles.clients}>
          <li className={styles.client}>
            <span className={styles.clientName}>LiteSpeed</span>
            <span className={styles.clientBody}>
              Marketing site for the open-source web server used by 14% of the internet.
            </span>
          </li>
          <li className={styles.client}>
            <span className={styles.clientName}>QUIC.cloud</span>
            <span className={styles.clientBody}>
              Edge CDN product site. Conversion-focused, benchmarked against three competitor flows.
            </span>
          </li>
          <li className={styles.client}>
            <span className={styles.clientName}>aaads</span>
            <span className={styles.clientBody}>
              Custom GPT agents + RAG system. Campaign turnaround: days → hours.
            </span>
          </li>
        </ul>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className={styles.section}>
        <span className={styles.eyebrow}>03 — Process</span>
        <h2 className={styles.h2}>From brief to shipping fast.</h2>

        <ol className={styles.steps}>
          <li className={styles.step}>
            <span className={styles.stepNum}>01</span>
            <h3 className={styles.stepH3}>Discover</h3>
            <span className={styles.stepTime}>2 days</span>
            <p className={styles.body}>
              Workshop, audit, and brief. We map your brand's current state against the market.
            </p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>02</span>
            <h3 className={styles.stepH3}>Design</h3>
            <span className={styles.stepTime}>1–2 weeks</span>
            <p className={styles.body}>
              Wireframes → moodboard → high-fidelity. One direction, executed to the bone.
            </p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>03</span>
            <h3 className={styles.stepH3}>Build</h3>
            <span className={styles.stepTime}>4–8 weeks</span>
            <p className={styles.body}>
              Next.js, Three.js, edge-deployed. We ship to staging, test, and ship to prod.
            </p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>04</span>
            <h3 className={styles.stepH3}>Grow</h3>
            <span className={styles.stepTime}>Ongoing</span>
            <p className={styles.body}>
              GEO, SEO, AI-search optimization. We tune the brand to be the answer.
            </p>
          </li>
        </ol>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={styles.section}>
        <span className={styles.eyebrow}>04 — Contact</span>
        <h2 className={styles.h2}>Have a bold idea? Let's ship it.</h2>

        <a href="mailto:hello@boldandigital.com" className={styles.emailLink}>
          ping hello@boldandigital.com
        </a>
      </section>
    </div>
  );
}
