import type React from "react";
import { useTranslation } from "react-i18next";

import "./index.css";

interface ErrorPageProps {
  errorType: "notFound" | "unauthorized" | "serverError";
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorType }) => {
  const { t } = useTranslation();

  return (
    <div className="error-container">
      <h1 className="error-code">{t(`errors.${errorType}.code`)}</h1>
      <h2 className="error-message">{t(`errors.${errorType}.message`)}</h2>
      <p className="error-description">
        {t(`errors.${errorType}.description`)}
      </p>
      <a href="/" className="error-link">
        {t("errors.homeLink")}
      </a>
    </div>
  );
};

export const NotFound: React.FC = () => <ErrorPage errorType="notFound" />;
export const Unauthorized: React.FC = () => (
  <ErrorPage errorType="unauthorized" />
);
export const ServerError: React.FC = () => (
  <ErrorPage errorType="serverError" />
);
