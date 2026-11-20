import { SiteLocale } from "@/data/serviceDetails";

export interface BlogResourceLink {
  path: string;
  label: string;
  description: string;
}

interface BlogGroup {
  slug: string;
  resources: Record<SiteLocale, BlogResourceLink[]>;
}

const blogGroups: BlogGroup[] = [
  {
    slug: "reforme-famille-garde-partagee-tunisie",
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
    slug: "immobilier-etrangers-tunisie-2026",
    resources: {
      fr: [
        {
          path: "/services/droit-immobilier",
          label: "Service droit immobilier",
          description: "Audit foncier, baux, contrats et contentieux immobiliers.",
        },
        {
          path: "/avocat-tunisiens-etranger",
          label: "Tunisiens à l'étranger",
          description: "Achat, procuration et suivi du dossier sans vous déplacer.",
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
          path: "/avocat-tunisiens-etranger",
          label: "Tunisians living abroad",
          description: "Buying, powers of attorney and case follow-up without travelling.",
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
          path: "/avocat-tunisiens-etranger",
          label: "التونسيون بالخارج",
          description: "الشراء والتوكيل ومتابعة الملف دون التنقل إلى تونس.",
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
    slug: "nouveau-code-des-changes-tunisie-2026",
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
    slug: "egalite-succession-tunisie-debat-2026",
    resources: {
      fr: [
        {
          path: "/services/droit-de-la-famille",
          label: "Service droit de la famille",
          description: "Succession, testament, partage et planification patrimoniale.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "Guide droit de la famille Tunisie",
          description: "Stratégies familiales : divorce, garde, succession.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Consultation juridique à Kairouan",
          description: "Préparer une donation, un testament ou un partage.",
        },
      ],
      en: [
        {
          path: "/services/droit-de-la-famille",
          label: "Family law service",
          description: "Succession, wills, estate division and wealth planning.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "Family law Tunisia guide",
          description: "Family strategies: divorce, custody, succession.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Legal consultation in Kairouan",
          description: "Prepare a gift, a will or an estate division.",
        },
      ],
      ar: [
        {
          path: "/services/droit-de-la-famille",
          label: "خدمة قانون الأسرة",
          description: "الميراث والوصايا وقسمة التركة والتخطيط العائلي.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "دليل قانون الأسرة في تونس",
          description: "الاستراتيجيات العائلية: الطلاق، الحضانة، الميراث.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "استشارة قانونية في القيروان",
          description: "تحضير الهبة أو الوصية أو قسمة التركة.",
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

export function getBlogRelatedResources(slug: string, locale: string) {
  const group = blogGroups.find((g) => g.slug === slug);

  if (!group) {
    return [];
  }

  return group.resources[resolveLocale(locale)];
}

/**
 * Reverse lookup: given a cluster/service path, return the blog slugs that
 * have linked to it in blogSeo. Used to build the "related articles" block on
 * cluster pages, so every cluster → blog edge is bidirectional for SEO.
 */
export function getClusterRelatedBlogSlugs(clusterPath: string): string[] {
  return blogGroups
    .filter((group) =>
      (["fr", "en", "ar"] as const).some((loc) =>
        group.resources[loc].some((r) => r.path === clusterPath)
      )
    )
    .map((group) => group.slug);
}
