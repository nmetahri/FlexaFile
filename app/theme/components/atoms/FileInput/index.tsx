import "./index.scss";

import { FileInput as FileInputIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const FileInput = () => {
  const { t } = useTranslation();
  return (
    <div className="fileinput-container">
      <label htmlFor="dropzone-file" className="fileinput-label">
        <div className="fileinput-content">
          <FileInputIcon />
          <p className="fileinput-title">
            {t("form.file-input.label", {
              w1: t("common.drag-drop"),
              w2: t("common.click")
            })}
          </p>
        </div>
        <input id="dropzone-file" type="file" className="fileinput-input" />
      </label>
    </div>
  );
};

export default FileInput;
