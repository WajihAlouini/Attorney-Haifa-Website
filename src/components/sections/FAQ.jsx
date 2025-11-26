import { useState } from 'react'
import '../../styles/faq.css'

export function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqHeading}</h2>
        </div>

        <div className="faq-grid">
          {t.faq.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
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
  )
}
