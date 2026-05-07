import { FC, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { TranslationProps } from "@/types";
import styles from "./PracticeAreas.module.css";

export const PracticeAreas: FC<TranslationProps> = ({ t }) => {
  const location = useLocation();
  const lang = new URLSearchParams(location.search).get("lang");
  const localeSearch = lang === "en" || lang === "ar" ? `?lang=${lang}` : "";
  const icons: Record<number, ReactElement> = {
    // Family & Inheritance Law
    0: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    // Business & Corporate Law
    1: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    // Real Estate & Property
    2: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    // Criminal Law — scales of justice
    3: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18" />
        <path d="M5 21h14" />
        <path d="M5 7h14" />
        <path d="M5 7l-3 6a4 4 0 0 0 6 0z" />
        <path d="M19 7l-3 6a4 4 0 0 0 6 0z" />
      </svg>
    ),
  };

  const urls: Record<number, string> = {
    0: "/services/droit-de-la-famille",
    1: "/services/droit-des-affaires",
    2: "/services/droit-immobilier",
    3: "/services/droit-penal",
  };

  return (
    <section className="practice" id="practice">
      <div className="section-header">
        <p className="section-eyebrow">{t.practiceEyebrow}</p>
        <h2>{t.practiceHeading}</h2>
      </div>
      <div className={styles.grid}>
        {t.practiceAreas.map((area, index) => (
          <Link
            key={area.title}
            to={{
              pathname: urls[index] || "/services",
              search: localeSearch,
            }}
            className={styles.card}
          >
            <span className={styles.badgeIcon} aria-hidden="true">
              {icons[index]}
            </span>
            <h3 className={styles.title}>{area.title}</h3>
            <p className={styles.summary}>{area.summary}</p>
            <span className={styles.cta} aria-hidden="true">
              {t.ctas.secondary || "Learn more"}
              <span className={styles.ctaArrow}>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
