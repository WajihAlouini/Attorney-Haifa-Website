import { Suspense, lazy } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Values } from "@/components/sections/Values";
import { Approach } from "@/components/sections/Approach";
import { Impact } from "@/components/sections/Impact";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { mapShareUrl, mapEmbedSrc, officePhotos } from "@/data/constants";

// Lazy load below-the-fold sections
const Reviews = lazy(() =>
  import("@/components/sections/Reviews").then((module) => ({
    default: module.Reviews,
  }))
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Gallery = lazy(() =>
  import("@/components/sections/Gallery").then((module) => ({
    default: module.Gallery,
  }))
);
const FAQ = lazy(() =>
  import("@/components/sections/FAQ").then((module) => ({
    default: module.FAQ,
  }))
);

export function Home({ t, locale, whatsappLink, whatsappNumber }) {
  const languageCode = locale === "ar" ? "ar" : locale;
  const { reviews: liveReviews, isLoading: isLoadingReviews } =
    useGoogleReviews(locale, languageCode);

  useScrollAnimation();
  useMagneticButton();

  return (
    <>
      <Hero t={t} whatsappLink={whatsappLink} locale={locale} />

      <div className="fade-in-section">
        <About t={t} />
      </div>
      <div className="fade-in-section">
        <PracticeAreas t={t} />
      </div>
      <div className="fade-in-section">
        <Values t={t} />
      </div>
      <div className="fade-in-section">
        <Approach t={t} />
      </div>

      <Impact t={t} />

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
      <div className="fade-in-section">
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
      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery t={t} officePhotos={officePhotos} />
        </Suspense>
      </div>
    </>
  );
}
