import Link from 'next/link';
import styles from './BrandNav.module.css';

/**
 * BrandNav — thin top bar. Logo on the left, three service links
 * centered, contact CTA on the right. No drop-downs, no hamburger.
 */
export default function BrandNav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link href="#top" className={styles.brand}>
        <span className={styles.mark}>B</span>
        <span className={styles.name}>bold and digital</span>
      </Link>

      <ul className={styles.links}>
        <li><a href="#services">websites</a></li>
        <li><a href="#work">imagery</a></li>
        <li><a href="#process">ai</a></li>
      </ul>

      <a href="#contact" className={styles.cta}>
        Contact
        <span className={styles.arrow}>→</span>
      </a>
    </nav>
  );
}
