import { useState, useEffect } from 'react';
import { translations } from '../../data/translations'
import { trackLanguageChange } from '../../utils/analyticsHelpers';

export function Header({ locale, setLocale }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const t = translations[locale]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileMenuOpen && !e.target.closest('.nav-meta')) {
                setMobileMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [mobileMenuOpen])

    const handleLanguageChange = (newLocale) => {
        setLocale(newLocale)
        trackLanguageChange(newLocale)
        setMobileMenuOpen(false) // Close menu on language change
    }

    const handleNavClick = (e) => {
        const href = e.currentTarget.getAttribute('href')
        if (href?.startsWith('#')) {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
                const offset = 80 // Account for fixed nav
                const targetPosition = target.offsetTop - offset
                window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                setMobileMenuOpen(false)
            }
        }
    }

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
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
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileMenuOpen}
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
                            <span className="flag-emoji">{translations[key].flag}</span>
                            {translations[key].shortLabel}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

