import { useState, useEffect } from "react";
import { BookingModal } from "../utils/BookingModal";
import { trackBookingOpen } from "../../utils/analyticsHelpers";
import { getBookingConfig } from "../../utils/scheduling";

export function Hero({ t, whatsappLink, locale }) {
  const [typedText, setTypedText] = useState("");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const fullText = t.heroTitle;
  const typingSpeed = 50;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  const handleBookOnline = () => {
    trackBookingOpen();
    setIsCalendlyOpen(true);
  };

  return (
    <>
      <header className="hero" id="home">
        {/* Animated background particles */}
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">{t.heroEyebrow}</p>
          <h1 className="hero-title-animated">
            {typedText}
            <span className="cursor-blink">|</span>
          </h1>
          <p className="hero-lede">{t.heroLede}</p>
          <div className="hero-actions">
            <button
              className="btn primary btn-shine btn-magnetic"
              onClick={handleBookOnline}
            >
              <span>{t.ctas.bookOnline}</span>
            </button>
            <a className="btn ghost btn-glow btn-magnetic" href="#practice">
              <span>{t.ctas.secondary}</span>
            </a>
            <a
              className="btn whatsapp btn-pulse btn-magnetic"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <span>{t.ctas.whatsapp}</span>
            </a>
          </div>

          <div className="hero-metrics">
            {t.heroMetrics.map((metric, index) => {
              const icons = [
                // Trophy icon for years
                <svg
                  key="trophy"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>,
                // Briefcase icon for cases
                <svg
                  key="briefcase"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>,
                // Globe icon for languages
                <svg
                  key="globe"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>,
              ];

              return (
                <div
                  key={metric.label}
                  className="metric metric-animated"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="metric-icon">{icons[index]}</div>
                  <CountUpMetric value={metric.value} delay={index * 200} />
                  <p>{metric.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </header>

      <BookingModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calLink={getBookingConfig(locale).calLink}
        locale={locale}
      />
    </>
  );
}

function CountUpMetric({ value, delay }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [numericValue, delay]);

  return (
    <span className="metric-value">
      {count}
      {suffix}
    </span>
  );
}
