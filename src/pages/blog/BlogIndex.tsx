import { FC } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { SEO } from "@/components/common/SEO";
import { getAllPosts } from "@/utils/markdown";
import { Calendar, ArrowRight } from "lucide-react";
import { Translation } from "@/types";
import styles from "./BlogIndex.module.css";

const BlogIndex: FC<{ locale?: string; t?: Translation }> = ({
  locale = "fr",
  t,
}) => {
  const posts = getAllPosts(locale);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO title="Actualités Juridiques | Maître Haifa Guedhami Alouini" />
      <div className={styles.container}>
        <div className="section-header">
          <span className="section-eyebrow">
            {t?.blog?.eyebrow ?? "Publications & Actualités"}
          </span>
          <h1 className="text-gradient-gold">
            {t?.blog?.heading ?? "Le Journal Juridique"}
          </h1>
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>
            {t?.blog?.lede ??
              "Décryptage de l'actualité juridique tunisienne par Maître Haifa Guedhami Alouini."}
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className={`glass-panel ${styles.card}`}
            >
              {post.image && (
                <div className={styles.imageWrapper}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
              )}

              <div className={styles.content}>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.icon} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(
                        locale === "ar" ? "ar-TN" : locale,
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                  </div>
                </div>

                <h2>
                  <Link to={`/actualites/${post.slug}`}>{post.title}</Link>
                </h2>

                <p>{post.description}</p>

                {post.tags && post.tags.length > 0 && (
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  to={`/actualites/${post.slug}`}
                  className={styles.readMore}
                >
                  {t?.blog?.readMore ?? "Lire l'article"}{" "}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default BlogIndex;
