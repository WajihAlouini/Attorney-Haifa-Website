import styles from "./Values.module.css";

export function Values({ t }) {
  return (
    <section className="values" id="values">
      <div className="section-header">
        <p className="section-eyebrow">{t.valuesEyebrow}</p>
        <h2>{t.valuesHeading}</h2>
      </div>
      <div className={styles.grid}>
        {t.values.map((value) => (
          <article key={value.title} className={styles.card}>
            <h3>{value.title}</h3>
            <p>{value.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
