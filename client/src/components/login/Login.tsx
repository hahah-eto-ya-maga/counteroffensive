import React, { useState } from "react";
import { TUserData } from "../../interfaces/TUserData";
import Input from "../UI/Input/Input";

const Login: React.FC = () => {
  const [userData, setUserData] = useState<TUserData>({
    login: "",
    password: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: string
  ) => {
    setUserData({ ...userData, [data]: e.target.value });
  };

  return (
    <div>
      <Input
        text="Логин"
        value={userData.login}
        onChange={(e) => {
          onChangeHandler(e, "login");
        }}
      />
      <Input
        text="Пароль"
        type="password"
        value={userData.password}
        onChange={(e) => {
          onChangeHandler(e, "password");
        }}
      />
    </div>
  );
};

export default Login;
