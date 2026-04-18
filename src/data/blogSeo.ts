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
    slug: "reforme-code-du-travail-2025",
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
          description: "Anticiper votre succession avant l'entrée en vigueur de la réforme.",
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
          description: "Plan your estate ahead of the reform's entry into force.",
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
          description: "تخطيط تركتك قبل دخول الإصلاح حيّز النفاذ.",
        },
      ],
    },
  },
  {
    slug: "startup-act-tunisie-amendements-2026",
    resources: {
      fr: [
        {
          path: "/services/droit-des-affaires",
          label: "Service droit des affaires",
          description: "Sociétés, pactes d'actionnaires, levées de fonds et stock-options.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "Guide affaires Tunisie",
          description: "Structuration juridique des startups et des PME.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "Avocat affaires à Kairouan",
          description: "Page locale pour entrepreneurs, contrats et financements.",
        },
      ],
      en: [
        {
          path: "/services/droit-des-affaires",
          label: "Business law service",
          description: "Companies, shareholder agreements, fundraising and stock options.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "Business Tunisia guide",
          description: "Legal structuring for startups and SMEs.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "Business lawyer in Kairouan",
          description: "Local page for founders, contracts and financing.",
        },
      ],
      ar: [
        {
          path: "/services/droit-des-affaires",
          label: "خدمة قانون الأعمال",
          description: "الشركات، اتفاقيات الشركاء، جمع الأموال، والأسهم التحفيزية.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "دليل الأعمال في تونس",
          description: "الهيكلة القانونية للشركات الناشئة والمؤسسات الصغرى والمتوسطة.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "محامية أعمال في القيروان",
          description: "صفحة محلية للمؤسّسين والعقود والتمويل.",
        },
      ],
    },
  },
  {
    slug: "protection-donnees-personnelles-tunisie-2026",
    resources: {
      fr: [
        {
          path: "/services/droit-des-affaires",
          label: "Service droit des affaires",
          description: "Conformité, contrats et politiques internes pour entreprises.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "Consultation juridique",
          description: "Diagnostic rapide de votre niveau de conformité RGPD / INPDP.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "Avocat affaires à Kairouan",
          description: "Page locale pour mise en conformité et contrats fournisseurs.",
        },
      ],
      en: [
        {
          path: "/services/droit-des-affaires",
          label: "Business law service",
          description: "Compliance, contracts and internal policies for businesses.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "Legal consultation",
          description: "Quick assessment of your GDPR / INPDP compliance level.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "Business lawyer in Kairouan",
          description: "Local page for compliance work and vendor contracts.",
        },
      ],
      ar: [
        {
          path: "/services/droit-des-affaires",
          label: "خدمة قانون الأعمال",
          description: "المطابقة والعقود والسياسات الداخلية للمؤسسات.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "استشارة قانونية",
          description: "تشخيص سريع لمستوى مطابقتك لمتطلبات الـ RGPD / الهيئة الوطنية.",
        },
        {
          path: "/avocat-affaires-kairouan",
          label: "محامية أعمال في القيروان",
          description: "صفحة محلية لأعمال المطابقة وعقود مزوّدي الخدمات.",
        },
      ],
    },
  },
  {
    slug: "location-touristique-tunisie-reglementation-2026",
    resources: {
      fr: [
        {
          path: "/services/droit-immobilier",
          label: "Service droit immobilier",
          description: "Baux, copropriété, régularisation et gestion de biens.",
        },
        {
          path: "/avocat-immobilier-tunisie",
          label: "Guide immobilier Tunisie",
          description: "Structuration, baux et gestion du risque locatif.",
        },
        {
          path: "/avocat-immobilier-kairouan",
          label: "Avocat immobilier à Kairouan",
          description: "Page locale pour propriétaires et litiges immobiliers.",
        },
      ],
      en: [
        {
          path: "/services/droit-immobilier",
          label: "Real estate law service",
          description: "Leases, co-ownership, regularisation and property management.",
        },
        {
          path: "/avocat-immobilier-tunisie",
          label: "Real estate Tunisia guide",
          description: "Structuring, leases and rental risk management.",
        },
        {
          path: "/avocat-immobilier-kairouan",
          label: "Real estate lawyer in Kairouan",
          description: "Local page for owners and property disputes.",
        },
      ],
      ar: [
        {
          path: "/services/droit-immobilier",
          label: "خدمة القانون العقاري",
          description: "الكراء والملكية المشتركة والتسوية وإدارة العقارات.",
        },
        {
          path: "/avocat-immobilier-tunisie",
          label: "دليل العقار في تونس",
          description: "الهيكلة والكراء وإدارة مخاطر الإيجار.",
        },
        {
          path: "/avocat-immobilier-kairouan",
          label: "محامية عقارية في القيروان",
          description: "صفحة محلية للمالكين والنزاعات العقارية.",
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
