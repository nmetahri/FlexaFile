import { INavLink } from "@models/navbar/link.dto.ts";
import { TFunction } from "i18next";

export const makeNavLink = (to: string, label: string): INavLink => {
  return { to, label };
};

export const makeNavLinks = (t: TFunction): INavLink[] => {
  return [
    makeNavLink("/", t("common.home")),
    makeNavLink("/tools", t("common.tools")),
    makeNavLink("/about", t("common.about")),
    makeNavLink("/contact", t("common.contact"))
  ];
};
