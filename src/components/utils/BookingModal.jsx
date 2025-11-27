import { useEffect, useRef } from "react";

export function BookingModal({ isOpen, onClose, calLink, locale = "fr" }) {
  const modalRef = useRef(null);
  const calRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !calRef.current || !window.Cal) return;

    // Clear previous embed content
    calRef.current.innerHTML = "";

    // Initialize inline widget
    window.Cal("inline", {
      elementOrSelector: calRef.current,
      calLink: calLink,
      layout: "month_view",
      config: {
        theme: "light",
        locale: locale,
      },
    });

    // UI instruction to set theme
    window.Cal("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#c5a059",
        },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, [isOpen, calLink, locale]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="booking-modal-overlay"
      onClick={(e) => e.target === modalRef.current && onClose()}
    >
      <div className="booking-modal-content">
        <button
          className="booking-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div
          ref={calRef}
          className="booking-inline-widget"
          style={{ minWidth: "320px", height: "700px", width: "100%" }}
        />
      </div>
    </div>
  );
}
