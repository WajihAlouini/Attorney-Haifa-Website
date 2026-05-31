import { FC } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PhoneNumber } from "@/components/common/PhoneNumber";
import { trackWhatsAppClick } from "@/utils/analyticsHelpers";
import { Translation } from "@/types";
import styles from "./Contact.module.css";

interface ContactProps {
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
  mapEmbedSrc: string;
  mapShareUrl: string;
  hideHeader?: boolean;
}

const contactEmail = "maitrealouiniguedhami@gmail.com";

export const Contact: FC<ContactProps> = ({
  t,
  whatsappLink,
  whatsappNumber,
  mapEmbedSrc,
  mapShareUrl,
  hideHeader,
}) => {
  const mailSubject = encodeURIComponent("Nouvelle demande de consultation");

  return (
    <section className={styles.section} id="contact">
      <div className={styles.card}>
        <div>
          {!hideHeader && (
            <>
              <p className="section-eyebrow">{t.consultEyebrow}</p>
              <h2>{t.consultHeading}</h2>
            </>
          )}

          <ul className={styles.list}>
            <li className={styles.locationNotice}>
              <strong>{t.heroEyebrow}</strong>
              <span>{t.aboutTrustPoints[1]}</span>
            </li>

            <li>
              <div className={styles.iconWrapper}>
                <MessageCircle className={styles.icon} aria-hidden="true" />
                <span>{t.contact.whatsapp}</span>
              </div>
              <div className={styles.itemWithCopy}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                >
                  <PhoneNumber number={whatsappNumber} />
                </a>
              </div>
            </li>

            <li>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} aria-hidden="true" />
                <span>{t.contact.email}</span>
              </div>
              <div className={styles.itemWithCopy}>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </div>
            </li>

            <li>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} aria-hidden="true" />
                <span>{t.contact.office}</span>
              </div>
              <div className={styles.itemWithCopy}>
                <span>{t.contactOffice}</span>
              </div>
            </li>
          </ul>
        </div>

        <form
          className={styles.form}
          action={`mailto:${contactEmail}?subject=${mailSubject}`}
          method="post"
          encType="text/plain"
        >
          <h3 className={styles.formTitle}>{t.formTitle}</h3>

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

          {t.form.orgLabel ? (
            <label>
              {t.form.orgLabel}
              <input
                type="text"
                name="city_or_company"
                placeholder={t.form.orgPlaceholder}
              />
            </label>
          ) : null}

          <label>
            {t.form.messageLabel}
            <textarea
              name="message"
              rows={4}
              minLength={10}
              placeholder={t.form.messagePlaceholder}
              required
            />
          </label>

          <button type="submit" className="btn primary">
            {t.form.submit}
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
          width="100%"
          height="400"
          style={{ minHeight: "300px" }}
        />
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
