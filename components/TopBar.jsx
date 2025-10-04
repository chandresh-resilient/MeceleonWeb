import Link from 'next/link';
import styles from '../styles/TopBar.module.css';

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <span className={styles.message}>
        Welcome to Meceleon — check our latest brochure in Downloads.
      </span>
      <div className={styles.meta}>
        <a href="tel:+918882008583" className={styles.phone}>
          +91 88820 08583
        </a>
        <Link href="/downloads" className={styles.link}>
          View Downloads
        </Link>
      </div>
    </div>
  );
}
