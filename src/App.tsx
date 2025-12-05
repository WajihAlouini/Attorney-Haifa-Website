import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/mobile.css";
import { translations } from "@/data/translations";
import { whatsappNumber } from "@/data/constants";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { reportWebVitals } from "@/utils/performance";
import { useSEO, useScrollToSection } from "@/hooks/useSEO";
import { NotFound } from "@/pages/NotFound";

// Wrapper component that uses router hooks
function AppContent() {
  const [locale, setLocale] = useState("fr");
  const t = translations[locale];
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  const { scrollProgress, showScrollTop, scrollToTop } = useScrollProgress();

  // SEO and scroll management
  useSEO();
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
        <Route path="*" element={<NotFound t={t} locale={locale} />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
