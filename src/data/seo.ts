export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  structuredData?: Record<string, unknown>;
}

// SEO metadata for each route (French - primary language)
export const seoData: Record<string, SEOData> = {
  "/": {
    title:
      "Maître Haifa Guedhami Alouini | Avocat à Kairouan et Tunis, Tunisie",
    description:
      "Cabinet d'avocat à Kairouan et Tunis. Maître Haifa Guedhami Alouini - Experte en droit civil, pénal, commercial et familial. Consultation juridique professionnelle en Tunisie.",
    keywords:
      "avocat Kairouan, avocat Tunis, avocat Tunisie, cabinet avocat, consultation juridique, droit civil, droit pénal, droit commercial, droit familial",
  },
  "/about": {
    title: "À Propos | Maître Haifa Guedhami Alouini - Avocat Tunisie",
    description:
      "Découvrez le parcours et l'expertise de Maître Haifa Guedhami Alouini, avocate expérimentée basée à Kairouan et Tunis. Formation, expérience et valeurs professionnelles.",
    keywords:
      "avocat Kairouan, biographie avocat, expérience juridique, formation avocat Tunisie",
  },
  "/services": {
    title: "Domaines de Pratique | Avocat Kairouan - Haifa Guedhami Alouini",
    description:
      "Services juridiques complets: droit civil, droit pénal, droit commercial, droit de la famille, droit immobilier. Cabinet d'avocat à Kairouan et Tunis.",
    keywords:
      "services juridiques, droit civil Tunisie, droit pénal, droit commercial, droit famille, avocat immobilier Kairouan",
  },
  "/values": {
    title: "Nos Valeurs | Maître Haifa Guedhami Alouini - Avocat Tunisie",
    description:
      "Intégrité, excellence et engagement client. Découvrez les valeurs qui guident notre pratique juridique à Kairouan et Tunis.",
    keywords: "valeurs avocat, éthique juridique, engagement client, intégrité",
  },
  "/contact": {
    title: "Contact | Avocat Kairouan & Tunis - Maître Haifa Guedhami Alouini",
    description:
      "Contactez Maître Haifa Guedhami Alouini pour une consultation juridique. Cabinet situé à Kairouan, Beb Djelladine. WhatsApp, email et rendez-vous disponibles.",
    keywords:
      "contact avocat Kairouan, rendez-vous avocat, consultation juridique Tunis, WhatsApp avocat Tunisie",
  },
  "/faq": {
    title: "Questions Fréquentes | Avocat Kairouan - Haifa Guedhami Alouini",
    description:
      "Réponses aux questions fréquentes sur nos services juridiques, tarifs, et procédures. Guide pratique pour vos démarches légales en Tunisie.",
    keywords:
      "FAQ avocat, questions juridiques, tarifs avocat Tunisie, procédures légales",
  },
};

export const routeToSection: Record<string, string> = {
  "/": "hero",
  "/about": "about",
  "/services": "practice",
  "/values": "values",
  "/contact": "contact",
  "/faq": "faq",
  // Map standard routes to home sections if they are just anchors
  // or keep them if they are separate pages (current app seems to be SPA with sections on Home)
};
