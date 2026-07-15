// Performance monitoring utilities
//
// Core Web Vitals are reported through Google's web-vitals library so that
// each metric is sent to GA4 exactly ONCE per page, with its final value,
// when the page is hidden. The previous hand-rolled PerformanceObservers
// fired a GA event for every layout-shift entry and every LCP candidate,
// which flooded the property (~7 CLS events per page view) with partial
// running values that were meaningless to aggregate.

import { onCLS, onINP, onLCP, type Metric } from "web-vitals";

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

// Google's documented GA4 pattern for web-vitals:
// https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics
function sendToAnalytics(metric: Metric) {
  if (!window.gtag) return;

  window.gtag("event", metric.name, {
    // GA4 event values must be integers; CLS is a small decimal, so it is
    // sent multiplied by 1000 (standard web-vitals convention).
    value: Math.round(
      metric.name === "CLS" ? metric.delta * 1000 : metric.delta
    ),
    // Unique per page load — lets reports deduplicate if a metric is ever
    // reported more than once (e.g. after a back/forward cache restore).
    metric_id: metric.id,
    metric_value: metric.value,
    metric_rating: metric.rating,
  });
}

export function reportWebVitals() {
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

  // Each handler reports once, with the final value, when the page is
  // hidden. INP replaces FID, which Google retired in 2024.
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onLCP(sendToAnalytics);
}
