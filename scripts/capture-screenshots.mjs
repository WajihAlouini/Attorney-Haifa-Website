import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ARTIFACT_DIR =
  "C:\\Users\\Wajih\\.gemini\\antigravity\\brain\\a04fcd0c-4efe-4176-8c7f-d681b2a7791d";
const SITE_URL = "https://attorney-haifa-website.vercel.app";

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  console.log("📸 Capturing website screenshots...\n");

  // 1. Desktop Hero - English
  console.log("1/4 Capturing English desktop view...");
  const pageEN = await context.newPage();
  await pageEN.setViewportSize({ width: 1920, height: 1080 });
  await pageEN.goto(SITE_URL);
  await pageEN.waitForLoadState("networkidle");
  await pageEN.waitForTimeout(2000); // Wait for animations
  await pageEN.screenshot({
    path: join(ARTIFACT_DIR, "website_desktop_english.png"),
    fullPage: false,
  });
  await pageEN.close();

  // 2. Desktop Hero - French
  console.log("2/4 Capturing French desktop view...");
  const pageFR = await context.newPage();
  await pageFR.setViewportSize({ width: 1920, height: 1080 });
  await pageFR.goto(SITE_URL);
  await pageFR.waitForLoadState("networkidle");
  // Click French language button
  await pageFR.click('button[aria-label*="French"], button:has-text("FR")');
  await pageFR.waitForTimeout(1000);
  await pageFR.screenshot({
    path: join(ARTIFACT_DIR, "website_desktop_french.png"),
    fullPage: false,
  });
  await pageFR.close();

  // 3. Desktop Hero - Arabic (RTL)
  console.log("3/4 Capturing Arabic desktop view (RTL)...");
  const pageAR = await context.newPage();
  await pageAR.setViewportSize({ width: 1920, height: 1080 });
  await pageAR.goto(SITE_URL);
  await pageAR.waitForLoadState("networkidle");
  // Click Arabic language button
  await pageAR.click('button[aria-label*="Arabic"], button:has-text("AR")');
  await pageAR.waitForTimeout(1000);
  await pageAR.screenshot({
    path: join(ARTIFACT_DIR, "website_desktop_arabic.png"),
    fullPage: false,
  });
  await pageAR.close();

  // 4. Mobile View - English
  console.log("4/4 Capturing mobile view...");
  const pageMobile = await context.newPage();
  await pageMobile.setViewportSize({ width: 375, height: 812 }); // iPhone X size
  await pageMobile.goto(SITE_URL);
  await pageMobile.waitForLoadState("networkidle");
  await pageMobile.waitForTimeout(2000);
  await pageMobile.screenshot({
    path: join(ARTIFACT_DIR, "website_mobile_view.png"),
    fullPage: true,
  });
  await pageMobile.close();

  await browser.close();

  console.log("\n✅ All screenshots captured successfully!");
  console.log(`📁 Saved to: ${ARTIFACT_DIR}`);
}

captureScreenshots().catch(console.error);
