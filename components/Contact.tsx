import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <div className="frame">
            <div className={styles.card}>
              <div className={styles.terminalHeader}>
                <div className={styles.dots} aria-hidden="true">
                  <span /> <span /> <span />
                </div>
                <span className={styles.terminalPath}>
                  ~/boldandigital/contact --init
                </span>
              </div>

              <div className={styles.content}>
                <div className={styles.prompt}>
                  <span className="cyan-bracket">$</span>
                  <span className={styles.cmd}> init_project</span>
                  <span className={styles.cursor}>█</span>
                </div>

                <span className="eyebrow">// ready</span>
                <h2>
                  Have a bold idea?
                  <br />
                  <span className="gradient-text">let&apos;s ship it</span>
                  <span className="cyan-bracket">.</span>
                </h2>

                <p className={styles.copy}>
                  We take on a small number of engagements each quarter. Tell us
                  what you&apos;re building and we&apos;ll reply within one
                  business day.
                </p>

                <div className={styles.statusGrid}>
                  <div className={styles.statusLine}>
                    <span className={styles.statusKey}>STATUS</span>
                    <span className={styles.statusSep}>:</span>
                    <span className={styles.statusVal}>ACCEPTING Q3 BRIEFS</span>
                  </div>
                  <div className={styles.statusLine}>
                    <span className={styles.statusKey}>RESPONSE</span>
                    <span className={styles.statusSep}>:</span>
                    <span className={styles.statusVal}>&lt; 24H</span>
                  </div>
                  <div className={styles.statusLine}>
                    <span className={styles.statusKey}>ENGAGEMENT</span>
                    <span className={styles.statusSep}>:</span>
                    <span className={styles.statusVal}>2 — 12 WEEKS</span>
                  </div>
                </div>

                <div className={styles.actions}>
                  <a
                    href="mailto:hello@boldandigital.com"
                    className="btn btn-primary"
                  >
                    <span className="cyan-bracket">→</span> hello@boldandigital.com
                  </a>
                  <a href="#services" className="btn btn-ghost">
                    view services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
