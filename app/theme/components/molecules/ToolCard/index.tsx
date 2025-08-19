import "./index.scss";

import Button from "@components/atoms/Button";
import TitleWithIcon, {
  TitleWithIconProps
} from "@components/atoms/TitleWithIcon";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export interface ToolCardProps extends TitleWithIconProps {
  description: string;
  link: string;
}

const ToolCard: FC<ToolCardProps> = ({ title, icon, description, link }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="tool-card">
      <TitleWithIcon icon={icon} title={title} />
      <span>{description}</span>
      <div>
        <Button onClick={handleClick}>{t("common.goto")}</Button>
      </div>
    </div>
  );
};

export default ToolCard;
