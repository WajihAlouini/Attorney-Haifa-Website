import { execSync } from "node:child_process";

// Shared libraries the Playwright chromium build links against. Vercel's
// Amazon Linux 2023 build image ships without them (browser launch dies
// with "error while loading shared libraries: libnspr4.so"), and
// `playwright install --with-deps` only supports apt-based distros.
// Builds on Vercel run as root, so install them with yum/dnf ourselves.
const AMAZON_LINUX_CHROMIUM_DEPS = [
  "alsa-lib",
  "at-spi2-atk",
  "at-spi2-core",
  "atk",
  "cairo",
  "cups-libs",
  "dbus-libs",
  "expat",
  "glib2",
  "libdrm",
  "libX11",
  "libxcb",
  "libXcomposite",
  "libXdamage",
  "libXext",
  "libXfixes",
  "libxkbcommon",
  "libXrandr",
  "mesa-libgbm",
  "nspr",
  "nss",
  "nss-util",
  "pango",
];

function run(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: "inherit", env: process.env, shell: true });
}

function getInstallCommand() {
  const parts = ["npx", "playwright", "install", "chromium"];

  if (
    process.platform === "linux" &&
    process.env.CI === "true" &&
    process.env.GITHUB_ACTIONS === "true"
  ) {
    parts.splice(3, 0, "--with-deps");
  }

  return parts.join(" ");
}

if (process.env.SKIP_PLAYWRIGHT_INSTALL === "1") {
  console.log("Skipping Playwright browser installation.");
  process.exit(0);
}

if (process.env.VERCEL === "1" && process.platform === "linux") {
  console.log("Vercel build detected: installing chromium system libraries.");
  try {
    run(`yum install -y -q ${AMAZON_LINUX_CHROMIUM_DEPS.join(" ")}`);
  } catch (error) {
    // Don't abort here — if a library is genuinely missing the browser
    // launch fails loudly during prerender anyway.
    console.warn(`System library install failed: ${error.message}`);
  }
}

run(getInstallCommand());
