export function Testimonials({ t }) {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section-header">
                <p className="section-eyebrow">{t.testimonialsEyebrow}</p>
                <h2>{t.testimonialsHeading}</h2>
            </div>
            <div className="testimonial-grid">
                {t.testimonials.map((item) => (
                    <blockquote key={item.author}>
                        <p>{item.quote}</p>
                        <footer>{item.author}</footer>
                    </blockquote>
                ))}
            </div>
        </section>
    )
}

