import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOData, OG_IMAGE } from "@/data/seo";
import { getStructuredData } from "@/data/seoStructuredData";
import {
  buildLocalizedUrl,
  SITE_URL,
  splitLocalePathname,
} from "@/utils/localeRoutes";

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
  path?: string;
}

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
  return buildLocalizedUrl(path, locale);
}

function toCanonicalUrl(path: string, locale: SiteLocale) {
  return toLocaleUrl(path, locale);
}

function ogLocale(locale: SiteLocale) {
  if (locale === "ar") return "ar_TN";
  if (locale === "en") return "en_US";
  return "fr_TN";
}

function ogImageAlt(locale: SiteLocale) {
  if (locale === "ar") return "الأستاذة هيفاء القضامي العلويني، محامية في تونس";
  if (locale === "en")
    return "Haifa Guedhami Alouini, lawyer in Tunisia — Kairouan";
  return "Maître Haifa Guedhami Alouini, avocate en Tunisie — Kairouan";
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
  path: explicitPath,
}: Readonly<SEOProps>) {
  const location = useLocation();
  const path = explicitPath ?? splitLocalePathname(location.pathname).routePath;
  const normalizedLocale = resolveLocale(locale);
  const defaultSEO = getSEOData(path, normalizedLocale);
  const finalTitle = title || defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  // Last resort so no page can ship without a share card: route data may
  // omit an image, and 42 pages once drifted onto WebP office photos that
  // scrapers crop or reject.
  const finalImage = image || defaultSEO.image || OG_IMAGE;
  const absoluteImage = finalImage
    ? finalImage.startsWith("http")
      ? finalImage
      : `${SITE_URL}${finalImage}`
    : undefined;
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
          image: absoluteImage,
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
      {absoluteImage && (
        <meta property="og:image" content={absoluteImage} />
      )}
      {absoluteImage && (
        <meta property="og:image:secure_url" content={absoluteImage} />
      )}
      {absoluteImage && (
        <meta property="og:image:type" content="image/jpeg" />
      )}
      {/* Declared so the large card renders on the first scrape, before the
          crawler has fetched and measured the file itself. */}
      {absoluteImage && <meta property="og:image:width" content="1200" />}
      {absoluteImage && <meta property="og:image:height" content="630" />}
      {absoluteImage && (
        <meta property="og:image:alt" content={ogImageAlt(normalizedLocale)} />
      )}

      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {absoluteImage && (
        <meta name="twitter:image" content={absoluteImage} />
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
