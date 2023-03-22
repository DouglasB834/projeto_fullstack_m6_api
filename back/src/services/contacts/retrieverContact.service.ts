import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";

export const retrieverContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contactObj = await contactRepository.findOneBy({ id: contactId });
  if (!contactObj) return contactObj;
  return contactObj;
};
