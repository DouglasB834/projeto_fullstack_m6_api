import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import AppError from "../../errors/AppError";

export const retrieverContactService = async (
  contactId: string,
  userId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contactObj = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contactObj) {
    throw new AppError("Contact not found", 404);
  }
  if (contactObj.user.id !== userId) {
    throw new AppError("You don't have permission to delete this contact", 401);
  }
  //se de rum mudar aq

  return contactObj;
};
