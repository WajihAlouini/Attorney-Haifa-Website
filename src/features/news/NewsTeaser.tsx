import { FC } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/utils/markdown";
import { Translation } from "@/types";
import { localizedTo } from "@/utils/localeRoutes";
import styles from "./NewsTeaser.module.css";

interface NewsTeaserProps {
  t: Translation;
  locale: string;
}

export const NewsTeaser: FC<NewsTeaserProps> = ({ t, locale }) => {
  const posts = getAllPosts(locale).slice(0, 3);

  if (!posts.length) {
    return null;
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(locale === "ar" ? "ar-TN" : locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className={styles.section} id="news">
      <div className="section-header">
        <span className="section-eyebrow">
          {t.blog?.eyebrow ?? "Publications & Actualités"}
        </span>
        <h2>{t.blog?.heading ?? "Le Journal Juridique"}</h2>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={localizedTo(`/actualites/${post.slug}`, locale)}
            className={styles.card}
          >
            <time className={styles.date} dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.description}</p>
            <span className={styles.readMore}>
              {t.blog?.readMore ?? "Lire l'article"}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.viewAllWrap}>
        <Link to={localizedTo("/actualites", locale)} className={styles.viewAll}>
          {t.blog?.viewAll ?? "Voir toutes les actualités"}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};
