'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../data/navigation';
import styles from '../styles/HeaderNav.module.css';

export function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>Meceleon</div>
      <button
        className={styles.menuToggle}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <div key={link.href} className={styles.navItem}>
            <Link href={link.href}>{link.label}</Link>
            {link.children && (
              <div className={styles.submenu}>
                {link.children.map((child) => (
                  <Link key={child.href} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/contact" className={styles.cta}>
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
