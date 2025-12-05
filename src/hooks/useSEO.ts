import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
}

// SEO metadata for each route (French - primary language)
const seoData: Record<string, SEOData> = {
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

// Mapping of routes to section IDs for scrolling
export const routeToSection: Record<string, string> = {
  "/": "hero",
  "/about": "about",
  "/services": "practice",
  "/values": "values",
  "/contact": "contact",
  "/faq": "faq",
};

export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const data = seoData[path] || seoData["/"];

    // Update document title
    document.title = data.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", data.description);

    // Update or create meta keywords
    if (data.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", data.keywords);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://hgalouini.com${path === "/" ? "" : path}`
    );

    // Update Open Graph tags
    const ogTags = {
      "og:title": data.title,
      "og:description": data.description,
      "og:url": `https://hgalouini.com${path === "/" ? "" : path}`,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, [location.pathname]);

  return location.pathname;
}

// Hook to scroll to section on route change
export function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = routeToSection[location.pathname];

    if (sectionId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (location.pathname === "/") {
          // Scroll to top for home
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]);
}
