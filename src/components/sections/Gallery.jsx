import React from 'react'

export function Gallery({ t, officePhotos }) {
    return (
        <section className="gallery">
            <div className="section-header">
                <p className="section-eyebrow">{t.galleryEyebrow}</p>
                <h2>{t.galleryHeading}</h2>
                {/* optional note removed */}
            </div>
            <div className="gallery-grid">
                {officePhotos.map((photo) => (
                    <figure key={photo.src} className="gallery-card">
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </figure>
                ))}
            </div>
        </section>
    )
}
