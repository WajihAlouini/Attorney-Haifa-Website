export type SiteLocale = "fr" | "en" | "ar";

export const SITE_URL = "https://maitre-haifaguedhami.me";

export function resolveSiteLocale(locale: string | null | undefined): SiteLocale {
  if (locale === "en" || locale === "ar") {
    return locale;
  }

  return "fr";
}

export function normalizeRoutePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const cleanPath = `/${pathname.replace(/^\/+|\/+$/g, "")}`;
  return cleanPath === "/" ? "/" : cleanPath;
}

export function splitLocalePathname(pathname: string): {
  locale: SiteLocale;
  routePath: string;
  isPrefixed: boolean;
} {
  const normalizedPath = normalizeRoutePath(pathname);
  const [, maybeLocale, ...rest] = normalizedPath.split("/");

  if (maybeLocale === "en" || maybeLocale === "ar") {
    const routePath = rest.length > 0 ? `/${rest.join("/")}` : "/";
    return {
      locale: maybeLocale,
      routePath: normalizeRoutePath(routePath),
      isPrefixed: true,
    };
  }

  return {
    locale: "fr",
    routePath: normalizedPath,
    isPrefixed: false,
  };
}

export function stripLangSearch(search: string): string {
  const params = new URLSearchParams(search);
  params.delete("lang");

  const serialized = params.toString();
  return serialized ? `?${serialized}` : "";
}

export function getQueryLocale(search: string): SiteLocale | null {
  const lang = new URLSearchParams(search).get("lang");
  if (lang === "fr" || lang === "en" || lang === "ar") {
    return lang;
  }

  return null;
}

export function buildLocalizedPath(
  pathname: string,
  locale: string | null | undefined
): string {
  const resolvedLocale = resolveSiteLocale(locale);
  const { routePath } = splitLocalePathname(pathname);

  if (resolvedLocale === "fr") {
    return routePath;
  }

  return routePath === "/" ? `/${resolvedLocale}` : `/${resolvedLocale}${routePath}`;
}

export function localizedTo(
  pathname: string,
  locale: string | null | undefined,
  options: { search?: string; hash?: string } = {}
) {
  return {
    pathname: buildLocalizedPath(pathname, locale),
    search: stripLangSearch(options.search ?? ""),
    hash: options.hash ?? "",
  };
}

export function buildLocalizedUrl(pathname: string, locale: string): string {
  return `${SITE_URL}${buildLocalizedPath(pathname, locale)}`;
}
