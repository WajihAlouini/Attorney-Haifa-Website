import { FC } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { getPostBySlug } from "@/utils/markdown";
import styles from "./BlogPost.module.css";

const BlogPost: FC<{ locale?: string }> = ({ locale = "fr" }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug, locale) : null;

  if (!post) {
    return <Navigate to="/actualites" replace />;
  }

  const { meta, content } = post;

  return (
    <>
      <SEO
        title={`${meta.title} | Maître Haifa Guedhami Alouini`}
        description={meta.description}
        image={meta.image}
        type="article"
      />

      <article className={styles.article}>
        {/* Hero Header */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link to="/actualites" className={styles.backLink}>
              <ArrowLeft size={16} /> Retour aux actualités
            </Link>

            {meta.tags && meta.tags.length > 0 && (
              <div className={styles.tags}>
                {meta.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-gradient-gold">{meta.title}</h1>

            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <time dateTime={meta.date}>
                  {new Date(meta.date).toLocaleDateString(
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
          </div>

          {meta.image && (
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={meta.image} alt={meta.title} />
            </motion.div>
          )}
        </header>

        {/* Markdown Content */}
        <section className={`glass-panel ${styles.content}`}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={styles.inlineCode} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </section>
      </article>
    </>
  );
};

export default BlogPost;
