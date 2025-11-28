import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoadingFallback } from "./LoadingFallback";

describe("LoadingFallback", () => {
  it("renders loading message", () => {
    render(<LoadingFallback />);
    expect(screen.getByText(/chargement/i)).toBeInTheDocument();
  });
});
