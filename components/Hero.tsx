'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, '0');
      const mm = String(d.getUTCMinutes()).padStart(2, '0');
      const ss = String(d.getUTCSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Top status row — terminal-style */}
        <div className={styles.statusRow} data-mounted={mounted}>
          <div className={styles.statusItem}>
            <span className={styles.statusDot} />
            <span>SYS:ONLINE</span>
          </div>
          <div className={styles.statusItem}>
            <span>LAT:12ms</span>
          </div>
          <div className={styles.statusItem}>
            <span>REG:EU-WEST</span>
          </div>
          <div className={styles.statusItem}>
            <span>{time || '00:00:00 UTC'}</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className={styles.eyebrow} data-mounted={mounted}>
          <span className="eyebrow">
            <span className="cyan-bracket">[</span>
            visual_storytelling_studio
            <span className="cyan-bracket">]</span>
            <span className={styles.divider}>//</span>
            est. 2022
          </span>
        </div>

        {/* Title — monospace, ALL CAPS, cyan glow */}
        <h1 className={styles.title} data-mounted={mounted}>
          We build
          <br />
          <span className={`gradient-text ${styles.titleAccent}`}>
            scroll-driven
          </span>
          <br />
          digital worlds.
        </h1>

        {/* Lede */}
        <p className={styles.lede} data-mounted={mounted}>
          <span className="cyan-bracket">&gt; </span>
          Bold And Digital is a design and engineering studio for brands
          shaping tomorrow. We fuse three-dimensional web, AI automation and
          razor-sharp brand strategy into one shipping crew.
        </p>

        {/* CTAs */}
        <div className={styles.actions} data-mounted={mounted}>
          <a href="#contact" className="btn btn-primary">
            initialize_project
            <span aria-hidden="true">→</span>
          </a>
          <a href="#work" className="btn btn-ghost">
            see_the_work
          </a>
        </div>

        {/* Bottom corner: scroll cue */}
        <div className={styles.scrollCue} aria-hidden="true">
          <div className={styles.scrollLabel}>SCROLL</div>
          <div className={styles.scrollLine} />
          <div className={styles.scrollMeta}>
            <span>00:00.00</span>
            <span> / </span>
            <span>16.20s</span>
          </div>
        </div>

        {/* Right corner: target reticle */}
        <div className={styles.reticle} aria-hidden="true">
          <div className={styles.reticleBracket} />
        </div>
      </div>
    </section>
  );
}
