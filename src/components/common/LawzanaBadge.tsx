import { CSSProperties, FC } from "react";
import styles from "./LawzanaBadge.module.css";
import {
  LAWZANA_BADGE_RATIO,
  LAWZANA_BADGE_SRC,
  LAWZANA_BADGE_TITLE,
  LAWZANA_PROFILE_URL,
  LawzanaVariant,
} from "./lawzana";

interface LawzanaBadgeProps {
  variant: LawzanaVariant;
  /**
   * Default rendered width in px; height follows the crest's aspect ratio.
   * Exposed as `--badge-width` so a placement's own media queries can resize
   * the crest without the component knowing about breakpoints.
   */
  width: number;
  /** Localized "Recognized on Lawzana" wording used for the link label. */
  label: string;
  className?: string;
  /** Above-the-fold placements skip lazy loading. */
  eager?: boolean;
}

export const LawzanaBadge: FC<LawzanaBadgeProps> = ({
  variant,
  width,
  label,
  className,
  eager = false,
}) => (
  <a
    href={LAWZANA_PROFILE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.badgeLink}${className ? ` ${className}` : ""}`}
    style={{ "--badge-width": `${width}px` } as CSSProperties}
    aria-label={`${label} — ${LAWZANA_BADGE_TITLE[variant]}`}
  >
    <img
      src={LAWZANA_BADGE_SRC[variant]}
      alt={LAWZANA_BADGE_TITLE[variant]}
      width={width}
      height={Math.round(width * LAWZANA_BADGE_RATIO)}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={styles.badgeImg}
    />
  </a>
);
