import React from "react";
import cn from "classnames";
import "./Button.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "menu" | "primary-disable";
}

const Button = ({
  appearance,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn("button", className, {
        ["primary"]: appearance === "primary",
        ["menu"]: appearance === "menu",
        ["primary-disable"]: appearance === "primary-disable",
      })}
      {...props}
	  
    >{children}</button>
  );
};

export default Button;
