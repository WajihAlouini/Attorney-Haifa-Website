import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPhoneClick,
  trackEmailClick,
  trackWhatsAppClick,
} from "@/utils/analyticsHelpers";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface CookiePreferences {
  analytics?: boolean;
}

// We measure by default so reports reflect real traffic. The only thing that
// turns analytics off is the visitor explicitly rejecting it in the cookie
// banner (which switches GA into cookieless, uncounted "consent denied" mode).
function analyticsConsent(): "granted" | "denied" {
  if (typeof window === "undefined") return "granted";

  try {
    const raw = localStorage.getItem("cookie_preferences");
    if (!raw) return "granted";
    const parsed = JSON.parse(raw) as CookiePreferences;
    return parsed.analytics === false ? "denied" : "granted";
  } catch {
    return "granted";
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

function configParams(pagePath: string): Record<string, unknown> {
  return {
    page_path: pagePath,
    // Never feed Google Ads / cross-site signals from this property.
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  };
}

export const GoogleAnalytics = () => {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const initializedRef = useRef(false);

  // Consent defaults are set in index.html (must run before gtag.js loads).

  useEffect(() => {
    if (!measurementId || measurementId === "G-XXXXXXXXXX") {
      return;
    }

    const currentPath = () => window.location.pathname + window.location.search;

    const initialize = () => {
      if (initializedRef.current) return;

      ensureGtag();

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      window.gtag!("js", new Date());
      window.gtag!("config", measurementId, configParams(currentPath()));

      initializedRef.current = true;
    };

    // Keep the consent signal in sync when the visitor changes preferences.
    // Rejecting analytics stops cookie-based measurement without a reload.
    const handlePreferencesChanged = () => {
      ensureGtag();
      window.gtag!("consent", "update", {
        analytics_storage: analyticsConsent(),
      });

      if (!initializedRef.current) {
        initialize();
      }
    };

    // Track outbound contact intents (phone, email, WhatsApp) site-wide with a
    // single delegated listener, so every CTA — current or future — is covered
    // without wiring each link individually.
    const handleContactClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackPhoneClick();
      } else if (href.startsWith("mailto:")) {
        trackEmailClick();
      } else if (/wa\.me\/|(api|web)\.whatsapp\.com/i.test(href)) {
        trackWhatsAppClick();
      }
    };

    initialize();
    window.addEventListener(
      "cookiePreferencesChanged",
      handlePreferencesChanged
    );
    document.addEventListener("click", handleContactClick, true);

    return () => {
      window.removeEventListener(
        "cookiePreferencesChanged",
        handlePreferencesChanged
      );
      document.removeEventListener("click", handleContactClick, true);
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag || !initializedRef.current) return;

    window.gtag(
      "config",
      measurementId,
      configParams(location.pathname + location.search)
    );
  }, [location.pathname, location.search, measurementId]);

  return null;
};
