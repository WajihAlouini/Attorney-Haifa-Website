import { kairouanLandingPages } from "@/data/kairouanLandingPages";

export type ClusterLocale = "fr" | "en" | "ar";

export interface SeoClusterFaq {
  question: string;
  answer: string;
}

export interface SeoClusterPageLocalized {
  navLabel: string;
  heading: string;
  lede: string;
  description: string;
  keywords: string;
  highlights: string[];
  checklistTitle: string;
  checklist: string[];
  proofTitle?: string;
  proofPoints?: string[];
  processTitle?: string;
  process?: string[];
  serviceAreaTitle?: string;
  serviceAreas?: string[];
  faqs: SeoClusterFaq[];
}

export interface SeoClusterPageDefinition {
  path: string;
  localized: Record<ClusterLocale, SeoClusterPageLocalized>;
}

interface SeoClusterHubCopy {
  heading: string;
  lede: string;
}

interface SeoClusterUiCopy {
  eyebrow: string;
  whatsappPrefix: string;
  consultationCta: string;
  valueTitle: string;
  usefulPagesTitle: string;
  usefulPagesCta: string;
  relatedGuidesTitle: string;
  relatedGuidesCta: string;
  relatedArticlesTitle: string;
  relatedArticlesCta: string;
  relatedArticlesReadMore: string;
  faqTitle: string;
  serviceLinks: Array<{
    path: string;
    label: string;
  }>;
}

const HUB_COPY: Record<ClusterLocale, SeoClusterHubCopy> = {
  fr: {
    heading: "Guides juridiques Tunisie",
    lede: "Pages spécialisées pour les besoins les plus recherchés en Tunisie.",
  },
  en: {
    heading: "Tunisia Legal Guides",
    lede: "Specialized pages covering the legal matters most searched in Tunisia.",
  },
  ar: {
    heading: "أدلة قانونية في تونس",
    lede: "صفحات متخصصة لأكثر الاحتياجات القانونية بحثا في تونس.",
  },
};

const UI_COPY: Record<ClusterLocale, SeoClusterUiCopy> = {
  fr: {
    eyebrow: "Kairouan . Tunis . Tunisie",
    whatsappPrefix: "WhatsApp",
    consultationCta: "Demander une consultation",
    valueTitle: "Valeur du cabinet",
    usefulPagesTitle: "Pages utiles",
    usefulPagesCta:
      "Besoin d'un autre service ? Découvrez nos expertises utiles :",
    relatedGuidesTitle: "Guides connexes",
    relatedGuidesCta:
      "Explorez nos autres guides juridiques pour plus de clarté :",
    relatedArticlesTitle: "Articles récents sur ce sujet",
    relatedArticlesCta:
      "Nos dernières analyses sur cette thématique juridique :",
    relatedArticlesReadMore: "Lire l'article",
    faqTitle: "Questions fréquentes",
    serviceLinks: [
      {
        path: "/services/droit-de-la-famille",
        label: "Service : Droit de la famille",
      },
      {
        path: "/services/droit-immobilier",
        label: "Service : Droit immobilier",
      },
      {
        path: "/services/droit-des-affaires",
        label: "Service : Droit des affaires",
      },
      {
        path: "/services/droit-penal",
        label: "Service : Droit pénal",
      },
      { path: "/faq", label: "Questions fréquentes" },
      { path: "/actualites", label: "Actualités juridiques" },
    ],
  },
  en: {
    eyebrow: "Kairouan . Tunis . Tunisia",
    whatsappPrefix: "WhatsApp",
    consultationCta: "Request a consultation",
    valueTitle: "Firm value",
    usefulPagesTitle: "Useful pages",
    usefulPagesCta: "Need another service? Discover our useful expertise:",
    relatedGuidesTitle: "Related guides",
    relatedGuidesCta: "Explore our other legal guides for more clarity:",
    relatedArticlesTitle: "Recent articles on this topic",
    relatedArticlesCta:
      "Our latest analyses on this legal topic:",
    relatedArticlesReadMore: "Read the article",
    faqTitle: "Frequently asked questions",
    serviceLinks: [
      { path: "/services/droit-de-la-famille", label: "Service: Family law" },
      { path: "/services/droit-immobilier", label: "Service: Real estate law" },
      { path: "/services/droit-des-affaires", label: "Service: Business law" },
      { path: "/services/droit-penal", label: "Service: Criminal law" },
      { path: "/faq", label: "Frequently asked questions" },
      { path: "/actualites", label: "Legal news" },
    ],
  },
  ar: {
    eyebrow: "القيروان . تونس . تونس",
    whatsappPrefix: "واتساب",
    consultationCta: "طلب استشارة قانونية",
    valueTitle: "قيمة المكتب",
    usefulPagesTitle: "صفحات مفيدة",
    usefulPagesCta: "بحاجة لخدمة أخرى؟ اكتشف خبراتنا المفيدة:",
    relatedGuidesTitle: "أدلة مرتبطة",
    relatedGuidesCta: "تصفح أدلتنا القانونية الأخرى لمزيد من التوضيح:",
    relatedArticlesTitle: "مقالات حديثة حول هذا الموضوع",
    relatedArticlesCta: "أحدث تحليلاتنا القانونية حول هذه الثيمة:",
    relatedArticlesReadMore: "قراءة المقال",
    faqTitle: "أسئلة متكررة",
    serviceLinks: [
      { path: "/services/droit-de-la-famille", label: "الخدمة: قانون الأسرة" },
      { path: "/services/droit-immobilier", label: "الخدمة: القانون العقاري" },
      { path: "/services/droit-des-affaires", label: "الخدمة: قانون الأعمال" },
      { path: "/services/droit-penal", label: "الخدمة: القانون الجزائي" },
      { path: "/faq", label: "الأسئلة المتكررة" },
      { path: "/actualites", label: "المستجدات القانونية" },
    ],
  },
};

