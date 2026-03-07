import { Suspense, lazy } from "react";
import { Hero } from "@/features/hero/Hero";
import { TrustBadges } from "@/components/common/TrustBadges";
import { SEOHubLinks } from "@/components/common/SEOHubLinks";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { mapShareUrl, mapEmbedSrc, officePhotos } from "@/data/constants";
import { Translation } from "@/types";

// Lazy load below-the-fold sections
const Reviews = lazy(() =>
  import("@/features/reviews").then((module) => ({
    default: module.Reviews,
  }))
);
const About = lazy(() =>
  import("@/features/about").then((module) => ({
    default: module.About,
  }))
);
const PracticeAreas = lazy(() =>
  import("@/features/practice-areas").then((module) => ({
    default: module.PracticeAreas,
  }))
);
const Values = lazy(() =>
  import("@/features/values").then((module) => ({
    default: module.Values,
  }))
);
const Approach = lazy(() =>
  import("@/features/approach").then((module) => ({
    default: module.Approach,
  }))
);
const Impact = lazy(() =>
  import("@/features/impact").then((module) => ({
    default: module.Impact,
  }))
);
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
const FAQ = lazy(() =>
  import("@/features/faq").then((module) => ({
    default: module.FAQ,
  }))
);

interface HomeProps {
  t: Translation;
  locale: string;
  whatsappLink: string;
  whatsappNumber: string;
}

export function Home({ t, locale, whatsappLink, whatsappNumber }: HomeProps) {
  const languageCode = locale === "ar" ? "ar" : locale;
  const { reviews: liveReviews, isLoading: isLoadingReviews } =
    useGoogleReviews(locale, languageCode);

  useScrollAnimation();
  useMagneticButton();

  return (
    <>
      <Hero t={t} whatsappLink={whatsappLink} locale={locale} />
      <TrustBadges t={t} />

      <div className="fade-in-section">
        <Suspense fallback={null}>
          <About t={t} />
        </Suspense>
      </div>
      <div className="fade-in-section section-alt">
        <SEOHubLinks locale={locale} />
      </div>
      <div className="fade-in-section">
        <Suspense fallback={null}>
          <PracticeAreas t={t} />
        </Suspense>
      </div>
      <div className="fade-in-section section-alt">
        <Suspense fallback={null}>
          <Values t={t} />
        </Suspense>
      </div>
      <div className="fade-in-section">
        <Suspense fallback={null}>
          <Approach t={t} />
        </Suspense>
      </div>

      <div className="section-alt">
        <Suspense fallback={null}>
          <Impact t={t} />
        </Suspense>
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Reviews
            t={t}
            liveReviews={liveReviews}
            mapShareUrl={mapShareUrl}
            isLoading={isLoadingReviews}
          />
        </Suspense>
      </div>
      <div className="fade-in-section section-alt">
        <Suspense fallback={<LoadingFallback />}>
          <FAQ t={t} />
        </Suspense>
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
      <div className="fade-in-section section-alt">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery t={t} officePhotos={officePhotos} />
        </Suspense>
      </div>
    </>
  );
}
