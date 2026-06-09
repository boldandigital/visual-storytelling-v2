import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal>
          <div className={`glass ${styles.card}`}>
            <span className="eyebrow">Start a project</span>
            <h2>
              Have a bold idea? <span className="gradient-text">Let’s ship it.</span>
            </h2>
            <p style={{ marginTop: '1rem' }}>
              We take on a small number of engagements each quarter. Tell us what
              you’re building and we’ll reply within one business day.
            </p>
            <div className={styles.actions}>
              <a
                href="mailto:hello@boldandigital.com"
                className="btn btn-primary"
              >
                hello@boldandigital.com →
              </a>
              <a href="#services" className="btn btn-ghost">
                Re-read the services
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
