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

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}
export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}
export interface IContacts {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt?: Date;
}
export interface IListContactUser {
  id: string;
  name: string;
  phone: string;
  email?: string;
  contacts: IContacts[];
}
export interface IContacUpdade {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
}
