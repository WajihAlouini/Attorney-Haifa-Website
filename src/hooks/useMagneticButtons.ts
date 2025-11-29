import { useEffect } from "react";

/**
 * Custom hook for magnetic button effect
 * Buttons move slightly toward the cursor when nearby
 */
export function useMagneticButtons() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const buttons = document.querySelectorAll(".btn-magnetic");
      buttons.forEach((button) => {
        const btn = button as HTMLElement;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          const strength = (100 - distance) / 100;
          btn.style.transform = `translate(${x * strength * 0.2}px, ${
            y * strength * 0.2
          }px)`;
        } else {
          btn.style.transform = "translate(0, 0)";
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
}
