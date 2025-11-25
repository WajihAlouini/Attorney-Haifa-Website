export function PracticeAreas({ t }) {
    return (
        <section className="practice" id="practice">
            <div className="section-header">
                <p className="section-eyebrow">{t.practiceEyebrow}</p>
                <h2>{t.practiceHeading}</h2>
            </div>
            <div className="section-grid practice-grid">
                {t.practiceAreas.map((area) => (
                    <article key={area.title} className="practice-card">
                        <h3>{area.title}</h3>
                        <p>{area.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

