import { ButtonHTMLAttributes, FC } from "react";

import "./index.scss";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  className,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={`button button__${variant ?? "primary"} ${className ?? ""}`}
      {...rest}
    />
  );
};

export default Button;
