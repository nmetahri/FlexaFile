import "./index.scss";

import FileInput from "@components/atoms/FileInput";
import { useTranslation } from "react-i18next";

const ToolsDocumentsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="documents-page-index">
      <div className="header">
        <h2>{t("tools.documents.page.title")}</h2>
        <h3>{t("tools.documents.page.subtitle")}</h3>
      </div>
      <FileInput />
    </div>
  );
};

export default ToolsDocumentsPage;
