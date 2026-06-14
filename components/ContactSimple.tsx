import styles from './ContactSimple.module.css';

export default function ContactSimple() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.eyebrow}>— CONTACT / 03</div>
      <h2 className={styles.h2}>
        Initialize<br />a project.
      </h2>
      <p className={styles.lead}>
        Briefs, briefs in progress, and the always-on inbox. We reply within one business day, usually faster.
      </p>
      <a href="mailto:contact@boldandigital.com" className={styles.email}>
        contact@boldandigital.com
        <span className={styles.arrow}>→</span>
      </a>
      <div className={styles.meta}>
        <div>
          <div className={styles.metaLabel}>STUDIO</div>
          <div>Hamburg · Remote</div>
        </div>
        <div>
          <div className={styles.metaLabel}>HOURS</div>
          <div>Mon–Fri · 09:00–18:00 CET</div>
        </div>
        <div>
          <div className={styles.metaLabel}>REPLY</div>
          <div>≤ 24h business</div>
        </div>
      </div>
    </section>
  );
}
