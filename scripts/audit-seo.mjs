import { readFile } from "node:fs/promises";
import path from "node:path";
import { gunzipSync, brotliDecompressSync } from "node:zlib";
import { JSDOM } from "jsdom";

const dist = path.resolve("dist");
const sitemap = new JSDOM(
  await readFile(path.join(dist, "sitemap.xml"), "utf8"),
  { contentType: "text/xml" }
);
const urls = [...sitemap.window.document.querySelectorAll("url > loc")].map(
  (node) => node.textContent
);
const failures = [];
for (const [extension, decompress] of [
  ["gz", gunzipSync],
  ["br", brotliDecompressSync],
]) {
  const xml = await readFile(path.join(dist, "sitemap.xml"), "utf8");
  const compressed = await readFile(path.join(dist, `sitemap.xml.${extension}`));
  if (decompress(compressed).toString("utf8") !== xml) {
    failures.push(`sitemap.xml: stale ${extension} sitemap`);
  }
}
const titles = new Map();
if (!urls.length) throw new Error("Sitemap has no URLs");
for (const url of urls) {
  const route = new URL(url).pathname;
  const file = path.join(dist, route.replace(/^\//, ""), "index.html");
  const html = await readFile(file, "utf8");
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const check = (condition, message) => {
    if (!condition) failures.push(`${route}: ${message}`);
  };
  check(
    document.querySelectorAll('link[rel="canonical"]').length === 1,
    "expected one canonical"
  );
  check(
    document.querySelector('link[rel="canonical"]')?.href === url,
    "canonical differs from sitemap"
  );
  check(
    document.querySelector('meta[property="og:url"]')?.content === url,
    "Open Graph URL differs from sitemap"
  );
  check(document.querySelectorAll("h1").length === 1, "expected one H1");
  check(
    document.querySelector('meta[name="description"]')?.content.trim(),
    "missing description"
  );
  check(
    !/noindex/.test(
      document.querySelector('meta[name="robots"]')?.content || ""
    ),
    "sitemap page is noindex"
  );
  const locale = /^\/(en|ar)(\/|$)/.exec(route)?.[1] || "fr";
  check(document.documentElement.lang === locale, "incorrect language");
  check(document.title.trim(), "missing title");
  check(
    !titles.has(document.title),
    `duplicate title with ${titles.get(document.title)}`
  );
  titles.set(document.title, route);
  for (const language of ["fr", "en", "ar", "x-default"]) {
    const alternate = document.querySelector(`link[hreflang="${language}"]`);
    check(
      alternate && urls.includes(alternate.href),
      `missing or unavailable ${language} alternate`
    );
  }
  const schemas = [
    ...document.querySelectorAll('script[type="application/ld+json"]'),
  ];
  // The editorial values page has no dedicated schema; structured data is
  // optional there. Require it on the routes where the site supplies it.
  if (!route.endsWith("/values")) {
    check(schemas.length > 0, "missing structured data");
  }
  for (const schema of schemas) {
    try {
      JSON.parse(schema.textContent);
    } catch {
      check(false, "invalid JSON-LD");
    }
  }
  for (const [extension, decompress] of [
    ["gz", gunzipSync],
    ["br", brotliDecompressSync],
  ]) {
    const compressed = await readFile(`${file}.${extension}`);
    check(
      decompress(compressed).toString("utf8") === html,
      `stale ${extension} HTML`
    );
  }
  if (route.includes("/actualites/"))
    check(
      document.querySelector('a[rel="author"]'),
      "missing visible author link"
    );
  dom.window.close();
}
sitemap.window.close();
if (failures.length) throw new Error(failures.join("\n"));
console.log(
  `SEO audit passed: ${urls.length} pages, canonical and Open Graph URLs, languages, titles, headings, descriptions, alternate links, JSON-LD, author links, compressed HTML and sitemap.`
);
