import { describe, expect, it, test } from "vitest";
import { render } from "@testing-library/react";
import Homepage from "@theme/pages/Homepage";

test("demo", () => {
  expect(true).toBe(true);
});

describe("render", () => {
  it("renders the main page", () => {
    render(<Homepage />);
    expect(true).toBeTruthy();
  });
});