export const seoClusterPages: Record<string, SeoClusterPageDefinition> = {
  "/avocat-divorce-tunisie": {
    path: "/avocat-divorce-tunisie",
    localized: {
      fr: {
        navLabel: "Divorce en Tunisie",
        heading:
          "Avocat divorce en Tunisie : stratégie, protection et exécution",
        lede: "Accompagnement sur le divorce, la garde, la pension et la liquidation des droits, avec un suivi clair à Kairouan, Tunis et à distance.",
        description:
          "Cabinet d'avocat pour divorce en Tunisie. Procédure, garde d'enfants, pension alimentaire, médiation et contentieux.",
        keywords:
          "avocat divorce tunisie, avocat famille tunisie, garde enfants tunisie, pension alimentaire tunisie",
        highlights: [
          "Évaluation du dossier et choix de la bonne procédure (amiable ou contentieuse).",
          "Protection rapide en cas de risque pour vous ou vos enfants.",
          "Négociation et rédaction de protocoles solides pour éviter les litiges répétés.",
        ],
        checklistTitle: "Ce que vous obtenez",
        checklist: [
          "Un plan d'action écrit avec délais et étapes judiciaires.",
          "Une liste de pièces à produire pour accélérer le dossier.",
          "Un suivi régulier jusqu'au jugement et à son exécution.",
        ],
        faqs: [
          {
            question: "Combien de temps prend un divorce en Tunisie ?",
            answer:
              "Le délai dépend de la complexité du dossier et de la coopération des parties. Une estimation réaliste est donnée dès le début.",
          },
          {
            question: "Puis-je lancer la procédure depuis l'étranger ?",
            answer:
              "Oui. Le cabinet accompagne les clients résidant à l'étranger avec les actes nécessaires et la représentation locale.",
          },
          {
            question: "Comment se décide la garde des enfants ?",
            answer:
              "Le juge retient l'intérêt de l'enfant. Le dossier doit prouver la stabilité, la disponibilité et les conditions de vie.",
          },
        ],
      },
      en: {
        navLabel: "Divorce in Tunisia",
        heading:
          "Divorce lawyer in Tunisia: strategy, protection and execution",
        lede: "Support for divorce, child custody, alimony and enforcement, with clear follow-up in Kairouan, Tunis and remotely.",
        description:
          "Law firm for divorce matters in Tunisia: procedure, child custody, alimony, mediation and litigation.",
        keywords:
          "divorce lawyer tunisia, family lawyer tunisia, child custody tunisia, alimony tunisia",
        highlights: [
          "Case assessment and choice of the right path (amicable or contentious).",
          "Fast protection measures when you or your children are at risk.",
          "Negotiation and drafting of strong agreements to avoid repeated disputes.",
        ],
        checklistTitle: "What you get",
        checklist: [
          "A written action plan with legal steps and timelines.",
          "A document checklist to speed up your case.",
          "Regular follow-up until judgment and enforcement.",
        ],
        faqs: [
          {
            question: "How long does a divorce take in Tunisia?",
            answer:
              "Timeline depends on case complexity and cooperation between parties. A realistic estimate is provided from the start.",
          },
          {
            question: "Can I start proceedings from abroad?",
            answer:
              "Yes. The firm supports clients abroad with required documents and local representation.",
          },
          {
            question: "How is child custody decided?",
            answer:
              "The court prioritizes the child's best interest. The case file must demonstrate stability and care conditions.",
          },
        ],
      },
      ar: {
        navLabel: "الطلاق في تونس",
        heading: "محامي طلاق في تونس: استراتيجية وحماية وتنفيذ",
        lede: "مرافقة قانونية في الطلاق والحضانة والنفقة وتنفيذ الأحكام، مع متابعة واضحة في القيروان وتونس وعن بعد.",
        description:
          "مكتب محاماة لقضايا الطلاق في تونس: الإجراءات، الحضانة، النفقة، الوساطة والنزاعات القضائية.",
        keywords:
          "محامي طلاق تونس, محامي اسرة تونس, حضانة الاطفال تونس, نفقة تونس",
        highlights: [
          "تقييم الملف واختيار المسار الأنسب (رضائي أو قضائي).",
          "اتخاذ إجراءات حماية سريعة عند وجود خطر عليك أو على الأطفال.",
          "تفاوض وصياغة اتفاقات قوية لتقليل النزاعات المتكررة.",
        ],
        checklistTitle: "ما الذي تحصل عليه",
        checklist: [
          "خطة عمل مكتوبة تشمل المراحل والآجال القضائية.",
          "قائمة وثائق مطلوبة لتسريع معالجة الملف.",
          "متابعة مستمرة حتى صدور الحكم وتنفيذه.",
        ],
        faqs: [
          {
            question: "كم تستغرق قضية الطلاق في تونس؟",
            answer:
              "المدة تختلف حسب تعقيد الملف ومدى تعاون الأطراف. يتم تقديم تقدير واقعي منذ البداية.",
          },
          {
            question: "هل يمكن بدء الإجراءات من خارج تونس؟",
            answer:
              "نعم، يتم مرافقة المقيمين بالخارج مع إعداد الوثائق والنيابة القانونية محليا.",
          },
          {
            question: "كيف يتم تحديد الحضانة؟",
            answer:
              "المعيار الأساسي هو مصلحة الطفل، مع تقديم ملف يثبت الاستقرار والقدرة على الرعاية.",
          },
        ],
      },
    },
  },
  "/avocat-immobilier-tunisie": {
    path: "/avocat-immobilier-tunisie",
    localized: {
      fr: {
        navLabel: "Immobilier en Tunisie",
        heading: "Avocat immobilier en Tunisie : sécuriser vos transactions",
        lede: "Vérification juridique, contrats et défense en litige immobilier pour particuliers, investisseurs et entreprises.",
        description:
          "Avocat immobilier en Tunisie : achat, vente, vérification foncière, baux, copropriété et litiges de propriété.",
        keywords:
          "avocat immobilier tunisie, litige propriete tunisie, verification fonciere, bail commercial tunisie",
        highlights: [
          "Audit des titres et vérification des risques avant signature.",
          "Rédaction et révision des contrats de vente, bail et promesse.",
          "Représentation en contentieux pour protéger vos droits réels et financiers.",
        ],
        checklistTitle: "Points critiques contrôlés",
        checklist: [
          "Situation du bien et validité des documents.",
          "Clauses contractuelles, garanties et pénalités.",
          "Mise en exécution des obligations en cas de défaut.",
        ],
        faqs: [
          {
            question: "Pourquoi faire vérifier un contrat avant achat ?",
            answer:
              "Une vérification limite les risques de nullité, de charge cachée et de litige long après la signature.",
          },
          {
            question: "Le cabinet gère-t-il les baux commerciaux ?",
            answer:
              "Oui. Rédaction, renouvellement, résiliation et défense en cas d'impayé ou de conflit locatif.",
          },
          {
            question: "Que faire en cas de blocage sur un terrain ?",
            answer:
              "Il faut analyser les titres, prendre des mesures conservatoires et choisir la bonne voie procédurale rapidement.",
          },
        ],
      },
      en: {
        navLabel: "Real Estate in Tunisia",
        heading: "Real estate lawyer in Tunisia: secure your transactions",
        lede: "Legal verification, contract work and litigation defense for individuals, investors and companies.",
        description:
          "Real estate legal support in Tunisia: purchase, sale, title review, leases, co-ownership and property disputes.",
        keywords:
          "real estate lawyer tunisia, property dispute tunisia, title verification, commercial lease tunisia",
        highlights: [
          "Title audit and risk checks before signing.",
          "Drafting and review of sale, lease and promise agreements.",
          "Litigation representation to protect your property and financial rights.",
        ],
        checklistTitle: "Key points reviewed",
        checklist: [
          "Property status and document validity.",
          "Contract clauses, guarantees and penalties.",
          "Enforcement strategy when obligations are breached.",
        ],
        faqs: [
          {
            question: "Why review a contract before purchase?",
            answer:
              "A legal review reduces risks of invalid clauses, hidden burdens and long disputes after signing.",
          },
          {
            question: "Do you handle commercial leases?",
            answer:
              "Yes. Drafting, renewal, termination and litigation in unpaid-rent conflicts.",
          },
          {
            question: "What if a land file is blocked?",
            answer:
              "The right approach is title analysis, urgent protective measures and a suitable procedural path.",
          },
        ],
      },
      ar: {
        navLabel: "العقار في تونس",
        heading: "محامي عقاري في تونس: تأمين معاملاتك",
        lede: "تدقيق قانوني وصياغة عقود وتمثيل في النزاعات العقارية للأفراد والمستثمرين والشركات.",
        description:
          "محامي عقاري في تونس: شراء وبيع، تدقيق الملكية، عقود الكراء، الملكية المشتركة ونزاعات الملكية.",
        keywords:
          "محامي عقاري تونس, نزاع ملكية تونس, تدقيق عقاري, كراء تجاري تونس",
        highlights: [
          "تدقيق السندات والتحقق من المخاطر قبل التوقيع.",
          "صياغة ومراجعة عقود البيع والكراء والوعود بالبيع.",
          "تمثيل قضائي لحماية الحقوق العينية والمالية.",
        ],
        checklistTitle: "نقاط يتم التحقق منها",
        checklist: [
          "الوضعية القانونية للعقار وصحة الوثائق.",
          "بنود العقد والضمانات والجزاءات.",
          "خطة التنفيذ عند الإخلال بالالتزامات.",
        ],
        faqs: [
          {
            question: "لماذا يجب مراجعة العقد قبل الشراء؟",
            answer:
              "المراجعة القانونية تقلل مخاطر البطلان والديون الخفية والنزاعات بعد الإمضاء.",
          },
          {
            question: "هل يتكفل المكتب بعقود الكراء التجاري؟",
            answer: "نعم، من الصياغة والتجديد إلى الإنهاء والتقاضي عند النزاع.",
          },
          {
            question: "ماذا أفعل عند تعطل ملف عقار أو أرض؟",
            answer:
              "يتم تحليل السندات أولا ثم اتخاذ إجراءات تحفظية واختيار المسار الإجرائي الأنسب.",
          },
        ],
      },
    },
  },
  "/avocat-affaires-tunisie": {
    path: "/avocat-affaires-tunisie",
    localized: {
      fr: {
        navLabel: "Droit des affaires",
        heading: "Avocat affaires en Tunisie : contrats, croissance et litiges",
        lede: "Conseil juridique pour dirigeants et entreprises : prévention des risques, structure contractuelle et défense contentieuse.",
        description:
          "Avocat droit des affaires en Tunisie : création de société, contrats commerciaux, recouvrement et litiges entre partenaires.",
        keywords:
          "avocat affaires tunisie, contrat commercial tunisie, creation societe tunisie, litige commercial",
        highlights: [
          "Structuration légale des opérations et gouvernance claire.",
          "Contrats commerciaux négociables et juridiquement robustes.",
          "Défense en litige, recouvrement et stratégie de sortie.",
        ],
        checklistTitle: "Interventions fréquentes",
        checklist: [
          "Constitution ou réorganisation de société.",
          "Audit et renégociation de contrats critiques.",
          "Contentieux commercial et prévention des impayés.",
        ],
        faqs: [
          {
            question: "Le cabinet accompagne-t-il les PME ?",
            answer:
              "Oui. L'approche est adaptée au niveau de risque et à la taille de l'entreprise.",
          },
          {
            question: "Peut-on prévenir un litige avant signature ?",
            answer:
              "Oui. Une architecture contractuelle précise réduit fortement les conflits futurs.",
          },
          {
            question: "Que faire en cas d'impayé important ?",
            answer:
              "Le cabinet prépare la mise en demeure, la preuve de créance et la procédure la plus efficace pour récupérer les montants dus.",
          },
        ],
      },
      en: {
        navLabel: "Business law",
        heading: "Business lawyer in Tunisia: contracts, growth and disputes",
        lede: "Legal support for founders and companies: risk prevention, contract structure and litigation defense.",
        description:
          "Business law support in Tunisia: company setup, commercial contracts, debt recovery and partner disputes.",
        keywords:
          "business lawyer tunisia, commercial contract tunisia, company formation tunisia, commercial dispute",
        highlights: [
          "Legal structuring of operations with clear governance.",
          "Negotiable commercial contracts with strong legal foundations.",
          "Litigation defense, recovery actions and exit strategies.",
        ],
        checklistTitle: "Frequent interventions",
        checklist: [
          "Company setup or legal restructuring.",
          "Audit and renegotiation of critical contracts.",
          "Commercial disputes and unpaid-debt prevention.",
        ],
        faqs: [
          {
            question: "Do you support SMEs?",
            answer:
              "Yes. The approach is tailored to each company's risk profile and business size.",
          },
          {
            question: "Can disputes be prevented before signature?",
            answer:
              "Yes. Strong contract architecture significantly reduces future conflicts.",
          },
          {
            question: "What if a major invoice is unpaid?",
            answer:
              "We prepare demand notices, proof packages and the best procedural route for recovery.",
          },
        ],
      },
      ar: {
        navLabel: "قانون الأعمال",
        heading: "محامي أعمال في تونس: عقود ونمو ونزاعات",
        lede: "استشارة قانونية للمؤسسات والمسيرين: الوقاية من المخاطر، هيكلة العقود والدفاع في النزاعات التجارية.",
        description:
          "محامي قانون أعمال في تونس: تأسيس شركات، عقود تجارية، استخلاص ديون ونزاعات بين الشركاء.",
        keywords:
          "محامي اعمال تونس, عقد تجاري تونس, تأسيس شركة تونس, نزاع تجاري",
        highlights: [
          "هيكلة قانونية للعمليات مع حوكمة واضحة.",
          "عقود تجارية قوية وقابلة للتفاوض.",
          "دفاع قضائي واستخلاص ديون واستراتيجية خروج.",
        ],
        checklistTitle: "تدخلات متكررة",
        checklist: [
          "تأسيس شركة أو إعادة هيكلة قانونية.",
          "تدقيق العقود الحساسة وإعادة التفاوض.",
          "نزاعات تجارية والوقاية من الديون غير المستخلصة.",
        ],
        faqs: [
          {
            question: "هل يرافق المكتب المؤسسات الصغرى والمتوسطة؟",
            answer:
              "نعم، تتم مواءمة العمل القانوني حسب حجم المؤسسة ومستوى المخاطر.",
          },
          {
            question: "هل يمكن تجنب النزاع قبل التوقيع؟",
            answer: "نعم، بصياغة دقيقة للعقود وتوزيع واضح للمسؤوليات.",
          },
          {
            question: "ماذا أفعل في حالة عدم خلاص كبير؟",
            answer:
              "يتم إعداد تنبيه قانوني وملف إثبات واختيار المسار الإجرائي الأنسب للاستخلاص.",
          },
        ],
      },
    },
  },
  "/consultation-juridique-tunisie": {
    path: "/consultation-juridique-tunisie",
    localized: {
      fr: {
        navLabel: "Consultation juridique",
        heading:
          "Consultation juridique en Tunisie : réponse rapide et plan clair",
        lede: "Une consultation structurée pour comprendre vos options, vos risques et la meilleure action immédiate.",
        description:
          "Consultation juridique en Tunisie avec un avocat à Kairouan et Tunis. Analyse du dossier, options légales et plan d'action.",
        keywords:
          "consultation juridique tunisie, avocat kairouan tunis, conseil juridique tunisie, rendez-vous avocat",
        highlights: [
          "Diagnostic juridique initial fondé sur vos documents.",
          "Scénario principal et alternatives avec niveau de risque.",
          "Plan d'action priorisé pour agir sans perdre de temps.",
        ],
        checklistTitle: "Préparation utile avant rendez-vous",
        checklist: [
          "Rassembler les pièces et échanges importants.",
          "Lister les faits par ordre chronologique.",
          "Définir l'objectif concret à atteindre.",
        ],
        faqs: [
          {
            question: "Puis-je obtenir un avis sans lancer une procédure ?",
            answer:
              "Oui. La consultation peut rester un avis stratégique sans action immédiate.",
          },
          {
            question: "Les consultations sont-elles possibles en ligne ?",
            answer:
              "Oui. Le cabinet propose des consultations à distance selon votre situation.",
          },
          {
            question: "Comment estimer les honoraires ?",
            answer:
              "Une estimation est fournie selon la nature du dossier, la complexité et les délais.",
          },
        ],
      },
      en: {
        navLabel: "Legal consultation",
        heading: "Legal consultation in Tunisia: fast answer and clear plan",
        lede: "A structured consultation to understand your options, risks and the best immediate move.",
        description:
          "Legal consultation in Tunisia with a lawyer in Kairouan and Tunis. Case analysis, legal options and action plan.",
        keywords:
          "legal consultation tunisia, lawyer kairouan tunis, legal advice tunisia, lawyer appointment",
        highlights: [
          "Initial legal diagnosis based on your documents.",
          "Primary scenario and alternatives with risk level.",
          "Priority action plan so you can move quickly.",
        ],
        checklistTitle: "How to prepare for the consultation",
        checklist: [
          "Gather key documents and exchanges.",
          "List events in chronological order.",
          "Define the concrete result you want.",
        ],
        faqs: [
          {
            question: "Can I get advice without filing a case?",
            answer:
              "Yes. A consultation can remain strategic advice without immediate litigation.",
          },
          {
            question: "Are online consultations available?",
            answer:
              "Yes. Remote consultations are available depending on your context.",
          },
          {
            question: "How are fees estimated?",
            answer:
              "An estimate is provided based on case type, complexity and expected timeline.",
          },
        ],
      },
      ar: {
        navLabel: "استشارة قانونية",
        heading: "استشارة قانونية في تونس: جواب سريع وخطة واضحة",
        lede: "استشارة منظمة لفهم خياراتك القانونية والمخاطر وأفضل خطوة فورية.",
        description:
          "استشارة قانونية في تونس مع محام في القيروان وتونس: تحليل الملف والخيارات القانونية وخطة العمل.",
        keywords:
          "استشارة قانونية تونس, محامي القيروان تونس, نصيحة قانونية تونس, موعد محامي",
        highlights: [
          "تشخيص قانوني أولي اعتمادا على الوثائق.",
          "سيناريو رئيسي وبدائل مع تقييم مستوى المخاطر.",
          "خطة عمل ذات أولويات للتحرك بسرعة.",
        ],
        checklistTitle: "التحضير المفيد قبل الموعد",
        checklist: [
          "جمع الوثائق والمراسلات المهمة.",
          "ترتيب الوقائع زمنيا بشكل واضح.",
          "تحديد الهدف العملي المطلوب تحقيقه.",
        ],
        faqs: [
          {
            question: "هل يمكن أخذ رأي قانوني دون رفع قضية؟",
            answer:
              "نعم، يمكن أن تبقى الاستشارة في إطار رأي استراتيجي دون مباشرة إجراءات فورية.",
          },
          {
            question: "هل تتوفر الاستشارة عن بعد؟",
            answer:
              "نعم، تتوفر الاستشارة عن بعد حسب طبيعة الملف ووضعية الحريف.",
          },
          {
            question: "كيف يتم تقدير الأتعاب؟",
            answer:
              "يتم تقديم تقدير أولي حسب نوع الملف وتعقيده والآجال المتوقعة.",
          },
        ],
      },
    },
  },
  "/code-du-travail-tunisie": {
    path: "/code-du-travail-tunisie",
    localized: {
      fr: {
        navLabel: "Code du travail Tunisie",
        heading:
          "Code du travail en Tunisie 2025 : droits, obligations et réforme",
        lede: "Décryptage du code du travail tunisien et de la réforme 2025 : contrats, licenciement, congés, heures supplémentaires et droits des salariés du secteur privé.",
        description:
          "Guide complet sur le code du travail en Tunisie 2025. Droits des salariés, contrats, licenciement, congés et réforme du droit du travail tunisien.",
        keywords:
          "code de travail tunisie 2025, code du travail tunisie, loi de travail 2025, code de travail tunisie secteur privé, droit du travail tunisie",
        highlights: [
          "Analyse des droits et obligations du salarié et de l'employeur selon le code du travail tunisien.",
          "Accompagnement en cas de licenciement abusif, rupture de contrat ou litige prud'homal.",
          "Conseil sur les nouvelles dispositions de la réforme du code du travail 2025.",
        ],
        checklistTitle: "Sujets couverts",
        checklist: [
          "Contrat de travail : CDD, CDI, période d'essai et clauses essentielles.",
          "Licenciement : procédure, indemnités, contestation et délais.",
          "Congés, heures supplémentaires, salaire minimum et droits sociaux.",
        ],
        proofTitle: "Pourquoi consulter un avocat en droit du travail",
        proofPoints: [
          "Protection contre le licenciement abusif et les sanctions irrégulières.",
          "Calcul exact des indemnités et des droits de fin de contrat.",
          "Représentation devant les juridictions sociales et conseil stratégique.",
        ],
        processTitle: "Comment se déroule l'accompagnement",
        process: [
          "Analyse du contrat de travail et de la situation professionnelle.",
          "Identification des manquements et des droits mobilisables.",
          "Mise en demeure, négociation ou représentation devant le tribunal.",
        ],
        faqs: [
          {
            question:
              "Quels sont les principaux changements du code du travail 2025 ?",
            answer:
              "La réforme renforce la protection des salariés en matière de licenciement, actualise les dispositions sur le travail à distance et révise les conditions du contrat à durée déterminée.",
          },
          {
            question:
              "Comment contester un licenciement abusif en Tunisie ?",
            answer:
              "Le salarié peut saisir le tribunal compétent dans les délais légaux. Un dossier solide avec preuves et historique du contrat est indispensable.",
          },
          {
            question:
              "Le code du travail s'applique-t-il au secteur privé uniquement ?",
            answer:
              "Le code du travail régit principalement le secteur privé. La fonction publique est soumise au statut général des agents de l'État.",
          },
          {
            question: "Quels sont les droits du salarié en période d'essai ?",
            answer:
              "Le salarié en période d'essai bénéficie des droits fondamentaux (salaire, sécurité) mais la rupture peut intervenir sans indemnité selon les conditions légales.",
          },
        ],
      },
      en: {
        navLabel: "Tunisia Labour Code",
        heading:
          "Tunisia Labour Code 2025: rights, obligations and reform",
        lede: "Understanding the Tunisian labour code and the 2025 reform: contracts, dismissal, leave, overtime and private sector employee rights.",
        description:
          "Complete guide to the Tunisia labour code 2025. Employee rights, contracts, dismissal, leave and labour law reform in Tunisia.",
        keywords:
          "tunisia labour code 2025, labor law tunisia, employment law tunisia, worker rights tunisia, labour code reform tunisia",
        highlights: [
          "Analysis of employee and employer rights under Tunisian labour law.",
          "Support for wrongful dismissal, contract breach or labour disputes.",
          "Advice on new provisions from the 2025 labour code reform.",
        ],
        checklistTitle: "Topics covered",
        checklist: [
          "Employment contracts: fixed-term, permanent, probation and key clauses.",
          "Dismissal: procedure, compensation, challenge and deadlines.",
          "Leave, overtime, minimum wage and social rights.",
        ],
        proofTitle: "Why consult an employment lawyer",
        proofPoints: [
          "Protection against wrongful dismissal and irregular sanctions.",
          "Accurate calculation of severance and end-of-contract entitlements.",
          "Representation before labour courts and strategic advice.",
        ],
        processTitle: "How the support works",
        process: [
          "Analysis of the employment contract and professional situation.",
          "Identification of breaches and available legal remedies.",
          "Formal notice, negotiation or tribunal representation.",
        ],
        faqs: [
          {
            question:
              "What are the main changes in the 2025 labour code?",
            answer:
              "The reform strengthens employee protection in dismissal matters, updates remote work provisions and revises fixed-term contract conditions.",
          },
          {
            question: "How to challenge wrongful dismissal in Tunisia?",
            answer:
              "The employee can file with the competent court within legal deadlines. A strong file with evidence and contract history is essential.",
          },
          {
            question:
              "Does the labour code apply only to the private sector?",
            answer:
              "The labour code primarily governs the private sector. Civil servants are subject to the general statute of state employees.",
          },
          {
            question:
              "What are employee rights during probation?",
            answer:
              "Employees on probation enjoy fundamental rights (salary, safety) but termination may occur without compensation under legal conditions.",
          },
        ],
      },
      ar: {
        navLabel: "مجلة الشغل تونس",
        heading:
          "مجلة الشغل في تونس 2025: حقوق والتزامات وإصلاح",
        lede: "فهم مجلة الشغل التونسية وإصلاح 2025: العقود والطرد والعطل والساعات الإضافية وحقوق العاملين في القطاع الخاص.",
        description:
          "دليل شامل حول مجلة الشغل في تونس 2025. حقوق العمال والعقود والطرد والعطل وإصلاح قانون الشغل التونسي.",
        keywords:
          "مجلة الشغل تونس 2025, قانون الشغل تونس, حقوق العمال تونس, إصلاح مجلة الشغل, code de travail tunisie",
        highlights: [
          "تحليل حقوق والتزامات الأجير والمؤجر حسب مجلة الشغل التونسية.",
          "مرافقة في حالات الطرد التعسفي وفسخ العقد والنزاعات الشغلية.",
          "استشارة حول الأحكام الجديدة لإصلاح مجلة الشغل 2025.",
        ],
        checklistTitle: "المواضيع المغطاة",
        checklist: [
          "عقد الشغل: محدد المدة وغير محدد المدة وفترة التجربة والبنود الأساسية.",
          "الطرد: الإجراءات والتعويضات والطعن والآجال.",
          "العطل والساعات الإضافية والأجر الأدنى والحقوق الاجتماعية.",
        ],
        proofTitle: "لماذا استشارة محامي في قانون الشغل",
        proofPoints: [
          "حماية من الطرد التعسفي والعقوبات غير القانونية.",
          "احتساب دقيق للتعويضات وحقوق نهاية العقد.",
          "تمثيل أمام المحاكم الشغلية واستشارة استراتيجية.",
        ],
        processTitle: "كيف تتم المرافقة",
        process: [
          "تحليل عقد الشغل والوضعية المهنية.",
          "تحديد الإخلالات والحقوق القابلة للتفعيل.",
          "إنذار قانوني أو تفاوض أو تمثيل أمام المحكمة.",
        ],
        faqs: [
          {
            question: "ما هي أهم تغييرات مجلة الشغل 2025؟",
            answer:
              "يعزز الإصلاح حماية العمال في مجال الطرد ويحدث أحكام العمل عن بعد ويراجع شروط العقود محددة المدة.",
          },
          {
            question: "كيف يتم الطعن في الطرد التعسفي في تونس؟",
            answer:
              "يمكن للأجير اللجوء إلى المحكمة المختصة في الآجال القانونية مع ملف قوي يتضمن الأدلة وتاريخ العقد.",
          },
          {
            question: "هل تنطبق مجلة الشغل على القطاع الخاص فقط؟",
            answer:
              "مجلة الشغل تحكم أساسا القطاع الخاص. الموظفون العموميون يخضعون للنظام الأساسي العام لأعوان الدولة.",
          },
          {
            question: "ما هي حقوق الأجير خلال فترة التجربة؟",
            answer:
              "يتمتع الأجير في فترة التجربة بالحقوق الأساسية (الأجر والسلامة) لكن يمكن إنهاء العلاقة دون تعويض حسب الشروط القانونية.",
          },
        ],
      },
    },
  },
  "/avocat-kairouan": {
    path: "/avocat-kairouan",
    localized: {
      fr: {
        navLabel: "Avocat à Kairouan",
        heading:
          "Avocat à Kairouan : conseil local, suivi rapide et stratégie claire",
        lede: "Cabinet installé à Kairouan pour les particuliers, familles, dirigeants et investisseurs ayant besoin d'un suivi réactif et d'une vision pratique du dossier.",
        description:
          "Avocat à Kairouan pour divorce, immobilier, affaires et consultation juridique. Cabinet local avec suivi des dossiers à Kairouan, Tunis et à distance.",
        keywords:
          "avocat kairouan, avocat a kairouan, cabinet avocat kairouan, consultation juridique kairouan",
        highlights: [
          "Cabinet local à Kairouan avec accompagnement sur les dossiers sensibles et urgents.",
          "Préparation claire des pièces, délais et options procédurales.",
          "Coordination possible avec des clients à Tunis, en régions voisines et à l'étranger.",
        ],
        checklistTitle: "Pourquoi consulter à Kairouan",
        checklist: [
          "Un interlocuteur de proximité pour rendez-vous, dépôt de pièces et suivi.",
          "Une approche transversale sur la famille, l'immobilier, les contrats et les litiges.",
          "Un plan d'action concret avant de vous engager dans une procédure lourde.",
        ],
        faqs: [
          {
            question: "Le cabinet intervient-il uniquement à Kairouan ?",
            answer:
              "Non. Le cabinet suit des dossiers à Kairouan, Tunis et à distance selon la nature du dossier.",
          },
          {
            question: "Puis-je prendre rendez-vous rapidement ?",
            answer:
              "Oui. Selon l'urgence, un premier échange peut être organisé rapidement pour cadrer la situation.",
          },
          {
            question: "Quels dossiers sont les plus fréquents ?",
            answer:
              "Les demandes portent souvent sur le divorce, la garde, les litiges immobiliers, les contrats et la consultation stratégique.",
          },
        ],
      },
      en: {
        navLabel: "Lawyer in Kairouan",
        heading:
          "Lawyer in Kairouan: local support, fast follow-up and clear strategy",
        lede: "A law firm based in Kairouan for individuals, families, business owners and investors who need responsive legal support and practical case handling.",
        description:
          "Lawyer in Kairouan for divorce, real estate, business matters and legal consultation. Local firm handling files in Kairouan, Tunis and remotely.",
        keywords:
          "lawyer kairouan, attorney kairouan, law firm kairouan, legal consultation kairouan",
        highlights: [
          "Local presence in Kairouan for urgent and sensitive legal matters.",
          "Clear preparation of evidence, timelines and procedural options.",
          "Workable coordination for clients in Tunis, nearby regions and abroad.",
        ],
        checklistTitle: "Why consult in Kairouan",
        checklist: [
          "A nearby legal contact for meetings, documents and ongoing follow-up.",
          "Cross-practice support in family, property, contracts and disputes.",
          "A concrete action plan before you commit to heavy litigation.",
        ],
        faqs: [
          {
            question: "Do you only handle matters in Kairouan?",
            answer:
              "No. The firm handles files in Kairouan, Tunis and remotely depending on the matter.",
          },
          {
            question: "Can I get an appointment quickly?",
            answer:
              "Yes. Depending on urgency, a first exchange can usually be arranged quickly to frame the issue.",
          },
          {
            question: "What cases are most common?",
            answer:
              "Frequent matters include divorce, custody, property disputes, contracts and strategic legal consultation.",
          },
        ],
      },
      ar: {
        navLabel: "محامية في القيروان",
        heading: "محامية في القيروان: متابعة محلية سريعة وخطة قانونية واضحة",
        lede: "مكتب محاماة مقره القيروان لفائدة الافراد والعائلات واصحاب المؤسسات والمستثمرين ممن يحتاجون الى مرافقة قانونية قريبة وعملية.",
        description:
          "محامية في القيروان لملفات الطلاق والعقار والاعمال والاستشارة القانونية. مكتب محلي يتابع الملفات في القيروان وتونس وعن بعد.",
        keywords:
          "محامي القيروان, محامية القيروان, مكتب محاماة القيروان, استشارة قانونية القيروان",
        highlights: [
          "حضور محلي في القيروان لمتابعة الملفات الحساسة والمستعجلة.",
          "اعداد واضح للوثائق والاجال والخيارات الاجرائية.",
          "تنسيق فعال مع الحرفاء في تونس والجهات المجاورة وخارج البلاد.",
        ],
        checklistTitle: "لماذا الاستشارة في القيروان",
        checklist: [
          "مخاطب قريب للمواعيد وتسليم الوثائق والمتابعة المستمرة.",
          "مرافقة عابرة للاختصاصات في الاسرة والعقار والعقود والنزاعات.",
          "خطة عمل ملموسة قبل الالتزام باجراءات قضائية ثقيلة.",
        ],
        faqs: [
          {
            question: "هل يقتصر العمل على القيروان فقط؟",
            answer:
              "لا. يتم متابعة الملفات في القيروان وتونس وعن بعد حسب طبيعة الملف.",
          },
          {
            question: "هل يمكن الحصول على موعد بسرعة؟",
            answer:
              "نعم. حسب الاستعجال يمكن تنظيم تواصل اولي سريع لتاطير الوضعية.",
          },
          {
            question: "ما هي الملفات الاكثر تداولا؟",
            answer:
              "من اكثر الطلبات حضورا: الطلاق والحضانة والنزاعات العقارية والعقود والاستشارة القانونية الاستراتيجية.",
          },
        ],
      },
    },
  },
  "/avocat-penal-tunisie": {
    path: "/avocat-penal-tunisie",
    localized: {
      fr: {
        navLabel: "Avocat pénaliste en Tunisie",
        heading:
          "Avocat pénaliste en Tunisie : défense, partie civile et urgence",
        lede:
          "Défense pénale dès la garde à vue, devant le juge d'instruction et à l'audience. Représentation des victimes en partie civile, à Kairouan, Tunis et à distance.",
        description:
          "Cabinet d'avocat pénaliste en Tunisie. Garde à vue, instruction, plaidoirie, partie civile et voies de recours.",
        keywords:
          "avocat penal tunisie, avocat penaliste tunisie, garde a vue tunisie, partie civile tunisie, defense penale",
        highlights: [
          "Intervention en urgence dès la garde à vue et l'audition libre.",
          "Défense devant les tribunaux correctionnels, criminels et la cassation.",
          "Constitution de partie civile pour obtenir réparation en tant que victime.",
        ],
        checklistTitle: "Ce que vous obtenez",
        checklist: [
          "Une lecture juridique précise des faits et de la procédure.",
          "Une stratégie écrite, avec arguments en demande et en défense.",
          "Un suivi régulier jusqu'au jugement et à l'exécution.",
        ],
        proofTitle: "Pourquoi le cabinet",
        proofPoints: [
          "Présence à chaque étape critique, sans rupture de communication.",
          "Connaissance pratique des juridictions de Kairouan, Tunis et alentours.",
          "Approche humaine et confidentielle, sans jugement.",
        ],
        processTitle: "Étapes types d'un dossier pénal",
        process: [
          "Premier contact urgent et évaluation des risques.",
          "Préparation de l'audition et stratégie de défense.",
          "Plaidoirie à l'audience et exploitation des nullités.",
          "Voies de recours et exécution du jugement.",
        ],
        faqs: [
          {
            question: "Le cabinet intervient-il dès la garde à vue ?",
            answer:
              "Oui. Une intervention rapide est possible pour assister à l'audition, vérifier la régularité de la procédure et préparer la suite.",
          },
          {
            question: "Puis-je faire appel d'un jugement défavorable ?",
            answer:
              "Oui. L'appel et le pourvoi en cassation sont étudiés au cas par cas, avec une évaluation honnête des chances de succès.",
          },
          {
            question: "Que faire si je suis victime ?",
            answer:
              "Vous pouvez vous constituer partie civile pour obtenir réparation. Le cabinet vous accompagne dans la plainte, l'instruction et le procès.",
          },
        ],
      },
      en: {
        navLabel: "Criminal lawyer in Tunisia",
        heading:
          "Criminal lawyer in Tunisia: defence, civil party and urgent intervention",
        lede:
          "Criminal defence from police custody, before the investigating judge and at trial. Victim representation as a civil party, in Kairouan, Tunis and remotely.",
        description:
          "Criminal-defence law firm in Tunisia. Police custody, investigation, pleading, civil-party action and appeals.",
        keywords:
          "criminal lawyer tunisia, criminal defence tunisia, police custody tunisia, civil party tunisia, criminal trial",
        highlights: [
          "Urgent intervention from the start of police custody and free hearings.",
          "Defence before correctional, criminal and cassation courts.",
          "Civil-party action to obtain compensation as a victim.",
        ],
        checklistTitle: "What you get",
        checklist: [
          "A precise legal reading of the facts and the procedure.",
          "A written strategy, with claim and defence arguments.",
          "Regular follow-up through to judgment and enforcement.",
        ],
        proofTitle: "Why this firm",
        proofPoints: [
          "Presence at every critical step, with continuous communication.",
          "Practical knowledge of courts in Kairouan, Tunis and the region.",
          "Human, confidential approach — without judgment.",
        ],
        processTitle: "Typical stages of a criminal case",
        process: [
          "Urgent first contact and risk assessment.",
          "Hearing preparation and defence strategy.",
          "Pleading at trial and use of procedural nullities.",
          "Appeals and judgment enforcement.",
        ],
        faqs: [
          {
            question: "Does the firm step in at police custody?",
            answer:
              "Yes. Rapid intervention is available to attend questioning, verify procedural regularity and prepare next steps.",
          },
          {
            question: "Can I appeal an adverse judgment?",
            answer:
              "Yes. Appeals and cassation are reviewed case by case, with an honest assessment of the chances of success.",
          },
          {
            question: "What if I am a victim?",
            answer:
              "You can file a civil-party action to obtain compensation. The firm supports you through the complaint, investigation and trial.",
          },
        ],
      },
      ar: {
        navLabel: "محامي جزائي في تونس",
        heading: "محامي جزائي في تونس: دفاع وقيام بالحق الشخصي وتدخل عاجل",
        lede:
          "دفاع جزائي منذ الاحتفاظ، أمام قاضي التحقيق وفي الجلسة. تمثيل الضحايا في القيام بالحق الشخصي، في القيروان وتونس وعن بعد.",
        description:
          "مكتب محاماة جزائي في تونس: الاحتفاظ، التحقيق، الترافع، القيام بالحق الشخصي وطرق الطعن.",
        keywords:
          "محامي جزائي تونس, محامي جنائي تونس, احتفاظ تونس, قيام بالحق الشخصي تونس, دفاع جزائي",
        highlights: [
          "تدخل عاجل منذ بداية الاحتفاظ وسماع الأقوال.",
          "الدفاع أمام المحاكم الجناحية والجنائية ومحكمة التعقيب.",
          "القيام بالحق الشخصي للحصول على التعويض بصفة ضحية.",
        ],
        checklistTitle: "ما الذي تحصل عليه",
        checklist: [
          "قراءة قانونية دقيقة للوقائع وللإجراءات.",
          "استراتيجية مكتوبة بحجج للدعوى والدفاع.",
          "متابعة منتظمة حتى الحكم والتنفيذ.",
        ],
        proofTitle: "لماذا المكتب",
        proofPoints: [
          "حضور في كل مرحلة حساسة بتواصل متواصل.",
          "معرفة عملية بمحاكم القيروان وتونس والمنطقة.",
          "مقاربة إنسانية سرية بدون أحكام مسبقة.",
        ],
        processTitle: "مراحل نموذجية لملف جزائي",
        process: [
          "اتصال أول عاجل وتقييم المخاطر.",
          "تحضير الاستنطاق ووضع استراتيجية الدفاع.",
          "الترافع في الجلسة واستثمار البطلانات الإجرائية.",
          "طرق الطعن وتنفيذ الحكم.",
        ],
        faqs: [
          {
            question: "هل يتدخل المكتب منذ الاحتفاظ؟",
            answer:
              "نعم. التدخل السريع ممكن لحضور الاستنطاق والتثبت من سلامة الإجراءات وإعداد ما يلي.",
          },
          {
            question: "هل يمكنني الطعن في حكم غير مواتي؟",
            answer:
              "نعم. تتم دراسة الاستئناف والتعقيب حالة بحالة بتقييم صادق لحظوظ النجاح.",
          },
          {
            question: "ماذا إذا كنت ضحية؟",
            answer:
              "يمكنك القيام بالحق الشخصي للحصول على تعويض. يرافقك المكتب في الشكاية والتحقيق والمحاكمة.",
          },
        ],
      },
    },
  },
  ...kairouanLandingPages,
};

function resolveClusterLocale(locale: string): ClusterLocale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

export function getSeoClusterHubCopy(locale: string): SeoClusterHubCopy {
  return HUB_COPY[resolveClusterLocale(locale)];
}

export function getSeoClusterUiCopy(locale: string): SeoClusterUiCopy {
  return UI_COPY[resolveClusterLocale(locale)];
}

export function getSeoClusterPage(path: string, locale: string) {
  const page = seoClusterPages[path];
  if (!page) return null;

  const localized = page.localized[resolveClusterLocale(locale)];
  return { path: page.path, ...localized };
}

export function getSeoClusterPages(locale: string) {
  const resolvedLocale = resolveClusterLocale(locale);
  return Object.values(seoClusterPages).map((page) => ({
    path: page.path,
    ...page.localized[resolvedLocale],
  }));
}

export const seoClusterPaths = Object.keys(seoClusterPages);
