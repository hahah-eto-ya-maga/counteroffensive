import React, { useState } from "react";
import { IUserData } from "../../interfaces/IUserData";
import Input from "../UI/Input/Input";

const Login: React.FC = () => {
   const [userData, setUserData] = useState<IUserData>({
      login: "",
      password: "",
   });

   const onChangeHandler = (value: string, data: string) => {
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
            text="Пароль"
            type="password"
            value={userData.password}
            onChange={(value) => {
               onChangeHandler(value, "password");
            }}
         />
      </div>
   );
};

export default Login;
