import "./index.scss";

import { FC } from "react";

interface FlagProps {
  src?: string;
  alt?: string;
}

const Flag: FC<FlagProps> = ({ src, alt = "Flag" }) => {
  if (!src) {
    return null;
  }
  return <img src={src} alt={alt} className="flag" />;
};

export default Flag;
