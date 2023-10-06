import { TError, TUserData } from "./types";
export default class Server {
   HOST: string;

   constructor(HOST: string) {
      this.HOST = HOST;
   }

   async request<T>(
      method: string,
      params: { [key: string]: any }
   ): Promise<T | TError> {
      if (method) {
         try {
            const url = `${this.HOST}?${Object.keys(params)
               .map((key) => `${key}=${params[key]}`)
               .join("&")}`;
            const res = await fetch(url);
            const answer = await res.json();
            if (answer.result === "ok") {
               return answer.data;
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

   login(login: string, password: string): Promise<TUserData | TError> {
      return this.request<TUserData>("login", { login, password });
   }
}
