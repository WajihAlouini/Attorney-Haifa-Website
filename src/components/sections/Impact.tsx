import { FC } from "react";
import { TranslationProps } from "@/types";
import styles from "./Impact.module.css";

export const Impact: FC<TranslationProps> = ({ t }) => {
  const icons = [
    <svg
      key="shield"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    <svg
      key="users"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    <svg
      key="award"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>,
  ];

  return (
    <section className="impact fade-in-section">
      <div className="section-header">
        <p className="section-eyebrow">{t.impactEyebrow}</p>
        <h2>{t.impactHeading}</h2>
      </div>
      <div className={styles.grid}>
        {t.impactStats.map((stat, index) => (
          <article key={stat.label} className={styles.card}>
            <div className={styles.icon}>{icons[index]}</div>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
