import styles from "./PracticeAreas.module.css";

export function PracticeAreas({ t }) {
  const icons = {
    // Business & Corporate Law
    0: (
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    // Real Estate & Property
    1: (
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    // Family & Inheritance Law
    2: (
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  };

  return (
    <section className="practice" id="practice">
      <div className="section-header">
        <p className="section-eyebrow">{t.practiceEyebrow}</p>
        <h2>{t.practiceHeading}</h2>
      </div>
      <div className={styles.grid}>
        {t.practiceAreas.map((area, index) => (
          <article key={area.title} className={styles.card}>
            {icons[index]}
            <h3>{area.title}</h3>
            <p>{area.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
