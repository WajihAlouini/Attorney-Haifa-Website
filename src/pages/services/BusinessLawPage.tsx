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

export function BusinessLawPage({
  t,
  whatsappLink,
  whatsappNumber,
}: PageProps) {
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
          Droit des Affaires
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
          Création d&apos;entreprises, rédaction de contrats commerciaux,
          résolution de litiges entre associés ou avec des tiers. Un
          accompagnement juridique global pour sécuriser la croissance de votre
          entreprise en Tunisie.
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
          Nos Services en Droit des Affaires
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
              Création de Sociétés
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Choix de la forme juridique (SUARL, SARL, SA), rédaction des
              statuts, et immatriculation au registre national des entreprises.
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
              Contrats Commerciaux
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Rédaction et révision de baux commerciaux, contrats de franchise,
              conditions générales de vente (CGV), et partenariats.
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
              Contentieux Commercial
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Recouvrement de créances impayées, concurrence déloyale, et
              résolution de conflits entre actionnaires ou fournisseurs.
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
