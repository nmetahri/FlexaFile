import "./index.scss";

import LoginBtn from "@components/atoms/Button/Login";
import MyNavLink from "@components/atoms/NavLink";
import { makeNavLinks } from "@models/navbar/link.ts";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const navbarLinks = makeNavLinks(t);

  return (
    <div className="navbar">
      {navbarLinks.map((link) => (
        <MyNavLink key={link.to} link={link} />
      ))}
      <LoginBtn />
    </div>
  );
};

export default Navbar;
