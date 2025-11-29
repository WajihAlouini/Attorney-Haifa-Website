import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

(
  window as typeof window & {
    IntersectionObserver: typeof IntersectionObserver;
  }
).IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

describe("App", () => {
  it("renders the main application", async () => {
    render(<App />);

    // Check for the brand name in the header (updated to match actual text)
    expect(
      screen.getByText("Maître Haifa Guedhami Alouini")
    ).toBeInTheDocument();

    // Check for the hero eyebrow text (default language is FR)
    expect(
      screen.getByText(/Tunis · Kairouan · International/i)
    ).toBeInTheDocument();
  });
});
