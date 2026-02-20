import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoData } from "@/data/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  locale?: string;
  image?: string;
  type?: "website" | "article";
}

export function SEO({
  title,
  description,
  keywords,
  locale = "fr",
  image,
  type = "website",
}: SEOProps) {
  const location = useLocation();
  const path = location.pathname;
  const defaultSEO = seoData[path] || seoData["/"];

  const finalTitle = title || defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  const finalImage = image || defaultSEO.image;
  const url = `https://maitre-haifaguedhami.me${path === "/" ? "" : path}`;

  const articleJsonLd =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: finalTitle,
          description: finalDescription,
          image: finalImage
            ? finalImage.startsWith("http")
              ? finalImage
              : `https://maitre-haifaguedhami.me${finalImage}`
            : undefined,
          url,
          dateModified: new Date().toISOString(),
          publisher: {
            "@type": "Organization",
            name: "Cabinet Maître Haifa Guedhami Alouini",
            logo: {
              "@type": "ImageObject",
              url: "https://maitre-haifaguedhami.me/favicon.png",
            },
          },
        }
      : null;

  return (
    <Helmet>
      <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} />
      <meta name="robots" content="index, follow" />
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={url} />

      {/* hreflang for multilingual */}
      <link
        rel="alternate"
        hrefLang="fr"
        href={`https://maitre-haifaguedhami.me${path}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://maitre-haifaguedhami.me${path}`}
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href={`https://maitre-haifaguedhami.me${path}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://maitre-haifaguedhami.me${path}`}
      />

      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta
        property="og:locale"
        content={
          locale === "ar" ? "ar_TN" : locale === "en" ? "en_US" : "fr_TN"
        }
      />
      <meta
        property="og:site_name"
        content="Cabinet Maître Haifa Guedhami Alouini"
      />
      {finalImage && (
        <meta
          property="og:image"
          content={
            finalImage.startsWith("http")
              ? finalImage
              : `https://maitre-haifaguedhami.me${finalImage}`
          }
        />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {finalImage && (
        <meta
          name="twitter:image"
          content={
            finalImage.startsWith("http")
              ? finalImage
              : `https://maitre-haifaguedhami.me${finalImage}`
          }
        />
      )}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Structured Data (JSON-LD) — Page-level */}
      {defaultSEO.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(defaultSEO.structuredData)}
        </script>
      )}
      {/* Structured Data (JSON-LD) — Article */}
      {articleJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      )}
    </Helmet>
  );
}
