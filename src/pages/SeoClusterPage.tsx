import { FC } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  getSeoClusterPage,
  getSeoClusterPages,
  getSeoClusterUiCopy,
} from "@/data/seoCluster";
import { getClusterRelatedBlogSlugs } from "@/data/blogSeo";
import { getPostBySlug } from "@/utils/markdown";
import { PhoneNumber } from "@/components/common/PhoneNumber";
import styles from "./SeoClusterPage.module.css";

interface SeoClusterPageProps {
  locale: string;
  whatsappLink: string;
  whatsappNumber: string;
}

function getLocaleSearch(locale: string): string {
  if (locale === "en" || locale === "ar") {
    return `?lang=${locale}`;
  }

  return "";
}

export const SeoClusterPage: FC<SeoClusterPageProps> = ({
  locale,
  whatsappLink,
  whatsappNumber,
}) => {
  const location = useLocation();
  const pageData = getSeoClusterPage(location.pathname, locale);

  if (!pageData) {
    return (
      <Navigate
        to={{ pathname: "/services", search: getLocaleSearch(locale) }}
        replace
      />
    );
  }

  const localeSearch = getLocaleSearch(locale);
  const uiCopy = getSeoClusterUiCopy(locale);
  const relatedGuides = getSeoClusterPages(locale).filter(
    (item) => item.path !== pageData.path
  );
  const relatedArticles = getClusterRelatedBlogSlugs(pageData.path)
    .map((slug) => getPostBySlug(slug, locale, true))
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    )
    .slice(0, 3);
  const detailSections = [
    {
      title: pageData.proofTitle,
      items: pageData.proofPoints,
    },
    {
      title: pageData.processTitle,
      items: pageData.process,
    },
    {
      title: pageData.serviceAreaTitle,
      items: pageData.serviceAreas,
    },
  ].filter(
    (
      section
    ): section is {
      title: string;
      items: string[];
    } => Boolean(section.title && section.items && section.items.length > 0)
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>{uiCopy.eyebrow}</span>
          <h1 className="text-gradient-gold">{pageData.heading}</h1>
          <p className={styles.lede}>{pageData.lede}</p>
          <div className={styles.ctaRow}>
            <a
              href={whatsappLink}
              className={`btn whatsapp btn-magnetic btn-glow ${styles.ctaButton}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{uiCopy.whatsappPrefix}:</span>
              <PhoneNumber number={whatsappNumber} />
            </a>
            <Link
              className={`btn primary btn-magnetic btn-glow ${styles.ctaButton}`}
              to={{ pathname: "/contact", search: localeSearch }}
            >
              {uiCopy.consultationCta}
            </Link>
          </div>
        </header>

        <section className={styles.grid}>
          <article className={`glass-panel ${styles.card}`}>
            <h2>{uiCopy.valueTitle}</h2>
            <ul>
              {pageData.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={`glass-panel ${styles.card}`}>
            <h2>{pageData.checklistTitle}</h2>
            <ul>
              {pageData.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        {detailSections.length > 0 && (
          <section className={styles.detailGrid}>
            {detailSections.map((section) => (
              <article
                key={section.title}
                className={`glass-panel ${styles.detailCard}`}
              >
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>{uiCopy.usefulPagesTitle}</h3>
            <p className={styles.sectionCta}>{uiCopy.usefulPagesCta}</p>
          </div>
          <div className={styles.linkGrid}>
            {uiCopy.serviceLinks.map((link) => (
              <Link
                key={link.path}
                to={{ pathname: link.path, search: localeSearch }}
                className={styles.linkCard}
              >
                <div className={styles.linkCardContent}>
                  <span className={styles.linkTitle}>{link.label}</span>
                </div>
                <ArrowRight className={styles.linkArrow} size={20} />
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>{uiCopy.relatedGuidesTitle}</h3>
            <p className={styles.sectionCta}>{uiCopy.relatedGuidesCta}</p>
          </div>
          <div className={styles.linkGrid}>
            {relatedGuides.map((item) => (
              <Link
                key={item.path}
                to={{ pathname: item.path, search: localeSearch }}
                className={styles.linkCard}
              >
                <div className={styles.linkCardContent}>
                  <span className={styles.linkTitle}>{item.navLabel}</span>
                  <span className={styles.linkExcerpt}>{item.description}</span>
                </div>
                <ArrowRight className={styles.linkArrow} size={20} />
              </Link>
            ))}
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>{uiCopy.relatedArticlesTitle}</h3>
              <p className={styles.sectionCta}>{uiCopy.relatedArticlesCta}</p>
            </div>
            <div className={styles.linkGrid}>
              {relatedArticles.map((post) => (
                <Link
                  key={post.meta.slug}
                  to={{ pathname: `/actualites/${post.meta.slug}`, search: "" }}
                  className={styles.linkCard}
                >
                  <div className={styles.linkCardContent}>
                    <span className={styles.linkTitle}>{post.meta.title}</span>
                    <span className={styles.linkExcerpt}>
                      {post.meta.description}
                    </span>
                  </div>
                  <ArrowRight className={styles.linkArrow} size={20} />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <h3>{uiCopy.faqTitle}</h3>
          <div className={styles.faqList}>
            {pageData.faqs.map((faq) => (
              <article
                key={faq.question}
                className={`glass-panel ${styles.faqItem}`}
              >
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
