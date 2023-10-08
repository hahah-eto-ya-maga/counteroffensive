import { IError, IUserInfo } from "./types";

export default class Server {
   HOST: string;

   constructor(HOST: string) {
      this.HOST = HOST;
   }

   async request<T>(
      method: string,
      params: { [key: string]: any }
   ): Promise<T | IError> {
      if (method) {
         try {
            const options: RequestInit = {
               method: "POST",
               headers: {
                  "Content-Type": "application/json;charset=utf-8",
               },
               body: JSON.stringify(params),
               mode: "cors",
            };
            const res = await fetch(this.HOST, options);
            const answer = await res.json();
            if (answer.result === "ok") {
               return answer.data as T;
            }
            return answer.error;
         } catch (e) {
            return {
               code: 500,
               text: "wtf",
            };
         }
      }
      return {
         code: 500,
         text: "wtf",
      };
   }

   login(login: string, password: string): Promise<IUserInfo | IError> {
      return this.request<IUserInfo>("login", { login, password });
   }

   logout(login: string): Promise<IUserInfo | IError> {
      return this.request<IUserInfo>("logout", { login });
   }

   signin(token: string): Promise<string | IError> {
      return this.request<string>("signin", { token });
   }
}
