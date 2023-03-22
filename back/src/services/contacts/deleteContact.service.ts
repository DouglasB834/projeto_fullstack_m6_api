import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import { Users } from "../../entities/usersEntity";
import AppError from "../../errors/AppError";

export const deleteContactService = async (
  contactId: string,
  userId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(Users);

  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact.user.id !== userId) {
    throw new AppError("You don't have permission to delete this contact", 403);
  }
  await contactRepository.remove(contact);

  return {};

  // if (pet.user.id !== userId) {
  //   throw new AppError("No access permission", 403);
  // };
};
