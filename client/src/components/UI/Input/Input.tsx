import React from "react";
import cn from "classnames";

import "./Input.css";

interface IInputProps {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: "password" | "email" | "text";
}

const Input: React.FC<IInputProps> = ({
  text,
  className,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="input_box">
      <div className="input_text">
        <span className="span_text">{text}</span>
      </div>
      <input
        className={cn("input_value", className)}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
      />
    </div>
  );
};

export default Input;
