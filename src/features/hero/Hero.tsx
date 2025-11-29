import { FC } from "react";
import styles from "./Hero.module.css";
import { heroBg } from "@/data/constants";

interface HeroProps {
  t: any;
  whatsappLink: string;
  locale: string;
}

export const Hero: FC<HeroProps> = ({ t, whatsappLink }) => {
  const handleBookingClick = () => {
    // Use the namespaced Cal instance
    const Cal = (window as any).Cal;
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
          <a href="#contact" className="btn ghost btn-magnetic">
            {t.ctas.primary || "Contact"}
          </a>
        </div>

        <div className={styles.metrics}>
          {t.heroMetrics?.map((stat: any, index: number) => (
            <div key={index} className={styles.metric}>
              <div className={styles.metricIcon}>
                {index === 0 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
