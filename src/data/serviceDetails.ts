export type SiteLocale = "fr" | "en" | "ar";

export type ServiceDetailKey = "family" | "business" | "realEstate";

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

function familyArticlePath(locale: SiteLocale) {
  if (locale === "en") return "/actualites/shared-custody-reform-tunisia";
  if (locale === "ar") return "/actualites/hadhanat-mushtaraka-tunis";
  return "/actualites/reforme-famille-garde-partagee-tunisie";
}

function businessArticlePath(locale: SiteLocale) {
  if (locale === "en") return "/actualites/new-foreign-exchange-code-tunisia-2026";
  if (locale === "ar") return "/actualites/qanoon-alsarf-aljadid-tunis-2026";
  return "/actualites/nouveau-code-des-changes-tunisie-2026";
}

function realEstateArticlePath(locale: SiteLocale) {
  if (locale === "en") return "/actualites/property-law-foreigners-tunisia-2026";
  if (locale === "ar") return "/actualites/aqaraat-ajanib-tunis-2026";
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
          "Divorce, garde, pension, filiation et succession avec une strategie claire et une vraie preparation du dossier.",
        introTitle: "Une direction utile des le premier rendez-vous",
        intro:
          "Les conflits familiaux melangent urgence, emotions et consequences durables. Le cabinet construit un plan concret: pieces a reunir, voie procedurale la plus adaptee, mesures de protection si necessaire et calendrier realiste.",
        highlightsTitle: "Situations frequentes accompagnees",
        highlights: [
          "Divorce amiable ou contentieux et organisation des consequences pratiques.",
          "Garde, droit de visite, pension alimentaire et execution des jugements.",
          "Successions, indivisions et blocages entre heritiers.",
        ],
        processTitle: "Comment le dossier avance",
        process: [
          {
            title: "1. Lecture du dossier",
            description:
              "Analyse des faits, des priorites de la famille et des preuves deja disponibles.",
          },
          {
            title: "2. Strategie procedurale",
            description:
              "Choix de la bonne voie entre negotiation, mesures urgentes et action en justice.",
          },
          {
            title: "3. Suivi jusqu'a l'execution",
            description:
              "Chaque audience, delai et formalite utile sont suivis jusqu'au resultat concret.",
          },
        ],
        documentsTitle: "Documents utiles a preparer",
        documents: [
          "Actes d'etat civil, jugement anterieur ou convention deja signee.",
          "Preuves de revenus, charges et besoins des enfants.",
          "Echanges et elements utiles pour etablir la situation familiale.",
        ],
        faqTitle: "Questions frequentes",
        faqs: [
          {
            question: "Combien de temps peut durer un divorce en Tunisie ?",
            answer:
              "Le delai depend du niveau de conflit, des pieces disponibles et de la juridiction. Une estimation serieuse est donnee apres lecture du dossier.",
          },
          {
            question: "Puis-je agir depuis l'etranger ?",
            answer:
              "Oui. Le cabinet accompagne les clients a distance avec preparation des actes et representation locale quand le dossier le permet.",
          },
          {
            question: "Comment renforcer une demande de garde ?",
            answer:
              "Il faut un dossier prouvant la stabilite, les besoins de l'enfant et les ressources reelles de chaque partie.",
          },
        ],
        relatedTitle: "Ressources a consulter ensuite",
        relatedLinks: [
          {
            path: "/avocat-divorce-tunisie",
            label: "Guide divorce Tunisie",
            description: "Une page ciblee sur le divorce, la garde et l'execution.",
          },
          {
            path: familyArticlePath("fr"),
            label: "Article sur la garde partagee",
            description: "Une analyse juridique reliee aux recherches familiales.",
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
            path: familyArticlePath("en"),
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
            path: familyArticlePath("ar"),
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
          "Creation de societe, contrats, prevention du risque et contentieux commercial pour dirigeants, investisseurs et PME.",
        introTitle: "Un cadre juridique qui soutient la croissance",
        intro:
          "Le droit des affaires ne sert pas seulement a reagir apres un conflit. Le cabinet aide aussi a structurer l'activite, securiser les engagements, clarifier la gouvernance et rendre les litiges plus maitrisables.",
        highlightsTitle: "Interventions a forte valeur",
        highlights: [
          "Constitution de societes, pactes et organisation de la gouvernance.",
          "Redaction et relecture de contrats commerciaux et accords strategiques.",
          "Recouvrement, rupture contractuelle et litiges entre associes.",
        ],
        processTitle: "Methode de travail",
        process: [
          {
            title: "1. Lecture economique du dossier",
            description:
              "Le cabinet identifie l'objectif reel, le risque financier et les clauses decisives.",
          },
          {
            title: "2. Architecture juridique",
            description:
              "Les actes utiles sont rediges ou renegocies pour proteger l'activite et reduire le flou.",
          },
          {
            title: "3. Resolution ou defense",
            description:
              "Si le conflit est ouvert, le dossier est prepare pour negocier fort ou agir en justice.",
          },
        ],
        documentsTitle: "Elements utiles a reunir",
        documents: [
          "Statuts, extrait d'immatriculation, pactes et delegations existantes.",
          "Contrats, bons de commande, factures et mises en demeure.",
          "Tout document montrant les flux financiers, obligations et manquements.",
        ],
        faqTitle: "Questions frequentes",
        faqs: [
          {
            question: "Le cabinet accompagne-t-il les PME et les fondateurs ?",
            answer:
              "Oui. L'approche est adaptee a la taille de l'entreprise, a son cycle de croissance et au niveau de risque.",
          },
          {
            question: "Quand faut-il faire relire un contrat ?",
            answer:
              "Avant signature idealement, mais aussi avant renouvellement, rupture ou execution difficile.",
          },
          {
            question: "Que faire face a un impaye important ?",
            answer:
              "Il faut consolider les preuves, choisir le bon levier de mise en demeure et engager vite la voie de recouvrement utile.",
          },
        ],
        relatedTitle: "Ressources a consulter ensuite",
        relatedLinks: [
          {
            path: "/avocat-affaires-tunisie",
            label: "Guide avocat affaires Tunisie",
            description: "Une page ciblee sur les contrats, societes et litiges commerciaux.",
          },
          {
            path: businessArticlePath("fr"),
            label: "Article sur le code des changes",
            description: "Un contenu utile pour dirigeants et investisseurs.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Demander une consultation",
            description: "Pour cadrer rapidement une decision, un contrat ou une procedure.",
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
            path: businessArticlePath("en"),
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
            path: businessArticlePath("ar"),
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
          "Audit foncier, contrats, baux et contentieux pour particuliers, heritiers, investisseurs et entreprises en Tunisie.",
        introTitle: "Securiser avant de signer, reagir vite en cas de blocage",
        intro:
          "Les dossiers immobiliers deviennent couteux quand la verification arrive trop tard. Le cabinet intervient avant l'achat, pendant la negociation ou au moment du litige pour verifier les titres, relire les clauses et proteger la valeur economique du bien.",
        highlightsTitle: "Operations et litiges traites",
        highlights: [
          "Achat, vente, promesse, verification de titre et audit juridique du bien.",
          "Baux civils et commerciaux, impayes, renouvellement et sortie du locataire.",
          "Bornage, servitudes, indivision, empiement et contentieux de propriete.",
        ],
        processTitle: "Comment le cabinet intervient",
        process: [
          {
            title: "1. Verification du dossier",
            description:
              "Analyse des titres, de la situation du bien et des points de blocage caches.",
          },
          {
            title: "2. Securisation des actes",
            description:
              "Les promesses, ventes, baux ou courriers utiles sont ajustes pour proteger vos droits.",
          },
          {
            title: "3. Defense et execution",
            description:
              "En cas de conflit, le dossier est porte vers la solution la plus rapide entre nego, expertise ou contentieux.",
          },
        ],
        documentsTitle: "Documents utiles a reunir",
        documents: [
          "Titre foncier, contrats, promesses, baux, quittances et plans.",
          "Correspondances avec le vendeur, le locataire ou l'administration.",
          "Tout element prouvant paiements, occupation, bornage ou trouble subi.",
        ],
        faqTitle: "Questions frequentes",
        faqs: [
          {
            question: "Pourquoi faire verifier un bien avant de signer ?",
            answer:
              "Parce qu'un audit juridique peut reveler des charges, des incoherences de titre ou des risques de litige beaucoup plus couteux apres signature.",
          },
          {
            question: "Le cabinet gere-t-il les baux commerciaux ?",
            answer:
              "Oui. Redaction, renegociation, impayes, renouvellement, conge et defense contentieuse font partie des interventions frequentes.",
          },
          {
            question: "Que faire si un terrain ou un bien est bloque ?",
            answer:
              "Il faut verifier les titres, figer les preuves utiles et choisir rapidement entre voie amiable, expertise ou action judiciaire.",
          },
        ],
        relatedTitle: "Ressources a consulter ensuite",
        relatedLinks: [
          {
            path: "/avocat-immobilier-tunisie",
            label: "Guide avocat immobilier Tunisie",
            description: "Une page ciblee sur la verification fonciere et les litiges.",
          },
          {
            path: realEstateArticlePath("fr"),
            label: "Article sur l'immobilier des etrangers",
            description: "Une analyse utile pour investisseurs et familles.",
          },
          {
            path: "/consultation-juridique-tunisie",
            label: "Demander une consultation",
            description: "Pour relire un acte, verifier un titre ou cadrer une strategie.",
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
            path: realEstateArticlePath("en"),
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
            path: realEstateArticlePath("ar"),
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
