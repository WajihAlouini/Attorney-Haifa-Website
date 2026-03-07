import { execSync } from "node:child_process";

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

const command = getInstallCommand();

console.log(`Ensuring Playwright browser is installed: ${command}`);

execSync(command, {
  stdio: "inherit",
  env: process.env,
  shell: true,
});
