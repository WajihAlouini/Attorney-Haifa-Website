import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { translations } from "@/data/translations";
import { whatsappNumber } from "@/data/constants";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { reportWebVitals } from "@/utils/performance";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { SEO } from "@/components/common/SEO";
import { Suspense, lazy } from "react";
// ... imports
import { LoadingFallback } from "@/components/ui/LoadingFallback";

const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound }))
);

import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ValuesPage } from "@/pages/ValuesPage";
import { ContactPage } from "@/pages/ContactPage";
import { FAQPage } from "@/pages/FAQPage";
import { FamilyLawPage } from "@/pages/services/FamilyLawPage";
import { BusinessLawPage } from "@/pages/services/BusinessLawPage";
import { RealEstateLawPage } from "@/pages/services/RealEstateLawPage";

import BlogIndex from "@/pages/blog/BlogIndex";
const BlogPost = lazy(() =>
  import("@/pages/blog/BlogPost").then((m) => ({ default: m.default }))
);

// Wrapper component for Framer Motion page transitions
function AnimatedPage({ children }: { children: React.ReactNode }) {
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -15 },
  };

  const pageTransition = {
    type: "tween",
    ease: "circOut",
    duration: 0.4,
  } as const;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

// Wrapper component that uses router hooks
function AppContent() {
  const [locale, setLocale] = useState("fr");
  const t = translations[locale];
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  const { scrollProgress, showScrollTop, scrollToTop } = useScrollProgress();

  // Scroll management
  useScrollToSection();

  // Report Web Vitals for performance monitoring
  useEffect(() => {
    reportWebVitals();
  }, []);

  const location = useLocation();

  return (
    <MainLayout
      locale={locale}
      setLocale={setLocale}
      t={t}
      year={year}
      scrollProgress={scrollProgress}
      showScrollTop={showScrollTop}
      scrollToTop={scrollToTop}
      whatsappLink={whatsappLink}
      whatsappNumber={whatsappNumber}
    >
      <SEO locale={locale} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* All these routes render the same Home page but with different SEO */}
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home
                  t={t}
                  locale={locale}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatedPage>
                <AboutPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/services"
            element={
              <AnimatedPage>
                <ServicesPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/services/droit-de-la-famille"
            element={
              <AnimatedPage>
                <FamilyLawPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/services/droit-des-affaires"
            element={
              <AnimatedPage>
                <BusinessLawPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/services/droit-immobilier"
            element={
              <AnimatedPage>
                <RealEstateLawPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/values"
            element={
              <AnimatedPage>
                <ValuesPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <ContactPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/faq"
            element={
              <AnimatedPage>
                <FAQPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </AnimatedPage>
            }
          />
          <Route
            path="/actualites"
            element={
              <AnimatedPage>
                <BlogIndex locale={locale} t={t} />
              </AnimatedPage>
            }
          />
          <Route
            path="/actualites/:slug"
            element={
              <AnimatedPage>
                <Suspense fallback={<LoadingFallback />}>
                  <BlogPost locale={locale} />
                </Suspense>
              </AnimatedPage>
            }
          />
          {/* 404 for unknown routes */}
          <Route
            path="*"
            element={
              <AnimatedPage>
                <Suspense fallback={<LoadingFallback />}>
                  <NotFound t={t} locale={locale} />
                </Suspense>
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
