import { FC } from "react";
import { TranslationProps } from "@/types";
import styles from "./About.module.css";

export const About: FC<TranslationProps> = ({ t }) => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        {/* Left: heading + body text */}
        <div className={styles.textColumn}>
          <p className="section-eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutHeading}</h2>
          <p className={styles.body}>{t.aboutBody}</p>

          {/* Trust points as a compact inline list */}
          <ul className={styles.trustList}>
            {t.aboutTrustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right: pillars */}
        <div className={styles.pillarsColumn}>
          <h3 className={styles.pillarsHeading}>
            <svg
              className={styles.pillarsIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            {t.pillarsEyebrow}
          </h3>
          <div className={styles.pillars}>
            {t.pillars.map((pillar) => (
              <div key={pillar.title} className={styles.pillar}>
                <strong>{pillar.title}</strong>
                <span>{pillar.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
