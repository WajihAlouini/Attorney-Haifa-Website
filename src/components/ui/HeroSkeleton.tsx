import styles from "./HeroSkeleton.module.css";

// Layout-matching placeholder for the lazy-loaded Home page. The app
// client-renders over the prerendered HTML, so while the Home chunk
// loads the hero area would otherwise show a spinner — this keeps the
// section's real geometry (copy column + portrait frame) so the page
// reads as materializing progressively into the hero's entrance
// animation instead of flashing a loader.
export function HeroSkeleton() {
  return (
    <section className={styles.hero} aria-hidden="true">
      <div className={styles.shell}>
        <div className={styles.stage}>
          <div className={styles.copy}>
            <span className={`${styles.bone} ${styles.brand}`} />
            <span className={`${styles.bone} ${styles.role}`} />
            <span className={`${styles.bone} ${styles.headingA}`} />
            <span className={`${styles.bone} ${styles.headingB}`} />
            <span className={`${styles.bone} ${styles.ledeA}`} />
            <span className={`${styles.bone} ${styles.ledeB}`} />
            <div className={styles.actions}>
              <span className={`${styles.bone} ${styles.pill}`} />
              <span className={`${styles.bone} ${styles.pill}`} />
              <span className={`${styles.bone} ${styles.pill}`} />
            </div>
          </div>
          <div className={styles.figureColumn}>
            <div className={`${styles.bone} ${styles.figure}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
