import React from "react";
import cn from "classnames";

import "./Input.css";

interface IInputProps {
   text: string;
   value: string;
   onChange: (value: string) => void;
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
<<<<<<< HEAD
   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
   };
=======
  
   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
   };

>>>>>>> fc795ee1c35b0f3cf382b85c23383a27919025f7
   return (
      <div className="input_box">
         <div className="input_text">
            <span className="span_text">{text}</span>
         </div>
         <input
            className={cn("input_value", className)}
            value={value}
            onChange={onChangeHandler}
            type={type ?? "text"}
         />
      </div>
   );
};

export default Input;
