import { createInstance, type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

import { defaultNS, fallbackLng, resources, supportedLngs } from "./i18n";

const initOptions: InitOptions = {
  fallbackLng,
  supportedLngs,
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false
  }
};

export async function createI18nInstance(lng: string) {
  const instance = createInstance();

  await instance.use(initReactI18next).init({
    ...initOptions,
    lng
  });

  return instance;
}
