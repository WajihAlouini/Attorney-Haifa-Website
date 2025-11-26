import { useState } from 'react';
import { translations } from '../../data/translations'
import { trackLanguageChange } from '../../utils/analyticsHelpers';

export function Header({ locale, setLocale }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const t = translations[locale]

    const handleLanguageChange = (newLocale) => {
        setLocale(newLocale)
        trackLanguageChange(newLocale)
    }

    const handleNavClick = (e) => {
        const href = e.currentTarget.getAttribute('href')
        if (href?.startsWith('#')) {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                setMobileMenuOpen(false)
            }
        }
    }

    return (
        <nav className="nav">
            <div className="brand">
                <img src="/favicon.png" alt="Logo" className="brand-mark" />
                <div className="brand-copy">
                    <span>Haifa Guedhami Alouini</span>
                    <small>{t.brandTagline}</small>
                </div>
            </div>
            <div className="nav-meta">
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#about" onClick={handleNavClick}>{t.nav.about}</a>
                    <a href="#practice" onClick={handleNavClick}>{t.nav.practice}</a>
                    <a href="#values" onClick={handleNavClick}>{t.nav.values}</a>
                    <a href="#approach" onClick={handleNavClick}>{t.nav.approach}</a>
                    <a href="#reviews" onClick={handleNavClick}>{t.nav.reviews}</a>
                    <a className="nav-cta" href="#consult" onClick={handleNavClick}>
                        {t.nav.consult}
                    </a>
                </div>
                <div className="lang-toggle" role="group" aria-label={t.languageLabel}>
                    {Object.keys(translations).map((key) => (
                        <button
                            key={key}
                            type="button"
                            className={`lang-btn ${locale === key ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(key)}
                            aria-pressed={locale === key}
                        >
                            {translations[key].shortLabel}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

