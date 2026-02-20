import { FC } from "react";
import portraitImg from "@/assets/portrait/portrait.webp?format=avif;webp&w=1200&as=picture";
import { TranslationProps } from "@/types";
import styles from "./About.module.css";

export const About: FC<TranslationProps> = ({ t }) => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <picture>
            {Object.entries(portraitImg.sources).map(([format, src]) => (
              <source key={format} srcSet={src} type={`image/${format}`} />
            ))}
            <img
              src={portraitImg.img.src}
              alt="Maître Haifa Guedhami Alouini"
              className={styles.portrait}
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            />
          </picture>
        </div>
      </div>

      <div className={styles.contentColumn}>
        <div className={styles.text}>
          <p className="section-eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutHeading}</h2>
          <p>{t.aboutBody}</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.pillarsHeading}>
            <svg
              className={styles.pillarsIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            {t.pillarsEyebrow}
          </h3>
          <div className={styles.pillars}>
            {t.pillars.map((pillar) => (
              <div key={pillar.title}>
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
