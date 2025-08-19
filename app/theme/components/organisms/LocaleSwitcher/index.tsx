import LanguageSelect from "@components/molecules/LanguageSelect";
import { supportedLngsData, supportedLngsLabels } from "@config/i18n";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();

  const options = Object.entries(supportedLngsLabels)
    .sort(([, nameA], [, nameB]) => nameA.localeCompare(nameB))
    .map(([code, name]) => ({ code, name }));

  return (
    <div className="locale-switcher">
      <LanguageSelect
        currentLang={i18n.resolvedLanguage ?? ""}
        flag={supportedLngsData[i18n.resolvedLanguage ?? ""]?.image}
        options={options}
        onChange={(lang) => i18n.changeLanguage(lang)}
      />
    </div>
  );
};

export default memo(LocaleSwitcher);
