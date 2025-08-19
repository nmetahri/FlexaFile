import ToolCard, { ToolCardProps } from "@components/molecules/ToolCard";
import { FC } from "react";

const OneLineToolCard: FC<ToolCardProps> = ({ ...rest }) => {
  return (
    <ToolCard
      description={rest.description}
      link={rest.link}
      title={rest.title}
    />
  );
};

export default OneLineToolCard;
