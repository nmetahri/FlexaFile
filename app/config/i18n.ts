import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@locales/en.json";
import fr from "@locales/fr.json";
import de from "@locales/de.json";

export const fallbackLng = "en";
export const defaultNS = "translation";

interface LanguageData {
  name: string;
  image: string;
}

export const supportedLngsData: Record<string, LanguageData> = {
  fr: {
    name: "Français",
    image: "https://flagcdn.com/w320/fr.png"
  },
  en: {
    name: "English",
    image: "https://flagcdn.com/w320/us.png"
  },
  de: {
    name: "Deutsch",
    image: "https://flagcdn.com/w320/de.png"
  }
};

export const supportedLngs = Object.keys(supportedLngsData);

export const supportedLngsLabels = {
  fr: "Français",
  en: "English",
  de: "Deutsch"
};

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
