import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Homepage from "@theme/pages/Homepage";

describe("render", () => {
  it("renders the main page", () => {
    render(<Homepage />);
    expect(true).toBeTruthy();
  });
});
