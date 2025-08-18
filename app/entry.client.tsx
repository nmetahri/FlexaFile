import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { HydratedRouter } from "react-router/dom";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import i18n, { defaultNS } from "@config/i18n";

startTransition(async () => {
  await i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
      ...i18n,
      ns: [defaultNS]
    });

  hydrateRoot(
    document,
    <I18nextProvider i18n={i18next}>
      <StrictMode>
        <HydratedRouter />
      </StrictMode>
    </I18nextProvider>
  );
});
