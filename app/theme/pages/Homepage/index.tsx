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
        description={"Ceci est un test."}
        link={"/tools"}
        title={"Tous vos outils au même endroit"}
      />
      <WorldCloudScene wordList={["test", "test2", "test3"]} />
      <ToolsGrid title={t("common.tools")} tools={tools} />
    </div>
  );
};

export default Homepage;
