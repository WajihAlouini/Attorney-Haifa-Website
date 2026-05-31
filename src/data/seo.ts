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
      title: "Avocat à Kairouan | Dossiers en Tunisie",
      description:
        "Cabinet d'avocat basé à Kairouan. Divorce, immobilier, affaires et contentieux avec suivi à distance ou déplacement en Tunisie sur accord préalable.",
      keywords:
        "avocat tunisie, avocat kairouan, avocat tunis, droit de la famille, divorce tunisie, droit immobilier, droit des affaires, محامي القيروان",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Lawyer in Kairouan | Cases Across Tunisia",
      description:
        "Law firm based in Kairouan for divorce, real estate, business and litigation, with remote follow-up or planned travel across Tunisia.",
      keywords:
        "lawyer tunisia, lawyer kairouan, lawyer tunis, family law, divorce tunisia, real estate law, business law",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "محامية في القيروان | متابعة في تونس",
      description:
        "مكتب محاماة مقره القيروان لقضايا الطلاق والعقار والأعمال والنزاعات، مع متابعة عن بعد أو تنقل منظم داخل تونس حسب الملف.",
      keywords:
        "محامي تونس, محامي القيروان, محامي قانون الاسرة, طلاق تونس, قانون عقاري, قانون اعمال",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/about": {
    fr: {
      title: "À Propos | Maître Haifa Guedhami Alouini",
      description:
        "Parcours, expérience et approche de Maître Haifa Guedhami Alouini, avocate basée à Kairouan avec suivi de dossiers en Tunisie.",
      keywords:
        "biographie avocat tunisie, experience juridique, avocat kairouan tunis",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
    en: {
      title: "About | Attorney Haifa Guedhami Alouini",
      description:
        "Career, experience and approach of Attorney Haifa Guedhami Alouini, a Kairouan-based lawyer following matters across Tunisia.",
      keywords:
        "lawyer biography tunisia, legal experience, attorney kairouan tunis",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
    ar: {
      title: "نبذة عني | المحامية هيفاء القضامي العلويني",
      description:
        "مسار وتجربة ومنهجية المحامية هيفاء القضامي العلويني، محامية مقرها القيروان وتتابع ملفات في تونس حسب طبيعة القضية.",
      keywords: "سيرة ذاتية محامي تونس, تجربة قانونية, محامية القيروان تونس",
      image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    },
  },

  "/services": {
    fr: {
      title: "Domaines de Pratique | Cabinet à Kairouan",
      description:
        "Services juridiques en Tunisie : famille, immobilier, affaires et pénal. Cabinet à Kairouan avec suivi à distance ou déplacement organisé.",
      keywords:
        "services juridiques tunisie, avocat famille, avocat immobilier, avocat affaires",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Practice Areas | Kairouan Law Firm",
      description:
        "Legal services in Tunisia: family, real estate, business and criminal law. Kairouan office with remote follow-up or planned travel.",
      keywords:
        "legal services tunisia, family lawyer, real estate lawyer, business lawyer",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "مجالات الممارسة | مكتب في القيروان",
      description:
        "خدمات قانونية في تونس: الأسرة والعقار والأعمال والجزائي. مكتب في القيروان مع متابعة عن بعد أو تنقل منظم حسب الملف.",
      keywords: "خدمات قانونية تونس, محامي اسرة, محامي عقاري, محامي اعمال",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
  },

  "/services/droit-de-la-famille": {
    fr: {
      title: "Avocat Famille Kairouan | Divorce, Garde",
      description:
        "Avocat droit de la famille basé à Kairouan. Divorce, garde d'enfants, pension alimentaire et succession avec suivi en Tunisie.",
      keywords:
        "avocat divorce tunisie, droit de la famille, garde d'enfants, pension alimentaire",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Family Lawyer | Divorce & Custody | Kairouan",
      description:
        "Kairouan-based family law attorney for divorce, child custody, alimony and succession cases in Tunisia. Personalized follow-up.",
      keywords:
        "family lawyer tunisia, divorce attorney, child custody tunisia, alimony",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي قانون الأسرة | طلاق وحضانة | القيروان",
      description:
        "محامية قانون الأسرة مقرها القيروان. مرافقة قانونية في قضايا الطلاق والحضانة والنفقة والميراث مع متابعة داخل تونس.",
      keywords: "محامي طلاق تونس, قانون الاسرة, حضانة اطفال, نفقة تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/services/droit-des-affaires": {
    fr: {
      title: "Avocat Affaires | Entreprises | Kairouan - Tunis",
      description:
        "Conseil et contentieux pour entreprises en Tunisie : création de sociétés, contrats commerciaux et litiges. Cabinet basé à Kairouan.",
      keywords:
        "avocat affaires tunisie, contrat commercial, creation societe, litige commercial",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Business Lawyer | Companies | Kairouan - Tunis",
      description:
        "Legal advisory and litigation for companies in Tunisia: formation, commercial contracts and business disputes from a Kairouan office.",
      keywords:
        "business lawyer tunisia, commercial contract, company formation, commercial dispute",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي أعمال | شركات وعقود | القيروان - تونس",
      description:
        "استشارة وتمثيل قانوني للشركات في تونس: تأسيس شركات، عقود تجارية ونزاعات أعمال. مكتب موثوق في القيروان.",
      keywords: "محامي اعمال تونس, عقد تجاري, تأسيس شركة, نزاع تجاري",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/services/droit-immobilier": {
    fr: {
      title: "Avocat Immobilier | Kairouan - Tunis | Litiges",
      description:
        "Avocat droit immobilier basé à Kairouan. Transactions, vérifications foncières et litiges de propriété suivis en Tunisie.",
      keywords:
        "avocat immobilier tunisie, litige propriete, transaction immobiliere, bail commercial",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Real Estate Lawyer | Kairouan - Tunis",
      description:
        "Real estate attorney based in Kairouan. Secure property transactions, title verification and real estate disputes across Tunisia.",
      keywords:
        "real estate lawyer tunisia, property dispute, property transaction, commercial lease",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "محامي عقاري | معاملات ونزاعات | القيروان",
      description:
        "محامية عقارية مقرها القيروان. تأمين معاملاتك العقارية والتحقق من السندات وحل نزاعات الملكية في تونس.",
      keywords: "محامي عقاري تونس, نزاع ملكية, معاملة عقارية, كراء تجاري",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/services/droit-penal": {
    fr: {
      title: "Avocat Pénal | Défense & Partie Civile | Kairouan",
      description:
        "Avocat pénaliste basé à Kairouan. Défense en garde à vue, instruction, audience et représentation des victimes en partie civile.",
      keywords:
        "avocat penal tunisie, avocat penaliste, garde a vue, partie civile, defense penale tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Criminal Lawyer | Defence & Civil Party | Kairouan",
      description:
        "Criminal lawyer based in Kairouan. Defence at police custody, investigation and trial; civil-party representation for victims.",
      keywords:
        "criminal lawyer tunisia, criminal defence, police custody, civil party, criminal trial tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي جزائي | دفاع وقيام بالحق الشخصي | القيروان",
      description:
        "محامية جزائية مقرها القيروان. دفاع في الاحتفاظ والتحقيق والجلسة وتمثيل الضحايا في القيام بالحق الشخصي.",
      keywords: "محامي جزائي تونس, محامي جنائي, احتفاظ, قيام بالحق الشخصي, دفاع جزائي",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/avocat-divorce-tunisie": {
    fr: {
      title: "Avocat Divorce Tunisie | Garde & Pension",
      description:
        "Procédure de divorce en Tunisie ? Avocat basé à Kairouan, spécialisé en garde d'enfants, pension alimentaire et exécution.",
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
        "محامية طلاق في تونس متخصصة في قضايا الحضانة والنفقة وتنفيذ الأحكام. مكتب في القيروان ومتابعة عن بعد أو بتنقل منظم.",
      keywords: "محامي طلاق تونس, محامي اسرة تونس, حضانة اطفال تونس, نفقة تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/avocat-immobilier-tunisie": {
    fr: {
      title: "Avocat Immobilier Tunisie | Titres et Litiges",
      description:
        "Avocat immobilier en Tunisie pour vérification foncière, contrats immobiliers et contentieux. Cabinet à Kairouan, suivi personnalisé.",
      keywords:
        "avocat immobilier tunisie, verification fonciere, litige propriete tunisie, bail commercial tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Real Estate Lawyer Tunisia | Titles & Disputes",
      description:
        "Real estate lawyer in Tunisia for title verification, property contracts and litigation. Kairouan office with personalized case follow-up.",
      keywords:
        "real estate lawyer tunisia, title verification, property dispute tunisia, commercial lease tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "محامي عقاري تونس | سندات ونزاعات ملكية",
      description:
        "محامية عقارية في تونس لتدقيق الملكية وعقود العقارات والنزاعات العقارية. مكتب في القيروان مع متابعة شخصية.",
      keywords:
        "محامي عقاري تونس, تدقيق ملكية, نزاع عقاري تونس, كراء تجاري تونس",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/avocat-affaires-tunisie": {
    fr: {
      title: "Avocat Affaires Tunisie | Contrats et Sociétés",
      description:
        "Avocat droit des affaires en Tunisie : création de société, contrats commerciaux, recouvrement et défense. Cabinet à Kairouan.",
      keywords:
        "avocat affaires tunisie, creation societe tunisie, contrat commercial tunisie, litige commercial",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    en: {
      title: "Business Lawyer Tunisia | Contracts & Companies",
      description:
        "Business lawyer in Tunisia for company formation, commercial contracts, debt recovery and litigation defense. Kairouan-based law firm.",
      keywords:
        "business lawyer tunisia, company formation tunisia, commercial contract tunisia, commercial dispute",
      image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    },
    ar: {
      title: "محامي أعمال تونس | عقود وشركات تجارية",
      description:
        "محامية أعمال في تونس لتأسيس الشركات والعقود التجارية والاستخلاص والدفاع في النزاعات. مكتب محاماة في القيروان.",
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
        "Guide avocat sur le code du travail en Tunisie 2025 : contrats, licenciement, congés, réforme et droits des salariés. Consultation à distance.",
      keywords:
        "code de travail tunisie 2025, code du travail tunisie, loi de travail 2025, code de travail tunisie secteur privé, droit du travail tunisie",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    en: {
      title: "Tunisia Labour Code 2025 | Rights & Reform",
      description:
        "Attorney guide to Tunisia labour code 2025: contracts, dismissal, leave, reform and employee rights. Remote legal consultation available.",
      keywords:
        "tunisia labour code 2025, labor law tunisia, employment law tunisia, worker rights tunisia, labour code reform tunisia",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
    ar: {
      title: "مجلة الشغل تونس 2025 | حقوق وإصلاح",
      description:
        "دليل محامية حول مجلة الشغل في تونس 2025: العقود والطرد والعطل والإصلاح وحقوق العمال. استشارة قانونية عن بعد.",
      keywords:
        "مجلة الشغل تونس 2025, قانون الشغل تونس, حقوق العمال تونس, إصلاح مجلة الشغل",
      image: "https://maitre-haifaguedhami.me/office/office1.webp",
    },
  },

  "/consultation-juridique-tunisie": {
    fr: {
      title: "Consultation Juridique Tunisie | Cabinet à Kairouan",
      description:
        "Consultation juridique rapide en Tunisie avec plan d'action clair. Cabinet à Kairouan, suivi à distance ou déplacement organisé.",
      keywords:
        "consultation juridique tunisie, rendez-vous avocat tunisie, conseil juridique kairouan tunis",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Legal Consultation Tunisia | Kairouan Office",
      description:
        "Fast legal consultation in Tunisia with a clear action plan. Kairouan office with remote follow-up or planned travel.",
      keywords:
        "legal consultation tunisia, lawyer appointment tunisia, legal advice kairouan tunis",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "استشارة قانونية تونس | مكتب القيروان",
      description:
        "استشارة قانونية سريعة في تونس مع خطة عمل واضحة للأفراد والشركات. مكتب محاماة في القيروان مع متابعة شخصية.",
      keywords:
        "استشارة قانونية تونس, موعد محامي تونس, نصيحة قانونية القيروان تونس",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
  },

  "/values": {
    fr: {
      title: "Nos Valeurs | Cabinet Maître Haifa Guedhami Alouini",
      description:
        "Intégrité, transparence et excellence dans l'accompagnement juridique depuis Kairouan. Des valeurs au service de chaque dossier.",
      keywords:
        "valeurs cabinet avocat, ethique juridique, transparence honoraires",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    en: {
      title: "Our Values | Law Firm Haifa Guedhami Alouini",
      description:
        "Integrity, transparency and excellence in legal services from Kairouan, Tunisia. Values that guide every case and client relationship.",
      keywords: "law firm values, legal ethics, transparent fees tunisia",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
    ar: {
      title: "قيمنا | مكتب المحامية هيفاء القضامي العلويني",
      description:
        "النزاهة والشفافية والتميز في الخدمات القانونية من القيروان. قيم راسخة في خدمة كل موكل وكل قضية بمهنية عالية.",
      keywords: "قيم مكتب محاماة, اخلاقيات قانونية, شفافية أتعاب تونس",
      image: "https://maitre-haifaguedhami.me/office/office2.webp",
    },
  },

  "/contact": {
    fr: {
      title: "Contact | Avocat à Kairouan | WhatsApp",
      description:
        "Contactez Maître Haifa Guedhami Alouini. Bureau à Kairouan, réponse rapide par WhatsApp ou email, suivi possible en Tunisie.",
      keywords:
        "contact avocat tunisie, consultation juridique tunis, avocat kairouan whatsapp",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    en: {
      title: "Contact | Lawyer in Kairouan | WhatsApp",
      description:
        "Contact Attorney Haifa Guedhami Alouini. Office in Kairouan, fast response by WhatsApp or email, case follow-up across Tunisia.",
      keywords:
        "contact lawyer tunisia, legal consultation tunis, lawyer kairouan whatsapp",
      image: "https://maitre-haifaguedhami.me/office/entry.webp",
    },
    ar: {
      title: "تواصل معنا | محامية في القيروان | واتساب",
      description:
        "تواصل مع المحامية هيفاء القضامي العلويني لاستشارة قانونية. المكتب في القيروان والرد سريع عبر واتساب أو البريد الإلكتروني.",
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
      title: "Actualités Juridiques | Maître Haifa Guedhami Alouini",
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
      title: "المستجدات القانونية | مكتب هيفاء القضامي",
      description:
        "تحليلات وأخبار قانونية من تونس بقلم المحامية هيفاء القضامي العلويني. ابقوا على اطلاع بآخر تطورات القانون والتشريعات التونسية.",
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
