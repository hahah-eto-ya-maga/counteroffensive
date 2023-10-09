import React, { useState } from "react";
import { Button, Input } from "../UI";
import { IUserData } from "../../interfaces";

const SignIn: React.FC = () => {
  const [userData, setUserData] = useState<IUserData>({
    login: "",
    password: "",
    nickname: "",
    passwordTwo: "",
  });

  const onChangeHandler = (value: string, data: string) => {
    setUserData({ ...userData, [data]: value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  };

  return (
    <form className="auth_form" onSubmit={onSubmitHandler}>
      <div>
        <Input
          text="Логин"
          value={userData.login}
          onChange={(value) => {
            onChangeHandler(value, "login");
          }}
        />
        <Input
          text="Имя в игре"
          value={userData.nickname ?? ""}
          onChange={(value) => {
            onChangeHandler(value, "nickname");
          }}
        />
        <Input
          text="Пароль"
          type="password"
          value={userData.password}
          onChange={(value) => {
            onChangeHandler(value, "password");
          }}
        />
        <Input
          text="Повтор пароля"
          type="password"
          value={userData.passwordTwo ?? ""}
          onChange={(value) => {
            onChangeHandler(value, "passwordTwo");
          }}
        />
      </div>
      <div className="auth_footer">
        <Button appearance="primary" className="auth_submit_button">
          Попасть в списки военных
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
