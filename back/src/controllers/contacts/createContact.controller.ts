import { Request, Response } from "express";
import { Contacts } from "../../entities/contacts";
import { IContactRequest } from "../../interfaces/users";
import { createNewContactService } from "../../services";

export const createContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.user.id;
  const body: IContactRequest = req.body;
  const newContact = await createNewContactService(userId, body);
  return res.status(201).json(newContact);
};
