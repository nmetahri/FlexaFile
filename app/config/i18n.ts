import de from "@locales/de.json";
import en from "@locales/en.json";
import fr from "@locales/fr.json";
import { getCountryFlag } from "@utils/internalization.ts";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const fallbackLng = "en";
export const defaultNS = "translation";

interface LanguageData {
  name: string;
  image: string;
}

export const supportedLngsLabels = {
  fr: "Français",
  en: "English",
  de: "Deutsch"
};

export const supportedLngsData: Record<string, LanguageData> = {
  fr: {
    name: supportedLngsLabels.fr,
    image: getCountryFlag("fr")
  },
  en: {
    name: supportedLngsLabels.en,
    image: getCountryFlag("us")
  },
  de: {
    name: supportedLngsLabels.de,
    image: getCountryFlag("de")
  }
};

export const supportedLngs = Object.keys(supportedLngsData);

export const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  },
  de: {
    translation: de
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    supportedLngs,
    defaultNS,
    resources,
    detection: {
      order: ["cookie", "navigator", "htmlTag"],
      caches: ["cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
