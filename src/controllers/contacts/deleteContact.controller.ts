import { Request, Response } from "express";
import { deleteContactService } from "../../services";

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: string = req.params.id;
  const userId: string = req.user.id;
  const deleted = await deleteContactService(contactId, userId);
  return res.status(204).json(deleted);
};
