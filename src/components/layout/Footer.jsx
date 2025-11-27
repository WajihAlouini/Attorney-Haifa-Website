export function Footer({ t, year }) {
  return (
    <footer className="footer">
      <p>© {year} Haifa Guedhami Alouini. All rights reserved.</p>
      <p>{t.footerBlurb}</p>
      <p className="developer-credit">
        Développé par{" "}
        <a
          href="https://www.linkedin.com/in/wajih-mokhtar-alouini-8a7259231/"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-link"
        >
          Wajih Mokhtar Alouini
        </a>
      </p>
    </footer>
  );
}
