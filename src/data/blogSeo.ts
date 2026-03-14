import { SiteLocale } from "@/data/serviceDetails";

export interface BlogResourceLink {
  path: string;
  label: string;
  description: string;
}

interface BlogGroup {
  slugs: Record<SiteLocale, string>;
  resources: Record<SiteLocale, BlogResourceLink[]>;
}

const blogGroups: BlogGroup[] = [
  {
    slugs: {
      fr: "reforme-famille-garde-partagee-tunisie",
      en: "shared-custody-reform-tunisia",
      ar: "hadhanat-mushtaraka-tunis",
    },
    resources: {
      fr: [
        {
          path: "/services/droit-de-la-famille",
          label: "Service droit de la famille",
          description: "Divorce, garde, pension alimentaire et succession.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "Guide divorce Tunisie",
          description: "Une page ciblée sur la stratégie de divorce et l'exécution.",
        },
        {
          path: "/avocat-divorce-kairouan",
          label: "Avocat divorce à Kairouan",
          description: "Page locale pour les dossiers familiaux et les urgences de garde.",
        },
      ],
      en: [
        {
          path: "/services/droit-de-la-famille",
          label: "Family law service",
          description: "Divorce, child custody, support and succession matters.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "Divorce lawyer Tunisia guide",
          description: "Focused guidance on divorce strategy and enforcement.",
        },
        {
          path: "/avocat-divorce-kairouan",
          label: "Divorce lawyer in Kairouan",
          description: "Local page for family-law cases and urgent custody matters.",
        },
      ],
      ar: [
        {
          path: "/services/droit-de-la-famille",
          label: "خدمة قانون الأسرة",
          description: "الطلاق والحضانة والنفقة والميراث.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "دليل الطلاق في تونس",
          description: "إرشاد مركز حول استراتيجية الطلاق وتنفيذ الأحكام.",
        },
        {
          path: "/avocat-divorce-kairouan",
          label: "محامية طلاق في القيروان",
          description: "صفحة محلية للقضايا العائلية وحالات الحضانة المستعجلة.",
        },
      ],
    },
  },
  {
    slugs: {
      fr: "immobilier-etrangers-tunisie-2026",
      en: "property-law-foreigners-tunisia-2026",
      ar: "aqaraat-ajanib-tunis-2026",
    },
    resources: {
      fr: [
        {
          path: "/services/droit-immobilier",
          label: "Service droit immobilier",
          description: "Audit foncier, baux, contrats et contentieux immobiliers.",
        },
        {
          path: "/avocat-immobilier-tunisie",
          label: "Guide immobilier Tunisie",
          description: "Vérification foncière, contrats et gestion du risque.",
        },
        {
          path: "/avocat-immobilier-kairouan",
          label: "Avocat immobilier à Kairouan",
          description: "Page locale pour vérification foncière, baux et litiges immobiliers.",
        },
      ],
      en: [
        {
          path: "/services/droit-immobilier",
          label: "Real estate law service",
          description: "Title review, leases, contracts and property disputes.",
        },
        {
          path: "/avocat-immobilier-tunisie",
          label: "Real estate Tunisia guide",
          description: "Title verification, contracts and risk management.",
        },
        {
          path: "/avocat-immobilier-kairouan",
          label: "Real estate lawyer in Kairouan",
          description: "Local page for title review, leases and property disputes.",
        },
      ],
      ar: [
        {
          path: "/services/droit-immobilier",
          label: "خدمة القانون العقاري",
          description: "تدقيق الملكية والكراء والعقود والنزاعات العقارية.",
        },
        {
          path: "/avocat-immobilier-tunisie",
          label: "دليل العقار في تونس",
          description: "تدقيق السندات والعقود وإدارة المخاطر العقارية.",
        },
        {
          path: "/avocat-immobilier-kairouan",
          label: "محامية عقارية في القيروان",
          description: "صفحة محلية لتدقيق السندات والكراء والنزاعات العقارية.",
        },
      ],
    },
  },
  {
    slugs: {
      fr: "nouveau-code-des-changes-tunisie-2026",
      en: "new-foreign-exchange-code-tunisia-2026",
      ar: "qanoon-alsarf-aljadid-tunis-2026",
    },
    resources: {
      fr: [
        {
          path: "/services/droit-des-affaires",
          label: "Service droit des affaires",
          description: "Contrats, sociétés, conformité et litiges commerciaux.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "Guide affaires Tunisie",
          description: "Structuration juridique et défense des entreprises.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "Avocat affaires à Kairouan",
          description: "Page locale pour contrats, sociétés, recouvrement et litiges commerciaux.",
        },
      ],
      en: [
        {
          path: "/services/droit-des-affaires",
          label: "Business law service",
          description: "Contracts, companies, compliance and commercial disputes.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "Business Tunisia guide",
          description: "Legal structuring and defense for companies in Tunisia.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "Business lawyer in Kairouan",
          description: "Local page for contracts, company matters and commercial disputes.",
        },
      ],
      ar: [
        {
          path: "/services/droit-des-affaires",
          label: "خدمة قانون الأعمال",
          description: "عقود وشركات وامتثال ونزاعات تجارية.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "دليل الأعمال في تونس",
          description: "هيكلة قانونية ودفاع عن المؤسسات في تونس.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "محامية أعمال في القيروان",
          description: "صفحة محلية للعقود والشركات والنزاعات التجارية.",
        },
      ],
    },
  },
  {
    slugs: {
      fr: "reforme-code-du-travail-2025",
      en: "labour-code-reform-2025",
      ar: "islah-majallat-alshughl-2025",
    },
    resources: {
      fr: [
        {
          path: "/consultation-juridique-tunisie",
          label: "Consultation juridique",
          description: "Analyser rapidement l'impact d'une réforme sur votre dossier.",
        },
        {
          path: "/services/droit-des-affaires",
          label: "Service droit des affaires",
          description: "Support contractuel et contentieux pour l'entreprise.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Consultation juridique à Kairouan",
          description: "Page locale pour obtenir un diagnostic et un plan d'action rapidement.",
        },
      ],
      en: [
        {
          path: "/consultation-juridique-tunisie",
          label: "Legal consultation",
          description: "Quick guidance on how a reform affects your legal situation.",
        },
        {
          path: "/services/droit-des-affaires",
          label: "Business law service",
          description: "Contract and dispute support for business operations.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Legal consultation in Kairouan",
          description: "Local page to get a diagnosis and an action plan quickly.",
        },
      ],
      ar: [
        {
          path: "/consultation-juridique-tunisie",
          label: "استشارة قانونية",
          description: "توجيه سريع لفهم أثر الإصلاح القانوني على وضعيتك.",
        },
        {
          path: "/services/droit-des-affaires",
          label: "خدمة قانون الأعمال",
          description: "دعم تعاقدي ونزاعي للمؤسسات والمهنيين.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "استشارة قانونية في القيروان",
          description: "صفحة محلية للحصول على تشخيص قانوني وخطة عمل سريعة.",
        },
      ],
    },
  },
];

function resolveLocale(locale: string): SiteLocale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

function getGroupBySlug(slug: string) {
  return blogGroups.find((group) =>
    Object.values(group.slugs).some((candidate) => candidate === slug)
  );
}

export function getBlogAlternates(slug: string) {
  const group = getGroupBySlug(slug);

  if (!group) {
    return [];
  }

  return Object.entries(group.slugs).map(([locale, localizedSlug]) => ({
    locale: locale as SiteLocale,
    path: `/actualites/${localizedSlug}`,
  }));
}

export function getBlogRelatedResources(slug: string, locale: string) {
  const group = getGroupBySlug(slug);

  if (!group) {
    return [];
  }

  return group.resources[resolveLocale(locale)];
}
