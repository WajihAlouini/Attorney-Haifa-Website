import { FC, ReactNode } from "react";
import portraitImg from "@/assets/portrait/portrait.webp?format=avif;webp&w=1200&as=picture";
import styles from "./Hero.module.css";
import { Translation } from "@/types";

interface HeroProps {
  t: Translation;
  whatsappLink: string;
  locale: string;
}

function renderMetricIcon(index: number) {
  const icons: ReactNode[] = [
    <svg
      key="award"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 15c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>,
    <svg
      key="gavel"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21v-7" />
      <path d="M19 21v-7" />
      <path d="M10 21v-4" />
      <path d="M14 21v-4" />
      <rect x="2" y="10" width="20" height="4" rx="1" />
      <path d="M12 10V3" />
      <path d="M8 6h8" />
    </svg>,
    <svg
      key="globe"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}

function getCompactLede(text: string) {
  const sentences =
    text.match(/[^.!?؟]+[.!?؟]?/gu)?.map((sentence) => sentence.trim()) ?? [];

  if (!sentences.length) {
    return text;
  }

  let candidate = sentences[0];

  if (candidate.length < 70 && sentences[1]) {
    candidate = `${candidate} ${sentences[1]}`;
  }

  if (candidate.length <= 170) {
    return candidate;
  }

  const truncated = candidate.slice(0, 167);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : truncated.length)}...`;
}

function splitHeading(text: string) {
  const match = text.match(/^(.*?[.!?؟])\s*(.+)$/u);

  if (!match) {
    return { main: text, accent: null as string | null };
  }

  return { main: match[1], accent: match[2] };
}

export const Hero: FC<HeroProps> = ({ t, whatsappLink, locale }) => {
  const heading = t.heroTitle ?? t.heroHeading ?? t.brandTagline;
  const lede = getCompactLede(
    t.heroSubheading ?? t.heroLede ?? t.aboutBody
  );
  const isRtl = locale === "ar";
  const headingParts = splitHeading(heading);

  const preloadBookingWidget = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("cal:preload"));
  };

  const handleBookingClick = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("cal:open"));
  };

  return (
    <section className={styles.hero} id="hero" data-rtl={isRtl}>
      <div className={styles.shell}>
        <div className={styles.stage}>
          <div className={styles.copyColumn}>
            <span className={styles.eyebrow}>{t.heroEyebrow}</span>

            <p className={styles.brand}>{t.brandName}</p>
            <h1 className={styles.heading}>
              <span>{headingParts.main}</span>
              {headingParts.accent ? (
                <em>{headingParts.accent}</em>
              ) : null}
            </h1>
            <p className={styles.lede}>{lede}</p>

            <div className={styles.actions}>
              <button
                type="button"
                onClick={handleBookingClick}
                onMouseEnter={preloadBookingWidget}
                onFocus={preloadBookingWidget}
                className={`btn btn-magnetic ${styles.primaryButton}`}
              >
                {t.ctas.bookOnline || "Book Online"}
              </button>
              <a
                href={whatsappLink}
                className={`btn btn-magnetic ${styles.whatsappButton}`}
                target="_blank"
                rel="noreferrer"
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
                className={`btn btn-magnetic ${styles.ghostButton}`}
              >
                {t.ctas.primary || "Contact"}
              </a>
            </div>
          </div>

          <div className={styles.figureColumn}>
            <div className={styles.figureGlow} aria-hidden="true" />
            <div className={styles.figureInner}>
              <picture>
                {Object.entries(portraitImg.sources).map(([format, src]) => (
                  <source key={format} srcSet={src} type={`image/${format}`} />
                ))}
                <img
                  src={portraitImg.img.src}
                  alt={"Ma\u00eetre Haifa Guedhami Alouini"}
                  className={styles.portrait}
                  fetchPriority="high"
                  decoding="async"
                  width="560"
                  height="700"
                />
              </picture>
            </div>
          </div>
        </div>

        {t.heroMetrics?.length ? (
          <div className={styles.metricsRail}>
            {t.heroMetrics.map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className={styles.metric}
              >
                <div className={styles.metricIcon}>{renderMetricIcon(index)}</div>
                <div className={styles.metricBody}>
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
