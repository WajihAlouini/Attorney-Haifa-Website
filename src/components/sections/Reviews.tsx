import { FC } from "react";
import { GoogleReview } from "@/types";
import styles from "./Reviews.module.css";

interface ReviewsProps {
  t: {
    reviewsEyebrow: string;
    reviewsHeading: string;
    reviews: GoogleReview[];
  };
  liveReviews: GoogleReview[] | null;
  mapShareUrl: string;
  isLoading: boolean;
}

export const Reviews: FC<ReviewsProps> = ({
  t,
  liveReviews,
  mapShareUrl,
  isLoading,
}) => {
  const reviewsToRender = liveReviews ?? t.reviews;

  return (
    <section className="reviews" id="reviews">
      <div className="section-header">
        <p className="section-eyebrow">{t.reviewsEyebrow}</p>
        <h2>{t.reviewsHeading}</h2>
      </div>
      {isLoading ? (
        <div className={styles.loading}>
          <div className="spinner"></div>
          <p>Chargement...</p>
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            {reviewsToRender.map((item, index) => (
              <article
                key={item.author}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.avatar}>{item.author.charAt(0)}</div>
                <span className={styles.rating}>{item.rating}</span>
                <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
                <footer className={styles.author}>{item.author}</footer>
              </article>
            ))}
          </div>
          {mapShareUrl && (
            <p className={styles.cta}>
              <a href={mapShareUrl} target="_blank" rel="noreferrer">
                Voir plus d&apos;avis →
              </a>
            </p>
          )}
        </>
      )}
    </section>
  );
};
