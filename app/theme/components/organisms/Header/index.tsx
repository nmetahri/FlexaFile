import Navbar from "@components/molecules/Navbar";
import { BookText } from "lucide-react";
import { memo } from "react";

import "./index.scss";

const Header = () => {
  return (
    <div className="header container">
      <BookText size={36} />
      <Navbar />
    </div>
  );
};

export default memo(Header);
