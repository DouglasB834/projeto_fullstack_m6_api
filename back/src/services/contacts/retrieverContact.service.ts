import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import AppError from "../../errors/AppError";

export const retrieverContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (!regexExp.test(contactId)) {
    throw new AppError("Invalid input, id must be a valid uuid", 401);
  }
  const contactObj = await contactRepository.findOneBy({ id: contactId });
  if (!contactObj) return contactObj;
  return contactObj;
};
