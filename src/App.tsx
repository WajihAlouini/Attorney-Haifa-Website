import { useState, useEffect } from "react";
import "./App.css";
import "./styles/mobile.css";
import { translations } from "@/data/translations";
import { whatsappNumber } from "@/data/constants";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { reportWebVitals } from "@/utils/performance";

import { NotFound } from "@/pages/NotFound";

function App() {
  const [locale, setLocale] = useState("fr");
  const [path, setPath] = useState(window.location.pathname);
  const t = translations[locale];
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  const { scrollProgress, showScrollTop, scrollToTop } = useScrollProgress();

  // Report Web Vitals for performance monitoring
  useEffect(() => {
    reportWebVitals();

    // Handle browser back/forward buttons
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Simple routing check
  const isHome = path === "/" || path === "/index.html";

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
      {isHome ? (
        <Home
          t={t}
          locale={locale}
          whatsappLink={whatsappLink}
          whatsappNumber={whatsappNumber}
        />
      ) : (
        <NotFound t={t} locale={locale} />
      )}
    </MainLayout>
  );
}

export default App;
