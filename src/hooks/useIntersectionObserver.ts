import { useEffect } from "react";

/**
 * Custom hook for intersection observer (fade-in animations)
 * @param {string} selector - CSS selector for elements to observe
 * @param {number} threshold - Intersection threshold (0-1)
 */
export function useIntersectionObserver(
  selector = ".fade-in-section",
  threshold = 0.1
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}
