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
  const posts = getAllPosts(locale).slice(0, 8);

  if (!posts.length) {
    return null;
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(locale === "ar" ? "ar-TN" : locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Rendered twice so the CSS marquee loops seamlessly (translateX(-50%)).
  const marqueePosts = [...posts, ...posts];
  const readMore = t.blog?.readMore ?? "Lire l'article";

  return (
    <section className={styles.section} id="news">
      <div className="section-header">
        <span className="section-eyebrow">
          {t.blog?.eyebrow ?? "Publications & Actualités"}
        </span>
        <h2>{t.blog?.heading ?? "Le Journal Juridique"}</h2>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {marqueePosts.map((post, index) => {
            const cloned = index >= posts.length;
            return (
              <Link
                key={`${post.slug}-${index}`}
                to={localizedTo(`/actualites/${post.slug}`, locale)}
                className={styles.card}
                aria-hidden={cloned || undefined}
                tabIndex={cloned ? -1 : undefined}
              >
                <div className={styles.media}>
                  {post.image && (
                    <img
                      className={styles.image}
                      src={post.image}
                      alt=""
                      loading="lazy"
                    />
                  )}
                  {post.tags?.[0] && (
                    <span className={styles.tag}>{post.tags[0]}</span>
                  )}
                </div>

                <div className={styles.body}>
                  <time className={styles.date} dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.description}</p>
                  <span className={styles.readMore}>
                    {readMore}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
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
