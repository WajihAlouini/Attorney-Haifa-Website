import { FC, useState } from "react";
import { GoogleReview } from "@/types";
import styles from "./Reviews.module.css";
import { GoogleLogo } from "@/components/ui/GoogleLogo";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewsProps {
  t: {
    reviewsEyebrow: string;
    reviewsHeading: string;
    reviews: GoogleReview[];
    loading: string;
    seeMoreReviews: string;
    shortLabel?: string;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const VISIBLE_COUNT = 3;
  const maxIndex = Math.max(0, reviewsToRender.length - VISIBLE_COUNT);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }
  };

  const handleImageError = (author: string) => {
    setImageErrors((prev) => new Set(prev).add(author));
  };

  const getLocale = (label: string) => {
    switch (label) {
      case "FR":
        return "fr";
      case "AR":
        return "ar";
      case "EN":
        return "en";
      default:
        return "en";
    }
  };

  const formatRelativeTime = (
    isoDate: string | null | undefined,
    staticDate: string | null | undefined
  ) => {
    if (!isoDate) return staticDate || "Recently";

    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return staticDate || "Recently";

    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInDays = Math.floor(diffInSeconds / 86400);

    let value = -diffInDays;
    let unit: Intl.RelativeTimeFormatUnit = "day";

    if (diffInDays >= 365) {
      value = -Math.round(diffInDays / 365);
      unit = "year";
    } else if (diffInDays >= 30) {
      value = -Math.round(diffInDays / 30);
      unit = "month";
    } else if (diffInDays >= 7) {
      value = -Math.round(diffInDays / 7);
      unit = "week";
    }

    try {
      const rtf = new Intl.RelativeTimeFormat(getLocale(t.shortLabel || "EN"), {
        numeric: "auto",
      });
      return rtf.format(value, unit);
    } catch {
      return staticDate || "Recently";
    }
  };

  const visibleReviews = reviewsToRender.slice(
    currentIndex,
    currentIndex + VISIBLE_COUNT
  );

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
          <div className={styles.carouselContainer}>
            <button
              className={`${styles.navButton} ${styles.navButtonLeft}`}
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous reviews"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.grid}>
              {visibleReviews.map((item, index) => (
                <article
                  key={item.author}
                  className={styles.googleCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <header className={styles.cardHeader}>
                    <div className={styles.avatarWrapper}>
                      {item.image && !imageErrors.has(item.author) ? (
                        <img
                          src={item.image}
                          alt={item.author}
                          className={styles.avatarImage}
                          loading="lazy"
                          onError={() => handleImageError(item.author)}
                        />
                      ) : (
                        <div className={styles.textAvatar}>
                          {item.author.charAt(0).toUpperCase()}
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
                          <span className={styles.authorName}>
                            {item.author}
                          </span>
                        )}
                      </div>
                      <div className={styles.subtext}>
                        {item.isLocalGuide && "Local Guide"}
                        {item.isLocalGuide && item.reviewsCount && " · "}
                        {item.reviewsCount && `${item.reviewsCount} reviews`}
                      </div>
                    </div>
                    <GoogleLogo className={styles.googleLogo} />
                  </header>

                  <div className={styles.ratingRow}>
                    <span className={styles.stars}>{item.rating}</span>
                    <span className={styles.timeAgo}>
                      {formatRelativeTime(item.isoDate, item.date)}
                    </span>
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

            <button
              className={`${styles.navButton} ${styles.navButtonRight}`}
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next reviews"
            >
              <ChevronRight size={24} />
            </button>
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
