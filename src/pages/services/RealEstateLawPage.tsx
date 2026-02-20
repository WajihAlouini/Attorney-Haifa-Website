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

export function RealEstateLawPage({
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
          Droit Immobilier
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
          Sécurisez vos transactions immobilières, réglez vos litiges de
          propriété et assurez une gestion saine de votre patrimoine. Conseils
          pointus pour vos investissements en Tunisie.
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
          Nos Services en Droit Immobilier
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
              Achat et Vente (Promesses de vente)
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Vérification du titre foncier, audit légal de la propriété, et
              rédaction sécurisée des actes de vente et promesses d&apos;achat.
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
              Litiges de Propriété et Bornage
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Assistance dans les actions en revendication, servitudes, troubles
              de voisinage et contentieux liés à l&apos;immatriculation
              foncière.
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
              Baux Civils et Commerciaux
            </h3>
            <p style={{ color: "var(--text-dim)", margin: 0 }}>
              Rédaction des contrats de location, gestion des impayés,
              procédures d&apos;expulsion ou renouvellement de droit au bail.
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
