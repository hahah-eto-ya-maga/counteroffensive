import React, { useState } from "react";
import { IUserData } from "../../interfaces/IUserData";
import Input from "../UI/Input/Input";

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
