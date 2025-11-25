import React, { useState } from 'react'

export function Contact({
  t,
  whatsappLink,
  whatsappNumber,
  mapEmbedSrc,
  mapShareUrl,
}) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copiedField, setCopiedField] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)

    const formData = new FormData(e.target)
    
    // Add Web3Forms access key from environment
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
    
    // Send to this email address
    formData.append('to_email', 'wajih.alouini@esprit.tn')
    
    // Add additional info
    formData.append('subject', 'Nouvelle demande de consultation - Site Web')
    formData.append('from_name', 'Site Web - Haifa Guedhami Alouini')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setShowSuccess(true)
        e.target.reset()
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setShowError(true)
        setTimeout(() => setShowError(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section className="consult" id="consult">
      <div className="consult-card">
        <div>
          <p className="section-eyebrow">{t.consultEyebrow}</p>
          <h2>{t.consultHeading}</h2>
          <ul className="contact-list">
            <li>
              <span>{t.contact.whatsapp}</span>
              <div className="contact-item-with-copy">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  {whatsappNumber}
                </a>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(whatsappNumber, 'whatsapp')}
                  title="Copier"
                >
                  {copiedField === 'whatsapp' ? '✓' : '📋'}
                </button>
              </div>
            </li>
            <li>
              <span>{t.contact.email}</span>
              <div className="contact-item-with-copy">
                <a href="mailto:counsel@hgalouini.com">counsel@hgalouini.com</a>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('counsel@hgalouini.com', 'email')}
                  title="Copier"
                >
                  {copiedField === 'email' ? '✓' : '📋'}
                </button>
              </div>
            </li>
            <li>
              <span>{t.contact.office}</span>
              {t.contactOffice}
            </li>
          </ul>
        </div>

        <form className="consult-form" onSubmit={handleSubmit}>
          {/* Hidden fields for Web3Forms */}
          <input type="hidden" name="redirect" value="https://hgalouini.com/merci" />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <label>
            {t.form.nameLabel}
            <input
              type="text"
              name="name"
              placeholder={t.form.namePlaceholder}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
            />
          </label>

          <label>
            {t.form.messageLabel}
            <textarea
              name="message"
              rows="4"
              placeholder={t.form.messagePlaceholder}
              required
            ></textarea>
          </label>

          <button 
            type="submit" 
            className="btn primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : t.form.submit}
          </button>
        </form>
      </div>

      {showSuccess && (
        <div className="success-toast">
          <div className="success-icon">✓</div>
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Message envoyé avec succès!</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      )}

      {showError && (
        <div className="error-toast">
          <div className="error-icon">✕</div>
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Erreur d'envoi</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Veuillez réessayer ou nous contacter par WhatsApp.</p>
          </div>
        </div>
      )}

      <div className="map-card" aria-label={t.mapLabel}>
        <iframe
          title="Kairouan Office Map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedSrc}
        ></iframe>
        <a
          className="map-link"
          href={mapShareUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.mapLinkLabel}
        </a>
      </div>
    </section>
  )
}
