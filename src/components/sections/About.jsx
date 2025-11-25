import React from 'react'

export function About({ t }) {
    return (
        <section className="about" id="about">
            <div className="about-text">
                <p className="section-eyebrow">{t.aboutEyebrow}</p>
                <h2>{t.aboutHeading}</h2>
                <p>{t.aboutBody}</p>
                <div className="pillars">
                    {t.pillars.map((pillar) => (
                        <div key={pillar.title}>
                            <strong>{pillar.title}</strong>
                            <span>{pillar.detail}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about-card">
                <h3>{t.aboutHeading}</h3>
                <p>{t.aboutBody}</p>
                <p className="quote">“{t.heroTitle}”</p>
            </div>
        </section>
    )
}
