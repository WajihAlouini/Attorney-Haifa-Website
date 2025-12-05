import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { heroBg } from "@/data/constants";
import { Translation } from "@/types";

interface HeroProps {
  t: Translation;
  whatsappLink: string;
  locale: string;
}

interface CalWindow {
  Cal?: {
    (action: string, options: { calLink: string }): void;
    ns?: Record<string, (action: string, options: { calLink: string }) => void>;
  };
}

export const Hero: FC<HeroProps> = ({ t, whatsappLink }) => {
  const handleBookingClick = () => {
    // Use the namespaced Cal instance
    const Cal = (window as CalWindow).Cal;
    if (Cal && Cal.ns && Cal.ns["wajjih-alouini-eis3ub"]) {
      Cal.ns["wajjih-alouini-eis3ub"]("modal", {
        calLink: "wajjih-alouini-eis3ub/30min",
      });
    } else if (Cal) {
      // Fallback to direct call
      Cal("modal", {
        calLink: "wajjih-alouini-eis3ub/30min",
      });
    } else {
      console.error("Cal.com not loaded yet");
    }
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
      id="hero"
    >
      <div className={`${styles.content} fade-in-section`}>
        <span className={styles.eyebrow}>{t.heroEyebrow}</span>
        <h1>{t.heroTitle}</h1>
        <p className={styles.lede}>{t.heroLede}</p>

        <div className={styles.actions}>
          <a
            href={whatsappLink}
            className="btn whatsapp btn-magnetic"
            target="_blank"
            rel="noreferrer"
          >
            {t.ctas.whatsapp || "WhatsApp"}
          </a>
          <button
            onClick={handleBookingClick}
            className="btn primary btn-magnetic"
          >
            {t.ctas.bookOnline || "Book Online"}
          </button>
          <Link to="/contact" className="btn ghost btn-magnetic">
            {t.ctas.primary || "Contact"}
          </Link>
        </div>

        <div className={styles.metrics}>
          {t.heroMetrics?.map((stat, index) => (
            <div key={index} className={styles.metric}>
              <div className={styles.metricIcon}>
                {index === 0 && (
                  // Years of Excellence - Award/Badge Icon
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 15c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                )}
                {index === 1 && (
                  // Cases Resolved - Gavel/Scale Icon
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21v-7" />
                    <path d="M19 21v-7" />
                    <path d="M10 21v-4" />
                    <path d="M14 21v-4" />
                    <rect x="2" y="10" width="20" height="4" rx="1" />
                    <path d="M12 10V3" />
                    <path d="M8 6h8" />
                  </svg>
                )}
                {index === 2 && (
                  // Languages - Globe Icon
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
              </div>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
