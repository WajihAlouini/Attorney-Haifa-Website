export type SiteLocale = "fr" | "en" | "ar";

export type ServiceDetailKey = "family" | "business" | "realEstate" | "criminal";

export interface ServiceDetailFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailStep {
  title: string;
  description: string;
}

export interface ServiceDetailLink {
  path: string;
  label: string;
  description: string;
}

export interface ServiceDetailLocalized {
  key: ServiceDetailKey;
  eyebrow: string;
  title: string;
  lede: string;
  introTitle: string;
  intro: string;
  highlightsTitle: string;
  highlights: string[];
  processTitle: string;
  process: ServiceDetailStep[];
  documentsTitle: string;
  documents: string[];
  faqTitle: string;
  faqs: ServiceDetailFaq[];
  relatedTitle: string;
  relatedLinks: ServiceDetailLink[];
  primaryCta: string;
  secondaryCta: string;
}

interface ServiceDetailDefinition {
  path: string;
  localized: Record<SiteLocale, ServiceDetailLocalized>;
}

function resolveLocale(locale: string): SiteLocale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

// All locales link to the unified French slug; per-locale content is served
// via the prerendered locale snapshot at that URL. Legacy per-language slugs
// remain as 301s in public/_redirects for any external backlinks.
function familyArticlePath() {
  return "/actualites/reforme-famille-garde-partagee-tunisie";
}

function businessArticlePath() {
  return "/actualites/nouveau-code-des-changes-tunisie-2026";
}

function realEstateArticlePath() {
  return "/actualites/immobilier-etrangers-tunisie-2026";
}

