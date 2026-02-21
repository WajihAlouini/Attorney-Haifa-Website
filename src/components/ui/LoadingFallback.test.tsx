import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { LoadingFallback } from "./LoadingFallback";

describe("LoadingFallback", () => {
  it("renders loading spinner", () => {
    const { container } = render(<LoadingFallback />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});
