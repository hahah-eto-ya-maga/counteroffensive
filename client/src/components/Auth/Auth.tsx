import React from "react";
import AuthHeader from "./AuthHeader/AuthHeader";
import Login from "../Login/Login";
import SignIn from "../Signin/SignIn";

import "./Auth.css";
import { Button } from "../UI";

export enum EAuthType {
   registration,
   authorization,
}

interface Props {
   type: EAuthType;
}

const Auth: React.FC<Props> = ({ type }) => {
   let buttonText = "";
   let content = <></>;
   switch (type) {
      case EAuthType.authorization:
         buttonText = "Войти в Бахмут";
         content = <Login />;
         break;
      case EAuthType.registration:
         buttonText = "Попасть в списки военных";
         content = <SignIn />;
         break;
   }
   return (
      <div className="auth_wrapper">
         <AuthHeader type={type} />
         <div className="auth_content">{content}</div>
         <div className="auth_footer">
            <Button appearance="primary" className="auth_join_button">{buttonText}</Button>
         </div>
      </div>
   );
};

export default Auth;
