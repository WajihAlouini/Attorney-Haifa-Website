export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
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
    image: "https://maitre-haifaguedhami.me/office/entry.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LegalService", "LocalBusiness"],
          "@id": "https://maitre-haifaguedhami.me/#business",
          name: "Cabinet Maître Haifa Guedhami Alouini",
          alternateName: "مكتب الأستاذة هيفاء قدّامي علويني",
          url: "https://maitre-haifaguedhami.me",
          logo: "https://maitre-haifaguedhami.me/favicon.png",
          image: "https://maitre-haifaguedhami.me/office/entry.webp",
          description:
            "Cabinet d'avocat à Kairouan et Tunis. Maître Haifa Guedhami Alouini — experte en droit de la famille, divorce, immobilier et droit des affaires. Consultation juridique professionnelle.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Beb Djelladine, Rue des Martyrs",
            addressLocality: "Kairouan",
            postalCode: "3100",
            addressCountry: "TN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "35.6781",
            longitude: "10.0963",
          },
          telephone: "+21698643612",
          email: "maitrealouiniguedhami@gmail.com",
          openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
          priceRange: "$$",
          areaServed: [
            { "@type": "City", name: "Kairouan" },
            { "@type": "City", name: "Tunis" },
            { "@type": "Country", name: "Tunisie" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
            bestRating: "5",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services Juridiques",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Droit de la Famille & Divorce",
                  url: "https://maitre-haifaguedhami.me/services/droit-de-la-famille",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Droit des Affaires",
                  url: "https://maitre-haifaguedhami.me/services/droit-des-affaires",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Droit Immobilier",
                  url: "https://maitre-haifaguedhami.me/services/droit-immobilier",
                },
              },
            ],
          },
        },
        {
          "@type": "Person",
          "@id": "https://maitre-haifaguedhami.me/#attorney",
          name: "Haifa Guedhami Alouini",
          alternateName: "هيفاء قدّامي علويني",
          jobTitle: "Avocate à la Cour",
          worksFor: { "@id": "https://maitre-haifaguedhami.me/#business" },
          url: "https://maitre-haifaguedhami.me/about",
          image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
          knowsAbout: [
            "Droit de la famille",
            "Divorce en Tunisie",
            "Droit immobilier tunisien",
            "Droit des affaires",
            "Droit pénal",
            "Succession",
          ],
        },
      ],
    },
  },
  "/about": {
    title: "À Propos | Maître Haifa Guedhami Alouini - Avocat Tunisie",
    description:
      "Découvrez le parcours et l'expertise de Maître Haifa Guedhami Alouini, avocate expérimentée basée à Kairouan et Tunis. Formation, expérience et valeurs professionnelles.",
    keywords:
      "avocat Kairouan, biographie avocat, expérience juridique, formation avocat Tunisie",
    image: "https://maitre-haifaguedhami.me/portrait/portrait.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      mainEntity: {
        "@type": "Person",
        name: "Maître Haifa Guedhami Alouini",
        jobTitle: "Avocate à la Cour",
        description:
          "Avocate expérimentée basée à Kairouan et Tunis, spécialisée en droit civil, pénal, commercial et familial.",
        url: "https://maitre-haifaguedhami.me/about",
      },
    },
  },
  "/services": {
    title: "Domaines de Pratique | Avocat Kairouan - Haifa Guedhami Alouini",
    description:
      "Services juridiques complets: droit civil, droit pénal, droit commercial, droit de la famille, droit immobilier. Cabinet d'avocat à Kairouan et Tunis.",
    keywords:
      "services juridiques, droit civil Tunisie, droit pénal, droit commercial, droit famille, avocat immobilier Kairouan",
    image: "https://maitre-haifaguedhami.me/office/hallway.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Legal Services",
      provider: {
        "@type": "Attorney",
        name: "Maître Haifa Guedhami Alouini",
      },
      areaServed: {
        "@type": "Country",
        name: "Tunisie",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Juridiques",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Droit de la Famille",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Droit des Affaires",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Droit Immobilier",
            },
          },
        ],
      },
    },
  },
  "/services/droit-de-la-famille": {
    title: "Avocat Droit de la Famille | Divorce & Garde | Kairouan - Tunis",
    description:
      "Expertise en droit de la famille en Tunisie: Procédure de divorce, garde d'enfants, pension alimentaire, et successions. Protégez vos droits avec Maître Haifa Guedhami Alouini.",
    keywords:
      "avocat divorce Tunisie, avocat droit de la famille, garde d'enfants, avocat succession, pension alimentaire, Kairouan, Tunis",
    image: "https://maitre-haifaguedhami.me/office/office2.webp",
  },
  "/services/droit-des-affaires": {
    title:
      "Avocat Droit des Affaires | Création de Sociétés | Kairouan - Tunis",
    description:
      "Cabinet d'avocat spécialisé en droit des affaires en Tunisie. Création d'entreprises, contrats commerciaux, litiges entre associés. Sécurisez votre croissance.",
    keywords:
      "avocat affaires Tunisie, avocat entreprise, création de société, contrat commercial, litige commercial, Kairouan, Tunis",
    image: "https://maitre-haifaguedhami.me/office/office1.webp",
  },
  "/services/droit-immobilier": {
    title: "Avocat Droit Immobilier | Achat & Litiges | Kairouan - Tunis",
    description:
      "Sécurisez vos transactions immobilières en Tunisie. Avocat expert en achat/vente, promesses de vente, litiges de propriété et baux commerciaux.",
    keywords:
      "avocat immobilier Tunisie, achat immobilier, litige propriété, baux commerciaux, avocat foncier, Kairouan, Tunis",
    image: "https://maitre-haifaguedhami.me/office/office2.webp",
  },
  "/values": {
    title: "Nos Valeurs | Maître Haifa Guedhami Alouini - Avocat Tunisie",
    description:
      "Intégrité, excellence et engagement client. Découvrez les valeurs qui guident notre pratique juridique à Kairouan et Tunis.",
    keywords: "valeurs avocat, éthique juridique, engagement client, intégrité",
    image: "https://maitre-haifaguedhami.me/office/office2.webp",
  },
  "/contact": {
    title: "Contact | Avocat Kairouan & Tunis - Maître Haifa Guedhami Alouini",
    description:
      "Contactez Maître Haifa Guedhami Alouini pour une consultation juridique. Cabinet situé à Kairouan, Beb Djelladine. WhatsApp, email et rendez-vous disponibles.",
    keywords:
      "contact avocat Kairouan, rendez-vous avocat, consultation juridique Tunis, WhatsApp avocat Tunisie",
    image: "https://maitre-haifaguedhami.me/office/entry.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      mainEntity: {
        "@type": "Attorney",
        name: "Maître Haifa Guedhami Alouini",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenue des Martyrs, Médina",
          addressLocality: "Kairouan",
          postalCode: "3100",
          addressCountry: "TN",
        },
        telephone: "+216 98 643 612",
        email: "maitrealouiniguedhami@gmail.com",
      },
    },
  },
  "/faq": {
    title: "Questions Fréquentes | Avocat Kairouan - Haifa Guedhami Alouini",
    description:
      "Réponses aux questions fréquentes sur nos services juridiques, tarifs, et procédures. Guide pratique pour vos démarches légales en Tunisie.",
    keywords:
      "FAQ avocat, questions juridiques, tarifs avocat Tunisie, procédures légales",
    image: "https://maitre-haifaguedhami.me/office/office1.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "J'ai peur d'aller au tribunal...",
          acceptedAnswer: {
            "@type": "Answer",
            text: "C'est normal. La bonne nouvelle ? La plupart des affaires se règlent avant. Si nous devons y aller, je serai à vos côtés à chaque étape.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que mes informations restent confidentielles ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument. Le secret professionnel est sacré. Tout ce que vous me dites reste entre nous. C'est une promesse.",
          },
        },
        {
          "@type": "Question",
          name: "Combien cela va-t-il coûter ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Je comprends cette préoccupation. Je vous donne une estimation claire dès le début et nous discutons des options adaptées à votre budget.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps cela prendra-t-il ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chaque situation est unique. Je vous donne une estimation réaliste et je vous tiens informé(e) à chaque étape.",
          },
        },
        {
          "@type": "Question",
          name: "Que se passe-t-il lors de notre première rencontre ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous parlez, j'écoute. Vous me racontez votre situation, puis je vous explique vos options. Aucune pression, juste une conversation honnête.",
          },
        },
      ],
    },
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
