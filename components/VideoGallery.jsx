import styles from '../styles/VideoGallery.module.css';

export function VideoGallery({ videos }) {
  return (
    <div className={styles.gallery}>
      {videos.map((video) => (
        <article key={video.title} className={styles.card}>
          <div className={styles.embed}>
            <iframe
              src={video.embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </article>
      ))}
    </div>
  );
}
