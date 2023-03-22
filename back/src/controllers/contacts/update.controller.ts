import { Request, Response } from "express";
import { updadeContactService } from "../../services";

export const updadeContactController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const contactId = req.params.id;
  const body = req.body;
  const updadeContact = await updadeContactService(contactId, userId, body);
  return res.status(200).json(updadeContact);
};
