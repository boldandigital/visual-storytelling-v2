import styles from './Footer.module.css';

const buildDate = new Date()
  .toISOString()
  .replace('T', ' ')
  .slice(0, 19) + ' UTC';

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
              <span className={styles.brandMarkPlus}>+</span>
              <span className={styles.brandMarkD}>D</span>
            </span>
            <span className={styles.brandText}>
              <span className="bk">[</span>
              BOLD_AND_DIGITAL
              <span className="bk">]</span>
            </span>
          </div>
          <p className={styles.tagline}>
            <span className="bk">// </span>
            Visual storytelling studio · est. 2022
          </p>
        </div>

        <div className={styles.middle}>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>BUILD</span>
            <span className={styles.statusVal}>v3.0.0{buildShort}</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>DEPLOYED</span>
            <span className={styles.statusVal}>{buildDate}</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>STACK</span>
            <span className={styles.statusVal}>next.js + three.js</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusKey}>CHANNEL</span>
            <span className={styles.statusVal}>hello@boldandigital.com</span>
          </div>
        </div>

        <div className={styles.right}>
          <nav className={styles.links} aria-label="Footer">
            <a href="#services">services</a>
            <a href="#work">work</a>
            <a href="#process">process</a>
            <a href="#contact">contact</a>
          </nav>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Bold And Digital LLC. Built in the open.
          </p>
        </div>
      </div>

      <div className={styles.barcode} aria-hidden="true">
        {Array.from({ length: 32 }).map((_, i) => (
          <span
            key={i}
            style={{ width: `${(i * 7) % 4 + 1}px`, opacity: (i * 13) % 7 === 0 ? 0.9 : 0.4 }}
          />
        ))}
      </div>
    </footer>
  );
}
