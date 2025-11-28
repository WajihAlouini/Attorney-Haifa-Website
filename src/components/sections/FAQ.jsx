import { useState } from "react";
import styles from "./FAQ.module.css";

export function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className="section-header">
          <p className="section-eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqHeading}</h2>
        </div>

        <div className={styles.grid}>
          {t.faq.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                openIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={styles.answer}
                style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
