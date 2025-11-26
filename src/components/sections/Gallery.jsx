import { useState } from 'react'
export function Gallery({ t, officePhotos }) {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section className="gallery">
            <div className="section-header">
                <p className="section-eyebrow">{t.galleryEyebrow}</p>
                <h2>{t.galleryHeading}</h2>
            </div>
            <div className="gallery-grid">
                {officePhotos.map((photo) => (
                    <figure 
                        key={photo.src} 
                        className="gallery-card"
                        onClick={() => setSelectedImage(photo)}
                        style={{ cursor: 'zoom-in' }}
                    >
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </figure>
                ))}
            </div>

            {selectedImage && (
                <div 
                    className="lightbox-overlay" 
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button 
                            className="lightbox-close"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </section>
    )
}

