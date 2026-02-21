import { FC } from "react";
import styles from "./Hero.module.css";
import { heroBg } from "@/data/constants";
import { Translation } from "@/types";
import { Magnetic } from "@/components/ui/Magnetic";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

interface HeroProps {
  t: Translation;
  whatsappLink: string;
  locale: string;
}

interface CalWindow {
  Cal?: {
    (action: string, options: { calLink: string }): void;
    ns?: Record<string, (action: string, options: { calLink: string }) => void>;
  };
}

export const Hero: FC<HeroProps> = ({ t, whatsappLink }) => {
  const handleBookingClick = () => {
    // Use the namespaced Cal instance
    const Cal = (window as CalWindow).Cal;
    if (Cal && Cal.ns && Cal.ns["wajjih-alouini-eis3ub"]) {
      Cal.ns["wajjih-alouini-eis3ub"]("modal", {
        calLink: "wajjih-alouini-eis3ub/30min",
      });
    } else if (Cal) {
      // Fallback to direct call
      Cal("modal", {
        calLink: "wajjih-alouini-eis3ub/30min",
      });
    } else {
      console.error("Cal.com not loaded yet");
    }
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
      id="hero"
    >
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={itemVariants} className={styles.eyebrow}>
          {t.heroEyebrow}
        </motion.span>
        <motion.h1 variants={itemVariants} className="text-gradient-gold">
          {t.heroTitle}
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.lede}>
          {t.heroLede}
        </motion.p>

        <motion.div variants={itemVariants} className={styles.actions}>
          <Magnetic intensity={0.15}>
            <a
              href={whatsappLink}
              className="btn whatsapp btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {t.ctas.whatsapp || "WhatsApp"}
            </a>
          </Magnetic>
          <Magnetic intensity={0.15}>
            <button
              onClick={handleBookingClick}
              className="btn primary btn-magnetic btn-glow"
            >
              {t.ctas.bookOnline || "Book Online"}
            </button>
          </Magnetic>
          <Magnetic intensity={0.15}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn ghost btn-magnetic"
            >
              {t.ctas.primary || "Contact"}
            </a>
          </Magnetic>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.metrics}>
          {t.heroMetrics?.map((stat, index) => (
            <div key={index} className={styles.metric}>
              <div className={styles.metricIcon}>
                {index === 0 && (
                  // Years of Excellence - Award/Badge Icon
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M12 15c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                )}
                {index === 1 && (
                  // Cases Resolved - Gavel/Scale Icon
                  <svg
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
                  </svg>
                )}
                {index === 2 && (
                  // Languages - Globe Icon
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
              </div>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
