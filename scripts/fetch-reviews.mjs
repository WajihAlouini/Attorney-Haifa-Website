/* eslint-disable no-undef */
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env file (for local development)
// In GitHub Actions, env vars are set directly
try {
  const dotenv = await import("dotenv");
  dotenv.config();
} catch {
  // dotenv not installed, using process.env directly (GitHub Actions)
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.resolve(__dirname, "../src/data/google-reviews.json");
const DEBUG_FILE = path.resolve(__dirname, "debug_response.json");

// User provided: "Maître Haifa Guedhami Alouini"
const QUERY = "Maître Haifa Guedhami Alouini Kairouan";
const API_KEY = process.env.SERPAPI_KEY || "secret_api_key";

if (!process.env.SERPAPI_KEY) {
  console.warn("⚠️  No SERPAPI_KEY found. using placeholder.");
}

const searchUrl = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(QUERY)}&api_key=${API_KEY}`;

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode !== 200)
            reject(new Error(`Status ${res.statusCode}: ${data}`));
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

console.log(`Step 1: Searching for place: ${QUERY}...`);

fetchJson(searchUrl)
  .then(async (json) => {
    // DEBUG: Save search response
    fs.writeFileSync(DEBUG_FILE, JSON.stringify(json, null, 2));

    let result = null;
    if (json.place_results) {
      result = json.place_results;
    } else if (json.local_results && json.local_results.length > 0) {
      result = json.local_results[0];
    }

    if (!result) {
      console.error("❌ No place found. Check debug_response.json");
      return;
    }

    console.log(`✅ Found place: "${result.title}" (${result.address})`);

    // Check if we need to fetch reviews via data_id
    // If place_results has reviews populated, use them.
    if (result.reviews && result.reviews.length > 0) {
      console.log(
        `Found ${result.reviews.length} reviews directly in search result.`
      );
      saveReviews(result.reviews);
      return;
    }

    if (result.data_id) {
      console.log(`Step 2: Fetching reviews for data_id: ${result.data_id}...`);
      const reviewsUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${result.data_id}&api_key=${API_KEY}&hl=fr`; // Force French/Local

      try {
        const reviewsJson = await fetchJson(reviewsUrl);
        if (reviewsJson.reviews && reviewsJson.reviews.length > 0) {
          saveReviews(reviewsJson.reviews);
        } else {
          console.log("ℹ️  No reviews found in Step 2.");
        }
      } catch (err) {
        console.error("❌ Error fetching reviews step 2:", err.message);
      }
    } else {
      console.log("ℹ️  No data_id found to fetch reviews.");
    }
  })
  .catch((err) => {
    console.error("❌ Error:", err.message);
    if (!fs.existsSync(OUTPUT_FILE)) fs.writeFileSync(OUTPUT_FILE, "[]");
  });

function saveReviews(reviews) {
  const cleaned = reviews.map((r) => {
    // Use image proxy to bypass Google's rate limiting
    const imageUrl = r.user?.thumbnail;
    const proxiedImage = imageUrl
      ? `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&w=120&h=120&fit=cover&mask=circle`
      : null;

    return {
      author: r.user?.name || "Anonymous",
      rating: "★".repeat(Math.round(r.rating || 5)),
      text: r.snippet || r.text || "",
      image: proxiedImage,
      link: r.link,
      // Reviewer metadata
      reviewsCount: r.user?.reviews || null,
      isLocalGuide: r.user?.local_guide || false,
      date: r.date || null,
      isoDate: r.iso_date || r.date_iso8601 || null,
    };
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cleaned, null, 2));
  console.log(
    `✅ Successfully saved ${cleaned.length} reviews to src/data/google-reviews.json`
  );
}
