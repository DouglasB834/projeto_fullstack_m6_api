import { Request, Response } from "express";

export const createContactsController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const newContact = await createNewContact(userId);
};
