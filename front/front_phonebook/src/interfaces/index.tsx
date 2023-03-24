import { ReactNode } from "react";

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmed?: string;
  phone: string;
}

export interface IChldres {
  children: ReactNode;
}
