import { FC } from "react";
import { Translation } from "@/types";

interface NotFoundProps {
  t: Translation;
  locale: string;
}

export const NotFound: FC<NotFoundProps> = ({ locale }) => {
  const title =
    locale === "fr"
      ? "Page Non Trouvée"
      : locale === "ar"
        ? "الصفحة غير موجودة"
        : "Page Not Found";

  const description =
    locale === "fr"
      ? "Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
      : locale === "ar"
        ? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
        : "Sorry, the page you are looking for does not exist or has been moved.";

  const buttonText =
    locale === "fr"
      ? "Retour à l'accueil"
      : locale === "ar"
        ? "العودة إلى الصفحة الرئيسية"
        : "Back to Home";

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontFamily: "'Playfair Display', serif",
          color: "var(--accent)",
          lineHeight: 1,
          margin: 0,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontFamily: "'Playfair Display', serif",
          color: "var(--text)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "var(--muted)",
          maxWidth: "600px",
          margin: 0,
          fontSize: "1.1rem",
        }}
      >
        {description}
      </p>
      <a
        href="/"
        className="btn primary btn-magnetic"
        style={{
          marginTop: "1rem",
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        {buttonText}
      </a>
    </div>
  );
};
