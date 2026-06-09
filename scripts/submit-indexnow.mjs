const DEFAULT_HOST = "maitre-haifaguedhami.me";
const DEFAULT_KEY = "2701fbaa3869130ef127ba2e633476f8";
const DEFAULT_API_URL = "https://api.indexnow.org/IndexNow";

const host = process.env.INDEXNOW_HOST || DEFAULT_HOST;
const key = process.env.INDEXNOW_KEY || DEFAULT_KEY;
const keyLocation =
  process.env.INDEXNOW_KEY_LOCATION || `https://${host}/${key}.txt`;
const sitemapUrl =
  process.env.INDEXNOW_SITEMAP_URL || `https://${host}/sitemap.xml`;
const apiUrl = process.env.INDEXNOW_API_URL || DEFAULT_API_URL;
const dryRun = process.env.INDEXNOW_DRY_RUN === "1";
const maxUrls = Number(process.env.INDEXNOW_MAX_URLS || 10000);

function decodeXmlText(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

async function fetchSitemap() {
  const response = await fetch(sitemapUrl, {
    headers: { "User-Agent": "IndexNow submitter for maitre-haifaguedhami.me" },
  });

  if (!response.ok) {
    throw new Error(
      `Could not fetch sitemap ${sitemapUrl}: ${response.status} ${response.statusText}`
    );
  }

  return response.text();
}

function extractCanonicalUrls(sitemapXml) {
  const urls = new Set();

  function addUrl(rawUrl) {
    const parsedUrl = new URL(rawUrl);

    if (parsedUrl.hostname !== host) return;
    if (parsedUrl.search) return;
    if (parsedUrl.pathname.includes("__locale")) return;

    urls.add(parsedUrl.toString());
  }

  for (const match of sitemapXml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)) {
    addUrl(decodeXmlText(match[1].trim()));
  }

  for (const match of sitemapXml.matchAll(/\shref=(["'])(.*?)\1/gi)) {
    addUrl(decodeXmlText(match[2].trim()));
  }

  return [...urls].slice(0, maxUrls);
}

async function submitUrls(urlList) {
  const body = {
    host,
    key,
    keyLocation,
    urlList,
  };

  if (dryRun) {
    console.log(`IndexNow dry run: would submit ${urlList.length} URLs`);
    console.log(JSON.stringify(body, null, 2));
    return;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (response.status !== 200 && response.status !== 202) {
    const responseText = await response.text();
    throw new Error(
      `IndexNow submission failed: ${response.status} ${response.statusText} ${responseText}`
    );
  }

  console.log(`IndexNow submitted ${urlList.length} URLs`);
}

const sitemapXml = await fetchSitemap();
const urlList = extractCanonicalUrls(sitemapXml);

if (urlList.length === 0) {
  throw new Error(`No canonical URLs found in sitemap ${sitemapUrl}`);
}

await submitUrls(urlList);
