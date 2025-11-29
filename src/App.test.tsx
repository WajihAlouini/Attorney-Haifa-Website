import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(window as any).IntersectionObserver = MockIntersectionObserver;

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
