// CI security gate: fails on high/critical advisories in production
// dependencies, except explicitly allowlisted ones. Each allowlist entry
// must document why the advisory does not apply to this deployment and
// when to remove it.
import { execSync } from "node:child_process";

const ALLOWLIST = new Map([
  [
    "GHSA-qwww-vcr4-c8h2",
    // react-router "RSC Mode CSRF Bypass" — only exploitable through React
    // Router's server-side RSC action handling. This site is a fully static
    // client-side SPA (no server runtime, no RSC, no actions), so the
    // vulnerable path never executes. No patched 7.x exists (7.18.1 is
    // latest; the fix shipped in 8.2.1+). Remove this entry once a patched
    // 7.x is released or the app migrates to react-router v8. Added 2026-07-28.
    "react-router RSC-mode CSRF — inapplicable to a static SPA",
  ],
]);

let raw;
try {
  raw = execSync("npm audit --json --omit=dev", { encoding: "utf8" });
} catch (error) {
  // npm audit exits non-zero when vulnerabilities exist; the JSON report
  // is still on stdout.
  raw = error.stdout;
  if (!raw) {
    console.error("npm audit produced no output:", error.message);
    process.exit(1);
  }
}

const report = JSON.parse(raw);
const failures = [];
const suppressed = [];

for (const [name, info] of Object.entries(report.vulnerabilities ?? {})) {
  if (info.severity !== "high" && info.severity !== "critical") continue;

  // Direct advisories are objects in `via`; strings are transitive
  // references to another vulnerable package already reported separately.
  const advisories = info.via.filter((v) => typeof v === "object");
  for (const adv of advisories) {
    const ghsa = (adv.url ?? "").split("/").pop() ?? "";
    if (ALLOWLIST.has(ghsa)) {
      suppressed.push(`${name}: ${ghsa} (${ALLOWLIST.get(ghsa)})`);
    } else {
      failures.push(`${name} [${adv.severity}]: ${adv.title} — ${adv.url}`);
    }
  }
}

for (const line of suppressed) console.log(`allowlisted: ${line}`);

if (failures.length > 0) {
  console.error("\nSecurity audit failed:");
  for (const line of failures) console.error(`  - ${line}`);
  process.exit(1);
}

console.log("Security audit passed.");
