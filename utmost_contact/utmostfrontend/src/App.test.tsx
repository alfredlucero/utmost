import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  it("should render with header", () => {
    render(<App />);

    const appHeader = screen.getByText("Utmost");

    expect(appHeader).toBeVisible();
  });

  it("should return true", () => {
    expect(true).toBe(true);
  });
});
