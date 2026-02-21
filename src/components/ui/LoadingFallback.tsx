import { ReactNode } from "react";
import styles from "./LoadingFallback.module.css";

export function LoadingFallback(): ReactNode {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>
    </div>
  );
}
