import styles from '../styles/FeatureGrid.module.css';

export function FeatureGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.link && (
            <a href={item.link.href} className={styles.link}>
              {item.link.label}
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
