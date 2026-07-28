import { CSSProperties, FC } from "react";
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
      <div className={styles.ledger}>
        {t.values.map((value, index) => {
          const Icon = icons[index] || Scale;
          return (
            <article
              key={value.title}
              className={styles.row}
              style={{ "--i": index } as CSSProperties}
            >
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.diamond}>
                  <Icon strokeWidth={1.5} size={20} />
                </span>
                <span className={styles.folio}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={styles.rowTitle}>{value.title}</h3>
              <p className={styles.rowDetail}>{value.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
