import styles from "./Impact.module.css";

export function Impact({ t }) {
  return (
    <section className="impact fade-in-section">
      <div className="section-header">
        <p className="section-eyebrow">{t.impactEyebrow}</p>
        <h2>{t.impactHeading}</h2>
      </div>
      <div className={styles.grid}>
        {t.impactStats.map((stat, index) => {
          const icons = [
            // Calendar icon for years
            <svg
              key="calendar"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>,
            // Heart icon for satisfaction
            <svg
              key="heart"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>,
            // Folder icon for cases
            <svg
              key="folder"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>,
            // Clock icon for 24/7
            <svg
              key="clock"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>,
          ];

          return (
            <article key={stat.label} className={styles.card}>
              <div className={styles.icon}>{icons[index]}</div>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
