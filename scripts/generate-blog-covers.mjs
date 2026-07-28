import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "public");
const SIZE = 640;

const GOLD_DARK = "#7A5F07";
const GOLD = "#8F7209";
const GOLD_LIGHT = "#d4af37";
const GOLD_HIGHLIGHT = "#f4d776";
const INK_DEEP = "#0d1420";
const INK = "#13202f";
const INK_SOFT = "#1c2b3f";

function baseDefs() {
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${INK_DEEP}"/>
        <stop offset="1" stop-color="${INK_SOFT}"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${GOLD_HIGHLIGHT}"/>
        <stop offset=".5" stop-color="${GOLD_LIGHT}"/>
        <stop offset="1" stop-color="${GOLD_DARK}"/>
      </linearGradient>
      <radialGradient id="glow" cx=".5" cy=".5" r=".6">
        <stop offset="0" stop-color="${GOLD_LIGHT}" stop-opacity=".28"/>
        <stop offset="1" stop-color="${GOLD_LIGHT}" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${GOLD}" stroke-opacity=".06" stroke-width="1"/>
      </pattern>
    </defs>
  `;
}

function frame(inner, accentMotif = "") {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
      ${baseDefs()}
      <rect width="${SIZE}" height="${SIZE}" fill="url(#bg)"/>
      <rect width="${SIZE}" height="${SIZE}" fill="url(#grid)"/>
      <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE * 0.55}" fill="url(#glow)"/>
      ${accentMotif}
      <rect x="28" y="28" width="${SIZE - 56}" height="${SIZE - 56}" rx="14" fill="none" stroke="${GOLD}" stroke-opacity=".35" stroke-width="1.5"/>
      ${inner}
    </svg>
  `;
}

// 1. Inheritance Equality — balanced scales of justice
const inheritance = frame(
  `
    <!-- beam -->
    <rect x="120" y="228" width="400" height="6" rx="3" fill="url(#gold)"/>
    <!-- center column -->
    <rect x="315" y="228" width="10" height="220" fill="url(#gold)"/>
    <!-- center pommel -->
    <circle cx="320" cy="218" r="14" fill="url(#gold)"/>
    <!-- base -->
    <rect x="240" y="448" width="160" height="10" rx="4" fill="url(#gold)"/>
    <rect x="265" y="458" width="110" height="16" rx="4" fill="url(#gold)"/>
    <!-- suspension lines -->
    <line x1="160" y1="234" x2="160" y2="300" stroke="${GOLD_LIGHT}" stroke-width="1.5" stroke-opacity=".75"/>
    <line x1="480" y1="234" x2="480" y2="300" stroke="${GOLD_LIGHT}" stroke-width="1.5" stroke-opacity=".75"/>
    <!-- left pan -->
    <path d="M 105 300 Q 160 345 215 300 Q 200 330 160 332 Q 120 330 105 300 Z" fill="url(#gold)" opacity=".92"/>
    <path d="M 105 300 Q 160 345 215 300" fill="none" stroke="${INK_DEEP}" stroke-width="2" stroke-opacity=".35"/>
    <!-- right pan -->
    <path d="M 425 300 Q 480 345 535 300 Q 520 330 480 332 Q 440 330 425 300 Z" fill="url(#gold)" opacity=".92"/>
    <path d="M 425 300 Q 480 345 535 300" fill="none" stroke="${INK_DEEP}" stroke-width="2" stroke-opacity=".35"/>
    <!-- bars on each pan -->
    <rect x="142" y="312" width="36" height="6" rx="2" fill="${INK_DEEP}" opacity=".55"/>
    <rect x="462" y="312" width="36" height="6" rx="2" fill="${INK_DEEP}" opacity=".55"/>
    <!-- label -->
    <text x="320" y="560" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="600" fill="${GOLD_LIGHT}" text-anchor="middle" letter-spacing="4">SUCCESSION</text>
    <text x="320" y="590" font-family="Georgia, 'Times New Roman', serif" font-size="14" fill="#cbd5e1" text-anchor="middle" opacity=".75" letter-spacing="8">RÉFORME 2026</text>
  `
);

