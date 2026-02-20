import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LocaleProps } from "@/types";
import styles from "./Header.module.css";
import { logoUrl } from "@/data/constants";
import { translations } from "@/data/translations";

export const Header: FC<LocaleProps> = ({ locale, setLocale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        to="/"
        className={styles.brand}
        aria-label="Home"
        onClick={closeMobileMenu}
      >
        <img src={logoUrl} alt="Logo" className={styles.brandMark} />
        <div className={styles.brandCopy}>
          <span>{translations[locale].brandName}</span>
          <small>{translations[locale].brandTagline}</small>
        </div>
      </Link>

      <div
        className={`${styles.navContent} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.navLinks}>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className={isActive("/about") ? styles.activeLink : ""}
          >
            {translations[locale].nav.about}
          </Link>
          <Link
            to="/services"
            onClick={closeMobileMenu}
            className={isActive("/services") ? styles.activeLink : ""}
          >
            {translations[locale].nav.practice}
          </Link>
          <Link
            to="/values"
            onClick={closeMobileMenu}
            className={isActive("/values") ? styles.activeLink : ""}
          >
            {translations[locale].nav.values}
          </Link>
          <Link
            to="/actualites"
            onClick={closeMobileMenu}
            className={isActive("/actualites") ? styles.activeLink : ""}
          >
            {translations[locale].nav.actualites || "Actualités"}
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className={isActive("/contact") ? styles.activeLink : ""}
          >
            {translations[locale].nav.consult}
          </Link>
        </div>

        <div className={styles.navMeta}>
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
