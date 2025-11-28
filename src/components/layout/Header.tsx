import { FC, useState, useEffect } from "react";
import { LocaleProps } from "@/types";
import styles from "./Header.module.css";
import { logoUrl } from "@/data/constants";

export const Header: FC<LocaleProps> = ({ locale, setLocale }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.brand}>
        <img src={logoUrl} alt="Logo" className={styles.brandMark} />
        <div className={styles.brandCopy}>
          <span>Maître Wajih Alouini</span>
          <small>Avocat à la Cour</small>
        </div>
      </div>

      <div className={styles.navLinks}>
        <a href="#about">À Propos</a>
        <a href="#practice">Expertise</a>
        <a href="#values">Valeurs</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={styles.navMeta}>
        <div className={styles.langToggle}>
          <button
            className={`${styles.langBtn} ${
              locale === "fr" ? styles.active : ""
            }`}
            onClick={() => setLocale("fr")}
          >
            FR
          </button>
          <button
            className={`${styles.langBtn} ${
              locale === "ar" ? styles.active : ""
            }`}
            onClick={() => setLocale("ar")}
          >
            AR
          </button>
          <button
            className={`${styles.langBtn} ${
              locale === "en" ? styles.active : ""
            }`}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
        </div>
        <a href="#contact" className={styles.navCta}>
          Prendre RDV
        </a>
      </div>
    </nav>
  );
};
