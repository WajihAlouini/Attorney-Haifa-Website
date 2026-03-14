import type { ServiceDetailKey, ServiceDetailLink, SiteLocale } from "@/data/serviceDetails";

interface ServiceEnhancementLocalized {
  proofTitle: string;
  proofPoints: string[];
  timingTitle: string;
  timingPoints: string[];
  coverageTitle: string;
  coveragePoints: string[];
  localTitle: string;
  localLinks: ServiceDetailLink[];
}

type ServiceEnhancementDefinition = Record<SiteLocale, ServiceEnhancementLocalized>;

function resolveLocale(locale: string): SiteLocale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

const serviceEnhancements: Record<ServiceDetailKey, ServiceEnhancementDefinition> = {
  family: {
    fr: {
      proofTitle: "Ce que le cabinet sécurise",
      proofPoints: [
        "Une stratégie cohérente entre divorce, garde, pension et exécution.",
        "Un dossier structuré pour limiter les reports et les erreurs évitables.",
        "Une communication claire sur les délais, priorités et points de risque.",
      ],
      timingTitle: "Quand consulter sans attendre",
      timingPoints: [
        "Si une audience approche ou si les enfants sont au centre du conflit.",
        "Si une pension n'est pas payée ou qu'un jugement n'est pas exécuté.",
        "Si la situation familiale se dégrade et qu'une mesure urgente est utile.",
      ],
      coverageTitle: "Couverture et langues de travail",
      coveragePoints: [
        "Cabinet basé à Kairouan avec suivi à Tunis et à distance.",
        "Accompagnement des familles résidentes en Tunisie ou à l'étranger.",
        "Consultations possibles en français, arabe et anglais.",
      ],
      localTitle: "Pages locales à consulter",
      localLinks: [
        {
          path: "/avocat-divorce-kairouan",
          label: "Avocat divorce à Kairouan",
          description: "Page locale ciblée sur divorce, garde et pension dans la région.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Consultation juridique à Kairouan",
          description: "Pour cadrer rapidement une urgence familiale ou une décision sensible.",
        },
        {
          path: "/avocat-kairouan",
          label: "Cabinet d'avocat à Kairouan",
          description: "Vue d'ensemble locale des dossiers suivis par le cabinet.",
        },
      ],
    },
    en: {
      proofTitle: "What the firm protects",
      proofPoints: [
        "A coherent strategy across divorce, custody, support and enforcement.",
        "A file structured to reduce delay and avoidable procedural errors.",
        "Clear communication on timing, priorities and case risk.",
      ],
      timingTitle: "When not to wait",
      timingPoints: [
        "If a hearing is approaching or children are at the center of the conflict.",
        "If support is unpaid or a judgment is not being enforced.",
        "If the family situation is worsening and urgent relief may be needed.",
      ],
      coverageTitle: "Coverage and working languages",
      coveragePoints: [
        "Firm based in Kairouan with follow-up in Tunis and remotely.",
        "Support for families living in Tunisia or abroad.",
        "Consultations available in French, Arabic and English.",
      ],
      localTitle: "Relevant local pages",
      localLinks: [
        {
          path: "/avocat-divorce-kairouan",
          label: "Divorce lawyer in Kairouan",
          description: "Local page focused on divorce, custody and support matters.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Legal consultation in Kairouan",
          description: "For urgent family-law framing and a fast action plan.",
        },
        {
          path: "/avocat-kairouan",
          label: "Lawyer in Kairouan",
          description: "Local overview of the firm's work in Kairouan.",
        },
      ],
    },
    ar: {
      proofTitle: "ما الذي يتم تأمينه في الملف",
      proofPoints: [
        "خطة قانونية منسجمة بين الطلاق والحضانة والنفقة والتنفيذ.",
        "ملف منظم لتقليل التأخير والأخطاء الإجرائية الممكن تفاديها.",
        "تواصل واضح حول الآجال والأولوية ونقاط الخطر في القضية.",
      ],
      timingTitle: "متى يجب عدم الانتظار",
      timingPoints: [
        "إذا كانت جلسة قريبة أو كان الأطفال في قلب النزاع.",
        "إذا لم يتم خلاص النفقة أو لم يقع تنفيذ الحكم.",
        "إذا تدهورت الوضعية العائلية وأصبحت إجراءات الحماية مطلوبة.",
      ],
      coverageTitle: "مجال المتابعة ولغات العمل",
      coveragePoints: [
        "مكتب محاماة مقره القيروان مع متابعة في تونس وعن بعد.",
        "مرافقة للعائلات المقيمة في تونس أو بالخارج.",
        "استشارات ممكنة بالفرنسية والعربية والإنجليزية.",
      ],
      localTitle: "صفحات محلية مفيدة",
      localLinks: [
        {
          path: "/avocat-divorce-kairouan",
          label: "محامية طلاق في القيروان",
          description: "صفحة محلية مركزة على الطلاق والحضانة والنفقة في الجهة.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "استشارة قانونية في القيروان",
          description: "لتأطير سريع لحالة عائلية مستعجلة أو قرار حساس.",
        },
        {
          path: "/avocat-kairouan",
          label: "مكتب محاماة في القيروان",
          description: "نظرة محلية شاملة على الملفات التي يتابعها المكتب.",
        },
      ],
    },
  },
  business: {
    fr: {
      proofTitle: "Ce que l'entreprise gagne",
      proofPoints: [
        "Une lecture juridique orientée résultat et risque financier réel.",
        "Des contrats et actes plus solides avant signature ou rupture.",
        "Une réaction plus rapide face aux impayés, conflits et blocages de gouvernance.",
      ],
      timingTitle: "Moments où il faut agir vite",
      timingPoints: [
        "Avant la signature d'un contrat commercial important.",
        "Quand un associé, client ou fournisseur bloque une décision ou un paiement.",
        "Quand une mise en demeure, un impayé ou un risque de contentieux apparaît.",
      ],
      coverageTitle: "Dirigeants et structures accompagnées",
      coveragePoints: [
        "PME, commerçants, professions libérales et investisseurs à Kairouan.",
        "Dossiers coordonnés avec Tunis et partenaires situés ailleurs en Tunisie.",
        "Accompagnement ponctuel ou suivi continu selon la taille du risque.",
      ],
      localTitle: "Pages locales à consulter",
      localLinks: [
        {
          path: "/avocat-affaires-kairouan",
          label: "Avocat affaires à Kairouan",
          description: "Page locale pour sociétés, contrats, recouvrement et litiges commerciaux.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Consultation juridique à Kairouan",
          description: "Pour cadrer rapidement un contrat sensible ou un risque de recouvrement.",
        },
        {
          path: "/avocat-kairouan",
          label: "Cabinet d'avocat à Kairouan",
          description: "Présentation locale des dossiers d'entreprise et d'investissement.",
        },
      ],
    },
    en: {
      proofTitle: "What the business gains",
      proofPoints: [
        "A legal reading focused on outcome and real financial exposure.",
        "Stronger contracts and documents before signature or breach.",
        "Faster reaction to non-payment, partner conflict and governance blockages.",
      ],
      timingTitle: "When speed matters",
      timingPoints: [
        "Before signing a material commercial contract.",
        "When a partner, client or supplier blocks payment or decision-making.",
        "When formal notice, unpaid debt or litigation exposure appears.",
      ],
      coverageTitle: "Businesses and founders supported",
      coveragePoints: [
        "SMEs, traders, liberal professions and investors in Kairouan.",
        "Files coordinated with Tunis and partners elsewhere in Tunisia.",
        "One-off support or continuing follow-up depending on the risk level.",
      ],
      localTitle: "Relevant local pages",
      localLinks: [
        {
          path: "/avocat-affaires-kairouan",
          label: "Business lawyer in Kairouan",
          description: "Local page for companies, contracts, debt recovery and disputes.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Legal consultation in Kairouan",
          description: "For urgent contract review or fast business-risk framing.",
        },
        {
          path: "/avocat-kairouan",
          label: "Lawyer in Kairouan",
          description: "Local overview of company and investment matters handled by the firm.",
        },
      ],
    },
    ar: {
      proofTitle: "ماذا تستفيد المؤسسة",
      proofPoints: [
        "قراءة قانونية مرتبطة بالنتيجة والخطر المالي الحقيقي.",
        "عقود ووثائق أكثر صلابة قبل الإمضاء أو قبل النزاع.",
        "رد أسرع على عدم الخلاص وخلافات الشركاء وتعطل الحوكمة.",
      ],
      timingTitle: "متى يصبح التحرك السريع ضروريا",
      timingPoints: [
        "قبل إمضاء عقد تجاري مهم.",
        "عندما يعطل شريك أو حريف أو مزود قرارا أو خلاصا.",
        "عند ظهور تنبيه أو دين غير مستخلص أو خطر نزاعي.",
      ],
      coverageTitle: "نوعية المؤسسات التي تتم مرافقتها",
      coveragePoints: [
        "المؤسسات الصغرى والمتوسطة والتجار والمهنيون والمستثمرون في القيروان.",
        "ملفات يتم تنسيقها مع تونس او مع شركاء في جهات اخرى من تونس.",
        "مرافقة ظرفية او مستمرة بحسب حجم الخطر القانوني.",
      ],
      localTitle: "صفحات محلية مفيدة",
      localLinks: [
        {
          path: "/avocat-affaires-kairouan",
          label: "محامية أعمال في القيروان",
          description: "صفحة محلية للشركات والعقود والاستخلاص والنزاعات التجارية.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "استشارة قانونية في القيروان",
          description: "لتأطير سريع لعقد حساس أو خطر تجاري.",
        },
        {
          path: "/avocat-kairouan",
          label: "مكتب محاماة في القيروان",
          description: "نظرة محلية على ملفات الشركات والاستثمار التي يتابعها المكتب.",
        },
      ],
    },
  },
  realEstate: {
    fr: {
      proofTitle: "Ce que l'analyse doit protéger",
      proofPoints: [
        "La valeur économique du bien avant achat, vente ou location.",
        "La solidité du titre, des clauses et des garanties contractuelles.",
        "La capacité à réagir vite quand un blocage menace la transaction ou l'usage du bien.",
      ],
      timingTitle: "Quand il ne faut pas attendre",
      timingPoints: [
        "Avant signature d'un compromis, d'un bail ou d'un acte de vente.",
        "Quand un titre, une borne, un voisinage ou une occupation crée un risque.",
        "Quand un loyer est impayé ou qu'un bien devient difficile à récupérer.",
      ],
      coverageTitle: "Types de dossiers suivis autour de Kairouan",
      coveragePoints: [
        "Biens d'habitation, locaux commerciaux, terrains et patrimoines familiaux.",
        "Coordination possible avec notaires, experts et intervenants à Tunis.",
        "Suivi pour particuliers, héritiers, investisseurs et entreprises.",
      ],
      localTitle: "Pages locales à consulter",
      localLinks: [
        {
          path: "/avocat-immobilier-kairouan",
          label: "Avocat immobilier à Kairouan",
          description: "Page locale pour titres, ventes, baux et litiges immobiliers.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Consultation juridique à Kairouan",
          description: "Pour vérifier rapidement un acte, un titre ou un projet immobilier.",
        },
        {
          path: "/avocat-kairouan",
          label: "Cabinet d'avocat à Kairouan",
          description: "Présentation locale des dossiers immobiliers suivis par le cabinet.",
        },
      ],
    },
    en: {
      proofTitle: "What the legal review must protect",
      proofPoints: [
        "The economic value of the asset before purchase, sale or lease.",
        "The strength of title, clauses and contractual guarantees.",
        "Your ability to react quickly when a blockage threatens the deal or use of the property.",
      ],
      timingTitle: "When not to delay",
      timingPoints: [
        "Before signing a preliminary agreement, lease or sale deed.",
        "When title, boundaries, occupation or neighborhood issues create risk.",
        "When rent is unpaid or recovery of the property becomes difficult.",
      ],
      coverageTitle: "Property matters handled around Kairouan",
      coveragePoints: [
        "Homes, commercial premises, land and family-held assets.",
        "Coordination with notaries, experts and Tunis-based actors when needed.",
        "Support for individuals, heirs, investors and companies.",
      ],
      localTitle: "Relevant local pages",
      localLinks: [
        {
          path: "/avocat-immobilier-kairouan",
          label: "Real estate lawyer in Kairouan",
          description: "Local page for titles, leases, property transactions and disputes.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "Legal consultation in Kairouan",
          description: "For fast review of a deed, title or property project.",
        },
        {
          path: "/avocat-kairouan",
          label: "Lawyer in Kairouan",
          description: "Local overview of real-estate matters handled by the firm.",
        },
      ],
    },
    ar: {
      proofTitle: "ما الذي يجب أن يحميه التحليل القانوني",
      proofPoints: [
        "القيمة المالية للعقار قبل الشراء أو البيع أو الكراء.",
        "صلابة السند والبنود والضمانات التعاقدية.",
        "القدرة على التحرك بسرعة عند ظهور تعطيل يهدد الصفقة او الانتفاع بالعقار.",
      ],
      timingTitle: "متى لا يجب التأخير",
      timingPoints: [
        "قبل إمضاء وعد بالبيع أو عقد كراء أو عقد بيع.",
        "عندما يخلق السند او الحدود او الاشغال او الجوار خطرا قانونيا.",
        "عندما لا يقع خلاص الكراء او يصبح استرجاع العقار صعبا.",
      ],
      coverageTitle: "نوعية الملفات العقارية حول القيروان",
      coveragePoints: [
        "مساكن ومحلات تجارية واراض واملاك عائلية.",
        "إمكانية التنسيق مع العدول والخبراء والمتدخلين في تونس عند الحاجة.",
        "مرافقة للافراد والورثة والمستثمرين والمؤسسات.",
      ],
      localTitle: "صفحات محلية مفيدة",
      localLinks: [
        {
          path: "/avocat-immobilier-kairouan",
          label: "محامية عقارية في القيروان",
          description: "صفحة محلية للسندات والكراء والمعاملات والنزاعات العقارية.",
        },
        {
          path: "/consultation-juridique-kairouan",
          label: "استشارة قانونية في القيروان",
          description: "لتدقيق سريع لعقد أو سند أو مشروع عقاري.",
        },
        {
          path: "/avocat-kairouan",
          label: "مكتب محاماة في القيروان",
          description: "نظرة محلية على الملفات العقارية التي يتابعها المكتب.",
        },
      ],
    },
  },
};

export function getServiceEnhancement(serviceKey: ServiceDetailKey, locale: string) {
  return serviceEnhancements[serviceKey][resolveLocale(locale)];
}
