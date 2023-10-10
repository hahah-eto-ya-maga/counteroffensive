import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import "./P.css";

interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "l";
  children: ReactNode;
}

const P: React.FC<PProps> = ({ size, children, className, ...props }) => {
  return (
    <p
      className={cn('p', className, {
        ['s']: size == "s",
        ['l']: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
