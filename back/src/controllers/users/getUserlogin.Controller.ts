import { Request, Response } from "express";
import { getUserloginService } from "../../services";

export const getUserloginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;
  const user = await getUserloginService(id);
  return res.status(200).json(user);
};
