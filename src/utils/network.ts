// Offline detection utility

export const isOnline = (): boolean => {
  return navigator.onLine;
};

export const onOnlineStatusChange = (callback: (isOnline: boolean) => void) => {
  const handleOnline = () => callback(true);
  const handleOffline = () => callback(false);

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  // Return cleanup function
  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
};

// Network quality detection
interface NetworkInformation {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

declare global {
  interface Navigator {
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

export const getNetworkInfo = () => {
  if ("connection" in navigator) {
    const connection =
      (navigator as Navigator & { connection?: NetworkInformation })
        .connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    return {
      effectiveType: connection?.effectiveType || "unknown",
      downlink: connection?.downlink || null,
      rtt: connection?.rtt || null,
      saveData: connection?.saveData || false,
    };
  }
  return null;
};

// Retry with exponential backoff
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> => {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (i < maxRetries - 1) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = baseDelay * Math.pow(2, i);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
};
