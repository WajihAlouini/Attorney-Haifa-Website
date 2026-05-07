import { FC } from "react";
import { Link } from "react-router-dom";
import { getSeoClusterHubCopy, getSeoClusterPages } from "@/data/seoCluster";
import styles from "./SEOHubLinks.module.css";

interface SEOHubLinksProps {
  locale: string;
}

function getLocaleSearch(locale: string): string {
  if (locale === "en" || locale === "ar") {
    return `?lang=${locale}`;
  }

  return "";
}

export const SEOHubLinks: FC<SEOHubLinksProps> = ({ locale }) => {
  const localeSearch = getLocaleSearch(locale);
  const hubCopy = getSeoClusterHubCopy(locale);
  const pages = getSeoClusterPages(locale);

  // Tunis-wide (national) entries vs Kairouan-local — split by URL pattern.
  const splitIndex = pages.findIndex((page) => page.path.includes("kairouan"));
  const totalCount = pages.length;

  return (
    <section className={styles.section} id="guides">
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.label}>{hubCopy.heading}</p>
            <h2 className={styles.heading}>
              <span>{hubCopy.heading}</span>
            </h2>
          </div>
          <div className={styles.meta} aria-hidden="true">
            <strong>{String(totalCount).padStart(2, "0")}</strong>
            <span>{hubCopy.lede}</span>
          </div>
        </header>

        <ol className={styles.list}>
          {pages.map((page, index) => {
            const isFirstKairouan = index === splitIndex;
            const num = String(index + 1).padStart(2, "0");
            return (
              <li
                key={page.path}
                className={isFirstKairouan ? styles.itemBreak : undefined}
              >
                <Link
                  to={{ pathname: page.path, search: localeSearch }}
                  className={styles.row}
                >
                  <span className={styles.num} aria-hidden="true">
                    {num}
                  </span>
                  <span className={styles.body}>
                    <strong className={styles.title}>{page.navLabel}</strong>
                    <span className={styles.excerpt}>{page.description}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