// 2. Startup Act — upward arrow + circuit
const startup = frame(
  `
    <!-- circuit board bg -->
    <g opacity=".35">
      <line x1="80" y1="140" x2="220" y2="140" stroke="${GOLD}" stroke-width="1.2"/>
      <line x1="220" y1="140" x2="220" y2="210" stroke="${GOLD}" stroke-width="1.2"/>
      <line x1="420" y1="180" x2="560" y2="180" stroke="${GOLD}" stroke-width="1.2"/>
      <line x1="420" y1="180" x2="420" y2="120" stroke="${GOLD}" stroke-width="1.2"/>
      <line x1="100" y1="480" x2="260" y2="480" stroke="${GOLD}" stroke-width="1.2"/>
      <line x1="380" y1="460" x2="540" y2="460" stroke="${GOLD}" stroke-width="1.2"/>
      <line x1="540" y1="460" x2="540" y2="380" stroke="${GOLD}" stroke-width="1.2"/>
      <circle cx="80" cy="140" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="220" cy="210" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="560" cy="180" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="420" cy="120" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="100" cy="480" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="260" cy="480" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="380" cy="460" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="540" cy="380" r="4" fill="${GOLD_LIGHT}"/>
    </g>
    <!-- growth bars -->
    <rect x="200" y="380" width="30" height="80" rx="3" fill="url(#gold)" opacity=".85"/>
    <rect x="245" y="330" width="30" height="130" rx="3" fill="url(#gold)" opacity=".9"/>
    <rect x="290" y="270" width="30" height="190" rx="3" fill="url(#gold)"/>
    <rect x="335" y="210" width="30" height="250" rx="3" fill="url(#gold)"/>
    <rect x="380" y="160" width="30" height="300" rx="3" fill="url(#gold)"/>
    <!-- arrow -->
    <path d="M 190 360 L 420 140" stroke="${GOLD_HIGHLIGHT}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".95"/>
    <path d="M 420 140 L 395 155 L 405 175 Z" fill="${GOLD_HIGHLIGHT}"/>
    <!-- label -->
    <text x="320" y="560" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="600" fill="${GOLD_LIGHT}" text-anchor="middle" letter-spacing="4">STARTUP ACT</text>
    <text x="320" y="590" font-family="Georgia, 'Times New Roman', serif" font-size="14" fill="#cbd5e1" text-anchor="middle" opacity=".75" letter-spacing="8">AMENDEMENTS 2026</text>
  `
);

// 3. Data Protection — shield with lock
const dataProtection = frame(
  `
    <!-- decorative nodes -->
    <g opacity=".4">
      <circle cx="110" cy="130" r="3" fill="${GOLD_LIGHT}"/>
      <circle cx="540" cy="150" r="3" fill="${GOLD_LIGHT}"/>
      <circle cx="120" cy="500" r="3" fill="${GOLD_LIGHT}"/>
      <circle cx="540" cy="470" r="3" fill="${GOLD_LIGHT}"/>
      <line x1="110" y1="130" x2="320" y2="280" stroke="${GOLD}" stroke-width="1"/>
      <line x1="540" y1="150" x2="320" y2="280" stroke="${GOLD}" stroke-width="1"/>
      <line x1="120" y1="500" x2="320" y2="420" stroke="${GOLD}" stroke-width="1"/>
      <line x1="540" y1="470" x2="320" y2="420" stroke="${GOLD}" stroke-width="1"/>
    </g>
    <!-- shield -->
    <path d="M 320 150 L 460 200 L 460 340 Q 460 440 320 500 Q 180 440 180 340 L 180 200 Z"
          fill="url(#gold)" opacity=".95"/>
    <path d="M 320 170 L 440 212 L 440 340 Q 440 425 320 478 Q 200 425 200 340 L 200 212 Z"
          fill="${INK_DEEP}" opacity=".92"/>
    <!-- lock body -->
    <rect x="275" y="310" width="90" height="80" rx="8" fill="url(#gold)"/>
    <!-- lock shackle -->
    <path d="M 290 310 L 290 285 Q 290 260 320 260 Q 350 260 350 285 L 350 310"
          stroke="${GOLD_LIGHT}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- keyhole -->
    <circle cx="320" cy="340" r="8" fill="${INK_DEEP}"/>
    <rect x="316" y="346" width="8" height="22" rx="2" fill="${INK_DEEP}"/>
    <!-- label -->
    <text x="320" y="560" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="600" fill="${GOLD_LIGHT}" text-anchor="middle" letter-spacing="3">DONNÉES PERSONNELLES</text>
    <text x="320" y="590" font-family="Georgia, 'Times New Roman', serif" font-size="14" fill="#cbd5e1" text-anchor="middle" opacity=".75" letter-spacing="8">RGPD TUNISIE 2026</text>
  `
);

