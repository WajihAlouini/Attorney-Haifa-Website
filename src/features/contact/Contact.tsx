import { FC, useState, FormEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./Contact.module.css";

interface ContactProps {
  t: {
    consultEyebrow: string;
    consultHeading: string;
    contact: {
      whatsapp: string;
      email: string;
      office: string;
    };
    contactOffice: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
    mapLabel: string;
    mapLinkLabel: string;
    emailLabel: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
  };
  whatsappLink: string;
  whatsappNumber: string;
  mapEmbedSrc: string;
  mapShareUrl: string;
}

const ContactComponent: FC<ContactProps> = ({
  t,
  whatsappLink,
  whatsappNumber,
  mapEmbedSrc,
  mapShareUrl,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setShowSuccess(false);
    setIsClosing(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("to_email", "wajih.alouini@esprit.tn");
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
        form.reset();
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(() => {
            setShowSuccess(false);
            setIsClosing(false);
          }, 300);
        }, 5000);
      } else {
        setShowError(true);
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(() => {
            setShowError(false);
            setIsClosing(false);
          }, 300);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowError(true);
      setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          setShowError(false);
          setIsClosing(false);
        }, 300);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseToast = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowError(false);
      setIsClosing(false);
    }, 300);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      <section className={styles.section} id="contact">
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
                      copyToClipboard(
                        "maitrealouiniguedhami@gmail.com",
                        "email"
                      )
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

                <div className={styles.itemWithCopy}>
                  <span>{t.contactOffice}</span>
                </div>
              </li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="redirect"
              value="https://hgalouini.com/merci"
            />

            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

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
              {t.emailLabel}
              <input
                type="email"
                name="email"
                placeholder={t.form.emailPlaceholder}
                required
              />
            </label>

            <label>
              {t.form.messageLabel}
              <textarea
                name="message"
                rows={4}
                placeholder={t.form.messagePlaceholder}
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="btn primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.submitting : t.form.submit}
            </button>
          </form>
        </div>

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

      {showSuccess &&
        createPortal(
          <div
            className={`${styles.successToast} ${
              isClosing ? styles.toastExit : styles.toastEnter
            }`}
          >
            <div className={styles.toastContent}>
              <div className={styles.successIcon}>✓</div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
                  {t.successTitle}
                </p>
                <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                  {t.successMessage}
                </p>
              </div>
              <button
                className={styles.toastClose}
                onClick={handleCloseToast}
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
            <div className={styles.progressBar}></div>
          </div>,
          document.body
        )}

      {showError &&
        createPortal(
          <div
            className={`${styles.errorToast} ${
              isClosing ? styles.toastExit : styles.toastEnter
            }`}
          >
            <div className={styles.toastContent}>
              <div className={styles.errorIcon}>✕</div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
                  {t.errorTitle}
                </p>
                <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                  {t.errorMessage}
                </p>
              </div>
              <button
                className={styles.toastClose}
                onClick={handleCloseToast}
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
            <div className={styles.progressBar}></div>
          </div>,
          document.body
        )}
    </>
  );
};

export const Contact = ContactComponent;
