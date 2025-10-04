import styles from '../styles/PageIntro.module.css';

export function PageIntro({ title, tagline, description, children }) {
  return (
    <section className={styles.intro}>
      <div className={styles.copy}>
        {tagline && <span className={styles.tagline}>{tagline}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {children && <div className={styles.extra}>{children}</div>}
    </section>
  );
}
