interface TestimonialsProps {
  t: any;
}

export function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <p className="section-eyebrow">{t.testimonialsEyebrow}</p>
        <h2>{t.testimonialsHeading}</h2>
      </div>
      <div className="testimonial-grid">
        {t.testimonials.map((item: any) => (
          <blockquote key={item.author}>
            <p>{item.quote}</p>
            <footer>{item.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
