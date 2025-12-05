export interface SerpApiReview {
  title: string;
  rating: number;
  date: string;
  snippet: string;
  link: string;
  user: {
    name: string;
    link: string;
    thumbnail: string;
  };
}

export interface SerpApiResult {
  place_id: string;
  title: string;
  reviews: SerpApiReview[];
  rating: number;
  reviews_count: number;
}
