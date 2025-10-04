import Link from 'next/link';
import { navLinks, utilityLinks } from '../data/navigation';
import styles from '../styles/Footer.module.css';

const contactDetails = [
  'Apex Athena, Sector 75, Noida, UP, 201304',
  'Phone: +91 88820 08583',
  'Email: sales@meceleon.com',
  'Hours: Mon–Fri 09:00–17:00 | Sat–Sun Closed'
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>About Meceleon</h3>
          <p>
            We enhance performance and ensure precision, safety, and durability across
            industrial applications with trusted hydraulic, bolting, and pulling solutions.
          </p>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <div className={styles.links}>
            {navLinks.concat(utilityLinks).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <ul className={styles.contactList}>
            {contactDetails.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
          <a
            href="https://wa.me/918882008583"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className={styles.bottom}>© 2025 Meceleon Solutions Private Limited. All Rights Reserved.</div>
    </footer>
  );
}
