import { fallbackLng, supportedLngs } from "@config/i18n.ts";

export function getLanguageFromRequest(request: Request): string {
  const url = new URL(request.url);
  const langFromUrl = url.searchParams.get("lang");
  if (langFromUrl && supportedLngs.includes(langFromUrl)) {
    return langFromUrl;
  }

  const cookieHeader = request.headers.get("cookie");
  if (cookieHeader) {
    const cookies = cookieHeader.split(";").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.trim().split("=");
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>
    );
    const langFromCookie = cookies.i18next;
    if (langFromCookie && supportedLngs.includes(langFromCookie)) {
      return langFromCookie;
    }
  }

  const header = request.headers.get("accept-language");
  if (header) {
    const acceptedLanguages = header
      .split(",")
      .map((lang) => lang.split(";")[0].trim());

    for (const lang of acceptedLanguages) {
      if (supportedLngs.includes(lang)) {
        return lang;
      }
      const baseLang = lang.split("-")[0];
      if (supportedLngs.includes(baseLang)) {
        return baseLang;
      }
    }
  }

  return fallbackLng;
}

export function getCountryFlag(code: string, width = "320"): string {
  const countryCode = code.toLowerCase();
  return `https://flagcdn.com/w${width}/${countryCode}.png`;
}
