import { useEffect, useState } from 'react'
import './App.css'
import { translations } from './data/translations'
import {
  whatsappNumber,
  mapShareUrl,
  mapEmbedSrc,
  GOOGLE_PLACE_ID,
  officePhotos,
} from './data/constants'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { PracticeAreas } from './components/sections/PracticeAreas'
import { Values } from './components/sections/Values'
import { Approach } from './components/sections/Approach'
import { Reviews } from './components/sections/Reviews'
import { Contact } from './components/sections/Contact'
import { Gallery } from './components/sections/Gallery'

function App() {
  const [locale, setLocale] = useState('fr')
  const [liveReviews, setLiveReviews] = useState(null)
  const [isLoadingReviews, setIsLoadingReviews] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const t = translations[locale]
  const direction = locale === 'ar' ? 'rtl' : 'ltr'
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`
  const year = new Date().getFullYear()
  const languageCode = locale === 'ar' ? 'ar' : locale

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in-section')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Magnetic button effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const buttons = document.querySelectorAll('.btn-magnetic')
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const distance = Math.sqrt(x * x + y * y)

        if (distance < 100) {
          const strength = (100 - distance) / 100
          button.style.transform = `translate(${x * strength * 0.2}px, ${y * strength * 0.2}px)`
        } else {
          button.style.transform = 'translate(0, 0)'
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_KEY
    if (
      !apiKey ||
      !GOOGLE_PLACE_ID ||
      GOOGLE_PLACE_ID.includes('REPLACE_WITH_GOOGLE_PLACE_ID')
    ) {
      return
    }

    const controller = new AbortController()

    const loadReviews = async () => {
      setIsLoadingReviews(true)
      try {
        const response = await fetch(
          `https://places.googleapis.com/v1/${GOOGLE_PLACE_ID}?languageCode=${languageCode}`,
          {
            headers: {
              'X-Goog-Api-Key': apiKey,
              'X-Goog-FieldMask': 'reviews',
            },
            signal: controller.signal,
          },
        )

        if (!response.ok) {
          throw new Error('Failed to load reviews')
        }

        const data = await response.json()
        if (Array.isArray(data.reviews) && data.reviews.length) {
          const normalized = data.reviews.slice(0, 6).map((review) => {
            const ratingValue = Math.round(review.rating ?? 5)
            const safeRating = Math.min(5, Math.max(1, ratingValue))
            const stars = '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating)
            return {
              rating: stars,
              text:
                review.originalText?.text ||
                review.text ||
                translations[locale].reviewsNote,
              author:
                review.authorAttribution?.displayName || 'Google Maps user',
            }
          })
          setLiveReviews(normalized)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.warn('Google Reviews request skipped:', error.message)
        }
      } finally {
        setIsLoadingReviews(false)
      }
    }

    loadReviews()

    return () => controller.abort()
  }, [languageCode, locale])

  return (
    <div className="site-shell" dir={direction}>
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <div className="glow glow-one" aria-hidden="true"></div>
      <div className="glow glow-two" aria-hidden="true"></div>

      <Header locale={locale} setLocale={setLocale} />

      <Hero t={t} whatsappLink={whatsappLink} />

      <main>
        <div className="fade-in-section"><About t={t} /></div>
        <div className="fade-in-section"><PracticeAreas t={t} /></div>
        <div className="fade-in-section"><Values t={t} /></div>
        <div className="fade-in-section"><Approach t={t} /></div>
        <section className="impact fade-in-section">
          <div className="section-header">
            <p className="section-eyebrow">{t.impactEyebrow}</p>
            <h2>{t.impactHeading}</h2>
          </div>
          <div className="impact-grid">
            {t.impactStats.map((stat) => (
              <article key={stat.label} className="impact-card">
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="fade-in-section">
          <Reviews t={t} liveReviews={liveReviews} mapShareUrl={mapShareUrl} isLoading={isLoadingReviews} />
        </div>
        <div className="fade-in-section">
          <Contact
            t={t}
            whatsappLink={whatsappLink}
            whatsappNumber={whatsappNumber}
            mapEmbedSrc={mapEmbedSrc}
            mapShareUrl={mapShareUrl}
          />
        </div>
        <div className="fade-in-section"><Gallery t={t} officePhotos={officePhotos} /></div>
      </main>

      <Footer t={t} year={year} />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}

      <a
        href={whatsappLink}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label={t.ctas.whatsapp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  )
}

export default App
