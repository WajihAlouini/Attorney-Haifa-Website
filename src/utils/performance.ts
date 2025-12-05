// Performance monitoring utilities

interface WebVitalMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta?: number;
  id?: string;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInput extends PerformanceEntry {
  processingStart: number;
}

interface LargestContentfulPaint extends PerformanceEntry {
  renderTime: number;
  loadTime: number;
}

export const measurePageLoad = () => {
  if (typeof window === "undefined" || !window.performance) return null;

  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const connectTime = perfData.responseEnd - perfData.requestStart;
  const renderTime = perfData.domComplete - perfData.domLoading;

  return {
    pageLoadTime,
    connectTime,
    renderTime,
    dns: perfData.domainLookupEnd - perfData.domainLookupStart,
    tcp: perfData.connectEnd - perfData.connectStart,
    ttfb: perfData.responseStart - perfData.navigationStart, // Time to First Byte
  };
};

export const measureWebVitals = (
  callback: (metric: WebVitalMetric) => void
) => {
  if (typeof window === "undefined") return;

  // Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries() as LargestContentfulPaint[];
    const lastEntry = entries[entries.length - 1];
    callback({
      name: "LCP",
      value: lastEntry.renderTime || lastEntry.loadTime,
      rating:
        lastEntry.renderTime < 2500
          ? "good"
          : lastEntry.renderTime < 4000
            ? "needs-improvement"
            : "poor",
    });
  });

  try {
    observer.observe({ entryTypes: ["largest-contentful-paint"] });
  } catch {
    // LCP not supported
  }

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries() as FirstInput[];
    entries.forEach((entry) => {
      callback({
        name: "FID",
        value: entry.processingStart - entry.startTime,
        rating:
          entry.processingStart - entry.startTime < 100
            ? "good"
            : entry.processingStart - entry.startTime < 300
              ? "needs-improvement"
              : "poor",
      });
    });
  });

  try {
    fidObserver.observe({ entryTypes: ["first-input"] });
  } catch {
    // FID not supported
  }

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as LayoutShift[]) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        callback({
          name: "CLS",
          value: clsValue,
          rating:
            clsValue < 0.1
              ? "good"
              : clsValue < 0.25
                ? "needs-improvement"
                : "poor",
        });
      }
    }
  });

  try {
    clsObserver.observe({ entryTypes: ["layout-shift"] });
  } catch {
    // CLS not supported
  }
};

export const reportWebVitals = () => {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    const metrics = measurePageLoad();
    if (metrics && window.gtag) {
      window.gtag("event", "page_performance", {
        page_load_time: metrics.pageLoadTime,
        ttfb: metrics.ttfb,
        dns_time: metrics.dns,
        tcp_time: metrics.tcp,
      });
    }
  });

  measureWebVitals((metric) => {
    if (window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(metric.value),
        metric_rating: metric.rating,
        metric_delta: metric.delta,
      });
    }
  });
};
