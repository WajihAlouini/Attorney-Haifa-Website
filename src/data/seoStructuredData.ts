import { getSEOData } from "@/data/seo";
import { getSeoClusterPage } from "@/data/seoCluster";
import {
  getServiceDetailByPath,
  getServiceDetailFaqs,
} from "@/data/serviceDetails";

type Locale = "fr" | "en" | "ar";

const SITE_URL = "https://maitre-haifaguedhami.me";
const BUSINESS_ID = `${SITE_URL}/#business`;
const ATTORNEY_ID = `${SITE_URL}/#attorney`;

const HOME_LABELS: Record<Locale, string> = {
  fr: "Accueil",
  en: "Home",
  ar: "الرئيسية",
};

const SERVICES_LABELS: Record<Locale, string> = {
  fr: "Services juridiques",
  en: "Legal services",
  ar: "الخدمات القانونية",
};

function resolveLocale(locale: string): Locale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

function resolveInLanguage(locale: Locale) {
  if (locale === "en") return "en";
  if (locale === "ar") return "ar-TN";
  return "fr";
}

function toCanonicalUrl(path: string, locale: Locale) {
  if (path.startsWith("/actualites/")) {
    return `${SITE_URL}${path}`;
  }

  if (locale === "fr") {
    return `${SITE_URL}${path === "/" ? "/" : path}`;
  }

  const routePath = path === "/" ? "/" : path;
  return `${SITE_URL}${routePath}?lang=${locale}`;
}

function createBreadcrumbList(
  locale: Locale,
  items: Array<{ name: string; path: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toCanonicalUrl(item.path, locale),
    })),
  };
}

