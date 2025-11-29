import { FC } from "react";
import { TranslationProps } from "@/types";
import styles from "./Approach.module.css";

export const Approach: FC<TranslationProps> = ({ t }) => {
  return (
    <section className="approach" id="approach">
      <div className="section-header">
        <p className="section-eyebrow">{t.approachEyebrow}</p>
        <h2>{t.approachHeading}</h2>
      </div>
      <div className={styles.steps}>
        {t.approach.map((step) => (
          <article key={step.phase}>
            <span>{step.phase}</span>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
