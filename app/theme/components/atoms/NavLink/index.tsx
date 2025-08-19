import "./index.scss";

import { INavLink } from "@models/navbar/link.dto.ts";
import { FC } from "react";
import { NavLink } from "react-router";

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
