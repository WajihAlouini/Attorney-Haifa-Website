import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./Toast.module.css";

export type ToastType = "success" | "error";

interface ToastProps {
  show: boolean;
  type: ToastType;
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  show,
  type,
  title,
  message,
  onClose,
  duration = 5000,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose();
    }, 300); // Match animation duration
  }, [onClose]);

  useEffect(() => {
    if (show) {
      // Small timeout to allow render before animation
      const openTimer = setTimeout(() => {
        setIsVisible(true);
        setIsClosing(false);
      }, 10);

      const closeTimer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => {
        clearTimeout(openTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [show, duration, handleClose]);

  if (!isVisible && !show) return null;

  return createPortal(
    <div
      className={`${styles.toast} ${styles[type]} ${
        isClosing ? styles.exit : styles.enter
      }`}
      role="alert"
    >
      <div className={styles.content}>
        <div className={styles.icon}>{type === "success" ? "✓" : "✕"}</div>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.message}>{message}</p>
        </div>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <div className={`${styles.progressBar} ${styles[`progress-${type}`]}`} />
    </div>,
    document.body
  );
}
