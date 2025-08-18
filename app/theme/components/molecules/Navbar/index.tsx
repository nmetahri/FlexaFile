import { useTranslation } from "react-i18next";
import MyNavLink from "@components/atoms/NavLink";
import LoginBtn from "@components/atoms/Button/Login";
import { makeNavLinks } from "@models/navbar/link.ts";

import "./index.scss";
import { Settings } from "lucide-react";

const Navbar = () => {
  const { t } = useTranslation();
  const navbarLinks = makeNavLinks(t);

  return (
    <div className="navbar">
      {navbarLinks.map((link) => (
        <MyNavLink key={link.to} link={link} />
      ))}
      <LoginBtn />

      {/* TODO : create dropdown settings with locale switcher */}
      <Settings />
    </div>
  );
};

export default Navbar;
