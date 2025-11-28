import { useState, useEffect } from 'react'
import '../../styles/cookie-consent.css'

export function CookieConsent({ t }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // Small delay for animation
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true')
    setIsVisible(false)
    // Here you could trigger analytics load if you wanted strict opt-in
    // window.location.reload() // Optional: reload to activate scripts immediately
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite">
      <div className="cookie-content">
        <p>{t.cookieText || "This website uses cookies to ensure you get the best experience."}</p>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="btn-cookie-decline">
            {t.cookieDecline || "Decline"}
          </button>
          <button onClick={handleAccept} className="btn-cookie-accept">
            {t.cookieAccept || "Accept"}
          </button>
        </div>
      </div>
    </div>
  )
}
