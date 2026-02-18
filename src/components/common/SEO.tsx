import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoData } from "@/data/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  locale?: string;
}

export function SEO({ title, description, keywords, locale = "fr" }: SEOProps) {
  const location = useLocation();
  const path = location.pathname;
  const defaultSEO = seoData[path] || seoData["/"];

  const finalTitle = title || defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  const url = `https://maitre-haifaguedhami.me${path === "/" ? "" : path}`;

  return (
    <Helmet>
      <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} />
      <meta name="robots" content="index, follow" />
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {defaultSEO.image && (
        <meta
          property="og:image"
          content={`https://maitre-haifaguedhami.me${defaultSEO.image}`}
        />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {defaultSEO.image && (
        <meta
          name="twitter:image"
          content={`https://maitre-haifaguedhami.me${defaultSEO.image}`}
        />
      )}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Structured Data (JSON-LD) */}
      {defaultSEO.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(defaultSEO.structuredData)}
        </script>
      )}
    </Helmet>
  );
}
