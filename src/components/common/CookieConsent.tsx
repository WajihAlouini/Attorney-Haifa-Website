import { useState, useEffect, useCallback } from "react";
import "../../styles/cookie-consent.css";
import { Translation } from "@/types";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentProps {
  t: Translation;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function CookieConsent({ t }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Initialize preferences from localStorage (lazy initialization)
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    if (typeof window === "undefined") return DEFAULT_PREFERENCES;
    const saved = localStorage.getItem("cookie_preferences");
    if (saved) {
      try {
        return JSON.parse(saved) as CookiePreferences;
      } catch {
        return DEFAULT_PREFERENCES;
      }
    }
    return DEFAULT_PREFERENCES;
  });

  // Check if consent was already given
  const hasConsent =
    typeof window !== "undefined" &&
    localStorage.getItem("cookie_preferences") !== null;

  useEffect(() => {
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [hasConsent]);

  const saveAndClose = useCallback((prefs: CookiePreferences) => {
    setIsHiding(true);
    setTimeout(() => {
      localStorage.setItem("cookie_preferences", JSON.stringify(prefs));
      window.dispatchEvent(
        new CustomEvent("cookiePreferencesChanged", { detail: prefs })
      );
      setIsVisible(false);
      setIsHiding(false);
    }, 400);
  }, []);

  const handleAcceptAll = useCallback(() => {
    saveAndClose({ essential: true, analytics: true, marketing: true });
  }, [saveAndClose]);

  const handleRejectAll = useCallback(() => {
    saveAndClose({ essential: true, analytics: false, marketing: false });
  }, [saveAndClose]);

  const handleSavePreferences = useCallback(() => {
    saveAndClose(preferences);
  }, [saveAndClose, preferences]);

  const togglePreference = useCallback((key: keyof CookiePreferences) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const openSettings = useCallback(() => setShowSettings(true), []);
  const closeSettings = useCallback(() => setShowSettings(false), []);

  if (!isVisible) return null;

  return (
    <div
      className={`cookie-consent ${isHiding ? "hiding" : ""} ${
        showSettings ? "expanded" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={t.cookieTitle || "Cookie preferences"}
    >
      <div className="cookie-banner">
        {/* Compact Banner View */}
        {!showSettings && (
          <>
            <div className="cookie-banner-content">
              <div className="cookie-icon-small">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" opacity="0.2" />
                  <circle cx="8" cy="9" r="1.5" />
                  <circle cx="15" cy="8" r="1.5" />
                  <circle cx="10" cy="14" r="1.5" />
                  <circle cx="16" cy="13" r="1.5" />
                </svg>
              </div>
              <p className="cookie-message-compact">
                {t.cookieCompact ||
                  "We use cookies to enhance your experience."}
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button
                onClick={openSettings}
                className="btn-cookie-settings"
                aria-label="Cookie settings"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
              <button onClick={handleRejectAll} className="btn-cookie-reject">
                {t.cookieReject || "Reject"}
              </button>
              <button onClick={handleAcceptAll} className="btn-cookie-accept">
                {t.cookieAcceptAll || "Accept All"}
              </button>
            </div>
          </>
        )}

        {/* Expanded Settings View */}
        {showSettings && (
          <div className="cookie-settings">
            <div className="cookie-settings-header">
              <h3>{t.cookieSettingsTitle || "Cookie Preferences"}</h3>
              <button
                onClick={closeSettings}
                className="btn-close-settings"
                aria-label="Close settings"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <p className="cookie-settings-desc">
              {t.cookieSettingsDesc ||
                "Manage your cookie preferences. Essential cookies are required for the site to function."}
            </p>

            <div className="cookie-categories">
              {/* Essential Cookies */}
              <div className="cookie-category">
                <div className="category-info">
                  <div className="category-header">
                    <span className="category-icon essential">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9,12 11,14 15,10" />
                      </svg>
                    </span>
                    <span className="category-name">
                      {t.cookieEssential || "Essential"}
                    </span>
                    <span className="category-badge required">
                      {t.cookieRequired || "Required"}
                    </span>
                  </div>
                  <p className="category-desc">
                    {t.cookieEssentialDesc ||
                      "Required for basic site functionality."}
                  </p>
                </div>
                <label className="toggle-switch disabled">
                  <input type="checkbox" checked disabled />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Analytics Cookies */}
              <div className="cookie-category">
                <div className="category-info">
                  <div className="category-header">
                    <span className="category-icon analytics">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </span>
                    <span className="category-name">
                      {t.cookieAnalytics || "Analytics"}
                    </span>
                  </div>
                  <p className="category-desc">
                    {t.cookieAnalyticsDesc ||
                      "Help us understand how visitors use our site."}
                  </p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference("analytics")}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-category">
                <div className="category-info">
                  <div className="category-header">
                    <span className="category-icon marketing">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </span>
                    <span className="category-name">
                      {t.cookieMarketing || "Marketing"}
                    </span>
                  </div>
                  <p className="category-desc">
                    {t.cookieMarketingDesc ||
                      "Used to deliver personalized advertisements."}
                  </p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference("marketing")}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>

            <div className="cookie-settings-actions">
              <button onClick={handleRejectAll} className="btn-cookie-reject">
                {t.cookieRejectAll || "Reject All"}
              </button>
              <button
                onClick={handleSavePreferences}
                className="btn-cookie-save"
              >
                {t.cookieSave || "Save Preferences"}
              </button>
              <button onClick={handleAcceptAll} className="btn-cookie-accept">
                {t.cookieAcceptAll || "Accept All"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
