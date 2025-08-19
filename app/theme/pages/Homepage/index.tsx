import ToolCard from "@components/molecules/ToolCard";
import { Image } from "lucide-react";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ToolCard
        description={"Ceci est une description de zinzin."}
        link={"/test"}
        icon={<Image />}
        title={"Titre"}
      />
    </div>
  );
};

export default Homepage;
