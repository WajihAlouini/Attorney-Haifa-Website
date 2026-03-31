import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface CookiePreferences {
  analytics?: boolean;
}

function getAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const raw = localStorage.getItem("cookie_preferences");
    if (!raw) return false;
    const parsed = JSON.parse(raw) as CookiePreferences;
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const initializedRef = useRef(false);

  // Set default consent state as early as possible
  useEffect(() => {
    if (!measurementId || measurementId === "G-XXXXXXXXXX") return;

    ensureGtag();

    const hasConsent = getAnalyticsConsent();

    // Set default consent state before gtag('config')
    window.gtag!("consent", "default", {
      analytics_storage: hasConsent ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || measurementId === "G-XXXXXXXXXX") {
      return;
    }

    const initializeAnalytics = () => {
      if (initializedRef.current) return;

      ensureGtag();

      // Load gtag.js script
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);
      scriptRef.current = script;

      window.gtag!("js", new Date());
      window.gtag!("config", measurementId, {
        page_path: window.location.pathname + window.location.search,
      });

      initializedRef.current = true;
    };

    const handleCookiePreferencesChanged = () => {
      ensureGtag();

      const hasConsent = getAnalyticsConsent();

      // Update consent state when user changes preferences
      window.gtag!("consent", "update", {
        analytics_storage: hasConsent ? "granted" : "denied",
      });

      // Initialize GA if not yet loaded and consent granted
      if (hasConsent && !initializedRef.current) {
        initializeAnalytics();
      }
    };

    // Always initialize GA (it respects consent mode internally)
    initializeAnalytics();

    window.addEventListener(
      "cookiePreferencesChanged",
      handleCookiePreferencesChanged
    );

    return () => {
      window.removeEventListener(
        "cookiePreferencesChanged",
        handleCookiePreferencesChanged
      );
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag || !initializedRef.current) return;

    window.gtag("config", measurementId, {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search, measurementId]);

  return null;
};
