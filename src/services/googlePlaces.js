import { translations } from "@/data/translations";

export const fetchGoogleReviews = async (
  placeId,
  apiKey,
  languageCode,
  locale
) => {
  if (!apiKey || !placeId || placeId.includes("REPLACE_WITH_GOOGLE_PLACE_ID")) {
    return null;
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/${placeId}?languageCode=${languageCode}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to load reviews");
  }

  const data = await response.json();

  if (Array.isArray(data.reviews) && data.reviews.length) {
    return data.reviews.slice(0, 6).map((review) => {
      const ratingValue = Math.round(review.rating ?? 5);
      const safeRating = Math.min(5, Math.max(1, ratingValue));
      const stars = "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
      return {
        rating: stars,
        text:
          review.originalText?.text ||
          review.text ||
          translations[locale].reviewsNote,
        author: review.authorAttribution?.displayName || "Google Maps user",
      };
    });
  }

  return null;
};
