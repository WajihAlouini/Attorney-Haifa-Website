import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routeToSection } from "@/data/seo";

// Hook to scroll to section on route change
export function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = routeToSection[location.pathname];

    if (sectionId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (location.pathname === "/") {
          // Scroll to top for home
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]);
}
