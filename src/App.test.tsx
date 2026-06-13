import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = "";
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

    // Brand text appears in both the header and footer.
    expect(screen.getAllByText(/Haifa Guedhami Alouini/i).length).toBeGreaterThan(
      0
    );

    // Hero H1 loads async (lazy component + Suspense). The keyword-bearing
    // brand line is the H1; the slogan renders as styled paragraph text.
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /Avocate à Kairouan/i,
      }, { timeout: 5000 })
    ).toBeInTheDocument();
    expect(await screen.findByText(/avenir/i)).toBeInTheDocument();
  });
});
