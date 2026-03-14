import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TrustBadges } from "@/components/common/TrustBadges";
import { SEOHubLinks } from "@/components/common/SEOHubLinks";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { PhoneNumber } from "@/components/common/PhoneNumber";
import { mapEmbedSrc, mapShareUrl } from "@/data/constants";
import { getServiceDetailByKey, ServiceDetailKey } from "@/data/serviceDetails";
import { getServiceEnhancement } from "@/data/serviceEnhancements";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Translation } from "@/types";
import styles from "./ServiceDetailPage.module.css";

const Contact = lazy(() =>
  import("@/features/contact").then((module) => ({
    default: module.Contact,
  }))
);

interface ServiceDetailPageProps {
  locale: string;
  serviceKey: ServiceDetailKey;
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

function getLocaleSearch(locale: string) {
  if (locale === "en" || locale === "ar") {
    return `?lang=${locale}`;
  }

  return "";
}

function buildLinkTarget(path: string, locale: string) {
  if (path.startsWith("/actualites/")) {
    return { pathname: path, search: "" };
  }

  return { pathname: path, search: getLocaleSearch(locale) };
}

function getUiCopy(locale: string) {
  if (locale === "en") {
    return {
      servicesLabel: "Practice areas",
      processLabel: "How we work",
      documentsLabel: "Prepare these documents",
      whatsappLabel: "WhatsApp",
    };
  }

  if (locale === "ar") {
    return {
      servicesLabel: "مجالات التخصص",
      processLabel: "كيف نعمل",
      documentsLabel: "وثائق مفيدة",
      whatsappLabel: "واتساب",
    };
  }

  return {
    servicesLabel: "Domaines de pratique",
    processLabel: "Notre methode",
    documentsLabel: "Documents utiles",
    whatsappLabel: "WhatsApp",
  };
}

export function ServiceDetailPage({
  locale,
  serviceKey,
  t,
  whatsappLink,
  whatsappNumber,
}: Readonly<ServiceDetailPageProps>) {
  useScrollAnimation();
  useMagneticButton();

  const detail = getServiceDetailByKey(serviceKey, locale);
  const enhancement = getServiceEnhancement(serviceKey, locale);
  const uiCopy = getUiCopy(locale);
  const localeSearch = getLocaleSearch(locale);
  const guideLink =
    detail.relatedLinks[0] ?? {
      path: "/contact",
      label: "",
      description: "",
    };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link to={{ pathname: "/services", search: localeSearch }}>
            {uiCopy.servicesLabel}
          </Link>
          <span>/</span>
          <span>{detail.title}</span>
        </nav>

        <section className={`glass-panel ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{detail.eyebrow}</span>
            <h1 className="text-gradient-gold">{detail.title}</h1>
            <p className={styles.lede}>{detail.lede}</p>
          </div>

          <div className={styles.heroActions}>
            <a
              href={whatsappLink}
              className={`btn whatsapp btn-magnetic btn-glow ${styles.heroButton}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{uiCopy.whatsappLabel}:</span>
              <PhoneNumber number={whatsappNumber} />
            </a>

            <Link
              className={`btn primary btn-magnetic btn-glow ${styles.heroButton}`}
              to={buildLinkTarget(guideLink.path, locale)}
            >
              {detail.secondaryCta}
            </Link>

            <Link
              className={`btn ghost btn-magnetic ${styles.heroButton}`}
              to={{ pathname: "/contact", search: localeSearch }}
            >
              {detail.primaryCta}
            </Link>
          </div>
        </section>

        <div className={styles.trustWrap}>
          <TrustBadges t={t} />
        </div>

        <section className={styles.mainGrid}>
          <article className={`glass-panel ${styles.card}`}>
            <h2>{detail.introTitle}</h2>
            <p className={styles.copy}>{detail.intro}</p>

            <div className={styles.subSection}>
              <h3>{detail.highlightsTitle}</h3>
              <ul className={styles.list}>
                {detail.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className={`glass-panel ${styles.card}`}>
            <h2>{uiCopy.documentsLabel}</h2>
            <ul className={styles.documentList}>
              {detail.documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{enhancement.proofTitle}</h2>
          </div>

          <div className={styles.insightGrid}>
            <article className={`glass-panel ${styles.insightCard}`}>
              <h3>{enhancement.proofTitle}</h3>
              <ul className={styles.list}>
                {enhancement.proofPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={`glass-panel ${styles.insightCard}`}>
              <h3>{enhancement.timingTitle}</h3>
              <ul className={styles.list}>
                {enhancement.timingPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={`glass-panel ${styles.insightCard}`}>
              <h3>{enhancement.coverageTitle}</h3>
              <ul className={styles.list}>
                {enhancement.coveragePoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{uiCopy.processLabel}</h2>
            <p>{detail.processTitle}</p>
          </div>

          <div className={styles.processGrid}>
            {detail.process.map((step) => (
              <article key={step.title} className={`glass-panel ${styles.step}`}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{detail.faqTitle}</h2>
          </div>

          <div className={styles.faqGrid}>
            {detail.faqs.map((faq) => (
              <article key={faq.question} className={`glass-panel ${styles.faq}`}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{detail.relatedTitle}</h2>
          </div>

          <div className={styles.relatedGrid}>
            {detail.relatedLinks.map((link) => (
              <Link
                key={link.path}
                to={buildLinkTarget(link.path, locale)}
                className={styles.relatedLink}
              >
                <div>
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </div>
                <ArrowRight className={styles.linkIcon} size={18} />
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{enhancement.localTitle}</h2>
          </div>

          <div className={styles.localGrid}>
            {enhancement.localLinks.map((link) => (
              <Link
                key={link.path}
                to={buildLinkTarget(link.path, locale)}
                className={styles.relatedLink}
              >
                <div>
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </div>
                <ArrowRight className={styles.linkIcon} size={18} />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="fade-in-section section-alt">
        <SEOHubLinks locale={locale} />
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Contact
            t={t}
            whatsappLink={whatsappLink}
            whatsappNumber={whatsappNumber}
            mapEmbedSrc={mapEmbedSrc}
            mapShareUrl={mapShareUrl}
          />
        </Suspense>
      </div>
    </div>
  );
}
