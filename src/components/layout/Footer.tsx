import { FC } from "react";
import { Translation } from "@/types";
import styles from "./Footer.module.css";

interface FooterProps {
  t: Translation;
  year: number;
}

export const Footer: FC<FooterProps> = ({ t, year }) => {
  return (
    <footer className={styles.footer}>
      <p>© {year} Haifa Guedhami Alouini. All rights reserved.</p>
      <p>{t.footerBlurb}</p>
      <p className={styles.credit}>
        Développé par{" "}
        <a
          href="https://www.linkedin.com/in/wajih-mokhtar-alouini-8a7259231/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Wajih Mokhtar Alouini
        </a>
      </p>
    </footer>
  );
};
