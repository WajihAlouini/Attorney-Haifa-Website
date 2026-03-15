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
// Title: max 60 chars | Description: 120–160 chars
export const seoData: Record<string, LocalizedSEOData> = {
  "/": {
    fr: {
      title:
        "Avocat Kairouan & Tunis | Me Haifa Guedhami Alouini",
      description:
        "Besoin d'un avocat en Tunisie ? Cabinet à Kairouan et Tunis : divorce, immobilier, affaires et contentieux. Consultation rapide, suivi personnalisé.",
      keywords:
        "avocat tunisie, avocat kairouan, avocat tunis, droit de la famille, divorce tunisie, droit immobilier, droit des affaires, محامي القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title:
        "Lawyer Kairouan & Tunis | Haifa Guedhami Alouini",
      description:
        "Need a lawyer in Tunisia? Law firm in Kairouan and Tunis: divorce, real estate, business and litigation. Fast consultation, personalized follow-up.",
      keywords:
        "lawyer tunisia, lawyer kairouan, lawyer tunis, family law, divorce tunisia, real estate law, business law",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "محامية القيروان وتونس | حيفاء قذامي العلويني",
      description:
        "تحتاج محامي في تونس؟ مكتب محاماة في القيروان وتونس: طلاق، عقار، أعمال ونزاعات. استشارة سريعة ومتابعة شخصية. اتصل الآن للحصول على موعد.",
      keywords:
        "محامي تونس, محامي القيروان, محامي قانون الاسرة, طلاق تونس, قانون عقاري, قانون اعمال",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/about": {
    fr: {
      title: "À Propos | Me Haifa Guedhami Alouini - Avocat",
      description:
        "Parcours, expérience et approche de Maître Haifa Guedhami Alouini, avocate à Kairouan et Tunis. Plus de 25 ans au service du droit en Tunisie.",
      keywords:
        "biographie avocat tunisie, experience juridique, avocat kairouan tunis",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
    en: {
      title: "About | Attorney Haifa Guedhami Alouini",
      description:
        "Career, experience and approach of Attorney Haifa Guedhami Alouini, lawyer in Kairouan and Tunis, Tunisia. Over 25 years of dedicated legal practice.",
      keywords:
        "lawyer biography tunisia, legal experience, attorney kairouan tunis",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
    ar: {
      title: "نبذة عني | المحامية حيفاء قذامي العلويني",
      description:
        "مسار وتجربة ومنهجية المحامية حيفاء قذامي العلويني، محامية في القيروان وتونس. أكثر من 25 سنة من الممارسة القانونية المتفانية في خدمة موكليها.",
      keywords: "سيرة ذاتية محامي تونس, تجربة قانونية, محامية القيروان تونس",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
  },

  "/services": {
    fr: {
      title: "Domaines de Pratique | Avocat Kairouan et Tunis",
      description:
        "Services juridiques en Tunisie : droit de la famille, droit immobilier et droit des affaires. Conseil et contentieux à Kairouan et Tunis.",
      keywords:
        "services juridiques tunisie, avocat famille, avocat immobilier, avocat affaires",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Practice Areas | Lawyer Kairouan & Tunis",
      description:
        "Legal services in Tunisia: family law, real estate law and business law. Expert counsel and litigation in Kairouan and Tunis for individuals and companies.",
      keywords:
        "legal services tunisia, family lawyer, real estate lawyer, business lawyer",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "مجالات الممارسة | محامية القيروان وتونس",
      description:
        "خدمات قانونية في تونس: قانون الأسرة والعقاري والأعمال. استشارة وتمثيل قانوني في القيروان وتونس للأفراد والشركات بخبرة تفوق 25 سنة.",
      keywords: "خدمات قانونية تونس, محامي اسرة, محامي عقاري, محامي اعمال",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/services/droit-de-la-famille": {
    fr: {
      title: "Avocat Famille Kairouan & Tunis | Divorce, Garde",
      description:
        "Avocat droit de la famille à Kairouan et Tunis. Divorce, garde d'enfants, pension alimentaire et succession. Consultation personnalisée et suivi dédié.",
      keywords:
        "avocat divorce tunisie, droit de la famille, garde d'enfants, pension alimentaire",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Family Lawyer | Divorce & Custody | Kairouan",
      description:
        "Family law attorney in Kairouan and Tunis for divorce, child custody, alimony and succession cases in Tunisia. Personalized consultation and follow-up.",
      keywords:
        "family lawyer tunisia, divorce attorney, child custody tunisia, alimony",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي قانون الأسرة | طلاق وحضانة | القيروان",
      description:
        "محامية قانون الأسرة في القيروان وتونس. مرافقة قانونية في قضايا الطلاق والحضانة والنفقة والميراث. استشارة شخصية ومتابعة مخصصة لكل ملف.",
      keywords: "محامي طلاق تونس, قانون الاسرة, حضانة اطفال, نفقة تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/services/droit-des-affaires": {
    fr: {
      title: "Avocat Affaires | Entreprises | Kairouan - Tunis",
      description:
        "Conseil et contentieux pour entreprises en Tunisie : création de sociétés, contrats commerciaux et litiges d'affaires à Kairouan et Tunis.",
      keywords:
        "avocat affaires tunisie, contrat commercial, creation societe, litige commercial",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Business Lawyer | Companies | Kairouan - Tunis",
      description:
        "Legal advisory and litigation for companies in Tunisia: formation, commercial contracts and business disputes. Expert counsel in Kairouan and Tunis.",
      keywords:
        "business lawyer tunisia, commercial contract, company formation, commercial dispute",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي أعمال | شركات وعقود | القيروان - تونس",
      description:
        "استشارة وتمثيل قانوني للشركات في تونس: تأسيس شركات، عقود تجارية ونزاعات أعمال. خبرة موثوقة في القيروان وتونس لحماية مصالحكم.",
      keywords: "محامي اعمال تونس, عقد تجاري, تأسيس شركة, نزاع تجاري",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/services/droit-immobilier": {
    fr: {
      title: "Avocat Immobilier | Kairouan - Tunis | Litiges",
      description:
        "Avocat droit immobilier à Kairouan et Tunis. Sécurisez vos transactions, vérifications foncières et résolvez vos litiges de propriété en Tunisie.",
      keywords:
        "avocat immobilier tunisie, litige propriete, transaction immobiliere, bail commercial",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Real Estate Lawyer | Kairouan - Tunis",
      description:
        "Real estate attorney in Kairouan and Tunis. Secure your property transactions, title verification and resolve real estate disputes across Tunisia.",
      keywords:
        "real estate lawyer tunisia, property dispute, property transaction, commercial lease",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي عقاري | معاملات ونزاعات | القيروان",
      description:
        "محامية عقارية في القيروان وتونس. تأمين معاملاتك العقارية والتحقق من السندات وحل نزاعات الملكية. خبرة واسعة في القانون العقاري التونسي.",
      keywords: "محامي عقاري تونس, نزاع ملكية, معاملة عقارية, كراء تجاري",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-divorce-tunisie": {
    fr: {
      title: "Avocat Divorce Tunisie | Garde & Pension",
      description:
        "Procédure de divorce en Tunisie ? Avocat spécialisé en garde d'enfants, pension alimentaire et exécution. Consultation rapide à Kairouan et Tunis.",
      keywords:
        "avocat divorce tunisie, avocat famille tunisie, garde enfants tunisie, pension alimentaire tunisie",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Divorce Lawyer Tunisia | Custody & Alimony",
      description:
        "Divorce lawyer in Tunisia for child custody, alimony and judgment enforcement. Expert family law support in Kairouan, Tunis and remote consultations.",
      keywords:
        "divorce lawyer tunisia, family lawyer tunisia, child custody tunisia, alimony tunisia",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي طلاق في تونس | حضانة ونفقة",
      description:
        "محامية طلاق في تونس متخصصة في قضايا الحضانة والنفقة وتنفيذ الأحكام. مرافقة قانونية في القيروان وتونس وعن بعد. استشارة سريعة وشخصية.",
      keywords: "محامي طلاق تونس, محامي اسرة تونس, حضانة اطفال تونس, نفقة تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-immobilier-tunisie": {
    fr: {
      title: "Avocat Immobilier Tunisie | Titres et Litiges",
      description:
        "Avocat immobilier en Tunisie pour vérification foncière, contrats immobiliers et contentieux de propriété. Cabinet à Kairouan et Tunis, suivi personnalisé.",
      keywords:
        "avocat immobilier tunisie, verification fonciere, litige propriete tunisie, bail commercial tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Real Estate Lawyer Tunisia | Titles & Disputes",
      description:
        "Real estate lawyer in Tunisia for title verification, property contracts and litigation. Law firm in Kairouan and Tunis with personalized case follow-up.",
      keywords:
        "real estate lawyer tunisia, title verification, property dispute tunisia, commercial lease tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي عقاري تونس | سندات ونزاعات ملكية",
      description:
        "محامية عقارية في تونس لتدقيق الملكية وعقود العقارات والنزاعات العقارية. مكتب في القيروان وتونس مع متابعة شخصية لكل ملف عقاري.",
      keywords:
        "محامي عقاري تونس, تدقيق ملكية, نزاع عقاري تونس, كراء تجاري تونس",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/avocat-affaires-tunisie": {
    fr: {
      title: "Avocat Affaires Tunisie | Contrats et Sociétés",
      description:
        "Avocat droit des affaires en Tunisie : création de société, contrats commerciaux, recouvrement et défense en litige. Cabinet à Kairouan et Tunis.",
      keywords:
        "avocat affaires tunisie, creation societe tunisie, contrat commercial tunisie, litige commercial",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Business Lawyer Tunisia | Contracts & Companies",
      description:
        "Business lawyer in Tunisia for company formation, commercial contracts, debt recovery and litigation defense. Law firm in Kairouan and Tunis.",
      keywords:
        "business lawyer tunisia, company formation tunisia, commercial contract tunisia, commercial dispute",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "محامي أعمال تونس | عقود وشركات تجارية",
      description:
        "محامية أعمال في تونس لتأسيس الشركات والعقود التجارية والاستخلاص والدفاع في النزاعات. مكتب محاماة في القيروان وتونس بخبرة واسعة.",
      keywords: "محامي اعمال تونس, تأسيس شركة تونس, عقد تجاري تونس, نزاع تجاري",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/avocat-kairouan": {
    fr: {
      title: "Avocat Kairouan | Divorce, Immobilier, Affaires",
      description:
        "Cabinet d'avocat à Kairouan. Divorce, garde, immobilier et affaires. Rendez-vous rapide, suivi local et à distance. Appelez maintenant pour une consultation.",
      keywords:
        "avocat kairouan, avocat a kairouan, cabinet avocat kairouan, consultation juridique kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Lawyer in Kairouan | Divorce, Property, Business",
      description:
        "Law firm in Kairouan for individuals and companies: divorce, real estate, business law and legal consultation. Fast appointments and personalized follow-up.",
      keywords:
        "lawyer kairouan, attorney kairouan, law firm kairouan, legal consultation kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "محامية في القيروان | طلاق وعقار وأعمال",
      description:
        "مكتب محاماة في القيروان لفائدة الأفراد والمؤسسات: طلاق وعقار وأعمال واستشارة قانونية. مواعيد سريعة ومتابعة شخصية محلية وعن بعد.",
      keywords:
        "محامي القيروان, محامية القيروان, مكتب محاماة القيروان, استشارة قانونية القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/avocat-divorce-kairouan": {
    fr: {
      title: "Avocat Divorce Kairouan | Garde et Pension",
      description:
        "Avocat divorce à Kairouan pour séparation, garde d'enfants, pension alimentaire et exécution des jugements familiaux. Suivi personnalisé et réactif.",
      keywords:
        "avocat divorce kairouan, avocat famille kairouan, garde enfants kairouan, pension alimentaire kairouan",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Divorce Lawyer Kairouan | Custody & Support",
      description:
        "Divorce lawyer in Kairouan for separation, child custody, alimony and enforcement of family judgments. Personalized follow-up and responsive service.",
      keywords:
        "divorce lawyer kairouan, family lawyer kairouan, child custody kairouan, alimony kairouan",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامية طلاق في القيروان | حضانة ونفقة",
      description:
        "محامية طلاق في القيروان لقضايا الطلاق والحضانة والنفقة وتنفيذ الأحكام العائلية. متابعة شخصية وخدمة سريعة ومتفانية لكل ملف.",
      keywords:
        "محامية طلاق القيروان, محامي اسرة القيروان, حضانة الاطفال القيروان, نفقة القيروان",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-immobilier-kairouan": {
    fr: {
      title: "Avocat Immobilier Kairouan | Titres et Litiges",
      description:
        "Avocat immobilier à Kairouan pour vérification de titres, contrats, baux et contentieux de propriété. Accompagnement complet et suivi personnalisé.",
      keywords:
        "avocat immobilier kairouan, avocat foncier kairouan, litige propriete kairouan, bail commercial kairouan",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Real Estate Lawyer Kairouan | Titles & Leases",
      description:
        "Real estate lawyer in Kairouan for title verification, contracts, leases and property disputes. Full legal support with personalized case management.",
      keywords:
        "real estate lawyer kairouan, property lawyer kairouan, property dispute kairouan, commercial lease kairouan",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامية عقارية في القيروان | سندات ونزاعات",
      description:
        "محامية عقارية في القيروان للتثبت من السندات والعقود والكراء والنزاعات العقارية. مرافقة قانونية كاملة ومتابعة شخصية لكل ملف.",
      keywords:
        "محامي عقاري القيروان, محامية عقارية القيروان, نزاع عقاري القيروان, كراء تجاري القيروان",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/avocat-affaires-kairouan": {
    fr: {
      title: "Avocat Affaires Kairouan | Sociétés et Contrats",
      description:
        "Avocat affaires à Kairouan pour création de sociétés, contrats commerciaux, recouvrement et litiges entre partenaires. Suivi dédié et réactif.",
      keywords:
        "avocat affaires kairouan, avocat societe kairouan, contrat commercial kairouan, litige commercial kairouan",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Business Lawyer Kairouan | Companies & Contracts",
      description:
        "Business lawyer in Kairouan for company matters, commercial contracts, debt recovery and partner disputes. Dedicated follow-up and responsive service.",
      keywords:
        "business lawyer kairouan, company lawyer kairouan, commercial contract kairouan, commercial dispute kairouan",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "محامية أعمال في القيروان | شركات وعقود",
      description:
        "محامية أعمال في القيروان للشركات والعقود التجارية والاستخلاص والنزاعات بين الشركاء. متابعة مخصصة وخدمة سريعة ومتفانية لحماية مصالحكم.",
      keywords:
        "محامي اعمال القيروان, محامية شركات القيروان, عقد تجاري القيروان, نزاع تجاري القيروان",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/consultation-juridique-kairouan": {
    fr: {
      title: "Consultation Juridique Kairouan | Réponse Rapide",
      description:
        "Consultation juridique à Kairouan pour particuliers, familles et entreprises. Diagnostic clair, options légales et plan d'action personnalisé.",
      keywords:
        "consultation juridique kairouan, avocat kairouan consultation, conseil juridique kairouan, rendez-vous avocat kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal Consultation Kairouan | Fast & Clear",
      description:
        "Legal consultation in Kairouan for individuals, families and companies. Clear diagnosis, legal options and a personalized action plan for your case.",
      keywords:
        "legal consultation kairouan, lawyer consultation kairouan, legal advice kairouan, lawyer appointment kairouan",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "استشارة قانونية في القيروان | جواب سريع",
      description:
        "استشارة قانونية في القيروان للأفراد والعائلات والشركات. تشخيص قانوني واضح وخيارات متعددة وخطة عمل مخصصة لكل قضية. موعد سريع ومتابعة.",
      keywords:
        "استشارة قانونية القيروان, محامي القيروان استشارة, نصيحة قانونية القيروان, موعد محامي القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/code-du-travail-tunisie": {
    fr: {
      title: "Code du Travail Tunisie 2025 | Droits et Réforme",
      description:
        "Guide avocat sur le code du travail en Tunisie 2025 : contrats, licenciement, congés, réforme et droits des salariés. Consultation à Kairouan et Tunis.",
      keywords:
        "code de travail tunisie 2025, code du travail tunisie, loi de travail 2025, code de travail tunisie secteur privé, droit du travail tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Tunisia Labour Code 2025 | Rights & Reform",
      description:
        "Attorney guide to Tunisia labour code 2025: contracts, dismissal, leave, reform and employee rights. Legal consultation in Kairouan and Tunis.",
      keywords:
        "tunisia labour code 2025, labor law tunisia, employment law tunisia, worker rights tunisia, labour code reform tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "مجلة الشغل تونس 2025 | حقوق وإصلاح",
      description:
        "دليل محامية حول مجلة الشغل في تونس 2025: العقود والطرد والعطل والإصلاح وحقوق العمال. استشارة قانونية متخصصة في القيروان وتونس.",
      keywords:
        "مجلة الشغل تونس 2025, قانون الشغل تونس, حقوق العمال تونس, إصلاح مجلة الشغل",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/consultation-juridique-tunisie": {
    fr: {
      title: "Consultation Juridique Tunisie | Kairouan & Tunis",
      description:
        "Consultation juridique rapide en Tunisie avec plan d'action clair pour particuliers et entreprises. Cabinet à Kairouan et Tunis, suivi personnalisé.",
      keywords:
        "consultation juridique tunisie, rendez-vous avocat tunisie, conseil juridique kairouan tunis",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal Consultation Tunisia | Kairouan & Tunis",
      description:
        "Fast legal consultation in Tunisia with a clear action plan for individuals and companies. Law firm in Kairouan and Tunis with personalized follow-up.",
      keywords:
        "legal consultation tunisia, lawyer appointment tunisia, legal advice kairouan tunis",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "استشارة قانونية تونس | القيروان وتونس",
      description:
        "استشارة قانونية سريعة في تونس مع خطة عمل واضحة للأفراد والشركات. مكتب محاماة في القيروان وتونس مع متابعة شخصية لكل موكل.",
      keywords:
        "استشارة قانونية تونس, موعد محامي تونس, نصيحة قانونية القيروان تونس",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/values": {
    fr: {
      title: "Nos Valeurs | Cabinet Me Haifa Guedhami Alouini",
      description:
        "Intégrité, transparence et excellence dans l'accompagnement juridique à Kairouan et Tunis. Des valeurs au service de chaque client et chaque dossier.",
      keywords:
        "valeurs cabinet avocat, ethique juridique, transparence honoraires",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Our Values | Law Firm Haifa Guedhami Alouini",
      description:
        "Integrity, transparency and excellence in legal services in Kairouan and Tunis, Tunisia. Values that guide every case and every client relationship.",
      keywords: "law firm values, legal ethics, transparent fees tunisia",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "قيمنا | مكتب المحامية حيفاء قذامي العلويني",
      description:
        "النزاهة والشفافية والتميز في الخدمات القانونية بالقيروان وتونس. قيم راسخة في خدمة كل موكل وكل قضية بمهنية عالية وتفان كامل.",
      keywords: "قيم مكتب محاماة, اخلاقيات قانونية, شفافية أتعاب تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/contact": {
    fr: {
      title: "Contact | Avocat Kairouan & Tunis | WhatsApp",
      description:
        "Contactez Maître Haifa Guedhami Alouini pour une consultation juridique. Réponse rapide par WhatsApp, email ou au cabinet à Kairouan et Tunis.",
      keywords:
        "contact avocat tunisie, consultation juridique tunis, avocat kairouan whatsapp",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Contact | Lawyer Kairouan & Tunis | WhatsApp",
      description:
        "Contact Attorney Haifa Guedhami Alouini for a legal consultation in Tunisia. Fast response via WhatsApp, email or at the office in Kairouan and Tunis.",
      keywords:
        "contact lawyer tunisia, legal consultation tunis, lawyer kairouan whatsapp",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "تواصل معنا | محامية القيروان وتونس | واتساب",
      description:
        "تواصل مع المحامية حيفاء قذامي العلويني لاستشارة قانونية في تونس. رد سريع عبر واتساب أو البريد الإلكتروني أو في المكتب بالقيروان وتونس.",
      keywords: "تواصل محامي تونس, استشارة قانونية تونس, محامي القيروان واتساب",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/faq": {
    fr: {
      title: "FAQ Avocat Tunisie | Procédures et Honoraires",
      description:
        "Questions fréquentes sur le divorce, l'immobilier et le droit des affaires en Tunisie. Honoraires, délais et procédures expliqués simplement.",
      keywords: "faq avocat tunisie, procedure divorce, honoraires avocat",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "FAQ | Lawyer Tunisia | Procedures & Fees",
      description:
        "Frequently asked questions about divorce, real estate and business law in Tunisia. Procedures, timelines and attorney fees explained in simple terms.",
      keywords: "faq lawyer tunisia, divorce procedure, attorney fees tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "الأسئلة المتكررة | محامية تونس | إجراءات",
      description:
        "إجابات على الأسئلة الشائعة حول الطلاق والعقار والأعمال في تونس. الإجراءات والآجال والأتعاب مشروحة ببساطة ووضوح تام لمساعدتكم.",
      keywords: "اسئلة متكررة محامي تونس, إجراءات طلاق, أتعاب محامي تونس",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/actualites": {
    fr: {
      title: "Actualités Juridiques | Me Haifa Guedhami Alouini",
      description:
        "Analyses et actualités juridiques en Tunisie par Maître Haifa Guedhami Alouini. Restez informé des dernières évolutions du droit tunisien.",
      keywords: "actualites juridiques tunisie, blog avocat tunisie",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal News | Haifa Guedhami Alouini Law Firm",
      description:
        "Legal analysis and news from Tunisia by Attorney Haifa Guedhami Alouini. Stay informed about the latest developments in Tunisian law and legislation.",
      keywords: "legal news tunisia, law blog tunisia, attorney insights",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "المستجدات القانونية | مكتب حيفاء قذامي",
      description:
        "تحليلات وأخبار قانونية من تونس بقلم المحامية حيفاء قذامي العلويني. ابقوا على اطلاع بآخر تطورات القانون والتشريعات التونسية.",
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
