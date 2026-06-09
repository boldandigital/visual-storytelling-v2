'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toISOString().slice(0, 19).replace('T', ' '));
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">// contact.terminal</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h2" style={{ marginBottom: '2.5rem' }}>
            HAVE A BOLD IDEA?
            <br />
            <span className="cyan">LET'S SHIP IT.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className={styles.terminal}>
            <div className={styles.tHeader}>
              <div className={styles.tDots}>
                <span /><span /><span />
              </div>
              <span className={styles.tPath}>
                ~/boldandigital/contact --init
              </span>
            </div>
            <div className={styles.tBody}>
              <div className={styles.tLine}>
                <span className={styles.tPrompt}>$</span>
                <span>init_project --brand=</span>
                <span className="cyan">"your_company"</span>
              </div>
              <div className={styles.tLine}>
                <span className="cyan">→</span>
                <span className={styles.tDim}> checking intake</span>
                <span className={styles.tCaret}>█</span>
              </div>

              <div className={styles.statusGrid}>
                <div className={styles.statusCell}>
                  <span className={styles.statusK}>STATUS</span>
                  <span className={styles.statusV}>
                    <span className={styles.dot} /> ACCEPTING Q3 BRIEFS
                  </span>
                </div>
                <div className={styles.statusCell}>
                  <span className={styles.statusK}>REPLY</span>
                  <span className={styles.statusV}>&lt; 24H</span>
                </div>
                <div className={styles.statusCell}>
                  <span className={styles.statusK}>DURATION</span>
                  <span className={styles.statusV}>2 — 12 WEEKS</span>
                </div>
                <div className={styles.statusCell}>
                  <span className={styles.statusK}>REGION</span>
                  <span className={styles.statusV}>EU-WEST · REMOTE</span>
                </div>
                <div className={styles.statusCell}>
                  <span className={styles.statusK}>LOCAL</span>
                  <span className={styles.statusV}>{time}</span>
                </div>
                <div className={styles.statusCell}>
                  <span className={styles.statusK}>CHANNEL</span>
                  <span className={styles.statusV}>hello@boldandigital.com</span>
                </div>
              </div>

              <div className={styles.tLine} style={{ marginTop: '1.75rem' }}>
                <span className={styles.tPrompt}>$</span>
                <a href="mailto:hello@boldandigital.com" className={styles.tAction}>
                  ping hello@boldandigital.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className={styles.altActions}>
            <a href="mailto:hello@boldandigital.com" className="btn">
              → HELLO@BOLDANDIGITAL.COM
            </a>
            <a href="#services" className="btn btn--ghost">
              VIEW_SERVICES
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
