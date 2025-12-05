/**
 * Suppress known third-party warnings from Cal.com embed
 * These warnings come from Cal.com's library and cannot be fixed in our codebase
 */
export function suppressCalComWarnings() {
  // Only suppress in development
  if (import.meta.env.DEV) {
    const originalWarn = console.warn;
    const originalError = console.error;

    // List of warning patterns to suppress
    const suppressPatterns = [
      "markdownToSafeHTML",
      "should not be imported on the client side",
      "createWithEqualityFn",
      "useStoreWithEqualityFn",
      "react-i18next:: You will need to pass in an i18next instance",
      "QuickAvailabilityCheck feature enabled",
      "Unable to access iframe",
      "Blocked a frame with origin",
    ];

    console.warn = function (...args: unknown[]) {
      const message = args.join(" ");
      if (suppressPatterns.some((pattern) => message.includes(pattern))) {
        return; // Suppress this warning
      }
      originalWarn.apply(console, args);
    };

    console.error = function (...args: unknown[]) {
      const message = args.join(" ");
      if (suppressPatterns.some((pattern) => message.includes(pattern))) {
        return; // Suppress this error
      }
      originalError.apply(console, args);
    };
  }
}
