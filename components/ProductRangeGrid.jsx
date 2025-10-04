import Link from 'next/link';
import styles from '../styles/ProductRangeGrid.module.css';

export function ProductRangeGrid({ categories }) {
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <article key={category.slug} className={styles.card}>
          <div className={styles.header}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
          <ul className={styles.list}>
            {category.items.map((item) => (
              <li key={item.name}>
                <span className={styles.itemName}>{item.name}</span>
                {item.summary && <p>{item.summary}</p>}
              </li>
            ))}
          </ul>
          <Link href={`/products/range/${category.slug}`} className={styles.link}>
            View details
          </Link>
        </article>
      ))}
    </div>
  );
}
