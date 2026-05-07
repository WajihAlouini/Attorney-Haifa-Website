import { FC } from "react";
import { TranslationProps } from "@/types";
import styles from "./Approach.module.css";

// Locale "phase" strings come in the form "01. First Meeting" / "02. Plain Language" /
// "01. الجلسة الأولى" — we split them into a numeral (rendered as a node) and a
// short label (rendered as the eyebrow) so the timeline reads cleanly.
function splitPhase(phase: string, fallbackIndex: number) {
  const match = phase.match(/^\s*(\d+)[.\s]+(.+)$/);
  if (match) {
    return { num: match[1].padStart(2, "0"), label: match[2].trim() };
  }
  return { num: String(fallbackIndex + 1).padStart(2, "0"), label: phase };
}

export const Approach: FC<TranslationProps> = ({ t }) => {
  return (
    <section className="approach" id="approach">
      <div className="section-header">
        <p className="section-eyebrow">{t.approachEyebrow}</p>
        <h2>{t.approachHeading}</h2>
      </div>

      <ol className={styles.timeline}>
        {t.approach.map((step, index) => {
          const { num, label } = splitPhase(step.phase, index);
          return (
            <li key={step.phase} className={styles.step}>
              <span className={styles.node} aria-hidden="true">
                {num}
              </span>
              <div className={styles.body}>
                <span className={styles.phaseLabel}>{label}</span>
                <p className={styles.detail}>{step.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
