import React from "react";
import { Button, SignIn } from "../../components";
import "./SignInPage.css";

const SignInPage: React.FC = () => {
  return (
    <div className="signin_block">
      <div className="signin_header">
        <div>
          <Button appearance="primary" className="auth_header_button">Регистрация</Button>
        </div>
        <div>
          <Button appearance="primary" className="auth_header_button">Вернуться в меню</Button>
        </div>
      </div>
      <div className="main_auth_content">
        <SignIn />
      </div>
      <div className="signin_footer">
        <div>
          <Button className="join_button" appearance="primary">
            Попасть в списки военных
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
