import { FC } from "react";
import { TranslationProps } from "@/types";
import styles from "./Impact.module.css";

export const Impact: FC<TranslationProps> = ({ t }) => {
  const icons = [
    // 25+ Years - Award/Badge
    <svg
      key="years"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 15c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>,
    // 98% Satisfaction - Smile/Heart
    <svg
      key="satisfaction"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>,
    // 2000+ Cases - Gavel
    <svg
      key="cases"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 13l-2.5 2.5" />
      <path d="M6 9l2.5-2.5" />
      <path d="M13.5 8.5l-2-2" />
      <path d="M10.5 11.5l-2-2" />
      <path d="M21 21l-5-5" />
      <path d="M3 3l5 5" />
      <path d="M15 12l-1 1" />
      <path d="M12 15l-1 1" />
    </svg>,
    // 24/7 Support - Clock
    <svg
      key="support"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
