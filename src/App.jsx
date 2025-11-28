import { useState, useEffect } from "react";
import "./App.css";
import "./styles/booking-modal.css";
import "./styles/mobile.css";
import { translations } from "@/data/translations";
import { whatsappNumber } from "@/data/constants";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { reportWebVitals } from "@/utils/performance";

function App() {
  const [locale, setLocale] = useState("fr");
  const t = translations[locale];
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  const { scrollProgress, showScrollTop, scrollToTop } = useScrollProgress();

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
      <Home
        t={t}
        locale={locale}
        whatsappLink={whatsappLink}
        whatsappNumber={whatsappNumber}
      />
    </MainLayout>
  );
}

export default App;
