import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tagline}>Precision. Safety. Durability.</span>
        <h1>Welcome to Meceleon — The Solution City!</h1>
        <p>
          World-class work-saving and safety tools backed by unmatched after-sales support.
          Meceleon empowers India’s industries with hydraulic, bolting, and pulling solutions.
        </p>
        <div className={styles.actions}>
          <Link href="/products" className="button">
            Explore Products
          </Link>
          <Link href="/contact" className={`${styles.secondary} button`}>
            Talk to an Expert
          </Link>
        </div>
      </div>
      <div className={styles.panel}>
        <ul>
          <li>Hydraulic Systems</li>
          <li>Precision Bolting</li>
          <li>Industrial Pullers</li>
          <li>Dedicated After-Sales</li>
        </ul>
      </div>
    </section>
  );
}
