import styles from "./Approach.module.css";

export function Approach({ t }) {
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
}
