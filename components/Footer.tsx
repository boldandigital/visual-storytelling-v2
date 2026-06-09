import styles from './Footer.module.css';

const buildDate = new Date()
  .toISOString()
  .replace('T', ' ')
  .slice(0, 19) + ' UTC';

// Vercel injects VERCEL_GIT_COMMIT_SHA at build time. This makes the
// footer reflect the *exact* commit the deployed bundle was built from,
// so we can verify the live build matches what we just pushed.
const buildSha =
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'dev';
const buildShort = process.env.VERCEL ? ` · ${buildSha}` : ' · local';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <span className={styles.brandMark} aria-hidden="true">
              <span className={styles.brandMarkB}>B</span>
              <span className={styles.brandMarkD}>D</span>
            </span>
            <span className={styles.brandText}>
              <span className="cyan-bracket">[</span>
              BOLD_AND_DIGITAL
              <span className="cyan-bracket">]</span>
            </span>
          </div>
          <p className={styles.tagline}>
            <span className="cyan-bracket">// </span>
            Visual storytelling studio · est. 2022
          </p>
        </div>

        <div className={styles.middle}>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>BUILD</span>
            <span className={styles.statusVal}>v2.0.0{buildShort}</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>DEPLOYED</span>
            <span className={styles.statusVal}>{buildDate}</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>STACK</span>
            <span className={styles.statusVal}>next.js + three.js</span>
          </div>
        </div>

        <div className={styles.right}>
          <nav className={styles.links} aria-label="Footer">
            <a href="#services">services</a>
            <a href="#work">work</a>
            <a href="#process">process</a>
            <a href="mailto:hello@boldandigital.com">contact</a>
          </nav>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Bold And Digital LLC. Built in the open.
          </p>
        </div>
      </div>

      <div className={styles.barcode} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </footer>
  );
}
