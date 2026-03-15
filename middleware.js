export const config = {
  matcher:
    "/((?!__locale|assets|_next|favicon|logo|manifest|robots|sitemap|office|portrait|blog-).*)",
};

export default function middleware(request) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");

  if (lang === "en" || lang === "ar") {
    const dest = new URL(request.url);
    dest.pathname = `/__locale/${lang}${url.pathname}`;
    dest.searchParams.delete("lang");

    return new Response(null, {
      headers: { "x-middleware-rewrite": dest.toString() },
    });
  }
}
