import { Suspense, lazy } from "react";
import { LoadingFallback } from "@/components/ui/LoadingFallback";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { mapShareUrl, mapEmbedSrc } from "@/data/constants";
import { Translation } from "@/types";

const Contact = lazy(() =>
  import("@/features/contact").then((module) => ({
    default: module.Contact,
  }))
);

interface PageProps {
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

export function FamilyLawPage({ t, whatsappLink, whatsappNumber }: PageProps) {
  useScrollAnimation();
  useMagneticButton();

  return (
    <div style={{ paddingTop: "80px" }}>
      <div
        className="fade-in-section"
        style={{ textAlign: "center", padding: "4rem 2rem 2rem" }}
      >
        <span
          className="eyebrow"
          style={{
            color: "var(--accent)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          {t.practiceEyebrow || "Expertise"}
        </span>
        <h1
          className="text-gradient-gold"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}
        >
          Droit de la Famille
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "var(--text-dim)",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Procédures de divorce, garde d&apos;enfants, pension alimentaire, et
          liquidation de successions. Un accompagnement tout en compassion et en
          détermination pour protéger au mieux vos intérêts et ceux de vos
          enfants.
        </p>
      </div>

      <div
        className="fade-in-section"
        style={{
          padding: "4rem 2rem",
          maxWidth: "800px",
          margin: "0 auto",
          color: "var(--text)",
        }}
      >
        <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
          Nos Services en Droit Familial
        </h2>
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "2rem" }}>
          <li
            style={{
              marginBottom: "1.5rem",
              padding: "1.5rem",
              background: "var(--panel)",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Procédure de Divorce
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Qu&apos;il s&apos;agisse d&apos;un divorce par consentement
              mutuel, pour faute ou préjudice, nous vous guidons vers la
              meilleure issue légale.
            </p>
          </li>
          <li
            style={{
              marginBottom: "1.5rem",
              padding: "1.5rem",
              background: "var(--panel)",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Garde d&apos;Enfants et Pension Alimentaire
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Défense vigoureuse de vos droits parentaux et du maintien du
              niveau de vie de vos enfants.
            </p>
          </li>
          <li
            style={{
              marginBottom: "1.5rem",
              padding: "1.5rem",
              background: "var(--panel)",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Successions et Héritage
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Assistance dans le partage, les indivisions, et les litiges pour
              faire respecter vos droits en matière d&apos;héritage.
            </p>
          </li>
        </ul>
      </div>

      <div className="fade-in-section">
        <Suspense fallback={<LoadingFallback />}>
          <Contact
            t={t}
            whatsappLink={whatsappLink}
            whatsappNumber={whatsappNumber}
            mapEmbedSrc={mapEmbedSrc}
            mapShareUrl={mapShareUrl}
          />
        </Suspense>
      </div>
    </div>
  );
}
