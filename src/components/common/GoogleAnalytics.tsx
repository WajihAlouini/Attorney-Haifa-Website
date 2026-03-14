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

function hasAnalyticsConsent() {
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

export const GoogleAnalytics = () => {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!measurementId || measurementId === "G-XXXXXXXXXX") {
      return;
    }

    const initializeAnalytics = () => {
      if (!hasAnalyticsConsent() || initializedRef.current) return;

      // Load gtag.js once when consent allows analytics.
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);
      scriptRef.current = script;

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", measurementId, {
        page_path: window.location.pathname + window.location.search,
      });

      initializedRef.current = true;
    };

    const handleCookiePreferencesChanged = () => {
      initializeAnalytics();
    };

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
