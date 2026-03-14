import { useEffect } from "react";

export function useMagneticButton(): void {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".btn-magnetic")
    );
    if (buttons.length === 0) return;

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const resetButtons = () => {
      buttons.forEach((button) => {
        button.style.transform = "translate(0, 0)";
      });
    };

    const applyMagnetism = () => {
      rafId = null;

      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const x = mouseX - rect.left - rect.width / 2;
        const y = mouseY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          const strength = (100 - distance) / 100;
          button.style.transform = `translate(${x * strength * 0.3}px, ${
            y * strength * 0.3
          }px)`;
        } else {
          button.style.transform = "translate(0, 0)";
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (rafId === null) {
        rafId = window.requestAnimationFrame(applyMagnetism);
      }
    };

    const handleMouseLeave = () => {
      resetButtons();
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      resetButtons();
    };
  }, []);
}
