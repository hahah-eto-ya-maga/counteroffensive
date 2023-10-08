import React from "react";
import { Button, Login } from "../../components";

import "./LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div>
      <div className="loginblock">
        <div className="loginheader">
          <Button appearance="primary">Авторизация</Button>
          <Button appearance="primary">Вернуться в меню</Button>
        </div>
        <Login />
        <div className="loginfooter">
          <Button className="join_button" appearance="primary">
            Войти в Бахмут
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
