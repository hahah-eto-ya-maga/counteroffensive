import React from "react";
import { Button, SignIn } from "../../components";
import "./SignInPage.css";

const SignInPage: React.FC = () => {
  return (
    <div className="signin_block">
      <div className="signin_header">
        <div>
          <Button appearance="primary-disable" disabled>
            Регистрация
          </Button>
        </div>
        <div>
          <Button appearance="primary">Вернуться в меню</Button>
        </div>
      </div>
      <div className="main_content">
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
