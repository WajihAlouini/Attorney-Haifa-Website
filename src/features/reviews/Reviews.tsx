import { FC } from "react";
import { GoogleReview } from "@/types";
import styles from "./Reviews.module.css";
import { GoogleLogo } from "@/components/ui/GoogleLogo";

interface ReviewsProps {
  t: {
    reviewsEyebrow: string;
    reviewsHeading: string;
    reviews: GoogleReview[];
    loading: string;
    seeMoreReviews: string;
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
          <p>{t.loading}</p>
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            {reviewsToRender.map((item, index) => (
              <article
                key={item.author}
                className={styles.googleCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <header className={styles.cardHeader}>
                  <div className={styles.avatarWrapper}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.author}
                        className={styles.avatarImage}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.textAvatar}>
                        {item.author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.authorRow}>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.authorName}
                        >
                          {item.author}
                        </a>
                      ) : (
                        <span className={styles.authorName}>{item.author}</span>
                      )}
                    </div>
                    <div className={styles.subtext}>
                      Local Guide · 12 reviews
                    </div>
                  </div>
                  <GoogleLogo className={styles.googleLogo} />
                </header>

                <div className={styles.ratingRow}>
                  <span className={styles.stars}>{item.rating}</span>
                  <span className={styles.timeAgo}>a week ago</span>
                </div>

                <p className={styles.reviewBody}>{item.text}</p>

                {item.reviewImage && (
                  <div className={styles.reviewImageWrapper}>
                    <img
                      src={item.reviewImage}
                      alt="Review attachment"
                      className={styles.reviewImage}
                      loading="lazy"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
          {mapShareUrl && (
            <p className={styles.cta}>
              <a href={mapShareUrl} target="_blank" rel="noreferrer">
                {t.seeMoreReviews}
              </a>
            </p>
          )}
        </>
      )}
    </section>
  );
};
