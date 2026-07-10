import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import portraitImg from "@/assets/portrait/portrait.webp?format=avif;webp&w=1200&as=picture";
import portraitSmImg from "@/assets/portrait/portrait-sm.webp?format=avif;webp&w=520&as=picture";
import styles from "./Hero.module.css";
import { Translation } from "@/types";

interface HeroProps {
  t: Translation;
  whatsappLink: string;
  locale: string;
}

function renderMetricIcon(index: number) {
  const icons: ReactNode[] = [
    <svg
      key="award"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 15c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>,
    <svg
      key="gavel"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21v-7" />
      <path d="M19 21v-7" />
      <path d="M10 21v-4" />
      <path d="M14 21v-4" />
      <rect x="2" y="10" width="20" height="4" rx="1" />
      <path d="M12 10V3" />
      <path d="M8 6h8" />
    </svg>,
    <svg
      key="globe"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}

function getCompactLede(text: string) {
  const sentences =
    text.match(/[^.!?؟]+[.!?؟]?/gu)?.map((sentence) => sentence.trim()) ?? [];

  if (!sentences.length) {
    return text;
  }

  let candidate = sentences[0];

  if (candidate.length < 70 && sentences[1]) {
    candidate = `${candidate} ${sentences[1]}`;
  }

  if (candidate.length <= 170) {
    return candidate;
  }

  const truncated = candidate.slice(0, 167);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : truncated.length)}...`;
}

function splitHeading(text: string) {
  const match = text.match(/^(.*?[.!?؟])\s*(.+)$/u);

  if (!match) {
    return { main: text, accent: null as string | null };
  }

  return { main: match[1], accent: match[2] };
}

// "Name — role" brand titles render as two styled lines; the H1 text
// (name + role keywords) stays intact for SEO.
function splitBrandTitle(text: string) {
  const [name, ...rest] = text.split("—");
  const role = rest.join("—").trim();

  if (!role) {
    return { name: text.trim(), role: null as string | null };
  }

  return { name: name.trim(), role };
}

export const Hero: FC<HeroProps> = ({ t, whatsappLink, locale }) => {
  const heading = t.heroTitle ?? t.heroHeading ?? t.brandTagline;
  const lede = getCompactLede(
    t.heroSubheading ?? t.heroLede ?? t.aboutBody
  );
  const isRtl = locale === "ar";
  const headingParts = splitHeading(heading);
  const brandParts = splitBrandTitle(t.heroBrandTitle ?? t.brandName);

  const heroRef = useRef<HTMLElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  // Reveal the portrait the instant its pixels are ready — no fixed-timer
  // hold. Covers images already cached before React attached onLoad.
  useEffect(() => {
    if (portraitImgRef.current?.complete) {
      setPortraitLoaded(true);
    }
  }, []);

  // Cursor-tracking spotlight + 3D portrait tilt. Pointer-driven,
  // rAF-batched, and skipped entirely for touch / reduced-motion.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const fig = figureRef.current;
    let raf = 0;
    let sx = 72;
    let sy = 28;
    let rx = 0;
    let ry = 0;

    const apply = () => {
      raf = 0;
      hero.style.setProperty("--mx", `${sx.toFixed(2)}%`);
      hero.style.setProperty("--my", `${sy.toFixed(2)}%`);
      const tilt = tiltRef.current;
      if (tilt) {
        tilt.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onHeroMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      sx = ((e.clientX - r.left) / r.width) * 100;
      sy = ((e.clientY - r.top) / r.height) * 100;
      schedule();
    };

    const onFigMove = (e: PointerEvent) => {
      if (!fig) return;
      const r = fig.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry = px * 8;
      rx = -py * 8;
      schedule();
    };

    const onFigLeave = () => {
      rx = 0;
      ry = 0;
      schedule();
    };

    hero.addEventListener("pointermove", onHeroMove);
    fig?.addEventListener("pointermove", onFigMove);
    fig?.addEventListener("pointerleave", onFigLeave);

    return () => {
      hero.removeEventListener("pointermove", onHeroMove);
      fig?.removeEventListener("pointermove", onFigMove);
      fig?.removeEventListener("pointerleave", onFigLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const preloadBookingWidget = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("cal:preload"));
  };

  const handleBookingClick = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("cal:open"));
  };

  return (
    <section className={styles.hero} id="hero" data-rtl={isRtl} ref={heroRef}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.aurora} />
        <div className={styles.grain} />
        <div className={styles.spotlight} />
      </div>
      <div className={styles.shell}>
        <div className={styles.stage}>
          <div className={styles.copyColumn}>
            <h1 className={styles.brand}>
              <span className={styles.brandName}>{brandParts.name}</span>
              {brandParts.role ? (
                <span className={styles.brandRole}>{brandParts.role}</span>
              ) : null}
            </h1>
            <p className={styles.heading}>
              <span>{headingParts.main}</span>
              {headingParts.accent ? (
                <em>{headingParts.accent}</em>
              ) : null}
            </p>
            <p className={styles.lede}>{lede}</p>

            <div className={styles.actions}>
              <button
                type="button"
                onClick={handleBookingClick}
                onMouseEnter={preloadBookingWidget}
                onFocus={preloadBookingWidget}
                className={`btn btn-magnetic ${styles.primaryButton}`}
              >
                {t.ctas.bookOnline || "Book Online"}
              </button>
              <a
                href={whatsappLink}
                className={`btn btn-magnetic ${styles.whatsappButton}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={styles.buttonIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {t.ctas.whatsapp || "WhatsApp"}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`btn btn-magnetic ${styles.ghostButton}`}
              >
                <Mail className={styles.buttonIcon} aria-hidden="true" />
                {t.ctas.contact || "Contact"}
              </a>
            </div>
          </div>

          <div className={styles.figureColumn} ref={figureRef}>
            <div className={styles.figureGlow} aria-hidden="true" />
            <div
              className={`${styles.figureInner}${
                portraitLoaded ? ` ${styles.figureReady}` : ""
              }`}
              ref={tiltRef}
            >
              <picture>
                {/* Mobile-optimized sources (520px for up to 768px viewport) */}
                {Object.entries(portraitSmImg.sources).map(([format, src]) => (
                  <source
                    key={`sm-${format}`}
                    srcSet={src}
                    type={`image/${format}`}
                    media="(max-width: 768px)"
                  />
                ))}
                {/* Desktop sources */}
                {Object.entries(portraitImg.sources).map(([format, src]) => (
                  <source key={format} srcSet={src} type={`image/${format}`} />
                ))}
                <img
                  ref={portraitImgRef}
                  src={portraitImg.img.src}
                  alt={"Ma\u00eetre Haifa Guedhami Alouini"}
                  className={styles.portrait}
                  fetchPriority="high"
                  decoding="async"
                  width="560"
                  height="700"
                  onLoad={() => setPortraitLoaded(true)}
                  onError={() => setPortraitLoaded(true)}
                />
              </picture>
            </div>
          </div>
        </div>

        {t.heroMetrics?.length ? (
          <div className={styles.metricsRail}>
            {t.heroMetrics.map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className={styles.metric}
              >
                <div className={styles.metricIcon}>{renderMetricIcon(index)}</div>
                <div className={styles.metricBody}>
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
