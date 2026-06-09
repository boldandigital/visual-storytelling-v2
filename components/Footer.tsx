import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>
          <span className={styles.brand}>Bold And Digital</span>
          <p className={styles.fine}>
            © {new Date().getFullYear()} Bold And Digital LLC. Built in the open
            with Next.js &amp; Three.js.
          </p>
        </div>
        <div className={styles.links}>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="mailto:hello@boldandigital.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
