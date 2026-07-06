import { Suspense, lazy } from "react";
import { About } from "@/features/about";
import { Values } from "@/features/values";
import { Approach } from "@/features/approach";
import { SEOHubLinks } from "@/components/common/SEOHubLinks";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { mapShareUrl, mapEmbedSrc, officePhotos } from "@/data/constants";
import { Translation } from "@/types";

const Contact = lazy(() =>
  import("@/features/contact").then((module) => ({
    default: module.Contact,
  }))
);
const Gallery = lazy(() =>
  import("@/features/gallery").then((module) => ({
    default: module.Gallery,
  }))
);

interface PageProps {
  locale: string;
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

export function AboutPage({ locale, t, whatsappLink, whatsappNumber }: PageProps) {
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
          {t.nav?.about}
        </span>
        <h1
          className="text-gradient-gold"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}
        >
          {t.aboutHeading}
        </h1>
      </div>

      <div className="fade-in-section">
        <About t={t} />
      </div>
      <div className="fade-in-section">
        <Values t={t} />
      </div>
      <div className="fade-in-section">
        <Approach t={t} />
      </div>
      <div className="fade-in-section section-alt">
        <SEOHubLinks locale={locale} />
      </div>
      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery t={t} officePhotos={officePhotos} />
        </Suspense>
      </div>

      <div className="fade-in-section section-alt">
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
