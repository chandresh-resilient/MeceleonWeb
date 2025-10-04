import styles from '../styles/ResourceList.module.css';

export function ResourceList({ resources }) {
  return (
    <ul className={styles.list}>
      {resources.map((resource) => (
        <li key={resource.title} className={styles.item}>
          <div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
          {resource.action && (
            <a href={resource.action.href} className={styles.action}>
              {resource.action.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
