import { useEffect } from "react";

export function useScrollAnimation(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all current fade-in-section elements
    const observeAll = () => {
      const elements = document.querySelectorAll(
        ".fade-in-section:not(.fade-in-visible)"
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Watch for lazy-loaded sections that appear later via Suspense
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
