import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { FAQ as FaqSection } from "@/features/faq/FAQ";
import { SEOHubLinks } from "@/components/common/SEOHubLinks";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { mapShareUrl, mapEmbedSrc } from "@/data/constants";
import { Translation } from "@/types";

const Contact = lazy(() =>
  import("@/features/contact").then((module) => ({
    default: module.Contact,
  }))
);

interface PageProps {
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

export function FAQPage({ t, whatsappLink, whatsappNumber }: PageProps) {
  const location = useLocation();
  const lang = new URLSearchParams(location.search).get("lang");
  const locale = lang === "en" || lang === "ar" ? lang : "fr";

  useScrollAnimation();
  useMagneticButton();

  return (
    <div style={{ paddingTop: "80px" }}>
      <div
        className="fade-in-section"
        style={{ textAlign: "center", padding: "4rem 2rem 0" }}
      >
        <span
          className="eyebrow"
          style={{
            color: "var(--accent)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          {t.faqEyebrow}
        </span>
        <h1
          className="text-gradient-gold"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}
        >
          {t.faqHeading}
        </h1>
      </div>

      <div className="fade-in-section">
        <FaqSection t={t} />
      </div>
      <div className="fade-in-section section-alt">
        <SEOHubLinks locale={locale} />
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Contact
            t={t}
            whatsappLink={whatsappLink}
            whatsappNumber={whatsappNumber}
            mapEmbedSrc={mapEmbedSrc}
            mapShareUrl={mapShareUrl}
          />
        </Suspense>
      </div>
    </div>
  );
}
