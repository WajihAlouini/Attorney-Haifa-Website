export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export interface LocalizedSEOData {
  fr: SEOData;
  en: SEOData;
  ar: SEOData;
}

// Route-level metadata — localized per FR / EN / AR.
// Used by SEO.tsx to set title, description, keywords, canonical and OG tags.
export const seoData: Record<string, LocalizedSEOData> = {
  "/": {
    fr: {
      title:
        "Maître Haifa Guedhami Alouini | Avocat à Kairouan et Tunis, Tunisie",
      description:
        "Cabinet d'avocat en Tunisie à Kairouan et Tunis. Droit de la famille, immobilier, affaires et contentieux.",
      keywords:
        "avocat tunisie, avocat kairouan, avocat tunis, droit de la famille, divorce tunisie, droit immobilier, droit des affaires",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title:
        "Attorney Haifa Guedhami Alouini | Lawyer in Kairouan & Tunis, Tunisia",
      description:
        "Law firm in Tunisia based in Kairouan and Tunis. Family law, real estate, business and litigation.",
      keywords:
        "lawyer tunisia, lawyer kairouan, lawyer tunis, family law, divorce tunisia, real estate law, business law",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "الأستاذة حيفاء قذامي العلويني | محامية في القيروان وتونس",
      description:
        "مكتب محاماة في تونس، القيروان وتونس العاصمة. قانون الأسرة، العقاري، الأعمال والنزاعات.",
      keywords:
        "محامي تونس, محامي القيروان, محامي قانون الاسرة, طلاق تونس, قانون عقاري, قانون اعمال",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/about": {
    fr: {
      title: "À Propos | Maître Haifa Guedhami Alouini - Avocat Tunisie",
      description:
        "Parcours, expérience et approche de Maître Haifa Guedhami Alouini, avocate à Kairouan et Tunis.",
      keywords:
        "biographie avocat tunisie, experience juridique, avocat kairouan tunis",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
    en: {
      title: "About | Attorney Haifa Guedhami Alouini - Lawyer Tunisia",
      description:
        "Career, experience and approach of Attorney Haifa Guedhami Alouini, lawyer in Kairouan and Tunis, Tunisia.",
      keywords:
        "lawyer biography tunisia, legal experience, attorney kairouan tunis",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
    ar: {
      title: "نبذة عني | المحامية حيفاء قذامي العلويني - محامية تونس",
      description:
        "مسار، تجربة ومنهجية المحامية حيفاء قذامي العلويني، محامية في القيروان وتونس.",
      keywords: "سيرة ذاتية محامي تونس, تجربة قانونية, محامية القيروان تونس",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
  },

  "/services": {
    fr: {
      title: "Domaines de Pratique | Avocat Kairouan et Tunis",
      description:
        "Services juridiques en Tunisie: droit de la famille, droit immobilier et droit des affaires.",
      keywords:
        "services juridiques tunisie, avocat famille, avocat immobilier, avocat affaires",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Practice Areas | Lawyer Kairouan & Tunis, Tunisia",
      description:
        "Legal services in Tunisia: family law, real estate law and business law in Kairouan and Tunis.",
      keywords:
        "legal services tunisia, family lawyer, real estate lawyer, business lawyer",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "مجالات الممارسة | محامية القيروان وتونس",
      description:
        "خدمات قانونية في تونس: قانون الأسرة، العقاري والأعمال في القيروان وتونس.",
      keywords: "خدمات قانونية تونس, محامي اسرة, محامي عقاري, محامي اعمال",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/services/droit-de-la-famille": {
    fr: {
      title: "Avocat Droit de la Famille | Divorce et Garde | Kairouan - Tunis",
      description:
        "Accompagnement en divorce, garde d'enfants, pension alimentaire et succession en Tunisie.",
      keywords:
        "avocat divorce tunisie, droit de la famille, garde d'enfants, pension alimentaire",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title:
        "Family Law Attorney | Divorce & Custody | Kairouan - Tunis, Tunisia",
      description:
        "Legal support for divorce, child custody, alimony and succession in Tunisia.",
      keywords:
        "family lawyer tunisia, divorce attorney, child custody tunisia, alimony",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي قانون الأسرة | طلاق وحضانة | القيروان - تونس",
      description:
        "مرافقة قانونية في الطلاق والحضانة والنفقة والميراث في تونس.",
      keywords: "محامي طلاق تونس, قانون الاسرة, حضانة اطفال, نفقة تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/services/droit-des-affaires": {
    fr: {
      title: "Avocat Droit des Affaires | Entreprises | Kairouan - Tunis",
      description:
        "Conseil et contentieux pour entreprises: création, contrats commerciaux et litiges d'affaires.",
      keywords:
        "avocat affaires tunisie, contrat commercial, creation societe, litige commercial",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title:
        "Business Law Attorney | Companies & Contracts | Kairouan - Tunis, Tunisia",
      description:
        "Legal advisory for companies: formation, commercial contracts, and business disputes in Tunisia.",
      keywords:
        "business lawyer tunisia, commercial contract, company formation, commercial dispute",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي قانون الأعمال | شركات وعقود | القيروان - تونس",
      description:
        "استشارة وتمثيل قانوني للشركات: تأسيس، عقود تجارية ونزاعات أعمال في تونس.",
      keywords: "محامي اعمال تونس, عقد تجاري, تأسيس شركة, نزاع تجاري",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/services/droit-immobilier": {
    fr: {
      title:
        "Avocat Droit Immobilier | Transactions et Litiges | Kairouan - Tunis",
      description:
        "Sécurisez vos transactions immobilières et vos litiges de propriété en Tunisie.",
      keywords:
        "avocat immobilier tunisie, litige propriete, transaction immobiliere, bail commercial",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title:
        "Real Estate Lawyer | Transactions & Disputes | Kairouan - Tunis, Tunisia",
      description:
        "Secure your property transactions and resolve real estate disputes in Tunisia.",
      keywords:
        "real estate lawyer tunisia, property dispute, property transaction, commercial lease",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي عقاري | معاملات ونزاعات | القيروان - تونس",
      description: "تأمين معاملاتك العقارية وحل نزاعات الملكية في تونس.",
      keywords: "محامي عقاري تونس, نزاع ملكية, معاملة عقارية, كراء تجاري",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-divorce-tunisie": {
    fr: {
      title:
        "Avocat Divorce Tunisie | Kairouan, Tunis et à distance | Maître Haifa Guedhami Alouini",
      description:
        "Accompagnement en divorce, garde d'enfants, pension alimentaire et exécution des jugements en Tunisie.",
      keywords:
        "avocat divorce tunisie, avocat famille tunisie, garde enfants tunisie, pension alimentaire tunisie",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title:
        "Divorce Lawyer Tunisia | Kairouan, Tunis & Remote | Haifa Guedhami Alouini",
      description:
        "Legal support for divorce, child custody, alimony and judgment enforcement in Tunisia.",
      keywords:
        "divorce lawyer tunisia, family lawyer tunisia, child custody tunisia, alimony tunisia",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title:
        "محامي طلاق في تونس | القيروان وتونس وعن بعد | حيفاء قذامي العلويني",
      description:
        "مرافقة قانونية في الطلاق والحضانة والنفقة وتنفيذ الأحكام في تونس.",
      keywords: "محامي طلاق تونس, محامي اسرة تونس, حضانة اطفال تونس, نفقة تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-immobilier-tunisie": {
    fr: {
      title:
        "Avocat Immobilier Tunisie | Transactions, Titres et Litiges | Kairouan - Tunis",
      description:
        "Vérification foncière, contrats immobiliers et contentieux de propriété en Tunisie.",
      keywords:
        "avocat immobilier tunisie, verification fonciere, litige propriete tunisie, bail commercial tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title:
        "Real Estate Lawyer Tunisia | Transactions, Titles & Disputes | Kairouan - Tunis",
      description:
        "Title verification, real estate contracts and property litigation in Tunisia.",
      keywords:
        "real estate lawyer tunisia, title verification, property dispute tunisia, commercial lease tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي عقاري في تونس | معاملات وسندات ونزاعات | القيروان - تونس",
      description: "تدقيق الملكية وعقود العقارات والنزاعات العقارية في تونس.",
      keywords:
        "محامي عقاري تونس, تدقيق ملكية, نزاع عقاري تونس, كراء تجاري تونس",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/avocat-affaires-tunisie": {
    fr: {
      title:
        "Avocat Affaires Tunisie | Contrats, Sociétés et Litiges Commerciaux",
      description:
        "Conseil juridique pour entreprises en Tunisie: création de société, contrats commerciaux et défense en litige.",
      keywords:
        "avocat affaires tunisie, creation societe tunisie, contrat commercial tunisie, litige commercial",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title:
        "Business Lawyer Tunisia | Contracts, Companies & Commercial Disputes",
      description:
        "Legal advisory for companies in Tunisia: company formation, commercial contracts and litigation defense.",
      keywords:
        "business lawyer tunisia, company formation tunisia, commercial contract tunisia, commercial dispute",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "محامي أعمال في تونس | عقود وشركات ونزاعات تجارية",
      description:
        "استشارة قانونية للشركات في تونس: تأسيس شركات، عقود تجارية والدفاع في النزاعات.",
      keywords: "محامي اعمال تونس, تأسيس شركة تونس, عقد تجاري تونس, نزاع تجاري",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/avocat-kairouan": {
    fr: {
      title:
        "Avocat a Kairouan | Divorce, immobilier, affaires et consultation",
      description:
        "Cabinet d'avocat a Kairouan pour les particuliers et entreprises: divorce, immobilier, affaires et consultation juridique.",
      keywords:
        "avocat kairouan, avocat a kairouan, cabinet avocat kairouan, consultation juridique kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title:
        "Lawyer in Kairouan | Divorce, real estate, business and legal consultation",
      description:
        "Law firm in Kairouan for individuals and companies: divorce, real estate, business law and legal consultation.",
      keywords:
        "lawyer kairouan, attorney kairouan, law firm kairouan, legal consultation kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "محامية في القيروان | طلاق وعقار واعمال واستشارة قانونية",
      description:
        "مكتب محاماة في القيروان لفائدة الافراد والمؤسسات: طلاق وعقار واعمال واستشارة قانونية.",
      keywords:
        "محامي القيروان, محامية القيروان, مكتب محاماة القيروان, استشارة قانونية القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/consultation-juridique-tunisie": {
    fr: {
      title: "Consultation Juridique Tunisie | Avocat à Kairouan et Tunis",
      description:
        "Consultation juridique rapide avec plan d'action clair pour particuliers et entreprises en Tunisie.",
      keywords:
        "consultation juridique tunisie, rendez-vous avocat tunisie, conseil juridique kairouan tunis",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal Consultation Tunisia | Lawyer in Kairouan & Tunis",
      description:
        "Fast legal consultation with a clear action plan for individuals and companies in Tunisia.",
      keywords:
        "legal consultation tunisia, lawyer appointment tunisia, legal advice kairouan tunis",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "استشارة قانونية في تونس | محامي في القيروان وتونس",
      description:
        "استشارة قانونية سريعة مع خطة عمل واضحة للأفراد والشركات في تونس.",
      keywords:
        "استشارة قانونية تونس, موعد محامي تونس, نصيحة قانونية القيروان تونس",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/values": {
    fr: {
      title: "Nos Valeurs | Cabinet Maître Haifa Guedhami Alouini",
      description:
        "Intégrité, transparence et excellence dans l'accompagnement juridique à Kairouan et Tunis.",
      keywords:
        "valeurs cabinet avocat, ethique juridique, transparence honoraires",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Our Values | Law Firm of Haifa Guedhami Alouini, Tunisia",
      description:
        "Integrity, transparency and excellence in legal services in Kairouan and Tunis, Tunisia.",
      keywords: "law firm values, legal ethics, transparent fees tunisia",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "قيمنا | مكتب المحامية حيفاء قذامي العلويني",
      description:
        "النزاهة والشفافية والتميز في الخدمات القانونية بالقيروان وتونس.",
      keywords: "قيم مكتب محاماة, اخلاقيات قانونية, شفافية أتعاب تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/contact": {
    fr: {
      title:
        "Contact | Avocat Kairouan et Tunis - Maître Haifa Guedhami Alouini",
      description:
        "Contactez le cabinet pour une consultation juridique en Tunisie: WhatsApp, email et rendez-vous.",
      keywords:
        "contact avocat tunisie, consultation juridique tunis, avocat kairouan whatsapp",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Contact | Lawyer Kairouan & Tunis - Haifa Guedhami Alouini",
      description:
        "Contact the firm for a legal consultation in Tunisia: WhatsApp, email and appointments.",
      keywords:
        "contact lawyer tunisia, legal consultation tunis, lawyer kairouan whatsapp",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "تواصل معنا | محامي القيروان وتونس - حيفاء قذامي العلويني",
      description:
        "تواصل مع المكتب لاستشارة قانونية في تونس: واتساب، بريد إلكتروني ومواعيد.",
      keywords: "تواصل محامي تونس, استشارة قانونية تونس, محامي القيروان واتساب",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/faq": {
    fr: {
      title: "Questions Fréquentes | Cabinet Maître Haifa Guedhami Alouini",
      description:
        "Réponses aux questions fréquentes sur les procédures, les délais et les honoraires en Tunisie.",
      keywords: "faq avocat tunisie, procedure divorce, honoraires avocat",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Frequently Asked Questions | Law Firm of Haifa Guedhami Alouini",
      description:
        "Answers to frequently asked questions about procedures, timelines and fees in Tunisia.",
      keywords: "faq lawyer tunisia, divorce procedure, attorney fees tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "الأسئلة المتكررة | مكتب المحامية حيفاء قذامي العلويني",
      description:
        "إجابات على الأسئلة الشائعة حول الإجراءات والآجال والأتعاب في تونس.",
      keywords: "اسئلة متكررة محامي تونس, إجراءات طلاق, أتعاب محامي تونس",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/actualites": {
    fr: {
      title: "Actualités Juridiques | Maître Haifa Guedhami Alouini",
      description:
        "Analyses et actualités juridiques en Tunisie par Maître Haifa Guedhami Alouini.",
      keywords: "actualites juridiques tunisie, blog avocat tunisie",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal News & Insights | Haifa Guedhami Alouini Law Firm",
      description:
        "Legal analysis and news from Tunisia by Attorney Haifa Guedhami Alouini.",
      keywords: "legal news tunisia, law blog tunisia, attorney insights",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "المستجدات القانونية | مكتب حيفاء قذامي العلويني",
      description:
        "تحليلات وأخبار قانونية من تونس بقلم المحامية حيفاء قذامي العلويني.",
      keywords: "اخبار قانونية تونس, مدونة محامي تونس",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },
};

// Helper to get locale-specific SEO data for a route, with FR fallback.
export function getSEOData(path: string, locale: "fr" | "en" | "ar"): SEOData {
  const localized = seoData[path];
  if (localized) {
    return localized[locale] ?? localized["fr"];
  }
  return seoData["/"]["fr"];
}

export const routeToSection: Record<string, string> = {
  "/": "hero",
  "/about": "about",
  "/services": "practice",
  "/values": "values",
  "/contact": "contact",
  "/faq": "faq",
};
