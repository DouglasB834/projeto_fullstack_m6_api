import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entities/usersEntity";
import AppError from "../errors/AppError";

export const verifyContactIdParameter = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (!regexExp.test(id)) {
    throw new AppError("Invalid input, id must be a valid uuid", 401);
  }
  return next();
};
