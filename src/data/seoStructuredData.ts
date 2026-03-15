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
const KAIROUAN_LOCAL_PATHS = new Set([
  "/avocat-kairouan",
  "/avocat-divorce-kairouan",
  "/avocat-immobilier-kairouan",
  "/avocat-affaires-kairouan",
  "/consultation-juridique-kairouan",
]);

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
    "@id": `${toCanonicalUrl(items[items.length - 1].path, locale)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toCanonicalUrl(item.path, locale),
    })),
  };
}

function faqPageFromList(
  faqs: Array<{ question: string; answer: string }>,
  url?: string
) {
  return {
    "@type": "FAQPage",
    ...(url ? { "@id": `${url}#faq`, url } : {}),
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
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${canonicalUrl}#service` },
      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },
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
      availableLanguage: [
        { "@type": "Language", name: "French", alternateName: "fr" },
        { "@type": "Language", name: "English", alternateName: "en" },
        { "@type": "Language", name: "Arabic", alternateName: "ar" },
      ],
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
    graph.push(faqPageFromList(options.faqs, canonicalUrl));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function homeStructuredData(locale: Locale) {
  const homeUrl = toCanonicalUrl("/", locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Cabinet Maitre Haifa Guedhami Alouini",
        inLanguage: resolveInLanguage(locale),
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": ["LegalService", "LocalBusiness"],
        "@id": BUSINESS_ID,
        name: "Cabinet Maitre Haifa Guedhami Alouini",
        url: homeUrl,
        image: `${SITE_URL}/office/entry.webp`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/favicon.png`,
          contentUrl: `${SITE_URL}/favicon.png`,
          caption: "Cabinet Maitre Haifa Guedhami Alouini",
        },
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
          latitude: 35.6781,
          longitude: 10.0963,
        },
        telephone: "+21698643612",
        email: "maitrealouiniguedhami@gmail.com",
        areaServed: [
          { "@type": "City", name: "Kairouan" },
          { "@type": "City", name: "Tunis" },
          { "@type": "Country", name: "Tunisia" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        availableLanguage: [
          { "@type": "Language", name: "French", alternateName: "fr" },
          { "@type": "Language", name: "English", alternateName: "en" },
          { "@type": "Language", name: "Arabic", alternateName: "ar" },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+21698643612",
            email: "maitrealouiniguedhami@gmail.com",
            areaServed: { "@type": "Country", name: "Tunisia" },
            availableLanguage: [
              { "@type": "Language", name: "French" },
              { "@type": "Language", name: "English" },
              { "@type": "Language", name: "Arabic" },
            ],
          },
        ],
        knowsAbout: [
          "/services/droit-de-la-famille",
          "/services/droit-des-affaires",
          "/services/droit-immobilier",
        ].map((path) => ({
          "@type": "Service",
          name: getSEOData(path, locale).title,
          url: toCanonicalUrl(path, locale),
        })),
      },
      {
        "@type": "Attorney",
        "@id": ATTORNEY_ID,
        name: "Haifa Guedhami Alouini",
        jobTitle: "Attorney at law",
        worksFor: { "@id": BUSINESS_ID },
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}/portrait/portrait.webp`,
        areaServed: [
          { "@type": "City", name: "Kairouan" },
          { "@type": "City", name: "Tunis" },
          { "@type": "Country", name: "Tunisia" },
        ],
        availableLanguage: [
          { "@type": "Language", name: "French", alternateName: "fr" },
          { "@type": "Language", name: "English", alternateName: "en" },
          { "@type": "Language", name: "Arabic", alternateName: "ar" },
        ],
        knowsLanguage: [
          { "@type": "Language", name: "French", alternateName: "fr" },
          { "@type": "Language", name: "English", alternateName: "en" },
          { "@type": "Language", name: "Arabic", alternateName: "ar" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "legal consultation",
          telephone: "+21698643612",
          email: "maitrealouiniguedhami@gmail.com",
          availableLanguage: [
            { "@type": "Language", name: "French" },
            { "@type": "Language", name: "English" },
            { "@type": "Language", name: "Arabic" },
          ],
        },
      },
    ],
  };
}

function servicesCollection(locale: Locale) {
  const pageUrl = toCanonicalUrl("/services", locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: getSEOData("/services", locale).title,
        description: getSEOData("/services", locale).description,
        inLanguage: resolveInLanguage(locale),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        hasPart: [
          "/services/droit-de-la-famille",
          "/services/droit-des-affaires",
          "/services/droit-immobilier",
        ].map((path) => ({
          "@type": "WebPage",
          url: toCanonicalUrl(path, locale),
          name: getSEOData(path, locale).title,
        })),
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
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
    const pageUrl = toCanonicalUrl(path, resolvedLocale);
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: getSEOData(path, resolvedLocale).title,
          description: getSEOData(path, resolvedLocale).description,
          inLanguage: resolveInLanguage(resolvedLocale),
          isPartOf: { "@id": `${SITE_URL}/#website` },
          mainEntity: { "@id": ATTORNEY_ID },
          breadcrumb: {
            "@id": `${pageUrl}#breadcrumb`,
          },
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
      areaServed: KAIROUAN_LOCAL_PATHS.has(path)
        ? [
            { "@type": "City", name: "Kairouan" },
            { "@type": "AdministrativeArea", name: "Kairouan Governorate" },
            { "@type": "Country", name: "Tunisia" },
          ]
        : undefined,
    });
  }

  if (path === "/contact") {
    const pageUrl = toCanonicalUrl(path, resolvedLocale);
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: getSEOData(path, resolvedLocale).title,
          inLanguage: resolveInLanguage(resolvedLocale),
          isPartOf: { "@id": `${SITE_URL}/#website` },
          mainEntity: { "@id": ATTORNEY_ID },
          breadcrumb: {
            "@id": `${pageUrl}#breadcrumb`,
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
    const pageUrl = toCanonicalUrl(path, resolvedLocale);
    return {
      "@context": "https://schema.org",
      "@graph": [
        faqPageFromList(
          [
            {
              question: "J'ai peur d'aller au tribunal...",
              answer:
                "La plupart des affaires se reglent avant audience. Si une audience est necessaire, vous etes accompagne a chaque etape.",
            },
            {
              question:
                "Est-ce que mes informations restent confidentielles ?",
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
          ],
          pageUrl
        ),
        createBreadcrumbList(resolvedLocale, [
          { name: HOME_LABELS[resolvedLocale], path: "/" },
          { name: getSEOData(path, resolvedLocale).title, path },
        ]),
      ],
    };
  }

  if (path === "/actualites") {
    const pageUrl = toCanonicalUrl(path, resolvedLocale);
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${pageUrl}#webpage`,
      name: "Actualites Juridiques - Maitre Haifa Guedhami Alouini",
      url: pageUrl,
      inLanguage: resolveInLanguage(resolvedLocale),
      publisher: { "@id": BUSINESS_ID },
    };
  }

  return null;
}

export const structuredDataByPath = {} as Record<string, unknown>;
