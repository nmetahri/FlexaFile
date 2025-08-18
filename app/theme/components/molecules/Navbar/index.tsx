import Button from "@components/atoms/Button";
import { t } from "i18next";
import { NavLink } from "react-router";

import "./index.scss";

const NavbarLinks = [
  {
    to: "/",
    label: t("common.home")
  },
  {
    to: "/tools",
    label: t("common.tools")
  },
  {
    to: "/about",
    label: t("common.about")
  },
  {
    to: "/contact",
    label: t("common.contact")
  }
];

const Navbar = () => {
  return (
    <div className="navbar">
      {NavbarLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
      <Button>{t("common.login")}</Button>
    </div>
  );
};

export default Navbar;
