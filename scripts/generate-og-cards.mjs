// Builds the 1200x630 JPEG social cards used for og:image / twitter:image.
//
// Scrapers crop every preview to 1.91:1, so the square blog covers and the
// portrait office photo both got sliced. These cards are authored at the right
// ratio and written as JPEG, the one format Facebook, LinkedIn and WhatsApp all
// read. They are share-only: the covers the site itself renders are untouched.
//
//   node scripts/generate-og-cards.mjs
//
// Palette and art direction follow generate-blog-covers.mjs.

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const OUT_DIR = path.join(PUBLIC_DIR, "og");

const W = 1200;
const H = 630;
const ART = 630; // square art panel, flush to the right edge
const PAD = 58;

const GOLD_DARK = "#7A5F07";
const GOLD = "#8F7209";
const GOLD_LIGHT = "#d4af37";
const GOLD_HIGHLIGHT = "#f4d776";
const INK_DEEP = "#0d1420";
const INK_SOFT = "#1c2b3f";
const PAPER = "#e8edf5";
const PAPER_DIM = "#a8b6c9";

const SERIF = "Georgia, 'Times New Roman', serif";

function background() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${INK_DEEP}"/>
          <stop offset="1" stop-color="${INK_SOFT}"/>
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${GOLD}" stroke-opacity=".06" stroke-width="1"/>
        </pattern>
        <radialGradient id="glow" cx=".28" cy=".45" r=".7">
          <stop offset="0" stop-color="${GOLD_LIGHT}" stop-opacity=".18"/>
          <stop offset="1" stop-color="${GOLD_LIGHT}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bg)"/>
      <rect width="${W}" height="${H}" fill="url(#grid)"/>
      <rect width="${W}" height="${H}" fill="url(#glow)"/>
    </svg>
  `;
}

// Feathers the art panel's own alpha so it dissolves into whatever sits under
// it. Painting a second ink gradient on top instead would leave a visible seam
// where that flat fill meets the background's diagonal gradient.
function edgeMask() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${ART}" height="${ART}">
      <defs>
        <linearGradient id="ramp" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0"/>
          <stop offset=".38" stop-color="#fff" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="${ART}" height="${ART}" fill="url(#ramp)"/>
    </svg>
  `;
}

// Drawn over the finished composite: the gold frame and the text block.
function overlay({ eyebrow, line1, line2, tagline, meta }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      <defs>
        <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="${GOLD_HIGHLIGHT}"/>
          <stop offset="1" stop-color="${GOLD_DARK}"/>
        </linearGradient>
      </defs>

      <text x="${PAD}" y="150" font-family="${SERIF}" font-size="17" font-weight="600"
            fill="${GOLD_LIGHT}" letter-spacing="6">${eyebrow}</text>

      <text x="${PAD}" y="236" font-family="${SERIF}" font-size="54" font-weight="600"
            fill="${PAPER}">${line1}</text>
      <text x="${PAD}" y="300" font-family="${SERIF}" font-size="54" font-weight="600"
            fill="${PAPER}">${line2}</text>

      <rect x="${PAD}" y="342" width="132" height="4" rx="2" fill="url(#rule)"/>

      <text x="${PAD}" y="404" font-family="${SERIF}" font-size="24"
            fill="${PAPER_DIM}">${tagline}</text>
      <text x="${PAD}" y="444" font-family="${SERIF}" font-size="24"
            fill="${PAPER_DIM}">${meta}</text>

      <text x="${PAD}" y="${H - 52}" font-family="${SERIF}" font-size="18"
            fill="${GOLD_LIGHT}" opacity=".85" letter-spacing="1">maitre-haifaguedhami.me</text>

      <rect x="22" y="22" width="${W - 44}" height="${H - 44}" rx="14"
            fill="none" stroke="${GOLD}" stroke-opacity=".38" stroke-width="1.5"/>
    </svg>
  `;
}

async function card({ art, out, text }) {
  const panel = await sharp(art)
    .resize(ART, ART, { fit: "cover", position: "top" })
    .composite([{ input: Buffer.from(edgeMask()), blend: "dest-in" }])
    .png()
    .toBuffer();

  await sharp(Buffer.from(background()))
    .composite([
      { input: panel, left: W - ART, top: 0 },
      { input: Buffer.from(overlay(text)), left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(OUT_DIR, out));

  console.log(`wrote og/${out}`);
}

await fs.mkdir(OUT_DIR, { recursive: true });

// Site-wide card: every page that does not carry its own image falls back here.
await card({
  art: path.join(PUBLIC_DIR, "portrait", "portrait.webp"),
  out: "default.jpg",
  text: {
    eyebrow: "AVOCATE EN TUNISIE",
    line1: "Maître Haifa",
    line2: "Guedhami Alouini",
    tagline: "Kairouan &#183; Tunis &#183; toute la Tunisie",
    meta: "+25 ans d&#8217;expérience",
  },
});

// One per article cover. The square art already carries its own subject label,
// so the text block stays on the publication rather than repeating the title —
// og:title supplies the headline next to the image in the card.
const covers = (await fs.readdir(PUBLIC_DIR)).filter((f) =>
  /^blog-[a-z]+\.jpg$/.test(f)
);

for (const cover of covers) {
  await card({
    art: path.join(PUBLIC_DIR, cover),
    out: cover,
    text: {
      eyebrow: "LE JOURNAL JURIDIQUE",
      line1: "Maître Haifa",
      line2: "Guedhami Alouini",
      tagline: "Analyses juridiques &#8212; Tunisie",
      meta: "Cabinet à Kairouan",
    },
  });
}

console.log("done.");
