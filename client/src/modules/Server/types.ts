export interface IError {
   code: number;
   text: string;
}

export interface IUserData {
   login: string;
   password: string;
   nickname?: string;
   passwordTwo?: string;
}
