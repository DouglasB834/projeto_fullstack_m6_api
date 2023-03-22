import { Request, Response } from "express";
import { retrieverContactService } from "../../services";

export const retrieverContactcController = async (
  req: Request,
  res: Response
) => {
  const contactId = req.params.id;
  const contac = await retrieverContactService(contactId);
  return res.status(200).json(contac);
};
