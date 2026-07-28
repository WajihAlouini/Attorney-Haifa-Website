import { FC } from "react";
import { TranslationProps } from "@/types";
import { Scale, Award, FileText, HeartHandshake } from "lucide-react";
import styles from "./Values.module.css";

const icons = [Scale, Award, FileText, HeartHandshake];

export const Values: FC<TranslationProps> = ({ t }) => {
  return (
    <section className="values" id="values">
      <div className="section-header">
        <p className="section-eyebrow">{t.valuesEyebrow}</p>
        <h2>{t.valuesHeading}</h2>
      </div>
      <div className={styles.grid}>
        {t.values.map((value, index) => {
          const Icon = icons[index] || Scale;
          return (
            <article key={value.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon strokeWidth={1.5} size={32} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
