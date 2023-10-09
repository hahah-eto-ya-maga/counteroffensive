import React, { useState } from "react";
import { TUserData } from "../../interfaces/TUserData";

const SignIn: React.FC = () => {
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
          <span className="span_text">Имя в игре</span>
        </div>
        <input
          className="input_value"
          type="text"
          value={userData.nickname}
          onChange={(e) => {
            onChangeHandler(e, "nickname");
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
      <div className="input_box">
        <div className="input_text">
          <span className="span_text">Повтор пароля</span>
        </div>
        <input
          className="input_value"
          type="text"
          value={userData.passwordTwo}
          onChange={(e) => {
            onChangeHandler(e, "passwordTwo");
          }}
        />
      </div>
    </div>
  );
};

export default SignIn;
