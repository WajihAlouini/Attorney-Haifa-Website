export function Reviews({ t, liveReviews, mapShareUrl, isLoading }) {
    const reviewsToRender = liveReviews ?? t.reviews

    return (
        <section className="reviews" id="reviews">
            <div className="section-header">
                <p className="section-eyebrow">{t.reviewsEyebrow}</p>
                <h2>{t.reviewsHeading}</h2>
                <small className="reviews-note">
                    {t.reviewsNote}{' '}
                    <a href={mapShareUrl} target="_blank" rel="noreferrer">
                        Google Maps
                    </a>
                </small>
            </div>
            {isLoading ? (
                <div className="reviews-loading">
                    <div className="spinner"></div>
                    <p>Chargement des avis...</p>
                </div>
            ) : (
                <div className="review-grid">
                    {reviewsToRender.map((item, index) => (
                        <article
                            key={item.author}
                            className="review-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="review-rating">{item.rating}</span>
                            <p>{item.text}</p>
                            <footer>{item.author}</footer>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}

