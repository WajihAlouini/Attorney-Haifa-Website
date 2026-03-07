import React, { FC } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Languages, Tag } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import {
  getBlogAlternates,
  getBlogRelatedResources,
} from "@/data/blogSeo";
import { getPostBySlug } from "@/utils/markdown";
import styles from "./BlogPost.module.css";

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
      backLabel: "Back to articles",
      translationsTitle: "Read this guide in another language",
      resourcesTitle: "Related legal resources",
      translationLabels: {
        fr: "French",
        en: "English",
        ar: "Arabic",
      },
    };
  }

  if (locale === "ar") {
    return {
      backLabel: "العودة الى الاخبار",
      translationsTitle: "اقرأ هذا الدليل بلغة اخرى",
      resourcesTitle: "موارد قانونية مرتبطة",
      translationLabels: {
        fr: "الفرنسية",
        en: "الانجليزية",
        ar: "العربية",
      },
    };
  }

  return {
    backLabel: "Retour aux actualites",
    translationsTitle: "Lire ce guide dans une autre langue",
    resourcesTitle: "Ressources juridiques liees",
    translationLabels: {
      fr: "Francais",
      en: "English",
      ar: "Arabe",
    },
  };
}

const BlogPost: FC<{ locale?: string }> = ({ locale = "fr" }) => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const post = slug ? getPostBySlug(slug, locale, true) : null;

  if (!post) {
    return (
      <Navigate
        to={{ pathname: "/actualites", search: getLocaleSearch(locale) }}
        replace
      />
    );
  }

  const { meta, content } = post;
  const contentLocale = meta.lang || locale;
  const uiCopy = getUiCopy(contentLocale);
  const backSearch = getLocaleSearch(contentLocale);
  const alternates = getBlogAlternates(meta.slug).filter(
    (item) => item.path !== location.pathname
  );
  const relatedResources = getBlogRelatedResources(meta.slug, contentLocale);

  return (
    <>
      <SEO
        title={`${meta.title} | Maitre Haifa Guedhami Alouini`}
        description={meta.description}
        image={meta.image}
        locale={contentLocale}
        type="article"
        publishedTime={meta.date}
        modifiedTime={meta.date}
        author={meta.author}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link
              to={{ pathname: "/actualites", search: backSearch }}
              className={styles.backLink}
            >
              <ArrowLeft size={16} /> {uiCopy.backLabel}
            </Link>

            {meta.tags && meta.tags.length > 0 && (
              <div className={styles.tags}>
                {meta.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-gradient-gold">{meta.title}</h1>

            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <time dateTime={meta.date}>
                  {new Date(meta.date).toLocaleDateString(
                    contentLocale === "ar" ? "ar-TN" : contentLocale,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
              </div>
            </div>
          </div>

          {meta.image && (
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={meta.image} alt={meta.title} />
            </motion.div>
          )}
        </header>

        <section className={`glass-panel ${styles.content}`}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({
                inline,
                children,
                ...props
              }: React.ComponentPropsWithoutRef<"code"> & {
                inline?: boolean;
              }) {
                if (inline) {
                  return (
                    <code className={styles.inlineCode} {...props}>
                      {children}
                    </code>
                  );
                }

                return (
                  <pre className={styles.codeBlock}>
                    <code className={styles.inlineCode} {...props}>
                      {String(children).replace(/\n$/, "")}
                    </code>
                  </pre>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </section>

        {(alternates.length > 0 || relatedResources.length > 0) && (
          <section className={styles.resources}>
            {alternates.length > 0 && (
              <div className={`glass-panel ${styles.resourceCard}`}>
                <div className={styles.resourceHeader}>
                  <Languages size={18} />
                  <h2>{uiCopy.translationsTitle}</h2>
                </div>
                <div className={styles.resourceGrid}>
                  {alternates.map((alternate) => (
                    <Link
                      key={alternate.path}
                      to={{ pathname: alternate.path, search: "" }}
                      className={styles.resourceLink}
                    >
                      <div>
                        <strong>
                          {uiCopy.translationLabels[alternate.locale]}
                        </strong>
                        <span>{alternate.path.replace("/actualites/", "")}</span>
                      </div>
                      <ArrowRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedResources.length > 0 && (
              <div className={`glass-panel ${styles.resourceCard}`}>
                <div className={styles.resourceHeader}>
                  <ArrowRight size={18} />
                  <h2>{uiCopy.resourcesTitle}</h2>
                </div>
                <div className={styles.resourceGrid}>
                  {relatedResources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={buildLinkTarget(resource.path, contentLocale)}
                      className={styles.resourceLink}
                    >
                      <div>
                        <strong>{resource.label}</strong>
                        <span>{resource.description}</span>
                      </div>
                      <ArrowRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </article>
    </>
  );
};

export default BlogPost;
