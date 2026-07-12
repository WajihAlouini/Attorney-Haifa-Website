import http from "node:http";
import path from "node:path";
import { promises as fs } from "node:fs";
import { chromium } from "playwright";

const DIST_DIR = path.resolve(process.cwd(), "dist");
const BLOG_DIR = path.resolve(process.cwd(), "src", "content", "blog");
const HOST = "127.0.0.1";
const START_PORT = Number(process.env.PRERENDER_PORT || 4175);
const PUBLIC_ORIGIN = "https://maitre-haifaguedhami.me";
const LOCALIZED_LOCALES = ["en", "ar"];

const BASE_ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/droit-de-la-famille",
  "/services/droit-des-affaires",
  "/services/droit-immobilier",
  "/services/droit-penal",
  "/values",
  "/contact",
  "/actualites",
  "/avocat-divorce-tunisie",
  "/avocat-immobilier-tunisie",
  "/avocat-affaires-tunisie",
  "/consultation-juridique-tunisie",
  "/code-du-travail-tunisie",
  "/avocat-penal-tunisie",
  "/avocat-kairouan",
  "/avocat-divorce-kairouan",
  "/avocat-immobilier-kairouan",
  "/avocat-affaires-kairouan",
  "/consultation-juridique-kairouan",
];


function normalizeRoute(route) {
  if (route === "/") {
    return "/";
  }

  return `/${route.replace(/^\/+|\/+$/g, "")}`;
}

function splitLocaleRoute(route) {
  const normalizedRoute = normalizeRoute(route);
  const [, maybeLocale, ...rest] = normalizedRoute.split("/");

  if (maybeLocale === "en" || maybeLocale === "ar") {
    const routePath = rest.length > 0 ? `/${rest.join("/")}` : "/";
    return { locale: maybeLocale, routePath: normalizeRoute(routePath) };
  }

  return { locale: "fr", routePath: normalizedRoute };
}

function toLocalizedRoute(route, locale) {
  const { routePath } = splitLocaleRoute(route);

  if (locale === "fr") {
    return routePath;
  }

  return routePath === "/" ? `/${locale}` : `/${locale}${routePath}`;
}

async function getBlogRoutes() {
  const languages = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const slugs = new Set();

  for (const language of languages) {
    if (!language.isDirectory()) continue;

    const languageDir = path.join(BLOG_DIR, language.name);
    const entries = await fs.readdir(languageDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile() || path.extname(entry.name) !== ".md") continue;

      slugs.add(entry.name.replace(/\.md$/i, ""));
    }
  }

  return [...slugs].sort().map((slug) => `/actualites/${slug}`);
}

// Latest known change date per blog slug, from the `updated:` (preferred) or
// `date:` frontmatter field, across all language variants of the post.
async function getBlogLastmods() {
  const languages = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const lastmods = new Map();

  for (const language of languages) {
    if (!language.isDirectory()) continue;

    const languageDir = path.join(BLOG_DIR, language.name);
    const entries = await fs.readdir(languageDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile() || path.extname(entry.name) !== ".md") continue;

      const slug = entry.name.replace(/\.md$/i, "");
      const content = await fs.readFile(
        path.join(languageDir, entry.name),
        "utf8"
      );
      const match =
        content.match(/^updated:\s*"?(\d{4}-\d{2}-\d{2})"?\s*$/m) ||
        content.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})"?\s*$/m);
      if (!match) continue;

      const existing = lastmods.get(slug);
      if (!existing || match[1] > existing) {
        lastmods.set(slug, match[1]);
      }
    }
  }

  return lastmods;
}

const SITEMAP_LOCALES = ["fr", "en", "ar"];

function sitemapEntriesForRoute(routePath, lastmod, options = {}) {
  const alternateMarkup = [
    { locale: "fr", href: buildPublicUrl(routePath, "fr") },
    { locale: "en", href: buildPublicUrl(routePath, "en") },
    { locale: "ar", href: buildPublicUrl(routePath, "ar") },
    { locale: "x-default", href: buildPublicUrl(routePath, "fr") },
  ]
    .map(
      (link) =>
        `    <xhtml:link rel="alternate" hreflang="${link.locale}" href="${link.href}"/>`
    )
    .join("\n");

  return SITEMAP_LOCALES.map((locale) => {
    const lines = [
      "  <url>",
      `    <loc>${buildPublicUrl(routePath, locale)}</loc>`,
    ];
    if (lastmod) {
      lines.push(`    <lastmod>${lastmod}</lastmod>`);
    }
    lines.push(alternateMarkup);
    if (options.image) {
      lines.push(
        "    <image:image>",
        `      <image:loc>${options.image}</image:loc>`,
        "    </image:image>"
      );
    }
    lines.push("  </url>");
    return lines.join("\n");
  });
}

