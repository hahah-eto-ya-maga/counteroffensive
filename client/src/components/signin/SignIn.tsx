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
      value:string,
      data: string
   ) => {
      setUserData({ ...userData, [data]: value });
   };

   return (
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
   );
};

export default SignIn;
