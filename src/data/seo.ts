import { getSeoClusterPage } from "@/data/seoCluster";

// The 1200x630 JPEG social card. Scrapers crop previews to 1.91:1 and are
// unreliable with WebP, so og:image points here rather than at the portrait
// office photo (683x816 WebP) the page itself renders.
// Regenerate with: node scripts/generate-og-cards.mjs
export const OG_IMAGE = "/og/default.jpg";

// Article covers stay square (640x640) because that is the shape the article
// header renders. Their 1200x630 share cards live alongside under /og.
export function ogImageForCover(cover?: string): string {
  const match = /^\/(blog-[a-z]+\.jpg)$/.exec(cover ?? "");
  return match ? `/og/${match[1]}` : OG_IMAGE;
}

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
      title: "Avocat en Tunisie - Kairouan & Tunis | Maître Haifa Guedhami Alouini",
      description:
        "Besoin d'un avocat en Tunisie ? Cabinet à Kairouan, dossiers suivis à Tunis et dans tout le pays : divorce, immobilier, affaires, contentieux. Consultation rapide.",
      keywords:
        "avocat tunisie, avocat kairouan, avocat tunis, droit de la famille, divorce tunisie, droit immobilier, droit des affaires, محامي القيروان",
    },
    en: {
      title: "Lawyer in Tunisia - Kairouan & Tunis | Haifa Guedhami Alouini",
      description:
        "Need a lawyer in Tunisia? Law firm in Kairouan, handling cases in Tunis and nationwide: divorce, real estate, business and litigation. Fast consultation.",
      keywords:
        "lawyer tunisia, lawyer kairouan, lawyer tunis, family law, divorce tunisia, real estate law, business law",
    },
    ar: {
      title: "محامية في تونس، مقرها القيروان | هيفاء القضامي العلويني",
      description:
        "تحتاج محامي في تونس؟ مكتب محاماة مقره القيروان مع متابعة الملفات في تونس العاصمة وكامل البلاد وعن بعد: طلاق، عقار، أعمال ونزاعات. استشارة سريعة.",
      keywords:
        "محامي تونس, محامي القيروان, محامي قانون الاسرة, طلاق تونس, قانون عقاري, قانون اعمال",
    },
  },

  "/about": {
    fr: {
      title: "À Propos | Maître Haifa Guedhami Alouini",
      description:
        "Parcours, expérience et approche de Maître Haifa Guedhami Alouini, avocate en Tunisie basée à Kairouan. Plus de 25 ans au service du droit tunisien.",
      keywords:
        "biographie avocat tunisie, experience juridique, avocat kairouan tunis",
    },
    en: {
      title: "About | Attorney Haifa Guedhami Alouini",
      description:
        "Career, experience and approach of Attorney Haifa Guedhami Alouini, lawyer in Tunisia based in Kairouan. Over 25 years of dedicated legal practice.",
      keywords:
        "lawyer biography tunisia, legal experience, attorney kairouan tunis",
    },
    ar: {
      title: "نبذة عني | المحامية هيفاء القضامي العلويني",
      description:
        "مسار وتجربة ومنهجية المحامية هيفاء القضامي العلويني، محامية في تونس مقرها القيروان. أكثر من 25 سنة من الممارسة القانونية المتفانية في خدمة موكليها.",
      keywords: "سيرة ذاتية محامي تونس, تجربة قانونية, محامية القيروان تونس",
    },
  },

  "/services": {
    fr: {
      title: "Domaines de Pratique | Avocat Tunisie - Kairouan & Tunis",
      description:
        "Services juridiques en Tunisie : droit de la famille, immobilier et affaires. Conseil et contentieux à Tunis et dans tout le pays, cabinet basé à Kairouan.",
      keywords:
        "services juridiques tunisie, avocat famille, avocat immobilier, avocat affaires",
    },
    en: {
      title: "Practice Areas | Lawyer Tunisia - Kairouan & Tunis",
      description:
        "Legal services in Tunisia: family law, real estate and business law. Counsel and litigation in Tunis and nationwide for individuals and companies, based in Kairouan.",
      keywords:
        "legal services tunisia, family lawyer, real estate lawyer, business lawyer",
    },
    ar: {
      title: "مجالات الممارسة | محامية في تونس، مقرها القيروان",
      description:
        "خدمات قانونية في تونس: قانون الأسرة والعقاري والأعمال. استشارة وتمثيل في تونس العاصمة وكامل البلاد، المكتب بالقيروان بخبرة تفوق 25 سنة.",
      keywords: "خدمات قانونية تونس, محامي اسرة, محامي عقاري, محامي اعمال",
    },
  },

  "/services/droit-de-la-famille": {
    fr: {
      title: "Avocat Famille Tunisie | Divorce, Garde | Kairouan & Tunis",
      description:
        "Avocat droit de la famille en Tunisie : divorce, garde d'enfants, pension et succession. Cabinet à Kairouan, interventions à Tunis et dans tout le pays.",
      keywords:
        "avocat divorce tunisie, droit de la famille, garde d'enfants, pension alimentaire",
    },
    en: {
      title: "Family Lawyer | Divorce & Custody | Kairouan",
      description:
        "Family law attorney in Tunisia for divorce, child custody, alimony and succession. Based in Kairouan, handling cases in Tunis and nationwide.",
      keywords:
        "family lawyer tunisia, divorce attorney, child custody tunisia, alimony",
    },
    ar: {
      title: "محامي قانون الأسرة | طلاق وحضانة | القيروان",
      description:
        "محامية قانون الأسرة في تونس: الطلاق والحضانة والنفقة والميراث. المكتب بالقيروان مع متابعة الملفات في تونس العاصمة وكامل البلاد. استشارة شخصية لكل ملف.",
      keywords: "محامي طلاق تونس, قانون الاسرة, حضانة اطفال, نفقة تونس",
    },
  },

  "/services/droit-des-affaires": {
    fr: {
      title: "Avocat Affaires Tunisie | Entreprises | Kairouan & Tunis",
      description:
        "Conseil et contentieux entreprises en Tunisie : sociétés, contrats commerciaux et litiges. Cabinet à Kairouan, interventions à Tunis et dans tout le pays.",
      keywords:
        "avocat affaires tunisie, contrat commercial, creation societe, litige commercial",
    },
    en: {
      title: "Business Lawyer Tunisia | Companies | Kairouan",
      description:
        "Legal advisory and litigation for companies in Tunisia: formation, commercial contracts and disputes. Based in Kairouan, serving Tunis and nationwide.",
      keywords:
        "business lawyer tunisia, commercial contract, company formation, commercial dispute",
    },
    ar: {
      title: "محامي أعمال في تونس | شركات وعقود | القيروان",
      description:
        "استشارة وتمثيل قانوني للشركات في تونس: تأسيس شركات، عقود تجارية ونزاعات أعمال. خبرة موثوقة لحماية مصالحكم، المكتب بالقيروان.",
      keywords: "محامي اعمال تونس, عقد تجاري, تأسيس شركة, نزاع تجاري",
    },
  },

  "/services/droit-immobilier": {
    fr: {
      title: "Avocat Immobilier Tunisie | Litiges | Kairouan & Tunis",
      description:
        "Avocat droit immobilier en Tunisie : transactions, vérifications foncières et litiges de propriété. Cabinet à Kairouan, interventions à Tunis et dans tout le pays.",
      keywords:
        "avocat immobilier tunisie, litige propriete, transaction immobiliere, bail commercial",
    },
    en: {
      title: "Real Estate Lawyer Tunisia | Kairouan",
      description:
        "Real estate attorney in Tunisia: property transactions, title verification and disputes. Based in Kairouan, handling cases in Tunis and nationwide.",
      keywords:
        "real estate lawyer tunisia, property dispute, property transaction, commercial lease",
    },
    ar: {
      title: "محامي عقاري | معاملات ونزاعات | القيروان",
      description:
        "محامية عقارية في تونس، مقرها القيروان. تأمين معاملاتك العقارية والتحقق من السندات وحل نزاعات الملكية. خبرة واسعة في القانون العقاري التونسي.",
      keywords: "محامي عقاري تونس, نزاع ملكية, معاملة عقارية, كراء تجاري",
    },
  },

  "/services/droit-penal": {
    fr: {
      title: "Avocat Pénal | Défense & Partie Civile | Kairouan",
      description:
        "Avocat pénaliste en Tunisie, basé à Kairouan. Défense en garde à vue, instruction, audience et représentation des victimes en partie civile. Intervention rapide.",
      keywords:
        "avocat penal tunisie, avocat penaliste, garde a vue, partie civile, defense penale tunisie",
    },
    en: {
      title: "Criminal Lawyer | Defence & Civil Party | Kairouan",
      description:
        "Criminal lawyer in Tunisia, based in Kairouan. Defence at police custody, investigation and trial; civil-party representation for victims. Rapid response.",
      keywords:
        "criminal lawyer tunisia, criminal defence, police custody, civil party, criminal trial tunisia",
    },
    ar: {
      title: "محامي جزائي | دفاع وقيام بالحق الشخصي | القيروان",
      description:
        "محامية جزائية في تونس، مقرها القيروان. دفاع في الاحتفاظ والتحقيق والجلسة وتمثيل الضحايا في القيام بالحق الشخصي. تدخل سريع.",
      keywords: "محامي جزائي تونس, محامي جنائي, احتفاظ, قيام بالحق الشخصي, دفاع جزائي",
    },
  },

  "/avocat-divorce-tunisie": {
    fr: {
      title: "Avocat Divorce Tunisie | +25 Ans d'Expérience",
      description:
        "Avocate divorce en Tunisie, +25 ans d'expérience, notée 5/5 sur Google. Garde d'enfants, pension alimentaire et exécution des jugements. Consultation rapide.",
      keywords:
        "avocat divorce tunisie, avocat famille tunisie, garde enfants tunisie, pension alimentaire tunisie",
    },
    en: {
      title: "Divorce Lawyer Tunisia | Custody & Alimony",
      description:
        "Divorce lawyer in Tunisia for child custody, alimony and judgment enforcement. Expert family law support from the Kairouan office or via remote consultation.",
      keywords:
        "divorce lawyer tunisia, family lawyer tunisia, child custody tunisia, alimony tunisia",
    },
    ar: {
      title: "محامي طلاق في تونس | خبرة +25 سنة ورد سريع عبر واتساب",
      description:
        "استشارة قانونية في الطلاق في تونس مع محامية خبرتها تفوق 25 سنة وتقييمها 5/5 على Google. حضانة، نفقة وتنفيذ الأحكام — بالقيروان وكامل تونس أو عن بُعد عبر واتساب.",
      keywords:
        "محامي طلاق تونس, استشارة قانونية في الطلاق, محامي اسرة تونس, حضانة اطفال تونس, نفقة تونس",
    },
  },

  "/avocat-immobilier-tunisie": {
    fr: {
      title: "Avocat Immobilier Tunisie | Titres et Litiges",
      description:
        "Avocat immobilier en Tunisie pour vérification foncière, contrats immobiliers et contentieux de propriété. Cabinet basé à Kairouan, suivi personnalisé.",
      keywords:
        "avocat immobilier tunisie, verification fonciere, litige propriete tunisie, bail commercial tunisie",
    },
    en: {
      title: "Real Estate Lawyer Tunisia | Titles & Disputes",
      description:
        "Real estate lawyer in Tunisia for title verification, property contracts and litigation. Law firm based in Kairouan with personalized case follow-up.",
      keywords:
        "real estate lawyer tunisia, title verification, property dispute tunisia, commercial lease tunisia",
    },
    ar: {
      title: "محامي عقاري تونس | سندات ونزاعات ملكية",
      description:
        "محامية عقارية في تونس لتدقيق الملكية وعقود العقارات والنزاعات العقارية. مكتب مقره القيروان مع متابعة شخصية لكل ملف عقاري.",
      keywords:
        "محامي عقاري تونس, تدقيق ملكية, نزاع عقاري تونس, كراء تجاري تونس",
    },
  },

  "/avocat-affaires-tunisie": {
    fr: {
      title: "Avocat Affaires Tunisie | Contrats et Sociétés",
      description:
        "Avocat droit des affaires en Tunisie : création de société, contrats commerciaux, recouvrement et défense en litige. Cabinet basé à Kairouan.",
      keywords:
        "avocat affaires tunisie, creation societe tunisie, contrat commercial tunisie, litige commercial",
    },
    en: {
      title: "Business Lawyer Tunisia | Contracts & Companies",
      description:
        "Business lawyer in Tunisia for company formation, commercial contracts, debt recovery and litigation defense. Law firm based in Kairouan.",
      keywords:
        "business lawyer tunisia, company formation tunisia, commercial contract tunisia, commercial dispute",
    },
    ar: {
      title: "محامي أعمال تونس | عقود وشركات تجارية",
      description:
        "محامية أعمال في تونس لتأسيس الشركات والعقود التجارية والاستخلاص والدفاع في النزاعات. مكتب محاماة مقره القيروان بخبرة واسعة.",
      keywords: "محامي اعمال تونس, تأسيس شركة تونس, عقد تجاري تونس, نزاع تجاري",
    },
  },

  "/avocat-kairouan": {
    fr: {
      title: "Avocat Kairouan | Divorce, Immobilier, Affaires",
      description:
        "Cabinet d'avocat à Kairouan. Divorce, garde, immobilier et affaires. Rendez-vous rapide, suivi local et à distance. Appelez maintenant pour une consultation.",
      keywords:
        "avocat kairouan, avocat a kairouan, cabinet avocat kairouan, consultation juridique kairouan",
    },
    en: {
      title: "Lawyer in Kairouan | Divorce, Property, Business",
      description:
        "Law firm in Kairouan for individuals and companies: divorce, real estate, business law and legal consultation. Fast appointments and personalized follow-up.",
      keywords:
        "lawyer kairouan, attorney kairouan, law firm kairouan, legal consultation kairouan",
    },
    ar: {
      title: "محامية في القيروان | طلاق وعقار وأعمال",
      description:
        "مكتب محاماة في القيروان لفائدة الأفراد والمؤسسات: طلاق وعقار وأعمال واستشارة قانونية. مواعيد سريعة ومتابعة شخصية محلية وعن بعد.",
      keywords:
        "محامي القيروان, محامية القيروان, مكتب محاماة القيروان, استشارة قانونية القيروان",
    },
  },

  "/avocat-divorce-kairouan": {
    fr: {
      title: "Avocat Divorce Kairouan | Garde et Pension",
      description:
        "Avocat divorce à Kairouan pour séparation, garde d'enfants, pension alimentaire et exécution des jugements familiaux. Suivi personnalisé et réactif.",
      keywords:
        "avocat divorce kairouan, avocat famille kairouan, garde enfants kairouan, pension alimentaire kairouan",
    },
    en: {
      title: "Divorce Lawyer Kairouan | Custody & Support",
      description:
        "Divorce lawyer in Kairouan for separation, child custody, alimony and enforcement of family judgments. Personalized follow-up and responsive service.",
      keywords:
        "divorce lawyer kairouan, family lawyer kairouan, child custody kairouan, alimony kairouan",
    },
    ar: {
      title: "محامية طلاق في القيروان | حضانة ونفقة",
      description:
        "محامية طلاق في القيروان لقضايا الطلاق والحضانة والنفقة وتنفيذ الأحكام العائلية. متابعة شخصية وخدمة سريعة ومتفانية لكل ملف.",
      keywords:
        "محامية طلاق القيروان, محامي اسرة القيروان, حضانة الاطفال القيروان, نفقة القيروان",
    },
  },

  "/avocat-immobilier-kairouan": {
    fr: {
      title: "Avocat Immobilier Kairouan | Titres et Litiges",
      description:
        "Avocat immobilier à Kairouan pour vérification de titres, contrats, baux et contentieux de propriété. Accompagnement complet et suivi personnalisé.",
      keywords:
        "avocat immobilier kairouan, avocat foncier kairouan, litige propriete kairouan, bail commercial kairouan",
    },
    en: {
      title: "Real Estate Lawyer Kairouan | Titles & Leases",
      description:
        "Real estate lawyer in Kairouan for title verification, contracts, leases and property disputes. Full legal support with personalized case management.",
      keywords:
        "real estate lawyer kairouan, property lawyer kairouan, property dispute kairouan, commercial lease kairouan",
    },
    ar: {
      title: "محامية عقارية في القيروان | سندات ونزاعات",
      description:
        "محامية عقارية في القيروان للتثبت من السندات والعقود والكراء والنزاعات العقارية. مرافقة قانونية كاملة ومتابعة شخصية لكل ملف.",
      keywords:
        "محامي عقاري القيروان, محامية عقارية القيروان, نزاع عقاري القيروان, كراء تجاري القيروان",
    },
  },

  "/avocat-affaires-kairouan": {
    fr: {
      title: "Avocat Affaires Kairouan | Sociétés et Contrats",
      description:
        "Avocat affaires à Kairouan pour création de sociétés, contrats commerciaux, recouvrement et litiges entre partenaires. Suivi dédié et réactif.",
      keywords:
        "avocat affaires kairouan, avocat societe kairouan, contrat commercial kairouan, litige commercial kairouan",
    },
    en: {
      title: "Business Lawyer Kairouan | Companies & Contracts",
      description:
        "Business lawyer in Kairouan for company matters, commercial contracts, debt recovery and partner disputes. Dedicated follow-up and responsive service.",
      keywords:
        "business lawyer kairouan, company lawyer kairouan, commercial contract kairouan, commercial dispute kairouan",
    },
    ar: {
      title: "محامية أعمال في القيروان | شركات وعقود",
      description:
        "محامية أعمال في القيروان للشركات والعقود التجارية والاستخلاص والنزاعات بين الشركاء. متابعة مخصصة وخدمة سريعة ومتفانية لحماية مصالحكم.",
      keywords:
        "محامي اعمال القيروان, محامية شركات القيروان, عقد تجاري القيروان, نزاع تجاري القيروان",
    },
  },

  "/consultation-juridique-kairouan": {
    fr: {
      title: "Consultation Juridique Kairouan | Réponse Rapide",
      description:
        "Consultation juridique à Kairouan pour particuliers, familles et entreprises. Diagnostic clair, options légales et plan d'action personnalisé.",
      keywords:
        "consultation juridique kairouan, avocat kairouan consultation, conseil juridique kairouan, rendez-vous avocat kairouan",
    },
    en: {
      title: "Legal Consultation Kairouan | Fast & Clear",
      description:
        "Legal consultation in Kairouan for individuals, families and companies. Clear diagnosis, legal options and a personalized action plan for your case.",
      keywords:
        "legal consultation kairouan, lawyer consultation kairouan, legal advice kairouan, lawyer appointment kairouan",
    },
    ar: {
      title: "استشارة قانونية في القيروان | جواب سريع",
      description:
        "استشارة قانونية في القيروان للأفراد والعائلات والشركات. تشخيص قانوني واضح وخيارات متعددة وخطة عمل مخصصة لكل قضية. موعد سريع ومتابعة.",
      keywords:
        "استشارة قانونية القيروان, محامي القيروان استشارة, نصيحة قانونية القيروان, موعد محامي القيروان",
    },
  },

  "/code-du-travail-tunisie": {
    fr: {
      title: "Code du Travail Tunisie 2026 | Droits et Réforme",
      description:
        "Guide avocat sur le code du travail en Tunisie 2026 : contrats, licenciement, congés, réforme de 2025 et droits des salariés. Consultation au cabinet ou à distance.",
      keywords:
        "code de travail tunisie 2026, code de travail tunisie 2025, code du travail tunisie, loi de travail tunisie, code de travail tunisie secteur privé, droit du travail tunisie",
    },
    en: {
      title: "Tunisia Labour Code 2026 | Rights & Reform",
      description:
        "Attorney guide to Tunisia labour code 2026: contracts, dismissal, leave, the 2025 reform and employee rights. Consultation at the Kairouan office or remotely.",
      keywords:
        "tunisia labour code 2026, tunisia labour code 2025, labor law tunisia, employment law tunisia, worker rights tunisia, labour code reform tunisia",
    },
    ar: {
      title: "مجلة الشغل تونس 2026 | حقوق وإصلاح",
      description:
        "دليل محامية حول مجلة الشغل في تونس 2026: العقود والطرد والعطل وإصلاح 2025 وحقوق العمال. استشارة قانونية متخصصة بالمكتب في القيروان أو عن بعد.",
      keywords:
        "مجلة الشغل تونس 2026, مجلة الشغل تونس 2025, قانون الشغل تونس, حقوق العمال تونس, إصلاح مجلة الشغل",
    },
  },

  "/consultation-juridique-tunisie": {
    fr: {
      title: "Consultation Juridique Tunisie | Cabinet à Kairouan",
      description:
        "Consultation juridique rapide en Tunisie avec plan d'action clair pour particuliers et entreprises. Au cabinet à Kairouan ou à distance, suivi personnalisé.",
      keywords:
        "consultation juridique tunisie, rendez-vous avocat tunisie, conseil juridique kairouan tunis",
    },
    en: {
      title: "Legal Consultation Tunisia | Kairouan Office",
      description:
        "Fast legal consultation in Tunisia with a clear action plan for individuals and companies. At the Kairouan office or remotely, with personalized follow-up.",
      keywords:
        "legal consultation tunisia, lawyer appointment tunisia, legal advice kairouan tunis",
    },
    ar: {
      title: "استشارة قانونية في تونس | رد سريع عبر واتساب أو بالمكتب",
      description:
        "استشارة قانونية سريعة في تونس في الطلاق والعقارات والأعمال مع خطة عمل واضحة. خبرة تفوق 25 سنة — بالمكتب في القيروان أو عن بُعد لكامل تونس وللمقيمين بالخارج.",
      keywords:
        "استشارة قانونية تونس, استشارة قانونية في الطلاق, موعد محامي تونس, نصيحة قانونية القيروان تونس",
    },
  },

  "/avocat-tunisiens-etranger": {
    fr: {
      title: "Avocat Tunisiens à l'Étranger | Suivi à Distance",
      description:
        "Avocate pour Tunisiens résidant à l'étranger : procuration, divorce international, succession, immobilier. Suivi à distance dans toute la Tunisie, réponse rapide par WhatsApp.",
      keywords:
        "avocat tunisiens à l'étranger, avocat TRE, procuration tunisie, divorce international tunisie, succession tunisie à distance",
    },
    en: {
      title: "English-Speaking Lawyer in Tunisia | Remote Cases",
      description:
        "English-speaking lawyer in Tunisia for expats, investors and clients abroad. Property purchase, international divorce, inheritance — handled remotely with written updates.",
      keywords:
        "english speaking lawyer tunisia, lawyer for foreigners tunisia, buy property tunisia, international divorce tunisia",
    },
    ar: {
      title: "محامية للتونسيين بالخارج | متابعة عن بُعد وواتساب",
      description:
        "محامية للتونسيين المقيمين بالخارج: توكيل، طلاق دولي، ميراث وعقارات. متابعة الملفات عن بعد في كامل تونس مع رد سريع عبر واتساب وتقارير مكتوبة.",
      keywords:
        "محامي للتونسيين بالخارج, توكيل من الخارج تونس, طلاق دولي تونس, ميراث تونس من الخارج",
    },
  },

  "/values": {
    fr: {
      title: "Nos Valeurs | Cabinet Maître Haifa Guedhami Alouini",
      description:
        "Intégrité, transparence et excellence dans l'accompagnement juridique en Tunisie : à Kairouan, à Tunis et à distance. Des valeurs au service de chaque dossier.",
      keywords:
        "valeurs cabinet avocat, ethique juridique, transparence honoraires",
    },
    en: {
      title: "Our Values | Law Firm Haifa Guedhami Alouini",
      description:
        "Integrity, transparency and excellence in legal services across Tunisia — in Kairouan, Tunis and remotely. Values that guide every case and every client relationship.",
      keywords: "law firm values, legal ethics, transparent fees tunisia",
    },
    ar: {
      title: "قيمنا | مكتب المحامية هيفاء القضامي العلويني",
      description:
        "النزاهة والشفافية والتميز في الخدمات القانونية في تونس: بالقيروان وتونس العاصمة وعن بعد. قيم راسخة في خدمة كل موكل وكل قضية بمهنية عالية.",
      keywords: "قيم مكتب محاماة, اخلاقيات قانونية, شفافية أتعاب تونس",
    },
  },

  "/contact": {
    fr: {
      title: "Contact | Avocat Kairouan & Tunis | WhatsApp",
      description:
        "Contactez Maître Haifa Guedhami Alouini pour une consultation juridique. Réponse rapide par WhatsApp ou email ; cabinet à Kairouan, rendez-vous à Tunis et dans toute la Tunisie.",
      keywords:
        "contact avocat tunisie, consultation juridique tunis, avocat kairouan whatsapp",
    },
    en: {
      title: "Contact | Lawyer Kairouan & Tunis | WhatsApp",
      description:
        "Contact Attorney Haifa Guedhami Alouini for a legal consultation in Tunisia. Fast response via WhatsApp or email; office in Kairouan, appointments in Tunis and nationwide.",
      keywords:
        "contact lawyer tunisia, legal consultation tunis, lawyer kairouan whatsapp",
    },
    ar: {
      title: "تواصل معنا | محامية القيروان وتونس | واتساب",
      description:
        "تواصل مع المحامية هيفاء القضامي العلويني لاستشارة قانونية في تونس. رد سريع عبر واتساب أو البريد الإلكتروني؛ المكتب بالقيروان مع مواعيد في تونس العاصمة وكامل البلاد.",
      keywords: "تواصل محامي تونس, استشارة قانونية تونس, محامي القيروان واتساب",
    },
  },

  "/actualites": {
    fr: {
      title: "Actualités Juridiques | Maître Haifa Guedhami Alouini",
      description:
        "Analyses et actualités juridiques en Tunisie par Maître Haifa Guedhami Alouini. Restez informé des dernières évolutions du droit tunisien.",
      keywords: "actualites juridiques tunisie, blog avocat tunisie",
    },
    en: {
      title: "Legal News | Haifa Guedhami Alouini Law Firm",
      description:
        "Legal analysis and news from Tunisia by Attorney Haifa Guedhami Alouini. Stay informed about the latest developments in Tunisian law and legislation.",
      keywords: "legal news tunisia, law blog tunisia, attorney insights",
    },
    ar: {
      title: "المستجدات القانونية | مكتب هيفاء القضامي",
      description:
        "تحليلات وأخبار قانونية من تونس بقلم المحامية هيفاء القضامي العلويني. ابقوا على اطلاع بآخر تطورات القانون والتشريعات التونسية.",
      keywords: "اخبار قانونية تونس, مدونة محامي تونس",
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
};
