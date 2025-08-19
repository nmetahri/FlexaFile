import "./index.scss";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const IconButton = ({
  isOpen,
  onClick
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="icon-button"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Settings size={24} />
    </motion.button>
  );
};

export default IconButton;
