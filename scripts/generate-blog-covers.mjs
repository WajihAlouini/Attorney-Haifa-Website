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

const images = [
  { file: "blog-inheritance.jpg", svg: inheritance },
];

for (const { file, svg } of images) {
  const target = path.join(OUT_DIR, file);
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(target);
  console.log(`wrote ${file}`);
}

console.log("done.");
