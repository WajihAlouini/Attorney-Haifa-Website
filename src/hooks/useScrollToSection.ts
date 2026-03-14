import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { routeToSection } from "@/data/seo";

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

    const sectionId = routeToSection[location.pathname];

    if (!sectionId) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (sectionId === "hero") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, left: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);
}
