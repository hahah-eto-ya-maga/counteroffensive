import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import "./P.css";

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "l";
  children: ReactNode;
}

const P = ({
  size = "l",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn("p", className, {
        ["s"]: size == "s",
        ["l"]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
