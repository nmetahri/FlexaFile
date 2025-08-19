import "./index.scss";

import { motion } from "framer-motion";
import React, { FC, PropsWithChildren } from "react";

const DropdownMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.ul
      className="dropdown-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </motion.ul>
  );
};

export default DropdownMenu;
