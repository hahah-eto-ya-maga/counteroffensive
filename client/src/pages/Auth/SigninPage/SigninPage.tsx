import React from "react";
import { Button, SignIn } from "../../../components";
import "../Auth.css";

const SigninPage: React.FC = () => {
  return (
    <div className="auth_wrapper">
      <div className="auth_header">
        <Button appearance="primary-disable">Регистрация</Button>
        <Button appearance="primary">Вернуться в меню</Button>
      </div>
      <div className="auth_content">
        <SignIn />
      </div>
    </div>
  );
};

export default SigninPage;
