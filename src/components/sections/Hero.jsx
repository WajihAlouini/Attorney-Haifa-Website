import { useState, useEffect } from 'react';

export function Hero({ t, whatsappLink }) {
    const [typedText, setTypedText] = useState('')
    const fullText = t.heroTitle
    const typingSpeed = 50

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, typingSpeed)

        return () => clearInterval(interval)
    }, [fullText])

    return (
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
                    <a className="btn primary btn-shine btn-magnetic" href="#consult">
                        <span>{t.ctas.primary}</span>
                    </a>
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
                    {t.heroMetrics.map((metric, index) => (
                        <div
                            key={metric.label}
                            className="metric metric-animated"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <CountUpMetric value={metric.value} delay={index * 200} />
                            <p>{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </header>
    )
}

function CountUpMetric({ value, delay }) {
    const [count, setCount] = useState(0)
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0
    const suffix = value.replace(/[0-9]/g, '')

    useEffect(() => {
        const timeout = setTimeout(() => {
            const duration = 2000
            const steps = 60
            const increment = numericValue / steps
            let current = 0

            const interval = setInterval(() => {
                current += increment
                if (current >= numericValue) {
                    setCount(numericValue)
                    clearInterval(interval)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)

            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [numericValue, delay])

    return <span className="metric-value">{count}{suffix}</span>
}
