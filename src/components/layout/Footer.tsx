import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getSeoClusterPages } from "@/data/seoCluster";
import { Translation } from "@/types";
import styles from "./Footer.module.css";
import { localizedTo, splitLocalePathname } from "@/utils/localeRoutes";

interface FooterProps {
  t: Translation;
  year: number;
  locale: string;
}

function getFooterCopy(locale: string) {
  if (locale === "ar") {
    return {
      home: "الرئيسية",
      quickLinks: "روابط سريعة",
      resources: "المحتوى",
      guides: "الأدلة القانونية",
      blog: "المستجدات",
    };
  }

  if (locale === "en") {
    return {
      home: "Home",
      quickLinks: "Quick Links",
      resources: "Resources",
      guides: "Legal Guides",
      blog: "Legal News",
    };
  }

  return {
    home: "Accueil",
    quickLinks: "Liens rapides",
    resources: "Ressources",
    guides: "Guides juridiques",
    blog: "Actualités",
  };
}

export const Footer: FC<FooterProps> = ({ t, year, locale }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { routePath } = splitLocalePathname(location.pathname);
  const copy = getFooterCopy(locale);
  const guides = getSeoClusterPages(locale);
  const withLocalePath = (pathname: string) => localizedTo(pathname, locale);

  const scrollToSection = (sectionId: string) => {
    const performScroll = () => {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (routePath === "/") {
      performScroll();
      return;
    }

    navigate(withLocalePath("/"));
    window.setTimeout(performScroll, 320);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <p className={styles.brandName}>{t.brandName}</p>
          <p className={styles.blurb}>{t.footerBlurb}</p>
        </div>

        <div className={styles.column}>
          <h3>{copy.quickLinks}</h3>
          <div className={styles.links}>
            <button
              type="button"
              className={styles.scrollLink}
              onClick={() => scrollToSection("hero")}
            >
              {copy.home}
            </button>
            <Link to={withLocalePath("/about")}>
              {t.nav.about}
            </Link>
            <button
              type="button"
              className={styles.scrollLink}
              onClick={() => scrollToSection("practice")}
            >
              {t.nav.practice}
            </button>
            <Link to={withLocalePath("/values")}>
              {t.nav.values}
            </Link>
            <Link to={withLocalePath("/services")}>
              {t.nav.guides || copy.guides}
            </Link>
            <button
              type="button"
              className={styles.scrollLink}
              onClick={() => scrollToSection("contact")}
            >
              {t.nav.consult}
            </button>
          </div>
        </div>

        <div className={styles.column}>
          <h3>{copy.resources}</h3>
          <div className={styles.links}>
            <Link to={withLocalePath("/actualites")}>
              {t.nav.actualites || copy.blog}
            </Link>
          </div>
        </div>

        <div className={styles.column}>
          <h3>{copy.guides}</h3>
          <div className={styles.links}>
            {guides.map((guide) => (
              <Link
                key={guide.path}
                to={withLocalePath(guide.path)}
              >
                {guide.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Haifa Guedhami Alouini. {t.allRightsReserved || "All rights reserved."}</p>
        <p className={styles.credit}>
          {t.developedBy}{" "}
          <a
            href="https://www.linkedin.com/in/wajih-mokhtar-alouini-8a7259231/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Wajih Mokhtar Alouini
          </a>
        </p>
      </div>
    </footer>
  );
};
