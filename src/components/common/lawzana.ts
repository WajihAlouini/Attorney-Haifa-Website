// Shared Lawzana badge assets and metadata.
//
// Kept out of LawzanaBadge.tsx so that file exports only its component
// (mixing constants into it breaks Fast Refresh), and so placements that
// compose their own markup — the trust strip builds a pill around the crest
// rather than rendering it bare — can reach the same source of truth.

/** Lawzana directory profile the badges link back to. */
export const LAWZANA_PROFILE_URL =
  "https://lawzana.com/lawyer/haifa-guedhamis-law-firm";

/**
 * Both crests share the same artwork (444.89 x 420.36) and differ only in
 * their ribbon text, so the aspect ratio is fixed and every placement only
 * picks a width. Self-hosted from /public/badges rather than hotlinked, which
 * keeps a third-party DNS + TLS round trip off the page and avoids handing
 * Lawzana the IP of every visitor.
 */
export const LAWZANA_BADGE_RATIO = 420.36 / 444.89;

export const LAWZANA_BADGE_SRC = {
  firm: "/badges/lawzana-top-law-firm.svg",
  lawyer: "/badges/lawzana-top-lawyer.svg",
} as const;

export const LAWZANA_BADGE_TITLE = {
  firm: "Lawzana Top Law Firm",
  lawyer: "Lawzana Top Lawyer",
} as const;

export type LawzanaVariant = keyof typeof LAWZANA_BADGE_SRC;