function faqPageFromList(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function createLegalServiceGraph(options: {
  path: string;
  locale: Locale;
  name: string;
  description: string;
  breadcrumbs: Array<{ name: string; path: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  serviceType?: string;
  areaServed?: Array<Record<string, string>>;
}) {
  const canonicalUrl = toCanonicalUrl(options.path, options.locale);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: options.name,
      description: options.description,
      inLanguage: resolveInLanguage(options.locale),
      isPartOf: { "@id": SITE_URL },
      about: { "@id": `${canonicalUrl}#service` },
    },
    createBreadcrumbList(options.locale, options.breadcrumbs),
    {
      "@type": "LegalService",
      "@id": `${canonicalUrl}#service`,
      name: options.name,
      description: options.description,
      url: canonicalUrl,
      inLanguage: resolveInLanguage(options.locale),
      provider: { "@id": BUSINESS_ID },
      availableLanguage: ["French", "English", "Arabic"],
      serviceType: options.serviceType || options.name,
      areaServed:
        options.areaServed ||
        [
          { "@type": "City", name: "Kairouan" },
          { "@type": "City", name: "Tunis" },
          { "@type": "Country", name: "Tunisia" },
        ],
    },
  ];

  if (options.faqs && options.faqs.length > 0) {
    graph.push(faqPageFromList(options.faqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function homeStructuredData(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "LocalBusiness"],
        "@id": BUSINESS_ID,
        name: "Cabinet Maitre Haifa Guedhami Alouini",
        url: toCanonicalUrl("/", locale),
        image: `${SITE_URL}/office/entry.webp`,
        logo: `${SITE_URL}/favicon.png`,
        description:
          "Cabinet d'avocat en Tunisie. Conseil et representation en droit de la famille, immobilier et droit des affaires.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Beb Djelladine, Rue des Martyrs",
          addressLocality: "Kairouan",
          postalCode: "3100",
          addressCountry: "TN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.6781",
          longitude: "10.0963",
        },
        telephone: "+21698643612",
        email: "maitrealouiniguedhami@gmail.com",
        areaServed: [
          { "@type": "City", name: "Kairouan" },
          { "@type": "City", name: "Tunis" },
          { "@type": "Country", name: "Tunisia" },
        ],
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
        availableLanguage: ["French", "English", "Arabic"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Juridiques",
          itemListElement: [
            "/services/droit-de-la-famille",
            "/services/droit-des-affaires",
            "/services/droit-immobilier",
            "/avocat-divorce-tunisie",
            "/avocat-affaires-tunisie",
            "/avocat-immobilier-tunisie",
            "/consultation-juridique-tunisie",
            "/avocat-kairouan",
          ].map((path) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: getSEOData(path, locale).title,
              url: toCanonicalUrl(path, locale),
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": ATTORNEY_ID,
        name: "Haifa Guedhami Alouini",
        jobTitle: "Attorney at law",
        worksFor: { "@id": BUSINESS_ID },
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}/portrait/portrait.webp`,
      },
    ],
  };
}

function servicesCollection(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        url: toCanonicalUrl("/services", locale),
        name: getSEOData("/services", locale).title,
        description: getSEOData("/services", locale).description,
        inLanguage: resolveInLanguage(locale),
        hasPart: [
          "/services/droit-de-la-famille",
          "/services/droit-des-affaires",
          "/services/droit-immobilier",
        ].map((path) => ({
          "@type": "WebPage",
          url: toCanonicalUrl(path, locale),
          name: getSEOData(path, locale).title,
        })),
      },
      createBreadcrumbList(locale, [
        { name: HOME_LABELS[locale], path: "/" },
        { name: SERVICES_LABELS[locale], path: "/services" },
      ]),
    ],
  };
}

export function getStructuredData(path: string, locale: Locale) {
  const resolvedLocale = resolveLocale(locale);

  if (path === "/") {
    return homeStructuredData(resolvedLocale);
  }

  if (path === "/about") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          url: toCanonicalUrl(path, resolvedLocale),
          name: getSEOData(path, resolvedLocale).title,
          description: getSEOData(path, resolvedLocale).description,
          inLanguage: resolveInLanguage(resolvedLocale),
          mainEntity: { "@id": ATTORNEY_ID },
        },
        createBreadcrumbList(resolvedLocale, [
          { name: HOME_LABELS[resolvedLocale], path: "/" },
          { name: getSEOData(path, resolvedLocale).title, path },
        ]),
      ],
    };
  }

  if (path === "/services") {
    return servicesCollection(resolvedLocale);
  }

  const serviceDetail = getServiceDetailByPath(path, resolvedLocale);
  if (serviceDetail) {
    return createLegalServiceGraph({
      path,
      locale: resolvedLocale,
      name: serviceDetail.title,
      description: serviceDetail.lede,
      breadcrumbs: [
        { name: HOME_LABELS[resolvedLocale], path: "/" },
        { name: SERVICES_LABELS[resolvedLocale], path: "/services" },
        { name: serviceDetail.title, path },
      ],
      faqs: getServiceDetailFaqs(path, resolvedLocale),
      serviceType: serviceDetail.title,
    });
  }

  const clusterPage = getSeoClusterPage(path, resolvedLocale);
  if (clusterPage) {
    return createLegalServiceGraph({
      path,
      locale: resolvedLocale,
      name: clusterPage.heading,
      description: clusterPage.description,
      breadcrumbs: [
        { name: HOME_LABELS[resolvedLocale], path: "/" },
        { name: clusterPage.heading, path },
      ],
      faqs: clusterPage.faqs,
      serviceType: clusterPage.navLabel,
      areaServed:
        path === "/avocat-kairouan"
          ? [
              { "@type": "City", name: "Kairouan" },
              { "@type": "AdministrativeArea", name: "Kairouan Governorate" },
              { "@type": "Country", name: "Tunisia" },
            ]
          : undefined,
    });
  }

  if (path === "/contact") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          url: toCanonicalUrl(path, resolvedLocale),
          name: getSEOData(path, resolvedLocale).title,
          inLanguage: resolveInLanguage(resolvedLocale),
          mainEntity: {
            "@type": "Attorney",
            name: "Haifa Guedhami Alouini",
            worksFor: { "@id": BUSINESS_ID },
            telephone: "+216 98 643 612",
            email: "maitrealouiniguedhami@gmail.com",
          },
        },
        createBreadcrumbList(resolvedLocale, [
          { name: HOME_LABELS[resolvedLocale], path: "/" },
          { name: getSEOData(path, resolvedLocale).title, path },
        ]),
      ],
    };
  }

  if (path === "/faq") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        faqPageFromList([
          {
            question: "J'ai peur d'aller au tribunal...",
            answer:
              "La plupart des affaires se reglent avant audience. Si une audience est necessaire, vous etes accompagne a chaque etape.",
          },
          {
            question: "Est-ce que mes informations restent confidentielles ?",
            answer:
              "Oui. Le secret professionnel de l'avocat s'applique integralement.",
          },
          {
            question: "Combien cela va-t-il couter ?",
            answer:
              "Une estimation claire est communiquee des le debut selon la nature du dossier.",
          },
          {
            question: "Combien de temps cela prendra-t-il ?",
            answer:
              "Les delais dependent de la procedure. Une estimation realiste est partagee et mise a jour pendant le dossier.",
          },
        ]),
        createBreadcrumbList(resolvedLocale, [
          { name: HOME_LABELS[resolvedLocale], path: "/" },
          { name: getSEOData(path, resolvedLocale).title, path },
        ]),
      ],
    };
  }

  if (path === "/actualites") {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Actualites Juridiques - Maitre Haifa Guedhami Alouini",
      url: toCanonicalUrl(path, resolvedLocale),
      inLanguage: resolveInLanguage(resolvedLocale),
    };
  }

  return null;
}

export const structuredDataByPath = {} as Record<string, unknown>;
