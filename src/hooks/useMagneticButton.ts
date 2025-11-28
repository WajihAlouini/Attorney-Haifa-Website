import { useEffect } from "react";

export function useMagneticButton(): void {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const buttons = document.querySelectorAll<HTMLElement>(".btn-magnetic");

      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
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

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
}
