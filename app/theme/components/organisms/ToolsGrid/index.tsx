import "./index.scss";

import ToolCard from "@components/molecules/ToolCard";
import { ITool } from "@models/tool/tool.dto.ts";
import { FC } from "react";

interface ToolsGridProps {
  title: string;
  tools: ITool[];
}

const ToolsGrid: FC<ToolsGridProps> = ({ title, tools }) => {
  return (
    <div className="tools-wrapper">
      <h2 className="tools-title">{title}</h2>
      <div className="tools-grid">
        {tools?.map((tool, index) => (
          <ToolCard
            key={`tool-${index}`}
            description={tool.description}
            link={tool.link}
            icon={tool.icon}
            title={tool.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;
