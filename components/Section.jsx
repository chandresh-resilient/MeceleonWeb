import styles from '../styles/Section.module.css';

export function Section({ eyebrow, title, description, actions, children, background }) {
  return (
    <section className={styles.section} data-background={background ?? 'none'}>
      <div className={styles.inner}>
        {(eyebrow || title || description || actions) && (
          <header className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
            {actions && <div className={styles.actions}>{actions}</div>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