// The sitemap is generated from the same route list that drives prerendering,
// so a new page or blog post can never be missing from it. lastmod is only
// emitted where we have a real signal (blog frontmatter); static pages carry
// none rather than a made-up date.
function buildSitemapXml(blogRoutes, blogLastmods) {
  const newestPostDate = [...blogLastmods.values()].sort().pop();
  const entries = [];

  for (const route of BASE_ROUTES) {
    entries.push(
      ...sitemapEntriesForRoute(
        route,
        route === "/actualites" ? newestPostDate : undefined,
        route === "/" ? { image: `${PUBLIC_ORIGIN}/office/entry.webp` } : {}
      )
    );
  }

  for (const route of blogRoutes) {
    const slug = route.split("/").pop();
    entries.push(...sitemapEntriesForRoute(route, blogLastmods.get(slug)));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join("\n")}
</urlset>
`;
}

async function getPrerenderTargets(blogRoutes) {
  const targets = new Map();
  const standardRoutes = [...BASE_ROUTES, ...blogRoutes];

  for (const route of standardRoutes) {
    const normalizedRoute = normalizeRoute(route);
    targets.set(normalizedRoute, {
      visitRoute: normalizedRoute,
      outputRoute: normalizedRoute,
    });
  }

  for (const locale of LOCALIZED_LOCALES) {
    for (const route of standardRoutes) {
      const normalizedRoute = normalizeRoute(route);
      const visitRoute = toLocalizedRoute(normalizedRoute, locale);
      const outputRoute = visitRoute;

      targets.set(outputRoute, { visitRoute, outputRoute });
    }
  }

  return [...targets.values()];
}

function buildPublicUrl(pathname, locale) {
  return `${PUBLIC_ORIGIN}${toLocalizedRoute(pathname, locale)}`;
}

function getAlternateLinksForTarget(visitRoute) {
  const routeUrl = new URL(visitRoute, `${PUBLIC_ORIGIN}/`);
  const { locale, routePath } = splitLocaleRoute(routeUrl.pathname);

  return [
    { locale: "fr", href: buildPublicUrl(routePath, "fr") },
    { locale: "en", href: buildPublicUrl(routePath, "en") },
    { locale: "ar", href: buildPublicUrl(routePath, "ar") },
    { locale: "x-default", href: buildPublicUrl(routePath, "fr") },
    { locale: locale, href: buildPublicUrl(routePath, locale) },
  ].filter(
    (link, index, links) =>
      links.findIndex((candidate) => candidate.locale === link.locale) === index
  );
}

function injectAlternateLinks(html, visitRoute) {
  const cleanHtml = html.replace(/\s*<link[^>]+rel="alternate"[^>]*>/gi, "");
  const alternateMarkup = getAlternateLinksForTarget(visitRoute)
    .map(
      (link) =>
        `\n    <link rel="alternate" hreflang="${link.locale}" href="${link.href}">`
    )
    .join("");

  return cleanHtml.replace("</head>", `${alternateMarkup}\n  </head>`);
}

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

function toSafeFilePath(urlPath) {
  const pathname = decodeURIComponent(urlPath.split("?")[0] || "/");
  const normalizedPath = pathname === "/" ? "" : pathname.replace(/^\/+/, "");
  const candidate = path.normalize(path.join(DIST_DIR, normalizedPath));

  if (!candidate.startsWith(DIST_DIR)) {
    return null;
  }

  return { pathname, candidate };
}

async function fileExists(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

async function resolveStaticAsset(urlPath) {
  const safe = toSafeFilePath(urlPath);
  if (!safe) return null;

  const { pathname, candidate } = safe;
  const hasExtension = path.extname(candidate) !== "";
  const candidates = [];

  if (pathname === "/") {
    candidates.push(path.join(DIST_DIR, "index.html"));
  }

  if (hasExtension) {
    candidates.push(candidate);
  } else {
    candidates.push(path.join(candidate, "index.html"));
    candidates.push(`${candidate}.html`);
  }

  for (const filePath of candidates) {
    if (await fileExists(filePath)) {
      return filePath;
    }
  }

  return null;
}

async function startStaticServer(startPort = START_PORT) {
  const fallbackFile = path.join(DIST_DIR, "index.html");
  let currentPort = startPort;

  while (currentPort < startPort + 20) {
    const server = http.createServer(async (req, res) => {
      try {
        const urlPath = req.url || "/";
        const staticFile = await resolveStaticAsset(urlPath);
        const filePath = staticFile || fallbackFile;
        const data = await fs.readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || "application/octet-stream";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(
          `Prerender server error: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    });

    try {
      await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(currentPort, HOST, resolve);
      });
      return { server, port: currentPort };
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === "EADDRINUSE"
      ) {
        currentPort += 1;
        continue;
      }
      throw error;
    }
  }

  throw new Error("Unable to find a free prerender port.");
}

function routeToOutputFile(route) {
  const cleanRoute = normalizeRoute(route);

  if (cleanRoute === "/") {
    return path.join(DIST_DIR, "index.html");
  }

  return path.join(DIST_DIR, cleanRoute.replace(/^\/+/, ""), "index.html");
}

async function prerenderRoute(page, target, baseUrl) {
  const url = `${baseUrl}${target.visitRoute}`;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForSelector("#root");
  await page.waitForTimeout(150);

  let html = await page.content();
  if (!html.trimStart().toLowerCase().startsWith("<!doctype")) {
    html = `<!doctype html>\n${html}`;
  }

  html = injectAlternateLinks(html, target.visitRoute);

  const outputFile = routeToOutputFile(target.outputRoute);
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, html, "utf8");
}

async function main() {
  const { server, port } = await startStaticServer();
  const baseUrl = `http://${HOST}:${port}`;
  console.log(`Prerender server running at ${baseUrl}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.addInitScript(() => {
    try {
      localStorage.setItem(
        "cookie_preferences",
        JSON.stringify({
          essential: true,
          analytics: false,
          marketing: false,
        })
      );
    } catch {
      // Ignore localStorage errors in prerender context.
    }
  });
  const page = await context.newPage();
  const blogRoutes = await getBlogRoutes();
  const targets = await getPrerenderTargets(blogRoutes);

  try {
    for (const target of targets) {
      process.stdout.write(
        `Prerendering ${target.visitRoute} -> ${target.outputRoute} ... `
      );
      await prerenderRoute(page, target, baseUrl);
      process.stdout.write("done\n");
    }

    const blogLastmods = await getBlogLastmods();
    const sitemapXml = buildSitemapXml(blogRoutes, blogLastmods);
    await fs.writeFile(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf8");
    console.log(
      `Sitemap generated with ${targets.length} URLs -> dist/sitemap.xml`
    );
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }

  console.log("Prerender complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
