import "./index.scss";

import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      type="button"
      className={clsx("button", `button__${variant}`, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
