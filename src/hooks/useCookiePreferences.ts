import { useState, useEffect } from "react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: false,
};

// Helper hook for other components to check cookie preferences
export function useCookiePreferences(): CookiePreferences {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const loadPreferences = () => {
      const saved = localStorage.getItem("cookie_preferences");
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as CookiePreferences | null;
          // Stored "null" or a non-object parses fine but would break
          // consumers reading .analytics — merge over defaults only when
          // it's an object.
          if (parsed && typeof parsed === "object") {
            setPreferences({ ...DEFAULT_PREFERENCES, ...parsed });
          }
        } catch {
          // Use defaults
        }
      }
    };

    loadPreferences();

    // Listen for changes
    const handleChange = (e: CustomEvent<CookiePreferences>) => {
      setPreferences(e.detail);
    };

    window.addEventListener(
      "cookiePreferencesChanged",
      handleChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "cookiePreferencesChanged",
        handleChange as EventListener
      );
    };
  }, []);

  return preferences;
}

export type { CookiePreferences };
