import { useEffect, useState, Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { defaultTranslation, loadTranslation } from "@/data/translations";
import { whatsappNumber } from "@/data/constants";
import { seoClusterPaths } from "@/data/seoCluster";
import { MainLayout } from "@/layouts/MainLayout";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { reportWebVitals } from "@/utils/performance";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { SEO } from "@/components/common/SEO";
import { LoadingFallback } from "@/components/ui/LoadingFallback";

const THEME_STORAGE_KEY = "theme";
const THEME_COLORS = {
  light: "#F0EBE1",
  dark: "#05080f",
} as const;

const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home }))
);

const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound }))
);
const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazy(() =>
  import("@/pages/ServicesPage").then((m) => ({ default: m.ServicesPage }))
);
const ValuesPage = lazy(() =>
  import("@/pages/ValuesPage").then((m) => ({ default: m.ValuesPage }))
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const FAQPage = lazy(() =>
  import("@/pages/FAQPage").then((m) => ({ default: m.FAQPage }))
);
const FamilyLawPage = lazy(() =>
  import("@/pages/services/FamilyLawPage").then((m) => ({
    default: m.FamilyLawPage,
  }))
);
const BusinessLawPage = lazy(() =>
  import("@/pages/services/BusinessLawPage").then((m) => ({
    default: m.BusinessLawPage,
  }))
);
const RealEstateLawPage = lazy(() =>
  import("@/pages/services/RealEstateLawPage").then((m) => ({
    default: m.RealEstateLawPage,
  }))
);
const BlogIndex = lazy(() =>
  import("@/pages/blog/BlogIndex").then((m) => ({ default: m.default }))
);
const BlogPost = lazy(() =>
  import("@/pages/blog/BlogPost").then((m) => ({ default: m.default }))
);
const SeoClusterPage = lazy(() =>
  import("@/pages/SeoClusterPage").then((m) => ({ default: m.SeoClusterPage }))
);

type SupportedLocale = "fr" | "en" | "ar";

function getLocaleFromSearch(search: string): SupportedLocale {
  const params = new URLSearchParams(search);
  const lang = params.get("lang");

  if (lang === "en" || lang === "ar" || lang === "fr") {
    return lang;
  }

  return "fr";
}

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === "fr" || locale === "en" || locale === "ar";
}

function buildSearchForLocale(
  locale: SupportedLocale,
  currentSearch: string
): string {
  const params = new URLSearchParams(currentSearch);

  if (locale === "fr") {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const serialized = params.toString();
  return serialized ? `?${serialized}` : "";
}

// Wrapper component for Framer Motion page transitions
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;

  return null;
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute("content", THEME_COLORS[theme]);
}

// Wrapper component that uses router hooks
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogPostRoute = location.pathname.startsWith("/actualites/");

  const locale = getLocaleFromSearch(location.search);
  const [t, setT] = useState(defaultTranslation);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [hasExplicitTheme, setHasExplicitTheme] = useState(
    () => getStoredTheme() !== null
  );

  const toggleTheme = () => {
    setHasExplicitTheme(true);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (hasExplicitTheme || typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = (event: MediaQueryListEvent) =>
      setTheme(event.matches ? "dark" : "light");

    media.addEventListener("change", syncTheme);
    return () => media.removeEventListener("change", syncTheme);
  }, [hasExplicitTheme]);

  // Apply theme attribute to <html> and persist explicit user preference
  useEffect(() => {
    applyTheme(theme);

    if (hasExplicitTheme) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  }, [theme, hasExplicitTheme]);

  const handleSetLocale = (nextLocale: string) => {
    const resolvedLocale: SupportedLocale = isSupportedLocale(nextLocale)
      ? nextLocale
      : "fr";
    const nextSearch = buildSearchForLocale(resolvedLocale, location.search);

    if (nextSearch !== location.search) {
      navigate(
        { pathname: location.pathname, search: nextSearch },
        { replace: true }
      );
    }
  };
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  const { scrollProgress, showScrollTop, scrollToTop } = useScrollProgress();

  // Scroll management
  useScrollToSection();

  // Report Web Vitals for performance monitoring
  useEffect(() => {
    reportWebVitals();
  }, []);

  useEffect(() => {
    let active = true;

    loadTranslation(locale)
      .then((nextTranslation) => {
        if (active) {
          setT(nextTranslation);
        }
      })
      .catch(() => {
        if (active) {
          setT(defaultTranslation);
        }
      });

    return () => {
      active = false;
    };
  }, [locale]);

  useEffect(() => {
    const nextSearch = buildSearchForLocale(locale, location.search);
    if (nextSearch !== location.search) {
      navigate(
        { pathname: location.pathname, search: nextSearch },
        { replace: true }
      );
    }
  }, [locale, location.pathname, location.search, navigate]);

  return (
    <MainLayout
      locale={locale}
      setLocale={handleSetLocale}
      t={t}
      year={year}
      scrollProgress={scrollProgress}
      showScrollTop={showScrollTop}
      scrollToTop={scrollToTop}
      whatsappLink={whatsappLink}
      whatsappNumber={whatsappNumber}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      {!isBlogPostRoute && <SEO locale={locale} />}
      <Routes location={location} key={location.pathname}>
        {/* All these routes render the same Home page but with different SEO */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <Home
                  t={t}
                  locale={locale}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <AboutPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <ServicesPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/services/droit-de-la-famille"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <FamilyLawPage
                  locale={locale}
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/services/droit-des-affaires"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <BusinessLawPage
                  locale={locale}
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/services/droit-immobilier"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <RealEstateLawPage
                  locale={locale}
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        {seoClusterPaths.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <AnimatedPage>
                <Suspense fallback={<LoadingFallback />}>
                  <SeoClusterPage
                    locale={locale}
                    whatsappLink={whatsappLink}
                    whatsappNumber={whatsappNumber}
                  />
                </Suspense>
              </AnimatedPage>
            }
          />
        ))}
        <Route
          path="/values"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <ValuesPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <ContactPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/faq"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <FAQPage
                  t={t}
                  whatsappLink={whatsappLink}
                  whatsappNumber={whatsappNumber}
                />
              </Suspense>
            </AnimatedPage>
          }
        />
        <Route
          path="/actualites"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <BlogIndex locale={locale} t={t} />
              </Suspense>
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
