import React, { useState } from "react";
import { IUserData } from "../../modules/Server/types";
import { Input } from "../UI";

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
