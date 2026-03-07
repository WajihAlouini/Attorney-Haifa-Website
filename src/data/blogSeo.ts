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
          description: "Une page ciblee sur la strategie de divorce et l'execution.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "Demander une consultation",
          description: "Pour obtenir un diagnostic clair sur votre dossier familial.",
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
          path: "/consultation-juridique-tunisie",
          label: "Request a consultation",
          description: "Get clear direction on your family-law situation.",
        },
      ],
      ar: [
        {
          path: "/services/droit-de-la-famille",
          label: "خدمة قانون الاسرة",
          description: "الطلاق والحضانة والنفقة والميراث.",
        },
        {
          path: "/avocat-divorce-tunisie",
          label: "دليل الطلاق في تونس",
          description: "ارشاد مركز حول استراتيجية الطلاق وتنفيذ الاحكام.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "طلب استشارة قانونية",
          description: "للحصول على توجيه واضح بخصوص وضعيتك العائلية.",
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
          description: "Verification fonciere, contrats et gestion du risque.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "Demander une consultation",
          description: "Pour relire un acte ou verifier un projet d'acquisition.",
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
          path: "/consultation-juridique-tunisie",
          label: "Request a consultation",
          description: "For deed review or a property-acquisition risk check.",
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
          description: "تدقيق السندات والعقود وادارة المخاطر العقارية.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "طلب استشارة قانونية",
          description: "لتدقيق عقد او فحص مخاطر شراء عقار.",
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
          description: "Contrats, societes, conformite et litiges commerciaux.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "Guide affaires Tunisie",
          description: "Structuration juridique et defense des entreprises.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "Demander une consultation",
          description: "Pour cadrer un risque de conformite ou un contrat sensible.",
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
          path: "/consultation-juridique-tunisie",
          label: "Request a consultation",
          description: "For compliance exposure, contracts or strategic legal review.",
        },
      ],
      ar: [
        {
          path: "/services/droit-des-affaires",
          label: "خدمة قانون الاعمال",
          description: "عقود وشركات وامتثال ونزاعات تجارية.",
        },
        {
          path: "/avocat-affaires-tunisie",
          label: "دليل الاعمال في تونس",
          description: "هيكلة قانونية ودفاع عن المؤسسات في تونس.",
        },
        {
          path: "/consultation-juridique-tunisie",
          label: "طلب استشارة قانونية",
          description: "لتاطير خطر امتثال او عقد تجاري حساس.",
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
          description: "Analyser rapidement l'impact d'une reforme sur votre dossier.",
        },
        {
          path: "/services/droit-des-affaires",
          label: "Service droit des affaires",
          description: "Support contractuel et contentieux pour l'entreprise.",
        },
        {
          path: "/avocat-kairouan",
          label: "Avocat a Kairouan",
          description: "Page locale pour les consultations et dossiers suivis a Kairouan.",
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
          path: "/avocat-kairouan",
          label: "Lawyer in Kairouan",
          description: "Local page for consultations and legal support in Kairouan.",
        },
      ],
      ar: [
        {
          path: "/consultation-juridique-tunisie",
          label: "استشارة قانونية",
          description: "توجيه سريع لفهم اثر الاصلاح القانوني على وضعيتك.",
        },
        {
          path: "/services/droit-des-affaires",
          label: "خدمة قانون الاعمال",
          description: "دعم تعاقدي ونزاعي للمؤسسات والمهنيين.",
        },
        {
          path: "/avocat-kairouan",
          label: "محامية في القيروان",
          description: "صفحة محلية للاستشارات والملفات المتابعة في القيروان.",
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