// 4. Short-term Rentals — house silhouette with key
const shortTermRentals = frame(
  `
    <!-- skyline silhouette (far) -->
    <g opacity=".18">
      <rect x="50" y="420" width="45" height="120" fill="${GOLD}"/>
      <rect x="95" y="380" width="50" height="160" fill="${GOLD}"/>
      <rect x="145" y="440" width="40" height="100" fill="${GOLD}"/>
      <rect x="450" y="430" width="40" height="110" fill="${GOLD}"/>
      <rect x="490" y="390" width="55" height="150" fill="${GOLD}"/>
      <rect x="545" y="420" width="45" height="120" fill="${GOLD}"/>
    </g>
    <!-- main house -->
    <path d="M 220 280 L 320 200 L 420 280 L 420 460 L 220 460 Z"
          fill="url(#gold)" opacity=".95"/>
    <path d="M 230 288 L 320 216 L 410 288 L 410 452 L 230 452 Z"
          fill="${INK_DEEP}" opacity=".88"/>
    <!-- windows -->
    <rect x="258" y="310" width="40" height="50" fill="url(#gold)" opacity=".85"/>
    <rect x="342" y="310" width="40" height="50" fill="url(#gold)" opacity=".85"/>
    <line x1="278" y1="310" x2="278" y2="360" stroke="${INK_DEEP}" stroke-width="1.5"/>
    <line x1="258" y1="335" x2="298" y2="335" stroke="${INK_DEEP}" stroke-width="1.5"/>
    <line x1="362" y1="310" x2="362" y2="360" stroke="${INK_DEEP}" stroke-width="1.5"/>
    <line x1="342" y1="335" x2="382" y2="335" stroke="${INK_DEEP}" stroke-width="1.5"/>
    <!-- door -->
    <rect x="300" y="390" width="40" height="62" rx="2" fill="url(#gold)"/>
    <circle cx="332" cy="422" r="2.5" fill="${INK_DEEP}"/>
    <!-- key overlay -->
    <g transform="translate(420 330) rotate(30)">
      <circle cx="0" cy="0" r="28" fill="none" stroke="${GOLD_HIGHLIGHT}" stroke-width="9"/>
      <circle cx="0" cy="0" r="9" fill="${INK_DEEP}"/>
      <rect x="22" y="-6" width="95" height="12" rx="2" fill="${GOLD_HIGHLIGHT}"/>
      <rect x="95" y="-6" width="8" height="20" fill="${GOLD_HIGHLIGHT}"/>
      <rect x="110" y="-6" width="8" height="16" fill="${GOLD_HIGHLIGHT}"/>
    </g>
    <!-- label -->
    <text x="320" y="560" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="600" fill="${GOLD_LIGHT}" text-anchor="middle" letter-spacing="3">LOCATION TOURISTIQUE</text>
    <text x="320" y="590" font-family="Georgia, 'Times New Roman', serif" font-size="14" fill="#cbd5e1" text-anchor="middle" opacity=".75" letter-spacing="8">RÉGLEMENTATION 2026</text>
  `
);

const images = [
  { file: "blog-inheritance.jpg", svg: inheritance },
  { file: "blog-startup.jpg", svg: startup },
  { file: "blog-dataprotection.jpg", svg: dataProtection },
  { file: "blog-rentals.jpg", svg: shortTermRentals },
];

for (const { file, svg } of images) {
  const target = path.join(OUT_DIR, file);
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(target);
  console.log(`wrote ${file}`);
}

console.log("done.");
