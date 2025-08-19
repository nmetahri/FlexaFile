import "./index.scss";

import Navbar from "@components/molecules/Navbar";
import SettingsDropdown from "@components/organisms/SettingsDropdown";
import { BookText } from "lucide-react";
import { memo } from "react";

const Header = () => {
  return (
    <div className="header">
      <BookText size={36} />
      <div className="header__content">
        <Navbar />
        <SettingsDropdown />
      </div>
    </div>
  );
};

export default memo(Header);
