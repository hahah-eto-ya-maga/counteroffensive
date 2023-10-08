import React, { useState } from "react";
import { IUserData } from "../../modules/Server/types";
import "./Login.css";

const Login: React.FC = () => {
  const [userData, setUserData] = useState<IUserData>({
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
    <>
      <div className="input_box">
        <div className="input_text">
          <span className="span_text">Логин</span>
        </div>
        <input
          className="input_value"
          type="text"
          value={userData.login}
          onChange={(e) => {
            onChangeHandler(e, "login");
          }}
        />
      </div>
      <div className="input_box">
        <div className="input_text">
          <span className="span_text">Пароль</span>
        </div>
        <input
          className="input_value"
          type="text"
          value={userData.password}
          onChange={(e) => {
            onChangeHandler(e, "password");
          }}
        />
      </div>
    </>
  );
};

export default Login;
