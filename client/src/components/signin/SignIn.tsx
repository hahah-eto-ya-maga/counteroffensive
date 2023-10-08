import React, { useState } from "react";
import { IUserData } from "../../interfaces/IUserData";
import { Input } from "../UI";

const SignIn: React.FC = () => {
   const [userData, setUserData] = useState<IUserData>({
      login: "",
      password: "",
      nickname: "",
      passwordTwo: "",
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
            text="Имя в игре"
            value={userData.nickname ?? ""}
            onChange={(e) => {
               onChangeHandler(e, "nickname");
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
         <Input
            text="Повторите пароль"
            type="password"
            value={userData.passwordTwo ?? ""}
            onChange={(e) => {
               onChangeHandler(e, "passwordTwo");
            }}
         />
      </div>
   );
};

export default SignIn;
