import { FC, useState, FormEvent } from "react";
import styles from "./Contact.module.css";
import { Toast, ToastType } from "@/components/ui/Toast";

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
    copy: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    show: boolean;
    type: ToastType;
    title: string;
    message: string;
  }>({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast((prev) => ({ ...prev, show: false })); // Hide existing

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
        form.reset();
        setToast({
          show: true,
          type: "success",
          title: t.successTitle,
          message: t.successMessage,
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setToast({
        show: true,
        type: "error",
        title: t.errorTitle,
        message: t.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
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
              {/* WhatsApp */}
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
                    title={t.copy}
                    aria-label={t.copy}
                  >
                    {copiedField === "whatsapp" ? "✓" : "📋"}
                  </button>
                </div>
              </li>

              {/* Email */}
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
                    title={t.copy}
                    aria-label={t.copy}
                  >
                    {copiedField === "email" ? "✓" : "📋"}
                  </button>
                </div>
              </li>

              {/* Office */}
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

      <Toast
        show={toast.show}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </>
  );
};

export const Contact = ContactComponent;
