import { Request, Response } from "express";
import { listContactService } from "../../services";

export const listContacstController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: string = req.user.id;
  const data = await listContactService(contactId);
  return res.status(200).json(data);
};
