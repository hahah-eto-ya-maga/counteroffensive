import React from "react";
import AuthHeader from "./AuthHeader/AuthHeader";
import Login from "../Login/Login";
import SignIn from "../Signin/SignIn";
import { Button } from "../UI";

import "./Auth.css";

export enum EAuthType {
  registration,
  authorization,
}

interface Props {
  type: EAuthType;
}

const Auth: React.FC<Props> = ({ type }) => {
  const content =
    type === EAuthType.authorization ? (
      <Login />
    ) : type === EAuthType.registration ? (
      <SignIn />
    ) : (
      <></>
    );
  return (
    <div className="auth_wrapper">
      <div>
        <AuthHeader type={type} />
      </div>
      <div className="auth_content">{content}</div>
    </div>
  );
};

export default Auth;
