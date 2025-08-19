import { ITool } from "@models/tool/tool.dto.ts";
import { TFunction } from "i18next";
import { FileEditIcon, FileTextIcon, ImageIcon, LockIcon } from "lucide-react";
import { ReactElement } from "react";

type ToolKey = "documents" | "images" | "notepad" | "share";

const IconsMap: Record<ToolKey, ReactElement> = {
  documents: <FileTextIcon />,
  images: <ImageIcon />,
  notepad: <FileEditIcon />,
  share: <LockIcon />
};

const makeTool = (
  title: string,
  description: string,
  icon: ReactElement,
  link: string
): ITool => ({ title, description, icon, link });

export const makeTools = (t: TFunction): ITool[] => {
  const toolKeys: ToolKey[] = ["documents", "images", "notepad", "share"];

  return toolKeys.map((key) =>
    makeTool(
      t(`tools.${key}.title`),
      t(`tools.${key}.description`),
      IconsMap[key],
      `/tools/${key}`
    )
  );
};
