'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '#services', label: '01.services' },
  { href: '#work', label: '02.work' },
  { href: '#process', label: '03.process' },
  { href: '#contact', label: '04.contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.row}`}>
        <Link href="/" className={styles.brand} aria-label="Bold And Digital home">
          <span className={styles.brandMark} aria-hidden="true">
            <span className={styles.brandMarkInner} />
          </span>
          <span className={styles.brandText}>
            <span className="cyan-bracket">[</span>
            BOLD_AND_DIGITAL
            <span className="cyan-bracket">]</span>
          </span>
        </Link>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={styles.navLink}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            <span className="cyan-bracket">$</span> init
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={styles.filePath} aria-hidden="true">
        <span>~/boldandigital/visual-storytelling-v2</span>
        <span className={styles.cursor}>█</span>
      </div>
    </header>
  );
}
