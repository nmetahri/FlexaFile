import { describe, expect, it, vi } from "vitest";

import { getLanguageFromRequest } from "@utils/internalization";

vi.mock("~/config/i18n", () => ({
  fallbackLng: "en",
  supportedLngs: ["en", "fr", "de"]
}));

describe("[Utils] getLanguageFromRequest", () => {
  const fallbackLng = "en";

  it("should return language from URL param if supported", () => {
    const req = new Request("https://example.com?lang=fr");
    expect(getLanguageFromRequest(req)).toBe("fr");
  });

  it("should return language from i18next cookie if supported", () => {
    const req = new Request("https://example.com", {
      headers: {
        cookie: "foo=bar; i18next=de"
      }
    });
    expect(getLanguageFromRequest(req)).toBe("de");
  });

  it("should return language from accept-language header if supported", () => {
    const req = new Request("https://example.com", {
      headers: {
        "accept-language": "fr-FR,fr;q=0.9,en;q=0.8"
      }
    });
    expect(getLanguageFromRequest(req)).toBe("fr");
  });

  it("should fallback to default language if none match", () => {
    const req = new Request("https://example.com", {
      headers: {
        "accept-language": "es,pt;q=0.9"
      }
    });
    expect(getLanguageFromRequest(req)).toBe(fallbackLng);
  });
});
