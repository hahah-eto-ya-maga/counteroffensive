import React from "react";
import { Button, Login } from "../../components";

import "./LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login_block">
      <div className="login_header">
        <div>
          <Button appearance="primary" className="auth_header_button">Авторизация</Button>
        </div>
        <div>
          <Button appearance="primary" className="auth_header_button">Вернуться в меню</Button>
        </div>
      </div>
      <div className="main_auth_content">
        <Login />
      </div>
      <div className="login_footer">
        <div>
          <Button className="join_button" appearance="primary">
            Войти в Бахмут
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
