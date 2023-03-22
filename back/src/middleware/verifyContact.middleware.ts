import { NextFunction, Response, Request } from "express";
import { AnySchema } from "yup";
import AppError from "../errors/AppError";

export const verifyContactMiddlware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validate = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validate;

      return next();
    } catch (error) {
      throw new AppError(error.errors, 401);
    }
  };
