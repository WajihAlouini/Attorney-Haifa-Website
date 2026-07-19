import { useEffect, useState, Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { defaultTranslation, loadTranslation } from "@/data/translations";
import { whatsappNumber, whatsappPrefill } from "@/data/constants";
import { seoClusterPaths } from "@/data/seoCluster";
import { MainLayout } from "@/layouts/MainLayout";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { reportWebVitals } from "@/utils/performance";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { SEO } from "@/components/common/SEO";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import {
  buildLocalizedPath,
  getQueryLocale,
  splitLocalePathname,
  stripLangSearch,
} from "@/utils/localeRoutes";

const THEME_STORAGE_KEY = "theme";
const THEME_COLORS = {
  light: "#F0EBE1",
  dark: "#05080f",
} as const;

const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home }))
);
const HomePrototype = lazy(() =>
  import("@/pages/HomePrototype").then((m) => ({ default: m.HomePrototype }))
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
const CriminalLawPage = lazy(() =>
  import("@/pages/services/CriminalLawPage").then((m) => ({
    default: m.CriminalLawPage,
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

const INDEXABLE_ROUTE_PATHS = new Set<string>([
  "/",
  "/about",
  "/services",
  "/services/droit-de-la-famille",
  "/services/droit-des-affaires",
  "/services/droit-immobilier",
  "/services/droit-penal",
  "/values",
  "/contact",
  "/actualites",
  ...seoClusterPaths,
]);

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === "fr" || locale === "en" || locale === "ar";
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

function getInitialTheme(): Theme {
  // Light theme is the default for everyone; only an explicit toggle
  // choice (persisted in localStorage) overrides it.
  return getStoredTheme() ?? "light";
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
  const { locale, routePath } = splitLocalePathname(location.pathname);
  const routeLocation = {
    ...location,
    pathname: routePath,
    search: stripLangSearch(location.search),
  };
  const isBlogPostRoute = routePath.startsWith("/actualites/");
  const shouldRenderRouteSEO =
    !isBlogPostRoute && INDEXABLE_ROUTE_PATHS.has(routePath);
  const [t, setT] = useState(defaultTranslation);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [hasExplicitTheme, setHasExplicitTheme] = useState(
    () => getStoredTheme() !== null
  );

  const toggleTheme = () => {
    setHasExplicitTheme(true);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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
    const nextPathname = buildLocalizedPath(routePath, resolvedLocale);
    const nextSearch = stripLangSearch(location.search);

    if (nextPathname !== location.pathname || nextSearch !== location.search) {
      navigate(
        { pathname: nextPathname, search: nextSearch, hash: location.hash },
        { replace: false }
      );
    }
  };
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappPrefill[locale])}`;
  const year = new Date().getFullYear();

  const { scrollProgress } = useScrollProgress();

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
    const queryLocale = getQueryLocale(location.search);
    if (!queryLocale) return;

    const nextPathname = buildLocalizedPath(routePath, queryLocale);
    const nextSearch = stripLangSearch(location.search);

    if (nextPathname !== location.pathname || nextSearch !== location.search) {
      navigate(
        { pathname: nextPathname, search: nextSearch, hash: location.hash },
        { replace: true }
      );
    }
  }, [location.hash, location.pathname, location.search, navigate, routePath]);

  return (
    <MainLayout
      locale={locale}
      setLocale={handleSetLocale}
      t={t}
      year={year}
      scrollProgress={scrollProgress}
      whatsappLink={whatsappLink}
      whatsappNumber={whatsappNumber}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      {shouldRenderRouteSEO && <SEO locale={locale} path={routePath} />}
      <Routes location={routeLocation} key={`${locale}:${routePath}`}>
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
          path="/experiment"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <HomePrototype
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
          path="/services"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <ServicesPage
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
        <Route
          path="/services/droit-penal"
          element={
            <AnimatedPage>
              <Suspense fallback={<LoadingFallback />}>
                <CriminalLawPage
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
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
