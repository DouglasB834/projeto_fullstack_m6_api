import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import AppError from "../../errors/AppError";

export const retrieverContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contactObj = await contactRepository.findOneBy({ id: contactId });
  if (!contactObj) {
    throw new AppError("Contact not found", 404);
  }

  return contactObj;
};
