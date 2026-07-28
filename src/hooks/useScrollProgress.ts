import { useState, useEffect } from "react";

interface UseScrollProgressReturn {
  scrollProgress: number;
  showScrollTop: boolean;
  scrollToTop: () => void;
}

export function useScrollProgress(): UseScrollProgressReturn {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Pages shorter than the viewport have nothing to scroll — avoid 0/0
      // producing NaN (which ends up in width and aria-valuenow).
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress =
        totalScrollableHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / totalScrollableHeight) * 100))
          : 0;

      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { scrollProgress, showScrollTop, scrollToTop };
}
