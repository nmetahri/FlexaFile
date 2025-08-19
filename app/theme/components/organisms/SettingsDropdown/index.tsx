import "./index.scss";

import IconButton from "@components/atoms/IconButton";
import DropdownMenu from "@components/molecules/DropdownMenu";
import LocaleSwitcher from "@components/organisms/LocaleSwitcher";
import { AnimatePresence } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="dropdown-container">
      <IconButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu>
            <LocaleSwitcher />
          </DropdownMenu>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(SettingsDropdown);
