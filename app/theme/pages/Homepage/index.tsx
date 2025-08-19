import OneLineToolCard from "@components/molecules/OneLineToolCard";
import ToolsGrid from "@components/organisms/ToolsGrid";
import WorldCloudScene from "@components/organisms/WorldCloudScene";
import { makeTools } from "@models/tool/tools.tsx";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();

  const tools = makeTools(t);

  return (
    <div>
      <OneLineToolCard
        description={t("tools.all.description")}
        title={t("tools.all.title")}
        link={"/tools"}
        rightChildren={
          <WorldCloudScene
            wordList={tools.map((t) => t.title)}
            gridSize={tools.length}
          />
        }
      />
      <ToolsGrid title={t("common.tools")} tools={tools} />
    </div>
  );
};

export default Homepage;
