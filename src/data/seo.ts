import { getSeoClusterPage } from "@/data/seoCluster";

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
        "Avocat Kairouan & Tunis | Consultation Juridique | Me Haifa Guedhami Alouini",
      description:
        "Besoin d'un avocat en Tunisie ? Cabinet à Kairouan et Tunis : divorce, immobilier, affaires et contentieux. Consultation rapide, suivi personnalisé.",
      keywords:
        "avocat tunisie, avocat kairouan, avocat tunis, droit de la famille, divorce tunisie, droit immobilier, droit des affaires, محامي القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title:
        "Lawyer Kairouan & Tunis | Legal Consultation | Haifa Guedhami Alouini",
      description:
        "Need a lawyer in Tunisia? Law firm in Kairouan and Tunis: divorce, real estate, business and litigation. Fast consultation, personalized follow-up.",
      keywords:
        "lawyer tunisia, lawyer kairouan, lawyer tunis, family law, divorce tunisia, real estate law, business law",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "محامية القيروان وتونس | استشارة قانونية | حيفاء قذامي العلويني",
      description:
        "تحتاج محامي في تونس؟ مكتب محاماة في القيروان وتونس: طلاق، عقار، أعمال ونزاعات. استشارة سريعة ومتابعة شخصية.",
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
      title: "Avocat Famille Kairouan & Tunis | Divorce, Garde, Pension",
      description:
        "Avocat droit de la famille à Kairouan et Tunis. Divorce, garde d'enfants, pension alimentaire et succession. Consultation personnalisée.",
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
        "Avocat Divorce Tunisie | Garde & Pension | Kairouan, Tunis, à Distance",
      description:
        "Procédure de divorce en Tunisie ? Avocat spécialisé en garde d'enfants, pension alimentaire et exécution. Consultation rapide à Kairouan et Tunis.",
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
        "Avocat Kairouan | Consultation Rapide | Divorce, Immobilier, Affaires",
      description:
        "Premier cabinet d'avocat à Kairouan. Divorce, garde, immobilier et affaires. Rendez-vous rapide, suivi local et à distance. Appelez maintenant.",
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

  "/avocat-divorce-kairouan": {
    fr: {
      title: "Avocat divorce à Kairouan | Garde, pension et exécution",
      description:
        "Avocat divorce à Kairouan pour séparation, garde d'enfants, pension alimentaire et exécution des jugements familiaux.",
      keywords:
        "avocat divorce kairouan, avocat famille kairouan, garde enfants kairouan, pension alimentaire kairouan",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Divorce lawyer in Kairouan | Custody, support and enforcement",
      description:
        "Divorce lawyer in Kairouan for separation, child custody, alimony and enforcement of family judgments.",
      keywords:
        "divorce lawyer kairouan, family lawyer kairouan, child custody kairouan, alimony kairouan",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامية طلاق في القيروان | حضانة ونفقة وتنفيذ",
      description:
        "محامية طلاق في القيروان لقضايا الطلاق والحضانة والنفقة وتنفيذ الاحكام العائلية.",
      keywords:
        "محامية طلاق القيروان, محامي اسرة القيروان, حضانة الاطفال القيروان, نفقة القيروان",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-immobilier-kairouan": {
    fr: {
      title: "Avocat immobilier à Kairouan | Titres, ventes, baux et litiges",
      description:
        "Avocat immobilier à Kairouan pour vérification de titres, contrats, baux et contentieux de propriété.",
      keywords:
        "avocat immobilier kairouan, avocat foncier kairouan, litige propriete kairouan, bail commercial kairouan",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Real estate lawyer in Kairouan | Titles, leases and disputes",
      description:
        "Real estate lawyer in Kairouan for title verification, contracts, leases and property disputes.",
      keywords:
        "real estate lawyer kairouan, property lawyer kairouan, property dispute kairouan, commercial lease kairouan",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامية عقارية في القيروان | سندات وكراء ونزاعات",
      description:
        "محامية عقارية في القيروان للتثبت من السندات والعقود والكراء والنزاعات العقارية.",
      keywords:
        "محامي عقاري القيروان, محامية عقارية القيروان, نزاع عقاري القيروان, كراء تجاري القيروان",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/avocat-affaires-kairouan": {
    fr: {
      title: "Avocat affaires à Kairouan | Sociétés, contrats et recouvrement",
      description:
        "Avocat affaires à Kairouan pour création de sociétés, contrats commerciaux, recouvrement et litiges entre partenaires.",
      keywords:
        "avocat affaires kairouan, avocat societe kairouan, contrat commercial kairouan, litige commercial kairouan",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Business lawyer in Kairouan | Companies, contracts and recovery",
      description:
        "Business lawyer in Kairouan for company matters, commercial contracts, debt recovery and partner disputes.",
      keywords:
        "business lawyer kairouan, company lawyer kairouan, commercial contract kairouan, commercial dispute kairouan",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "محامية اعمال في القيروان | شركات وعقود واستخلاص",
      description:
        "محامية اعمال في القيروان للشركات والعقود التجارية والاستخلاص والنزاعات بين الشركاء.",
      keywords:
        "محامي اعمال القيروان, محامية شركات القيروان, عقد تجاري القيروان, نزاع تجاري القيروان",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/consultation-juridique-kairouan": {
    fr: {
      title: "Consultation juridique à Kairouan | Réponse rapide et plan clair",
      description:
        "Consultation juridique à Kairouan pour particuliers, familles et entreprises avec diagnostic, options légales et plan d'action.",
      keywords:
        "consultation juridique kairouan, avocat kairouan consultation, conseil juridique kairouan, rendez-vous avocat kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal consultation in Kairouan | Fast answers and a clear plan",
      description:
        "Legal consultation in Kairouan for individuals, families and companies with diagnosis, options and action plan.",
      keywords:
        "legal consultation kairouan, lawyer consultation kairouan, legal advice kairouan, lawyer appointment kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "استشارة قانونية في القيروان | جواب سريع وخطة واضحة",
      description:
        "استشارة قانونية في القيروان للافراد والعائلات والشركات مع تشخيص قانوني وخيارات وخطة عمل.",
      keywords:
        "استشارة قانونية القيروان, محامي القيروان استشارة, نصيحة قانونية القيروان, موعد محامي القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/code-du-travail-tunisie": {
    fr: {
      title:
        "Code du Travail Tunisie 2025 | Droits, Licenciement et Réforme | Avocat",
      description:
        "Guide avocat sur le code du travail en Tunisie 2025 : contrats, licenciement, congés, réforme et droits des salariés. Consultation juridique à Kairouan et Tunis.",
      keywords:
        "code de travail tunisie 2025, code du travail tunisie, loi de travail 2025, code de travail tunisie secteur privé, droit du travail tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title:
        "Tunisia Labour Code 2025 | Rights, Dismissal & Reform | Attorney",
      description:
        "Attorney guide to Tunisia labour code 2025: contracts, dismissal, leave, reform and employee rights. Legal consultation in Kairouan and Tunis.",
      keywords:
        "tunisia labour code 2025, labor law tunisia, employment law tunisia, worker rights tunisia, labour code reform tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title:
        "مجلة الشغل تونس 2025 | حقوق وطرد وإصلاح | محامية",
      description:
        "دليل محامية حول مجلة الشغل في تونس 2025: العقود والطرد والعطل والإصلاح وحقوق العمال. استشارة قانونية في القيروان وتونس.",
      keywords:
        "مجلة الشغل تونس 2025, قانون الشغل تونس, حقوق العمال تونس, إصلاح مجلة الشغل",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
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
        "Prendre Rendez-vous | Avocat Kairouan & Tunis | WhatsApp et Email",
      description:
        "Contactez Maître Haifa Guedhami Alouini pour une consultation juridique. Réponse rapide par WhatsApp, email ou au cabinet à Kairouan.",
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
      title: "FAQ Avocat Tunisie | Procédures, Délais et Honoraires",
      description:
        "Questions fréquentes sur le divorce, l'immobilier et le droit des affaires en Tunisie. Honoraires, délais et procédures expliqués simplement.",
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

  const clusterPage = getSeoClusterPage(path, locale);
  if (clusterPage) {
    return {
      title: clusterPage.heading,
      description: clusterPage.description,
      keywords: clusterPage.keywords,
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    };
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
