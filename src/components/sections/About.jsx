export function About({ t }) {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <p className="section-eyebrow">{t.aboutEyebrow}</p>
        <h2>{t.aboutHeading}</h2>
        <p>{t.aboutBody}</p>
      </div>
      <div className="about-card">
        <h3 className="pillars-heading">
          <svg
            className="pillars-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          Domaines Clés
        </h3>
        <div className="pillars">
          {t.pillars.map((pillar) => (
            <div key={pillar.title}>
              <strong>{pillar.title}</strong>
              <span>{pillar.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
