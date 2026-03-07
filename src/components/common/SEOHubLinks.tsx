import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

  return (
    <section className={styles.section} id="guides">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{hubCopy.heading}</h2>
          <p>{hubCopy.lede}</p>
        </div>
        <div className={styles.grid}>
          {pages.map((page) => (
            <Link
              key={page.path}
              to={{ pathname: page.path, search: localeSearch }}
              className={styles.linkCard}
            >
              <div className={styles.cardContent}>
                <span className={styles.title}>{page.navLabel}</span>
                <span className={styles.excerpt}>{page.description}</span>
              </div>
              <ArrowRight className={styles.arrow} size={24} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
