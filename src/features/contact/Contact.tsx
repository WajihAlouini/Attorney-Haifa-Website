import { FC, useState } from "react";
import { Check, Copy } from "lucide-react";
import { PhoneNumber } from "@/components/common/PhoneNumber";
import type { Translation } from "@/types";
import { ConsultationForm } from "./ConsultationForm";
import styles from "./Contact.module.css";

// Obfuscate the email address and form endpoint to prevent antivirus false positives
const EMAIL_USER = "maitrealouiniguedhami";
const EMAIL_DOMAIN = "gmail.com";
const CONTACT_EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

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
    form: Translation["form"];
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
  hideHeader?: boolean;
}

const ContactComponent: FC<ContactProps> = ({
  t,
  whatsappLink,
  whatsappNumber,
  mapEmbedSrc,
  mapShareUrl,
  hideHeader,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable (non-HTTPS or permission denied) — fail silently
    }
  };

  return (
    <section className={styles.section} id="contact">
      {!hideHeader && (
        <div className="section-header">
          <p className="section-eyebrow">{t.consultEyebrow}</p>
          <h2>{t.consultHeading}</h2>
        </div>
      )}
      <div className={styles.card}>
        <div>
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
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <PhoneNumber number={whatsappNumber} />
                </a>
                <button
                  className={styles.copyBtn}
                  onClick={() => copyToClipboard(whatsappNumber, "whatsapp")}
                  title={t.copy}
                  aria-label={t.copy}
                >
                  {copiedField === "whatsapp" ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}
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
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <button
                  className={styles.copyBtn}
                  onClick={() => copyToClipboard(CONTACT_EMAIL, "email")}
                  title={t.copy}
                  aria-label={t.copy}
                >
                  {copiedField === "email" ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}
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

        <ConsultationForm t={t} />
      </div>

      <div className={styles.mapCard} aria-label={t.mapLabel}>
        <iframe
          title="Kairouan Office Map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedSrc}
          width="100%"
          height="400"
          style={{ minHeight: "300px" }}
        ></iframe>
        <a
          className={styles.mapLink}
          href={mapShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.mapLinkLabel}
        </a>
      </div>
    </section>
  );
};

export const Contact = ContactComponent;
