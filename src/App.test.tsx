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

    expect(
      await screen.findByRole("heading", {
        name: /avenir/i,
      })
    ).toBeInTheDocument();
  });
});
