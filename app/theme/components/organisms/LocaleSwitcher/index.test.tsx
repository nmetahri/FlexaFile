import { fireEvent, render, screen } from "@testing-library/react";
import LocaleSwitcher from "./index";
import { I18nextProvider } from "react-i18next";
import i18n from "@config/i18n";
import { describe, expect, it } from "vitest";

describe("LocaleSwitcher", () => {
  it("affiche la langue courante", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LocaleSwitcher />
      </I18nextProvider>
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("change la langue lors de la sélection", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LocaleSwitcher />
      </I18nextProvider>
    );
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "fr" } });
    expect(i18n.language).toBe("fr");
  });
});
