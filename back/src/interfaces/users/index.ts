export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserResponseUpdate {
  name: string;
  email: string;
  phone: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface iJwtPayload {
  sub?: string;
  id: string;
  email: string;
}
//  ========= contatos ==========
export interface IContactRequest {
  name: string;
  email: string;
  phone: string;
  userId?: string;
}
export interface IContactResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  // user?: IUserResponse;
}
