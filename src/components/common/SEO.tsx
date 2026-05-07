import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOData } from "@/data/seo";
import { getStructuredData } from "@/data/seoStructuredData";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  locale?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SITE_URL = "https://maitre-haifaguedhami.me";

type SiteLocale = "fr" | "en" | "ar";

function resolveLocale(locale: string): SiteLocale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

function getStructuredDataPath(path: string) {
  if (path === "/actualites") {
    return "/actualites";
  }

  return path;
}

function toLocaleUrl(path: string, locale: SiteLocale) {
  const routePath = path === "/" ? "/" : path;
  const langQuery = locale === "fr" ? "" : `?lang=${locale}`;
  return `${SITE_URL}${routePath}${langQuery}`;
}

function toCanonicalUrl(path: string, locale: SiteLocale) {
  return toLocaleUrl(path, locale);
}

function ogLocale(locale: SiteLocale) {
  if (locale === "ar") return "ar_TN";
  if (locale === "en") return "en_US";
  return "fr_TN";
}

function getAlternateLinks(path: string) {
  return [
    { locale: "fr", href: toLocaleUrl(path, "fr") },
    { locale: "en", href: toLocaleUrl(path, "en") },
    { locale: "ar", href: toLocaleUrl(path, "ar") },
    { locale: "x-default", href: toLocaleUrl(path, "fr") },
  ];
}

export function SEO({
  title,
  description,
  keywords,
  locale = "fr",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: Readonly<SEOProps>) {
  const location = useLocation();
  const path = location.pathname;
  const normalizedLocale = resolveLocale(locale);
  const defaultSEO = getSEOData(path, normalizedLocale);
  const finalTitle = title || defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  const finalImage = image || defaultSEO.image;
  const url = toCanonicalUrl(path, normalizedLocale);
  const structuredData = getStructuredData(
    getStructuredDataPath(path),
    normalizedLocale
  );
  const alternateLinks = getAlternateLinks(path);

  // Blog posts already get a complete BlogPosting schema (with BreadcrumbList)
  // from getStructuredData — avoid emitting a duplicate Article block.
  const structuredDataCoversArticle = path.startsWith("/actualites/");

  const articleJsonLd =
    type === "article" && !structuredDataCoversArticle
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: finalTitle,
          description: finalDescription,
          image: finalImage
            ? finalImage.startsWith("http")
              ? finalImage
              : `${SITE_URL}${finalImage}`
            : undefined,
          url,
          datePublished: publishedTime || undefined,
          dateModified: modifiedTime || publishedTime || undefined,
          author: author
            ? {
                "@type": "Person",
                name: author,
              }
            : undefined,
          publisher: {
            "@type": "Organization",
            name: "Cabinet Maitre Haifa Guedhami Alouini",
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/favicon.png`,
            },
          },
        }
      : null;

  return (
    <Helmet>
      <html
        lang={normalizedLocale}
        dir={normalizedLocale === "ar" ? "rtl" : "ltr"}
      />
      <meta name="robots" content="index, follow" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={url} />

      {alternateLinks.map((alternate) => (
        <link
          key={`alternate-${alternate.locale}`}
          rel="alternate"
          hrefLang={alternate.locale}
          href={alternate.href}
        />
      ))}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={ogLocale(normalizedLocale)} />
      {(["fr_TN", "en_US", "ar_TN"] as const)
        .filter((l) => l !== ogLocale(normalizedLocale))
        .map((l) => (
          <meta key={l} property="og:locale:alternate" content={l} />
        ))}
      <meta
        property="og:site_name"
        content="Cabinet Maitre Haifa Guedhami Alouini"
      />
      {finalImage && (
        <meta
          property="og:image"
          content={
            finalImage.startsWith("http")
              ? finalImage
              : `${SITE_URL}${finalImage}`
          }
        />
      )}

      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {finalImage && (
        <meta
          name="twitter:image"
          content={
            finalImage.startsWith("http")
              ? finalImage
              : `${SITE_URL}${finalImage}`
          }
        />
      )}
      <meta name="twitter:card" content="summary_large_image" />

      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && (modifiedTime || publishedTime) && (
        <meta
          property="article:modified_time"
          content={modifiedTime || publishedTime}
        />
      )}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {articleJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      )}
    </Helmet>
  );
}