const serviceDetails: Record<ServiceDetailKey, ServiceDetailDefinition> = {
  family: {
    path: "/services/droit-de-la-famille",
    localized: {
      fr: {
        key: "family",
        eyebrow: "Kairouan . Tunis . Droit de la famille",
        title: "Avocat en droit de la famille en Tunisie",
        lede:
          "Divorce, garde, pension, filiation et succession avec une stratégie claire et une vraie préparation du dossier.",
        introTitle: "Une direction utile dès le premier rendez-vous",
        intro:
          "Les conflits familiaux mélangent urgence, émotions et conséquences durables. Le cabinet construit un plan concret : pièces à réunir, voie procédurale la plus adaptée, mesures de protection si nécessaire et calendrier réaliste.",
        highlightsTitle: "Situations fréquentes accompagnées",
        highlights: [
          "Divorce amiable ou contentieux et organisation des conséquences pratiques.",
          "Garde, droit de visite, pension alimentaire et exécution des jugements.",
          "Successions, indivisions et blocages entre héritiers.",
        ],
        processTitle: "Comment le dossier avance",
        process: [
          {
            title: "1. Lecture du dossier",
            description:
              "Analyse des faits, des priorités de la famille et des preuves déjà disponibles.",
          },
          {
            title: "2. Stratégie procédurale",
            description:
              "Choix de la bonne voie entre négociation, mesures urgentes et action en justice.",
          },
          {
            title: "3. Suivi jusqu'à l'exécution",
            description:
              "Chaque audience, délai et formalité utile sont suivis jusqu'au résultat concret.",
          },
        ],
        documentsTitle: "Documents utiles à préparer",
        documents: [
          "Actes d'état civil, jugement antérieur ou convention déjà signée.",
          "Preuves de revenus, charges et besoins des enfants.",
          "Échanges et éléments utiles pour établir la situation familiale.",
        ],
        faqTitle: "Questions fréquentes",
        faqs: [
          {
            question: "Combien de temps peut durer un divorce en Tunisie ?",
            answer:
              "Le délai dépend du niveau de conflit, des pièces disponibles et de la juridiction. Une estimation sérieuse est donnée après lecture du dossier.",
          },
          {
            question: "Puis-je agir depuis l'étranger ?",
            answer:
              "Oui. Le cabinet accompagne les clients à distance avec préparation des actes et représentation locale quand le dossier le permet.",
          },
          {
            question: "Comment renforcer une demande de garde ?",
            answer:
              "Il faut un dossier prouvant la stabilité, les besoins de l'enfant et les ressources réelles de chaque partie.",
          },
        ],
        relatedTitle: "Ressources à consulter ensuite",
        relatedLinks: [
          {
            path: "/avocat-divorce-tunisie",
            label: "Guide divorce Tunisie",
            description: "Une page ciblée sur le divorce, la garde et l'exécution.",
          },
          {
            path: familyArticlePath(),
            label: "Article sur la garde partagée",
            description: "Une analyse juridique reliée aux recherches familiales.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Demander une consultation",
            description: "Pour obtenir un diagnostic rapide et un plan d'action.",
          },
        ],
        primaryCta: "Demander une consultation",
        secondaryCta: "Voir le guide divorce",
      },
      en: {
        key: "family",
        eyebrow: "Kairouan . Tunis . Family law",
        title: "Family law attorney in Tunisia",
        lede:
          "Divorce, child custody, alimony, filiation and succession support with a clear legal strategy and disciplined follow-through.",
        introTitle: "Useful direction from the first consultation",
        intro:
          "Family disputes combine urgency, emotion and long-term consequences. The firm builds a practical plan: what to gather, which procedure to choose, whether urgent protection is needed and how to move the file efficiently.",
        highlightsTitle: "Frequent matters handled",
        highlights: [
          "Amicable and contentious divorce matters with practical planning.",
          "Child custody, visitation, support and enforcement of judgments.",
          "Succession, co-ownership and inheritance deadlock matters.",
        ],
        processTitle: "How the case is handled",
        process: [
          {
            title: "1. File review",
            description:
              "The facts, family priorities and available proof are reviewed carefully.",
          },
          {
            title: "2. Procedure strategy",
            description:
              "The firm chooses with you between negotiation, urgent relief and litigation.",
          },
          {
            title: "3. Follow-through",
            description:
              "Hearings, deadlines and enforcement steps are tracked until the result becomes effective.",
          },
        ],
        documentsTitle: "Documents worth preparing",
        documents: [
          "Civil-status records, prior judgments or existing agreements.",
          "Proof of income, expenses and children's needs.",
          "Messages and documents that show family circumstances clearly.",
        ],
        faqTitle: "Frequently asked questions",
        faqs: [
          {
            question: "How long can a divorce take in Tunisia?",
            answer:
              "It depends on the level of conflict, the evidence available and the court calendar. A realistic estimate is given after the file review.",
          },
          {
            question: "Can I start the matter from abroad?",
            answer:
              "Yes. Remote support is possible with local representation and document preparation when needed.",
          },
          {
            question: "How do you strengthen a custody claim?",
            answer:
              "The file needs evidence of stability, the child's needs and the practical resources of each parent.",
          },
        ],
        relatedTitle: "Recommended next resources",
        relatedLinks: [
          {
            path: "/avocat-divorce-tunisie",
            label: "Divorce lawyer Tunisia guide",
            description: "A focused page on divorce strategy, custody and enforcement.",
          },
          {
            path: familyArticlePath(),
            label: "Shared custody article",
            description: "A legal article tied to a high-intent family search topic.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Request a consultation",
            description: "For a fast diagnosis and a clear action plan.",
          },
        ],
        primaryCta: "Request a consultation",
        secondaryCta: "View the divorce guide",
      },
      ar: {
        key: "family",
        eyebrow: "القيروان . تونس . قانون الاسرة",
        title: "محامية قانون الاسرة في تونس",
        lede:
          "مرافقة قانونية في الطلاق والحضانة والنفقة والنسب والميراث مع خطة واضحة ومتابعة دقيقة من بداية الملف الى تنفيذه.",
        introTitle: "توجيه عملي من اول استشارة",
        intro:
          "ملفات الاسرة تجمع بين الاستعجال والجانب الانساني والاثر الطويل على الحياة اليومية. يتم بناء خطة واضحة: الوثائق المطلوبة، المسار الانسب، اجراءات الحماية عند الحاجة والجدول المتوقع لكل مرحلة.",
        highlightsTitle: "اكثر الملفات تداولا",
        highlights: [
          "الطلاق الرضائي او القضائي وتنظيم اثاره العملية.",
          "الحضانة والزيارة والنفقة وتنفيذ الاحكام العائلية.",
          "الميراث والقسمة وانهاء وضعيات الشيوع والخلافات بين الورثة.",
        ],
        processTitle: "كيف تتم متابعة الملف",
        process: [
          {
            title: "1. تقييم الملف",
            description:
              "يتم تحليل الوقائع والاولويات والوثائق المتوفرة لتحديد مستوى الخطر والهدف العملي.",
          },
          {
            title: "2. اختيار المسار",
            description:
              "يتم تحديد ما اذا كان الانسب هو التفاوض او طلب اجراءات عاجلة او مباشرة الدعوى.",
          },
          {
            title: "3. المتابعة والتنفيذ",
            description:
              "يتم تتبع الجلسات والاجال وكل خطوة لازمة الى غاية صدور القرار وتنفيذه.",
          },
        ],
        documentsTitle: "وثائق مفيدة قبل الموعد",
        documents: [
          "وثائق الحالة المدنية والاحكام السابقة او الاتفاقيات الموجودة.",
          "اثبات الدخل والمصاريف وحاجيات الاطفال.",
          "المراسلات وكل ما يساعد على اثبات وضعية العائلة.",
        ],
        faqTitle: "اسئلة متكررة",
        faqs: [
          {
            question: "كم يمكن ان تستغرق قضية الطلاق في تونس؟",
            answer:
              "المدة تختلف حسب درجة النزاع والوثائق المتوفرة ورزنامة المحكمة. يتم تقديم تقدير واقعي بعد دراسة الملف.",
          },
          {
            question: "هل يمكن مباشرة الملف من الخارج؟",
            answer:
              "نعم. يمكن مرافقة الحريف عن بعد مع اعداد الوثائق والانابة القانونية المحلية عند الحاجة.",
          },
          {
            question: "كيف يتم دعم طلب الحضانة؟",
            answer:
              "يجب تكوين ملف يثبت الاستقرار وحاجيات الطفل والموارد العملية لكل طرف.",
          },
        ],
        relatedTitle: "روابط مفيدة بعد هذه الصفحة",
        relatedLinks: [
          {
            path: "/avocat-divorce-tunisie",
            label: "دليل الطلاق في تونس",
            description: "صفحة اكثر تخصيصا حول الطلاق والحضانة وتنفيذ الاحكام.",
          },
          {
            path: familyArticlePath(),
            label: "مقال حول الحضانة المشتركة",
            description: "مقال قانوني مرتبط باكثر المواضيع العائلية بحثا.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "طلب استشارة قانونية",
            description: "للحصول على تشخيص سريع وخطة عمل مناسبة.",
          },
        ],
        primaryCta: "طلب استشارة قانونية",
        secondaryCta: "عرض دليل الطلاق",
      },
    },
  },
  business: {
    path: "/services/droit-des-affaires",
    localized: {
      fr: {
        key: "business",
        eyebrow: "Kairouan . Tunis . Droit des affaires",
        title: "Avocat en droit des affaires en Tunisie",
        lede:
          "Création de société, contrats, prévention du risque et contentieux commercial pour dirigeants, investisseurs et PME.",
        introTitle: "Un cadre juridique qui soutient la croissance",
        intro:
          "Le droit des affaires ne sert pas seulement à réagir après un conflit. Le cabinet aide aussi à structurer l'activité, sécuriser les engagements, clarifier la gouvernance et rendre les litiges plus maîtrisables.",
        highlightsTitle: "Interventions à forte valeur",
        highlights: [
          "Constitution de sociétés, pactes et organisation de la gouvernance.",
          "Rédaction et relecture de contrats commerciaux et accords stratégiques.",
          "Recouvrement, rupture contractuelle et litiges entre associés.",
        ],
        processTitle: "Méthode de travail",
        process: [
          {
            title: "1. Lecture économique du dossier",
            description:
              "Le cabinet identifie l'objectif réel, le risque financier et les clauses décisives.",
          },
          {
            title: "2. Architecture juridique",
            description:
              "Les actes utiles sont rédigés ou renégociés pour protéger l'activité et réduire le flou.",
          },
          {
            title: "3. Résolution ou défense",
            description:
              "Si le conflit est ouvert, le dossier est préparé pour négocier fort ou agir en justice.",
          },
        ],
        documentsTitle: "Éléments utiles à réunir",
        documents: [
          "Statuts, extrait d'immatriculation, pactes et délégations existantes.",
          "Contrats, bons de commande, factures et mises en demeure.",
          "Tout document montrant les flux financiers, obligations et manquements.",
        ],
        faqTitle: "Questions fréquentes",
        faqs: [
          {
            question: "Le cabinet accompagne-t-il les PME et les fondateurs ?",
            answer:
              "Oui. L'approche est adaptée à la taille de l'entreprise, à son cycle de croissance et au niveau de risque.",
          },
          {
            question: "Quand faut-il faire relire un contrat ?",
            answer:
              "Avant signature idéalement, mais aussi avant renouvellement, rupture ou exécution difficile.",
          },
          {
            question: "Que faire face à un impayé important ?",
            answer:
              "Il faut consolider les preuves, choisir le bon levier de mise en demeure et engager vite la voie de recouvrement utile.",
          },
        ],
        relatedTitle: "Ressources à consulter ensuite",
        relatedLinks: [
          {
            path: "/avocat-affaires-tunisie",
            label: "Guide avocat affaires Tunisie",
            description: "Une page ciblée sur les contrats, sociétés et litiges commerciaux.",
          },
          {
            path: businessArticlePath(),
            label: "Article sur le code des changes",
            description: "Un contenu utile pour dirigeants et investisseurs.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Demander une consultation",
            description: "Pour cadrer rapidement une décision, un contrat ou une procédure.",
          },
        ],
        primaryCta: "Demander une consultation",
        secondaryCta: "Voir le guide affaires",
      },
      en: {
        key: "business",
        eyebrow: "Kairouan . Tunis . Business law",
        title: "Business law attorney in Tunisia",
        lede:
          "Company formation, contracts, risk prevention and commercial disputes for founders, investors and SMEs operating in Tunisia.",
        introTitle: "Legal structure that supports growth",
        intro:
          "Business law should not only be used after a dispute appears. The firm also helps clients structure operations upstream, secure commitments, clarify governance and keep conflicts more controllable.",
        highlightsTitle: "High-impact support areas",
        highlights: [
          "Company setup, shareholder arrangements and governance structuring.",
          "Drafting and review of commercial contracts and strategic agreements.",
          "Debt recovery, contractual termination and shareholder disputes.",
        ],
        processTitle: "How the work is approached",
        process: [
          {
            title: "1. Business-risk review",
            description:
              "The firm identifies the commercial objective, the financial exposure and the clauses that matter most.",
          },
          {
            title: "2. Legal architecture",
            description:
              "Documents are drafted or renegotiated to protect the business and reduce grey areas.",
          },
          {
            title: "3. Resolution or litigation",
            description:
              "If the conflict is active, the file is prepared either for strong negotiation or court action.",
          },
        ],
        documentsTitle: "Documents worth gathering",
        documents: [
          "Articles of association, registration extract and shareholder arrangements.",
          "Contracts, purchase orders, invoices and formal notices.",
          "Any record showing cash flow, obligations or breach.",
        ],
        faqTitle: "Frequently asked questions",
        faqs: [
          {
            question: "Do you advise SMEs and founders?",
            answer:
              "Yes. The approach is scaled to the company's size, growth stage and risk profile.",
          },
          {
            question: "When should a contract be reviewed?",
            answer:
              "Ideally before signature, but also before renewal, termination or difficult performance.",
          },
          {
            question: "What should I do about a major unpaid invoice?",
            answer:
              "The priority is to secure evidence, choose the right demand route and move quickly on recovery.",
          },
        ],
        relatedTitle: "Recommended next resources",
        relatedLinks: [
          {
            path: "/avocat-affaires-tunisie",
            label: "Business lawyer Tunisia guide",
            description: "A focused page on contracts, companies and commercial disputes.",
          },
          {
            path: businessArticlePath(),
            label: "Foreign exchange code article",
            description: "Useful reading for companies and investors dealing with compliance.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Request a consultation",
            description: "For fast direction on a contract, company issue or recovery strategy.",
          },
        ],
        primaryCta: "Request a consultation",
        secondaryCta: "View the business guide",
      },
      ar: {
        key: "business",
        eyebrow: "القيروان . تونس . قانون الاعمال",
        title: "محامية قانون الاعمال في تونس",
        lede:
          "مرافقة قانونية لتاسيس الشركات وصياغة العقود والوقاية من المخاطر ومعالجة النزاعات التجارية لفائدة المؤسسات والمستثمرين.",
        introTitle: "تاطير قانوني يدعم النمو",
        intro:
          "قانون الاعمال لا يقتصر على التدخل بعد ظهور النزاع. الهدف ايضا هو تنظيم النشاط مسبقا وحماية الالتزامات وتوضيح الحوكمة وجعل كل خلاف محتمل قابلا للسيطرة.",
        highlightsTitle: "ابرز مجالات التدخل",
        highlights: [
          "تاسيس الشركات وتنظيم العلاقة بين الشركاء والحوكمة الداخلية.",
          "صياغة ومراجعة العقود التجارية والاتفاقات الاستراتيجية.",
          "استخلاص الديون وفسخ العقود والنزاعات بين الشركاء.",
        ],
        processTitle: "منهجية العمل",
        process: [
          {
            title: "1. قراءة المخاطر",
            description:
              "يتم تحديد الهدف التجاري والخطر المالي والبنود او الادلة التي سيكون لها اثر حاسم.",
          },
          {
            title: "2. هيكلة قانونية",
            description:
              "يتم اعداد او مراجعة العقود والوثائق بما يحمي النشاط ويقلل من مناطق الغموض.",
          },
          {
            title: "3. تفاوض او تقاض",
            description:
              "عند قيام النزاع يتم تجهيز الملف للتفاوض القوي او للتقاضي وفق زاوية واضحة.",
          },
        ],
        documentsTitle: "وثائق مفيدة قبل الانطلاق",
        documents: [
          "القوانين الاساسية والسجل التجاري والاتفاقيات بين الشركاء.",
          "العقود والفواتير وطلبات الشراء والتنابيه القانونية.",
          "كل ما يثبت التدفقات المالية والالتزامات والاخلالات.",
        ],
        faqTitle: "اسئلة متكررة",
        faqs: [
          {
            question: "هل تتم مرافقة المؤسسات الصغرى والمتوسطة؟",
            answer:
              "نعم. يتم تكييف العمل القانوني حسب حجم المؤسسة ومرحلة نموها ومستوى المخاطر.",
          },
          {
            question: "متى يجب عرض العقد على محام؟",
            answer:
              "يفضل قبل الامضاء، ولكن ايضا قبل التجديد او الفسخ او عند صعوبة التنفيذ.",
          },
          {
            question: "ماذا افعل عند عدم خلاص مبلغ مهم؟",
            answer:
              "يجب تثبيت وسائل الاثبات واختيار وسيلة التنبيه المناسبة والتحرك بسرعة نحو اجراء الاستخلاص.",
          },
        ],
        relatedTitle: "روابط مفيدة بعد هذه الصفحة",
        relatedLinks: [
          {
            path: "/avocat-affaires-tunisie",
            label: "دليل محامي الاعمال في تونس",
            description: "صفحة مركزة حول العقود والشركات والنزاعات التجارية.",
          },
          {
            path: businessArticlePath(),
            label: "مقال حول مجلة الصرف",
            description: "محتوى مفيد للمؤسسات والمستثمرين.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "طلب استشارة قانونية",
            description: "لتاطير سريع لقرار تجاري او عقد او ملف استخلاص.",
          },
        ],
        primaryCta: "طلب استشارة قانونية",
        secondaryCta: "عرض دليل الاعمال",
      },
    },
  },
  realEstate: {
    path: "/services/droit-immobilier",
    localized: {
      fr: {
        key: "realEstate",
        eyebrow: "Kairouan . Tunis . Droit immobilier",
        title: "Avocat en droit immobilier en Tunisie",
        lede:
          "Audit foncier, contrats, baux et contentieux pour particuliers, héritiers, investisseurs et entreprises en Tunisie.",
        introTitle: "Sécuriser avant de signer, réagir vite en cas de blocage",
        intro:
          "Les dossiers immobiliers deviennent coûteux quand la vérification arrive trop tard. Le cabinet intervient avant l'achat, pendant la négociation ou au moment du litige pour vérifier les titres, relire les clauses et protéger la valeur économique du bien.",
        highlightsTitle: "Opérations et litiges traités",
        highlights: [
          "Achat, vente, promesse, vérification de titre et audit juridique du bien.",
          "Baux civils et commerciaux, impayés, renouvellement et sortie du locataire.",
          "Bornage, servitudes, indivision, empiétement et contentieux de propriété.",
        ],
        processTitle: "Comment le cabinet intervient",
        process: [
          {
            title: "1. Vérification du dossier",
            description:
              "Analyse des titres, de la situation du bien et des points de blocage cachés.",
          },
          {
            title: "2. Sécurisation des actes",
            description:
              "Les promesses, ventes, baux ou courriers utiles sont ajustés pour protéger vos droits.",
          },
          {
            title: "3. Défense et exécution",
            description:
              "En cas de conflit, le dossier est porté vers la solution la plus rapide entre négociation, expertise ou contentieux.",
          },
        ],
        documentsTitle: "Documents utiles à réunir",
        documents: [
          "Titre foncier, contrats, promesses, baux, quittances et plans.",
          "Correspondances avec le vendeur, le locataire ou l'administration.",
          "Tout élément prouvant paiements, occupation, bornage ou trouble subi.",
        ],
        faqTitle: "Questions fréquentes",
        faqs: [
          {
            question: "Pourquoi faire vérifier un bien avant de signer ?",
            answer:
              "Parce qu'un audit juridique peut révéler des charges, des incohérences de titre ou des risques de litige beaucoup plus coûteux après signature.",
          },
          {
            question: "Le cabinet gère-t-il les baux commerciaux ?",
            answer:
              "Oui. Rédaction, renégociation, impayés, renouvellement, congé et défense contentieuse font partie des interventions fréquentes.",
          },
          {
            question: "Que faire si un terrain ou un bien est bloque ?",
            answer:
              "Il faut vérifier les titres, figer les preuves utiles et choisir rapidement entre voie amiable, expertise ou action judiciaire.",
          },
        ],
        relatedTitle: "Ressources à consulter ensuite",
        relatedLinks: [
          {
            path: "/avocat-immobilier-tunisie",
            label: "Guide avocat immobilier Tunisie",
            description: "Une page ciblée sur la vérification foncière et les litiges.",
          },
          {
            path: realEstateArticlePath(),
            label: "Article sur l'immobilier des étrangers",
            description: "Une analyse utile pour investisseurs et familles.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Demander une consultation",
            description: "Pour relire un acte, vérifier un titre ou cadrer une stratégie.",
          },
        ],
        primaryCta: "Demander une consultation",
        secondaryCta: "Voir le guide immobilier",
      },
      en: {
        key: "realEstate",
        eyebrow: "Kairouan . Tunis . Real estate law",
        title: "Real estate lawyer in Tunisia",
        lede:
          "Title review, property contracts, leases and litigation support for individuals, heirs, investors and companies in Tunisia.",
        introTitle: "Secure the deal before signature, react fast when a file is blocked",
        intro:
          "Property matters become expensive when verification comes too late. The firm works before purchase, during negotiation or in litigation to review title, tighten clauses and protect the asset's economic value.",
        highlightsTitle: "Transactions and disputes handled",
        highlights: [
          "Purchase, sale, preliminary agreements, title verification and legal due diligence.",
          "Residential and commercial leases, unpaid rent, renewal and exit disputes.",
          "Boundary issues, easements, co-ownership disputes and title litigation.",
        ],
        processTitle: "How the firm intervenes",
        process: [
          {
            title: "1. File verification",
            description:
              "Review of title, property status, permits and hidden blocking points.",
          },
          {
            title: "2. Document security",
            description:
              "Preliminary agreements, deeds, leases and formal letters are adjusted to protect your rights.",
          },
          {
            title: "3. Resolution path",
            description:
              "If conflict emerges, the file moves toward the fastest viable solution between negotiation, expert review or litigation.",
          },
        ],
        documentsTitle: "Documents worth gathering",
        documents: [
          "Title deed, contracts, preliminary agreements, leases, receipts and plans.",
          "Correspondence with the seller, tenant or administration.",
          "Any record proving payment, occupation, boundary issue or damage suffered.",
        ],
        faqTitle: "Frequently asked questions",
        faqs: [
          {
            question: "Why review a property file before signing?",
            answer:
              "Because legal due diligence may reveal charges, title inconsistencies or litigation risks that become much more expensive after signature.",
          },
          {
            question: "Do you handle commercial leases?",
            answer:
              "Yes. Drafting, renegotiation, unpaid rent, renewal, termination notices and litigation are common instructions.",
          },
          {
            question: "What if a property or land file is blocked?",
            answer:
              "The priority is to verify title, secure the evidence and choose the right mix of negotiation, expert review or court action quickly.",
          },
        ],
        relatedTitle: "Recommended next resources",
        relatedLinks: [
          {
            path: "/avocat-immobilier-tunisie",
            label: "Real estate lawyer Tunisia guide",
            description: "A focused page on title verification, contracts and disputes.",
          },
          {
            path: realEstateArticlePath(),
            label: "Foreign property rules article",
            description: "Useful reading for investors and families dealing with acquisition.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Request a consultation",
            description: "For deed review, title verification or a litigation strategy.",
          },
        ],
        primaryCta: "Request a consultation",
        secondaryCta: "View the real estate guide",
      },
      ar: {
        key: "realEstate",
        eyebrow: "القيروان . تونس . القانون العقاري",
        title: "محامية في القانون العقاري في تونس",
        lede:
          "تدقيق الملكية وصياغة العقود والكراء والتقاضي العقاري لفائدة الافراد والورثة والمستثمرين والمؤسسات.",
        introTitle: "تامين العملية قبل الامضاء والتدخل السريع عند التعطيل",
        intro:
          "الملفات العقارية تصبح مكلفة عندما يتم التثبت بعد فوات الاوان. يتم التدخل قبل الشراء او اثناء التفاوض او عند النزاع لتدقيق السندات ومراجعة البنود وحماية القيمة المالية للعقار.",
        highlightsTitle: "اهم العمليات والنزاعات المعالجة",
        highlights: [
          "الشراء والبيع والوعد بالبيع وتدقيق السندات والوضعية القانونية للعقار.",
          "عقود الكراء المدني والتجاري وعدم الخلاص والتجديد وانهاء العلاقة الكرائية.",
          "الحدود والارتفاقات والشيوع والتداخل ونزاعات الملكية.",
        ],
        processTitle: "كيف يتم التدخل",
        process: [
          {
            title: "1. التثبت من الملف",
            description:
              "تحليل السندات ووضعية العقار والتراخيص وكل نقاط التعطيل الخفية.",
          },
          {
            title: "2. تامين العقود",
            description:
              "يتم تعديل الوعود والعقود والكراءات والتنابيه القانونية بما يحمي حقوقك.",
          },
          {
            title: "3. الحل او التقاضي",
            description:
              "عند قيام النزاع يتم اختيار اسرع مسار عملي بين التفاوض او الخبرة او الدعوى القضائية.",
          },
        ],
        documentsTitle: "وثائق مفيدة قبل المعاينة",
        documents: [
          "السند العقاري والعقود والوعود بالبيع وعقود الكراء والوصولات.",
          "المراسلات مع البائع او المتسوغ او الادارة.",
          "كل ما يثبت الدفع او الاشغال او الحدود او الضرر الحاصل.",
        ],
        faqTitle: "اسئلة متكررة",
        faqs: [
          {
            question: "لماذا يجب تدقيق الملف العقاري قبل الامضاء؟",
            answer:
              "لان التدقيق القانوني قد يكشف تحملا او خللا في السند او خطرا نزاعيا تصبح كلفته اكبر بكثير بعد الامضاء.",
          },
          {
            question: "هل تتم متابعة الكراءات التجارية؟",
            answer:
              "نعم. الصياغة والمراجعة وعدم الخلاص والتجديد والاعلام بالخروج والتقاضي تدخل ضمن الاعمال المتكررة.",
          },
          {
            question: "ماذا افعل عند تعطل ملف عقار او ارض؟",
            answer:
              "يجب التثبت من السندات وتثبيت وسائل الاثبات واختيار المسار الانسب بسرعة بين الصلح او الخبرة او الدعوى.",
          },
        ],
        relatedTitle: "روابط مفيدة بعد هذه الصفحة",
        relatedLinks: [
          {
            path: "/avocat-immobilier-tunisie",
            label: "دليل المحامي العقاري في تونس",
            description: "صفحة اكثر تخصيصا حول تدقيق الملكية والعقود والنزاعات.",
          },
          {
            path: realEstateArticlePath(),
            label: "مقال حول عقارات الاجانب",
            description: "محتوى مفيد للمستثمرين والعائلات المعنية بالشراء.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "طلب استشارة قانونية",
            description: "لتدقيق عقد او سند او وضع استراتيجية لملف عقاري.",
          },
        ],
        primaryCta: "طلب استشارة قانونية",
        secondaryCta: "عرض الدليل العقاري",
      },
    },
  },
  criminal: {
    path: "/services/droit-penal",
    localized: {
      fr: {
        key: "criminal",
        eyebrow: "Kairouan . Tunis . Droit pénal",
        title: "Avocat en droit pénal en Tunisie",
        lede:
          "Défense pénale en garde à vue, instruction et procès. Une stratégie claire et une vraie préparation du dossier, à Kairouan, à Tunis et à distance.",
        introTitle: "Une présence ferme dès le premier jour",
        intro:
          "Le droit pénal mêle urgence, enjeux personnels lourds et conséquences durables. Le cabinet intervient dès la garde à vue, prépare votre défense, vous accompagne devant le juge d'instruction et plaide à l'audience. Nous protégeons vos droits à chaque étape, sans jugement et avec une parole claire.",
        highlightsTitle: "Situations fréquentes accompagnées",
        highlights: [
          "Défense devant le tribunal cantonal, le tribunal de première instance, la cour d'appel et la cour de cassation.",
          "Assistance immédiate en garde à vue, audition et confrontation.",
          "Constitution de partie civile pour les victimes (violences, vol, escroquerie, accidents).",
          "Délits financiers, abus de confiance et infractions liées à l'entreprise.",
          "Violences conjugales et infractions touchant la famille avec un suivi coordonné.",
        ],
        processTitle: "Comment nous travaillons votre dossier",
        process: [
          {
            title: "Premier contact urgent",
            description:
              "Évaluation rapide de la situation, vérification de la procédure et de vos droits, déplacement immédiat si nécessaire.",
          },
          {
            title: "Stratégie de défense",
            description:
              "Analyse des pièces, qualification juridique des faits, choix de la ligne de défense et préparation des témoins.",
          },
          {
            title: "Représentation à l'audience",
            description:
              "Plaidoirie ferme et respectueuse, exploitation des nullités de procédure et des éléments à décharge.",
          },
          {
            title: "Suites du jugement",
            description:
              "Appel ou pourvoi en cassation si nécessaire, suivi de l'exécution de la peine et des aménagements possibles.",
          },
        ],
        documentsTitle: "Documents utiles à préparer",
        documents: [
          "Convocation, procès-verbal ou mandat reçu.",
          "Carte d'identité ou passeport.",
          "Pièces relatives aux faits (échanges, factures, témoignages, photographies).",
          "Documents médicaux en cas de violences subies.",
        ],
        faqTitle: "Questions fréquentes",
        faqs: [
          {
            question: "Puis-je être assisté dès la garde à vue ?",
            answer:
              "Oui. Le droit tunisien permet l'assistance d'un avocat dès le début de la garde à vue. Le cabinet peut intervenir en urgence pour protéger vos droits dès la première audition.",
          },
          {
            question: "Que faire si je reçois une convocation ?",
            answer:
              "Ne vous présentez jamais seul. Contactez le cabinet en amont pour préparer l'audition, anticiper les suites et éviter les déclarations qui pourraient vous nuire.",
          },
          {
            question: "Puis-je me constituer partie civile en tant que victime ?",
            answer:
              "Oui. Le cabinet vous accompagne pour faire valoir vos droits et obtenir réparation, que ce soit devant le juge d'instruction ou lors du procès au fond.",
          },
        ],
        relatedTitle: "Pages utiles",
        relatedLinks: [
          {
            path: "/services/droit-de-la-famille",
            label: "Droit de la famille",
            description: "Violences conjugales et protection des proches.",
          },
          {
            path: "/services/droit-des-affaires",
            label: "Droit des affaires",
            description: "Abus de confiance et délits liés à l'entreprise.",
          },
          {
            path: "/contact",
            label: "Demander une consultation",
            description: "Premier contact confidentiel et rapide.",
          },
        ],
        primaryCta: "Demander une consultation",
        secondaryCta: "Contact WhatsApp",
      },
      en: {
        key: "criminal",
        eyebrow: "Kairouan . Tunis . Criminal law",
        title: "Criminal lawyer in Tunisia",
        lede:
          "Criminal defence at police custody, investigation and trial. Clear strategy and a properly prepared file, in Kairouan, Tunis and remotely.",
        introTitle: "A firm presence from day one",
        intro:
          "Criminal proceedings combine urgency, personal stakes and lasting consequences. The firm steps in at the police-custody stage, builds your defence, supports you before the investigating judge and pleads at trial. We protect your rights at every step, without judgment and with a clear voice.",
        highlightsTitle: "Common matters handled",
        highlights: [
          "Defence before cantonal courts, the court of first instance, court of appeal and court of cassation.",
          "Immediate assistance during police custody, questioning and confrontation.",
          "Civil-party representation for victims (violence, theft, fraud, accidents).",
          "Financial offences, breach of trust and corporate-related charges.",
          "Domestic violence and family-related offences with coordinated follow-up.",
        ],
        processTitle: "How we work your case",
        process: [
          {
            title: "Urgent first contact",
            description:
              "Rapid assessment of the situation, verification of procedure and your rights, immediate attendance if needed.",
          },
          {
            title: "Defence strategy",
            description:
              "Review of the file, legal qualification of the facts, choice of defence line and witness preparation.",
          },
          {
            title: "Court representation",
            description:
              "Firm and respectful pleading, use of procedural nullities and any exculpatory evidence.",
          },
          {
            title: "Post-judgment",
            description:
              "Appeal or cassation if needed, follow-up on sentence enforcement and possible adjustments.",
          },
        ],
        documentsTitle: "Documents to prepare",
        documents: [
          "Summons, police report or warrant received.",
          "ID card or passport.",
          "Documents relating to the facts (messages, invoices, witnesses, photos).",
          "Medical reports in case of violence suffered.",
        ],
        faqTitle: "Frequently asked questions",
        faqs: [
          {
            question: "Can I have a lawyer present from police custody?",
            answer:
              "Yes. Tunisian law allows counsel from the beginning of police custody. The firm can intervene urgently to protect your rights from the first questioning.",
          },
          {
            question: "What should I do if I receive a summons?",
            answer:
              "Never appear alone. Contact the firm in advance to prepare the hearing, anticipate the next steps and avoid statements that could harm you.",
          },
          {
            question: "Can I act as a civil party as a victim?",
            answer:
              "Yes. The firm supports you in asserting your rights and obtaining compensation, whether before the investigating judge or at the trial on the merits.",
          },
        ],
        relatedTitle: "Useful pages",
        relatedLinks: [
          {
            path: "/services/droit-de-la-famille",
            label: "Family law",
            description: "Domestic violence and protection of loved ones.",
          },
          {
            path: "/services/droit-des-affaires",
            label: "Business law",
            description: "Breach of trust and corporate-related offences.",
          },
          {
            path: "/contact",
            label: "Request a consultation",
            description: "Confidential first contact, handled quickly.",
          },
        ],
        primaryCta: "Request a consultation",
        secondaryCta: "WhatsApp contact",
      },
      ar: {
        key: "criminal",
        eyebrow: "القيروان . تونس . القانون الجزائي",
        title: "محامي قانون جزائي في تونس",
        lede:
          "دفاع جزائي في طور الاحتفاظ والتحقيق والمحاكمة. استراتيجية واضحة وإعداد دقيق للملف في القيروان وتونس وعن بعد.",
        introTitle: "حضور حازم منذ اليوم الأول",
        intro:
          "القانون الجزائي يجمع بين الاستعجال والرهانات الشخصية الثقيلة والعواقب الدائمة. يتدخل المكتب منذ مرحلة الاحتفاظ، ويبني الدفاع، ويرافقك أمام قاضي التحقيق ويترافع في الجلسة. نحمي حقوقك في كل مرحلة، بدون أحكام مسبقة وبخطاب واضح.",
        highlightsTitle: "ملفات مرافقة شائعة",
        highlights: [
          "الدفاع أمام محكمة الناحية والمحكمة الابتدائية ومحكمة الاستئناف ومحكمة التعقيب.",
          "مرافقة فورية في طور الاحتفاظ والاستنطاق والمواجهة.",
          "القيام بالحق الشخصي للضحايا (عنف، سرقة، نصب، حوادث).",
          "جرائم مالية وخيانة أمانة وملفات تتعلق بالمؤسسة.",
          "العنف الزوجي والجرائم المتصلة بالأسرة بمتابعة منسقة.",
        ],
        processTitle: "كيف نعالج ملفك",
        process: [
          {
            title: "اتصال أول عاجل",
            description:
              "تقييم سريع للوضعية، التثبت من الإجراءات وحقوقك، التنقل الفوري عند الاقتضاء.",
          },
          {
            title: "استراتيجية الدفاع",
            description:
              "تحليل الوثائق، التكييف القانوني للوقائع، اختيار خط الدفاع وإعداد الشهود.",
          },
          {
            title: "الترافع في الجلسة",
            description:
              "ترافع حازم ومحترم، استثمار البطلانات الإجرائية والعناصر التي في صالحك.",
          },
          {
            title: "ما بعد الحكم",
            description:
              "الاستئناف أو التعقيب عند الاقتضاء، متابعة تنفيذ العقوبة والتسهيلات الممكنة.",
          },
        ],
        documentsTitle: "وثائق مفيدة للتحضير",
        documents: [
          "الاستدعاء أو محضر البحث أو بطاقة الجلب المتلقاة.",
          "بطاقة التعريف الوطنية أو جواز السفر.",
          "الوثائق المتعلقة بالوقائع (مراسلات، فواتير، شهادات، صور).",
          "الشهائد الطبية في حال التعرض للعنف.",
        ],
        faqTitle: "أسئلة متكررة",
        faqs: [
          {
            question: "هل يمكن الاستعانة بمحامي منذ بداية الاحتفاظ؟",
            answer:
              "نعم. يضمن القانون التونسي حضور المحامي منذ بداية الاحتفاظ. يمكن للمكتب التدخل عاجلا لحماية حقوقك من أول استنطاق.",
          },
          {
            question: "ماذا أفعل إذا تلقيت استدعاء؟",
            answer:
              "لا تحضر بمفردك. اتصل بالمكتب مسبقا لتحضير الاستنطاق واستباق التبعات وتفادي تصريحات قد تضر بك.",
          },
          {
            question: "هل يمكنني القيام بالحق الشخصي بصفتي ضحية؟",
            answer:
              "نعم. يرافقك المكتب للمطالبة بحقوقك والحصول على التعويض، أمام قاضي التحقيق أو في المحاكمة في الأصل.",
          },
        ],
        relatedTitle: "صفحات مفيدة",
        relatedLinks: [
          {
            path: "/services/droit-de-la-famille",
            label: "قانون الأسرة",
            description: "العنف الزوجي وحماية الأقارب.",
          },
          {
            path: "/services/droit-des-affaires",
            label: "قانون الأعمال",
            description: "خيانة الأمانة والجرائم المتعلقة بالمؤسسة.",
          },
          {
            path: "/contact",
            label: "طلب استشارة قانونية",
            description: "اتصال أول سري وسريع.",
          },
        ],
        primaryCta: "طلب استشارة قانونية",
        secondaryCta: "واتساب",
      },
    },
  },
};

export function getServiceDetailByKey(
  key: ServiceDetailKey,
  locale: string
): ServiceDetailLocalized {
  return serviceDetails[key].localized[resolveLocale(locale)];
}

export function getServiceDetailByPath(path: string, locale: string) {
  const definition = Object.values(serviceDetails).find(
    (service) => service.path === path
  );

  if (!definition) {
    return null;
  }

  return definition.localized[resolveLocale(locale)];
}

export function getServiceDetailFaqs(path: string, locale: string) {
  return getServiceDetailByPath(path, locale)?.faqs ?? [];
}

export const serviceDetailPaths = Object.values(serviceDetails).map(
  (service) => service.path
);
