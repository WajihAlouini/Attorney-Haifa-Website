import { useState } from "react";
import styles from "./Gallery.module.css";

export function Gallery({ t, officePhotos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.gallery}>
      <div className="section-header">
        <p className="section-eyebrow">{t.galleryEyebrow}</p>
        <h2>{t.galleryHeading}</h2>
      </div>
      <div className={styles.grid}>
        {officePhotos.map((photo) => (
          <figure
            key={photo.src}
            className={styles.card}
            onClick={() => setSelectedImage(photo)}
            style={{ cursor: "zoom-in" }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.close}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}
