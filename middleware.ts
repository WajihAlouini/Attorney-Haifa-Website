const LEGACY_QUERY_LOCALES = new Set(["fr", "en", "ar"]);
const LOCALE_PREFIX_PATTERN = /^\/(?:en|ar)(?=\/|$)/;

function continueRequest() {
  const response = new Response();
  response.headers.set("x-middleware-next", "1");
  return response;
}

export default function middleware(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return continueRequest();
  }

  const sourceUrl = new URL(request.url);
  const requestedLocale = sourceUrl.searchParams.get("lang");

  if (!requestedLocale || !LEGACY_QUERY_LOCALES.has(requestedLocale)) {
    return continueRequest();
  }

  const unprefixedPath = sourceUrl.pathname.replace(LOCALE_PREFIX_PATTERN, "") || "/";
  const targetUrl = new URL(sourceUrl);

  targetUrl.searchParams.delete("lang");
  targetUrl.pathname =
    requestedLocale === "fr"
      ? unprefixedPath
      : `/${requestedLocale}${unprefixedPath === "/" ? "" : unprefixedPath}`;

  return Response.redirect(targetUrl, 301);
}
