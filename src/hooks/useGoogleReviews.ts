import { useState, useEffect } from "react";
import { GoogleReview } from "@/types";
import { fetchGoogleReviews } from "@/services/googlePlaces";

interface UseGoogleReviewsReturn {
  reviews: GoogleReview[] | null;
  isLoading: boolean;
}

export function useGoogleReviews(
  locale: string,
  languageCode: string
): UseGoogleReviewsReturn {
  const [reviews, setReviews] = useState<GoogleReview[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
      const apiKey = import.meta.env.VITE_GOOGLE_PLACES_KEY;

      if (!placeId || !apiKey) {
        console.warn("Google Places credentials not configured");
        return;
      }

      setIsLoading(true);
      try {
        const data = await fetchGoogleReviews(
          placeId,
          apiKey,
          languageCode,
          locale
        );
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [locale, languageCode]);

  return { reviews, isLoading };
}
