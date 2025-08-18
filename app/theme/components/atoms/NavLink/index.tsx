import { FC } from "react";
import { INavLink } from "@models/navbar/link.dto.ts";
import { NavLink } from "react-router";

import "./index.scss";

interface MyNavLinkProps {
  link: INavLink;
}

const MyNavLink: FC<MyNavLinkProps> = ({ link }) => {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
    >
      {link.label}
    </NavLink>
  );
};

export default MyNavLink;
