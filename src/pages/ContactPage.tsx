import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { Contact } from "@/features/contact/Contact";
import { SEOHubLinks } from "@/components/common/SEOHubLinks";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { mapShareUrl, mapEmbedSrc, officePhotos } from "@/data/constants";
import { Translation } from "@/types";

const Gallery = lazy(() =>
  import("@/features/gallery").then((module) => ({
    default: module.Gallery,
  }))
);

interface PageProps {
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

export function ContactPage({ t, whatsappLink, whatsappNumber }: PageProps) {
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
          {t.nav?.consult}
        </span>
        <h1
          className="text-gradient-gold"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}
        >
          {t.consultHeading}
        </h1>
      </div>

      <div className="fade-in-section">
        <Contact
          t={t}
          whatsappLink={whatsappLink}
          whatsappNumber={whatsappNumber}
          mapEmbedSrc={mapEmbedSrc}
          mapShareUrl={mapShareUrl}
          hideHeader
        />
      </div>
      <div className="fade-in-section section-alt">
        <SEOHubLinks locale={locale} />
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery t={t} officePhotos={officePhotos} />
        </Suspense>
      </div>
    </div>
  );
}
