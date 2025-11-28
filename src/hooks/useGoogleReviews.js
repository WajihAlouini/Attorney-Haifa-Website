import { useState, useEffect } from "react";
import { fetchGoogleReviews } from "@/services/googlePlaces";
import { GOOGLE_PLACE_ID } from "@/data/constants";

export function useGoogleReviews(locale, languageCode) {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_KEY;
    let isMounted = true;

    const loadReviews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchGoogleReviews(
          GOOGLE_PLACE_ID,
          apiKey,
          languageCode,
          locale
        );
        if (isMounted && data) {
          setReviews(data);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.warn("Google Reviews request skipped:", error.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, [languageCode, locale]);

  return { reviews, isLoading };
}
