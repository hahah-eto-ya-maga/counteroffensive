import React from "react";
import { Button } from "../../UI";
import { EAuthType } from "../Auth";

import "./AuthHeader.css";

interface Props {
   type: EAuthType;
}

const AuthHeader: React.FC<Props> = ({ type }) => {
   const buttonText =
      type === EAuthType.authorization
         ? "Авторизация"
         : type === EAuthType.registration
         ? "Регистрация"
         : "";
   return (
      <div className="auth_header">
         <div>
            <Button appearance="primary_disable">{buttonText}</Button>
         </div>
         <div>
            <Button appearance="primary">Вернуться в меню</Button>
         </div>
      </div>
   );
};

export default AuthHeader;
