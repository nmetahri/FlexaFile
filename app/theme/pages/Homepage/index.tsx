import ToolsGrid from "@components/organisms/ToolsGrid";
import { makeTools } from "@models/tool/tools.tsx";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();

  const tools = makeTools(t);

  return (
    <div>
      <ToolsGrid title={t("common.tools")} tools={tools} />
    </div>
  );
};

export default Homepage;
