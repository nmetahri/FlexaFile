import "./index.scss";

import ToolCard, { ToolCardProps } from "@components/molecules/ToolCard";
import { FC, ReactNode } from "react";

interface OneLineToolCardProps extends ToolCardProps {
  rightChildren?: ReactNode;
}

const OneLineToolCard: FC<OneLineToolCardProps> = ({
  rightChildren,
  ...rest
}) => {
  return (
    <div className="one-line-tool-card">
      <ToolCard
        description={rest.description}
        link={rest.link}
        title={rest.title}
        icon={undefined}
      />
      {rightChildren && (
        <div className="one-line-tool-card__icon">{rightChildren}</div>
      )}
    </div>
  );
};

export default OneLineToolCard;
