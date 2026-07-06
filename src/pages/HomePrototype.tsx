import { Suspense, lazy, FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import portraitImg from "@/assets/portrait/portrait.webp?format=avif;webp&w=1200&as=picture";
import portraitSmImg from "@/assets/portrait/portrait-sm.webp?format=avif;webp&w=520&as=picture";
import styles from "./HomePrototype.module.css";
import { Translation } from "@/types";
import { mapShareUrl, mapEmbedSrc, officePhotos } from "@/data/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { localizedTo } from "@/utils/localeRoutes";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { SEOHubLinks } from "@/components/common/SEOHubLinks";
import { GoogleLogo } from "@/components/ui/GoogleLogo";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";



// Lazy load standard sections that don't need overrides
const Contact = lazy(() =>
  import("@/features/contact").then((module) => ({
    default: module.Contact,
  }))
);
const FAQ = lazy(() =>
  import("@/features/faq").then((module) => ({
    default: module.FAQ,
  }))
);
const Gallery = lazy(() =>
  import("@/features/gallery").then((module) => ({
    default: module.Gallery,
  }))
);

interface HomePrototypeProps {
  t: Translation;
  locale: string;
  whatsappLink: string;
  whatsappNumber: string;
}

function renderPracticeIcon(index: number) {
  const icons: ReactNode[] = [
    // Family & Inheritance
    <svg
      key="family"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>,
    // Business & Corporate
    <svg
      key="business"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>,
    // Real Estate
    <svg
      key="realestate"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>,
    // Criminal Law
    <svg
      key="criminal"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6a4 4 0 0 0 6 0z" />
      <path d="M19 7l-3 6a4 4 0 0 0 6 0z" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

const practiceUrls: Record<number, string> = {
  0: "/services/droit-de-la-famille",
  1: "/services/droit-des-affaires",
  2: "/services/droit-immobilier",
  3: "/services/droit-penal",
};

export const HomePrototype: FC<HomePrototypeProps> = ({
  t,
  locale,
  whatsappLink,
  whatsappNumber,
}) => {
  useScrollAnimation();
  useMagneticButton();

  const languageCode = locale === "ar" ? "ar" : locale;
  const { reviews: liveReviews, isLoading: isLoadingReviews } = useGoogleReviews(locale, languageCode);

  const getLocaleCode = (label: string) => {
    switch (label) {
      case "FR": return "fr";
      case "AR": return "ar";
      case "EN": return "en";
      default: return "en";
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
      const rtf = new Intl.RelativeTimeFormat(getLocaleCode(t.shortLabel || "EN"), {
        numeric: "auto",
      });
      return rtf.format(value, unit);
    } catch {
      return staticDate || "Recently";
    }
  };

  const isRtl = locale === "ar";
  const mainHeading = t.heroTitle ?? t.heroHeading ?? t.brandTagline;
  const ledeText = t.heroSubheading ?? t.heroLede ?? t.aboutBody;

  const preloadBookingWidget = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("cal:preload"));
  };

  const handleBookingClick = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("cal:open"));
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Redesigned Premium Hero */}
      <section className={styles.hero} id="hero" data-rtl={isRtl}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroShell}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{t.heroEyebrow}</span>
            <h1 className={styles.brandName}>{t.brandName}</h1>
            <h2 className={`text-gradient-gold ${styles.mainTitle}`}>{mainHeading}</h2>
            <p className={styles.lede}>{ledeText}</p>
            <div className={styles.actions}>
              <button
                type="button"
                onClick={handleBookingClick}
                onMouseEnter={preloadBookingWidget}
                onFocus={preloadBookingWidget}
                className={`btn-magnetic ${styles.primaryBtn}`}
              >
                {t.ctas.bookOnline || "Book Online"}
              </button>
              <a
                href={whatsappLink}
                className={`btn-magnetic ${styles.whatsappBtn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.ctas.whatsapp || "WhatsApp"}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`btn-magnetic ${styles.secondaryBtn}`}
              >
                {t.ctas.primary || "Contact"}
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualFrame}>
              <div className={styles.portraitWrapper}>
                <picture>
                  {/* Mobile sources */}
                  {Object.entries(portraitSmImg.sources).map(([format, src]) => (
                    <source
                      key={`sm-${format}`}
                      srcSet={src}
                      type={`image/${format}`}
                      media="(max-width: 768px)"
                    />
                  ))}
                  {/* Desktop sources */}
                  {Object.entries(portraitImg.sources).map(([format, src]) => (
                    <source key={format} srcSet={src} type={`image/${format}`} />
                  ))}
                  <img
                    src={portraitImg.img.src}
                    alt={t.brandName}
                    className={styles.portrait}
                    fetchPriority="high"
                    decoding="async"
                    width="560"
                    height="700"
                  />
                </picture>
              </div>
              {t.heroMetrics?.[0] && (
                <div className={styles.visualBadge}>
                  <span className={styles.badgeValue}>{t.heroMetrics[0].value}</span>
                  <span className={styles.badgeLabel}>{t.heroMetrics[0].label}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ribbon */}
      <div className={styles.ribbon}>
        <div className={styles.ribbonGrid}>
          {t.heroMetrics?.slice(1).map((stat) => (
            <div key={stat.label} className={styles.ribbonItem}>
              <svg
                className={styles.ribbonIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{stat.value} {stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Redesigned About Section */}
      <section className={`${styles.section} fade-in-section`} id="about" data-rtl={isRtl}>
        <div className={styles.profileLayout}>
          <div className={styles.profileMeta}>
            <div className={styles.metaCard}>
              <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className={styles.metaValue}>25+</span>
              <span className={styles.metaLabel}>{t.heroMetrics?.[0]?.label || "Years Experience"}</span>
            </div>
            <div className={styles.metaCard}>
              <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className={styles.metaValue}>2000+</span>
              <span className={styles.metaLabel}>{t.heroMetrics?.[1]?.label || "Cases Resolved"}</span>
            </div>
            <div className={styles.metaCard} style={{ gridColumn: "span 2" }}>
              <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className={styles.metaValue}>FR · EN · AR</span>
              <span className={styles.metaLabel}>{t.heroMetrics?.[2]?.label || "Languages Spoken"}</span>
            </div>
          </div>

          <div className={styles.profileText}>
            <span className={styles.eyebrow}>{t.aboutEyebrow}</span>
            <h3 className="text-gradient-gold">{t.aboutHeading}</h3>
            <p>{t.aboutBody}</p>
            <div className={styles.profilePoints}>
              {t.aboutTrustPoints?.map((point) => (
                <div key={point} className={styles.point}>
                  <svg
                    className={styles.pointCheck}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className={styles.pointText}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Practice Areas */}
      <section className={`${styles.section} ${styles.sectionAlt} fade-in-section`} id="practice" data-rtl={isRtl}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>{t.practiceEyebrow}</span>
          <h2>{t.practiceHeading}</h2>
        </div>
        <div className={styles.practiceGrid}>
          {t.practiceAreas.map((area, index) => (
            <Link
              key={area.title}
              to={localizedTo(practiceUrls[index] || "/services", locale)}
              className={styles.practiceCard}
            >
              <div className={styles.practiceIcon}>{renderPracticeIcon(index)}</div>
              <h3 className={styles.practiceTitle}>{area.title}</h3>
              <p className={styles.practiceSummary}>{area.summary}</p>
              <span className={styles.practiceCta}>
                {t.ctas.secondary || "Learn more"}
                <span style={{ transition: "transform 0.3s ease" }}>➜</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Methodology Timeline */}
      <section className={`${styles.section} fade-in-section`} id="approach" data-rtl={isRtl}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>{t.approachEyebrow}</span>
          <h2>{t.approachHeading}</h2>
        </div>
        <div className={styles.timeline}>
          {t.approach.map((step, index) => (
            <div key={step.phase} className={styles.timelineStep}>
              <div className={styles.stepNode}>{(index + 1).toString().padStart(2, "0")}</div>
              <div className={styles.stepContent}>
                <h3>{step.phase}</h3>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redesigned Reviews Grid */}
      <section className={`${styles.section} ${styles.sectionAlt} fade-in-section`} id="reviews" data-rtl={isRtl}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>{t.reviewsEyebrow}</span>
          <h2>{t.reviewsHeading}</h2>
        </div>
        {isLoadingReviews ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div className="spinner" style={{ margin: "0 auto 1rem" }}></div>
            <p>{t.loading || "Loading reviews..."}</p>
          </div>
        ) : (
          <>
            <div className={styles.reviewsGrid}>
              {(liveReviews ?? t.reviews)?.map((review) => (
                <div key={review.author} className={styles.reviewCard}>
                  <header className={styles.cardHeader}>
                    <div className={styles.authorMeta}>
                      <div className={styles.avatarWrapper}>
                        {review.image ? (
                          <img
                            src={review.image}
                            alt={review.author}
                            className={styles.avatarImage}
                            loading="lazy"
                            width="40"
                            height="40"
                          />
                        ) : (
                          <div className={styles.textAvatar}>
                            {review.author.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className={styles.authorInfo}>
                        {review.link ? (
                          <a
                            href={review.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.authorName}
                          >
                            {review.author}
                          </a>
                        ) : (
                          <span className={styles.authorName}>{review.author}</span>
                        )}
                        <span className={styles.subtext}>
                          {review.isLocalGuide ? "Local Guide" : (t.reviewsNote || "Verified Client")}
                          {review.reviewsCount ? ` · ${review.reviewsCount} reviews` : ""}
                        </span>
                      </div>
                    </div>
                    <GoogleLogo className={styles.googleLogo} />
                  </header>

                  <div className={styles.ratingRow}>
                    <div className={styles.reviewStars}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={styles.starIcon} viewBox="0 0 24 24">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className={styles.timeAgo}>
                      {formatRelativeTime(review.isoDate, review.date)}
                    </span>
                  </div>

                  <p className={styles.reviewText}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {mapShareUrl && (
              <div className={styles.reviewsCta}>
                <a
                  href={mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reviewsCtaLink}
                >
                  <GoogleLogo className={styles.googleLogo} />
                  <span>{t.seeMoreReviews || "See more reviews"}</span>
                </a>
              </div>
            )}
          </>
        )}
      </section>

      {/* Legal Guides / SEO Hub Links */}
      <div className="fade-in-section">
        <SEOHubLinks locale={locale} />
      </div>

      {/* Standard FAQ & Contact */}
      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <FAQ t={t} />
        </Suspense>
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Contact
            t={t}
            whatsappLink={whatsappLink}
            whatsappNumber={whatsappNumber}
            mapEmbedSrc={mapEmbedSrc}
            mapShareUrl={mapShareUrl}
          />
        </Suspense>
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery t={t} officePhotos={officePhotos} />
        </Suspense>
      </div>
    </div>
  );
};
export default HomePrototype;
