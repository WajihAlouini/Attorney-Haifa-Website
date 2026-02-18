import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    >
      <SEO locale={locale} />
      <Routes>
        {/* All these routes render the same Home page but with different SEO */}
        <Route
          path="/"
          element={
            <Home
              t={t}
              locale={locale}
              whatsappLink={whatsappLink}
              whatsappNumber={whatsappNumber}
            />
          }
        />
        <Route
          path="/about"
          element={
            <Home
              t={t}
              locale={locale}
              whatsappLink={whatsappLink}
              whatsappNumber={whatsappNumber}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Home
              t={t}
              locale={locale}
              whatsappLink={whatsappLink}
              whatsappNumber={whatsappNumber}
            />
          }
        />
        <Route
          path="/values"
          element={
            <Home
              t={t}
              locale={locale}
              whatsappLink={whatsappLink}
              whatsappNumber={whatsappNumber}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Home
              t={t}
              locale={locale}
              whatsappLink={whatsappLink}
              whatsappNumber={whatsappNumber}
            />
          }
        />
        <Route
          path="/faq"
          element={
            <Home
              t={t}
              locale={locale}
              whatsappLink={whatsappLink}
              whatsappNumber={whatsappNumber}
            />
          }
        />
        {/* 404 for unknown routes */}
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound t={t} locale={locale} />
            </Suspense>
          }
        />
      </Routes>
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
