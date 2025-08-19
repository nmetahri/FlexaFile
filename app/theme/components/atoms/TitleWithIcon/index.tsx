import "./index.scss";

import { FC, ReactElement } from "react";

export interface TitleWithIconProps {
  icon?: ReactElement;
  title: string;
}

const TitleWithIcon: FC<TitleWithIconProps> = ({ title, icon }) => {
  return (
    <div className="title-with-icon">
      {icon !== undefined && <span className="icon">{icon}</span>}
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default TitleWithIcon;
