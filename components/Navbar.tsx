'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#services', label: '01.services' },
  { href: '#work', label: '02.work' },
  { href: '#process', label: '03.process' },
  { href: '#contact', label: '04.contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Bold And Digital home">
          <span className={styles.mark} aria-hidden="true">
            <span className={styles.markB}>B</span>
            <span className={styles.markPlus}>+</span>
            <span className={styles.markD}>D</span>
          </span>
          <span className={styles.brandText}>
            <span className="bk">[</span>
            BOLD_AND_DIGITAL
            <span className="bk">]</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              <span className={styles.linkArrow}>→</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.status}>
          <span className={styles.dot} />
          <span className={styles.statusText}>
            {Math.round(progress * 100).toString().padStart(2, '0')}%
          </span>
        </div>
      </div>
      <div
        className={styles.progressBar}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
