import md5 from "md5";
import { IError } from "./types";

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
            const url = `${this.HOST}/${method}`;
            const options: RequestInit = {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  // Authorization: params.token ?? "", Хедер авторизации, в котором отправляется token. пока вопрос к беку
               },

               body: JSON.stringify(params),
               mode: "cors", // Кросдоменные запросы
            };

            const res = await fetch(url, options);
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

   login(login: string, password: string): Promise<string | IError> {
      const rnd = Math.random().toString();
      const hash = md5(md5(login + password) + rnd);
      return this.request("login", { login, hash, rnd });
   }

   logout(token: string): Promise<string | IError> {
      return this.request("logout", { token });
   }

   signin(
      nickname: string,
      login: string,
      password: string
   ): Promise<string | IError> {
      const hash = md5(login + password);
      return this.request<string>("signin", { nickname, login, hash });
   }
}
