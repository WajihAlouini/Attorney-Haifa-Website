import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { routeToSection } from "@/data/seo";
import { splitLocalePathname } from "@/utils/localeRoutes";

// Hook to scroll to section on route change
export function useScrollToSection() {
  const location = useLocation();
  const hasMounted = useRef(false);

  useEffect(() => {
    // Avoid forcing a smooth scroll on the very first page paint.
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    // A navigation can carry an explicit target (e.g. footer quick links
    // scroll to a homepage section); otherwise derive it from the route.
    // routeToSection is keyed on unprefixed paths ("/about"), so strip the
    // /en and /ar locale prefixes before looking up.
    const stateTarget = (location.state as { scrollTo?: string } | null)
      ?.scrollTo;
    const { routePath } = splitLocalePathname(location.pathname);
    const sectionId = stateTarget ?? routeToSection[routePath];

    if (!sectionId || sectionId === "hero") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    // Sections are lazy-loaded, so the target may mount well after the
    // route changes — poll until it exists instead of guessing a delay.
    let cancelled = false;
    const deadline = Date.now() + 4000;
    const tryScroll = () => {
      if (cancelled) return;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: stateTarget ? "smooth" : "auto",
          block: "start",
        });
        return;
      }
      if (Date.now() < deadline) {
        // setTimeout rather than requestAnimationFrame: rAF stops firing in
        // backgrounded tabs, which would strand the pending scroll.
        window.setTimeout(tryScroll, 100);
      } else if (!stateTarget) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };
    tryScroll();

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.state]);
}
