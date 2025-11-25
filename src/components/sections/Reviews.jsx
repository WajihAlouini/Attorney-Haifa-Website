export function Reviews({ t, liveReviews, mapShareUrl, isLoading }) {
    const reviewsToRender = liveReviews ?? t.reviews

    return (
        <section className="reviews" id="reviews">
            <div className="section-header">
                <p className="section-eyebrow">{t.reviewsEyebrow}</p>
                <h2>{t.reviewsHeading}</h2>
            </div>
            {isLoading ? (
                <div className="reviews-loading">
                    <div className="spinner"></div>
                    <p>Chargement...</p>
                </div>
            ) : (
                <>
                    <div className="review-grid">
                        {reviewsToRender.map((item, index) => (
                            <article
                                key={item.author}
                                className="review-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="review-avatar">
                                    {item.author.charAt(0)}
                                </div>
                                <span className="review-rating">{item.rating}</span>
                                <p className="review-text">"{item.text}"</p>
                                <footer className="review-author">{item.author}</footer>
                            </article>
                        ))}
                    </div>
                    {mapShareUrl && (
                        <p className="reviews-cta">
                            <a href={mapShareUrl} target="_blank" rel="noreferrer">
                                Voir plus d'avis →
                            </a>
                        </p>
                    )}
                </>
            )}
        </section>
    )
}