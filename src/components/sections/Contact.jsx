import { useState } from "react";
import styles from "./Contact.module.css";

export function Contact({
  t,
  whatsappLink,
  whatsappNumber,
  mapEmbedSrc,
  mapShareUrl,
}) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const formData = new FormData(e.target);

    // Add Web3Forms access key from environment
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    // Send to this email address
    formData.append("to_email", "wajih.alouini@esprit.tn");

    // Add additional info
    formData.append("subject", "Nouvelle demande de consultation - Site Web");
    formData.append("from_name", "Site Web - Haifa Guedhami Alouini");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        e.target.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className={styles.section} id="consult">
      <div className={styles.card}>
        <div>
          <p className="section-eyebrow">{t.consultEyebrow}</p>
          <h2>{t.consultHeading}</h2>
          <ul className={styles.list}>
            <li>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>{t.contact.whatsapp}</span>
              </div>
              <div className={styles.itemWithCopy}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  style={{ display: "inline-block" }}
                >
                  {whatsappNumber}
                </a>
                <button
                  className={styles.copyBtn}
                  onClick={() => copyToClipboard(whatsappNumber, "whatsapp")}
                  title="Copier"
                >
                  {copiedField === "whatsapp" ? "✓" : "📋"}
                </button>
              </div>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{t.contact.email}</span>
              </div>
              <div className={styles.itemWithCopy}>
                <a href="mailto:maitrealouiniguedhami@gmail.com">
                  maitrealouiniguedhami@gmail.com
                </a>
                <button
                  className={styles.copyBtn}
                  onClick={() =>
                    copyToClipboard("maitrealouiniguedhami@gmail.com", "email")
                  }
                  title="Copier"
                >
                  {copiedField === "email" ? "✓" : "📋"}
                </button>
              </div>
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{t.contact.office}</span>
              </div>
              {t.contactOffice}
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Hidden fields for Web3Forms */}
          <input
            type="hidden"
            name="redirect"
            value="https://hgalouini.com/merci"
          />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

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

          <button type="submit" className="btn primary" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : t.form.submit}
          </button>
        </form>
      </div>

      {showSuccess && (
        <div className={styles.successToast}>
          <div className={styles.successIcon}>✓</div>
          <div>
            <p style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
              Message envoyé avec succès!
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>
      )}

      {showError && (
        <div className={styles.errorToast}>
          <div className={styles.errorIcon}>✕</div>
          <div>
            <p style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
              Erreur d&apos;envoi
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Veuillez réessayer ou nous contacter par WhatsApp.
            </p>
          </div>
        </div>
      )}

      <div className={styles.mapCard} aria-label={t.mapLabel}>
        <iframe
          title="Kairouan Office Map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedSrc}
        ></iframe>
        <a
          className={styles.mapLink}
          href={mapShareUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.mapLinkLabel}
        </a>
      </div>
    </section>
  );
}
