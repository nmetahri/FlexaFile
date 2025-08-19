import "./index.scss";

import { FC, ReactNode } from "react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  name: string;
}

const Select: FC<SelectProps> = ({ name, value, onChange, children }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="select"
    >
      {children}
    </select>
  );
};

export default Select;
