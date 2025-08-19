import { ITool } from "@models/tool/tool.dto.ts";
import { TFunction } from "i18next";
import {
  FileEditIcon,
  FileTextIcon,
  ImageIcon,
  LockKeyhole
} from "lucide-react";
import { ReactElement } from "react";

type ToolKey = "documents" | "images" | "notepad" | "share";

const IconsMap: Record<ToolKey, ReactElement> = {
  documents: <FileTextIcon />,
  images: <ImageIcon />,
  notepad: <FileEditIcon />,
  share: <LockKeyhole />
};

const makeTool = (
  title: string,
  description: string,
  icon: ReactElement,
  link: string
): ITool => ({ title, description, icon, link });

export const makeToolLink = (key: string): string => {
  return `/tools/${key.toLowerCase()}`;
};

export const makeTools = (t: TFunction): ITool[] => {
  const toolKeys: ToolKey[] = ["documents", "images", "notepad", "share"];

  return toolKeys.map((key) =>
    makeTool(
      t(`tools.${key}.title`),
      t(`tools.${key}.description`),
      IconsMap[key],
      makeToolLink(key)
    )
  );
};
