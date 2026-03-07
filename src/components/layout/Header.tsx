import { FC, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Translation } from "@/types";
import styles from "./Header.module.css";
import { logoUrl } from "@/data/constants";

interface HeaderProps {
  locale: string;
  setLocale: (locale: string) => void;
  t: Translation;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Header: FC<HeaderProps> = ({ locale, setLocale, t, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const localeSearch = locale === "fr" ? "" : `?lang=${locale}`;
  const withLocaleSearch = (pathname: string) => ({
    pathname,
    search: localeSearch,
  });

  // Scroll to a section on the homepage
  const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    if (location.pathname === "/") {
      // Already on homepage — just scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage first, then scroll after render
      navigate(withLocaleSearch("/"));
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if current route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <Link
        to={withLocaleSearch("/")}
        className={styles.brand}
        aria-label="Home"
        onClick={closeMobileMenu}
      >
        <img src={logoUrl} alt="Logo" className={styles.brandMark} />
        <div className={styles.brandCopy}>
          <span>{t.brandName}</span>
          <small>{t.brandTagline}</small>
        </div>
      </Link>

      <div
        className={`${styles.navContent} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.navLinks}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className={styles.navLink}
          >
            {t.nav.about}
          </a>
          <a
            href="#practice"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("practice");
            }}
            className={styles.navLink}
          >
            {t.nav.practice}
          </a>
          <a
            href="#values"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("values");
            }}
            className={styles.navLink}
          >
            {t.nav.values}
          </a>
          <a
            href="#guides"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("guides");
            }}
            className={styles.navLink}
          >
            {t.nav.guides || "Guides"}
          </a>
          <Link
            to={withLocaleSearch("/actualites")}
            onClick={closeMobileMenu}
            className={isActive("/actualites") ? styles.activeLink : ""}
          >
            {t.nav.actualites || "Actualités"}
          </Link>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className={styles.navLink}
          >
            {t.nav.consult}
          </a>
        </div>

        <div className={styles.navMeta}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <div className={styles.langToggle}>
            <button
              className={`${styles.langBtn} ${
                locale === "fr" ? styles.active : ""
              }`}
              onClick={() => setLocale("fr")}
              title="Français"
              aria-current={locale === "fr" ? "true" : undefined}
            >
              <svg
                className={styles.flag}
                viewBox="0 0 900 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="900" height="600" fill="#ED2939" />
                <rect width="600" height="600" fill="#fff" />
                <rect width="300" height="600" fill="#002395" />
              </svg>
              <span>Français</span>
            </button>
            <button
              className={`${styles.langBtn} ${
                locale === "ar" ? styles.active : ""
              }`}
              onClick={() => setLocale("ar")}
              title="العربية"
              aria-current={locale === "ar" ? "true" : undefined}
            >
              <svg
                className={styles.flag}
                viewBox="0 0 1200 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1200" height="800" fill="#E70013" />
                <circle cx="600" cy="400" r="240" fill="#fff" />
                <circle cx="580" cy="400" r="160" fill="#E70013" />
                <circle cx="610" cy="400" r="130" fill="#fff" />
                <polygon
                  points="630,350 645,390 690,390 655,415 670,460 630,435 590,460 605,415 570,390 615,390"
                  fill="#E70013"
                />
              </svg>
              <span>العربية</span>
            </button>
            <button
              className={`${styles.langBtn} ${
                locale === "en" ? styles.active : ""
              }`}
              onClick={() => setLocale("en")}
              title="English"
              aria-current={locale === "en" ? "true" : undefined}
            >
              <svg
                className={styles.flag}
                viewBox="0 0 60 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id="s">
                  <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <clipPath id="t">
                  <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                </clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path
                    d="M0,0 L60,30 M60,0 L0,30"
                    clipPath="url(#t)"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path
                    d="M30,0 v30 M0,15 h60"
                    stroke="#fff"
                    strokeWidth="10"
                  />
                  <path
                    d="M30,0 v30 M0,15 h60"
                    stroke="#C8102E"
                    strokeWidth="6"
                  />
                </g>
              </svg>
              <span>English</span>
            </button>
          </div>
        </div>
      </div>

      <button
        className={`${styles.mobileToggle} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};
