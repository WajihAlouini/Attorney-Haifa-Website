export function Footer({ t, year }) {
    return (
        <footer className="footer">
            <p>© {year} Haifa Guedhami Alouini. All rights reserved.</p>
            <p>{t.footerBlurb}</p>
        </footer>
    )
}

