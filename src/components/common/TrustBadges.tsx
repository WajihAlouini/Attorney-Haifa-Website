import { FC } from "react";
import { Translation } from "@/types";
import googleRating from "@/data/google-rating.json";
import styles from "./TrustBadges.module.css";

interface TrustBadgesProps {
  t: Translation;
}

const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps?cid=2428048899655277535";

// Live rating synced daily by the SerpAPI pipeline
// (see scripts/fetch-reviews.mjs + .github/workflows/fetch-reviews.yml).
// Displayed with a single decimal using a period (e.g. "5.0") regardless
// of locale, so the Google-brand badge stays visually consistent.
const GOOGLE_RATING = googleRating.rating.toFixed(1);
const STAR_COUNT = Math.round(googleRating.rating);

export const TrustBadges: FC<TrustBadgesProps> = ({ t }) => {
  const member =
    t.trustBadgeMember ?? "Membre de l'Ordre National des Avocats de Tunisie";
  const ratingLabel = t.trustBadgeRatingLabel ?? "Note Google";
  const ratingAria =
    t.trustBadgeRatingAria ?? "Note Google 5 sur 5 étoiles, voir les avis";
  const court =
    t.trustBadgeCourt ?? "Cabinet habilité près la Cour de Cassation";

  return (
    <div className={styles.trustBadges}>
      <div className={styles.badge}>
        <div className={styles.iconWrapper}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </div>
        <span>{member}</span>
      </div>
      <a
        className={`${styles.badge} ${styles.googleBadge}`}
        href={GOOGLE_BUSINESS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ratingAria}
      >
        <div className={styles.googleIconWrapper} aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
        </div>
        <div className={styles.googleContent}>
          <span className={styles.googleLabel}>{ratingLabel}</span>
          <span className={styles.googleRatingRow}>
            <span className={styles.googleRatingValue}>{GOOGLE_RATING}</span>
            <span className={styles.googleStars} aria-hidden="true">
              {Array.from({ length: STAR_COUNT }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.1L12 17.3 5.7 21.3l1.7-7.1L2 9.5l7.1-.6L12 2z" />
                </svg>
              ))}
            </span>
          </span>
        </div>
      </a>
      <div className={styles.badge}>
        <div className={styles.iconWrapper}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>
        </div>
        <span>{court}</span>
      </div>
    </div>
  );
};
