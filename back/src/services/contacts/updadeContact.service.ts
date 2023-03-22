import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import AppError from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/users";
import { contactResponseSchema } from "../../schemas/contacts/contacts";
export const updadeContactService = async (
  contactId: string,
  userId: string,
  body: IContactRequest
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact.user.id !== userId) {
    throw new AppError("no access permission", 403);
  }
  const updateContact = contactRepository.create({
    ...contact,
    ...body,
  });
  await contactRepository.save(updateContact);

  const validatedContact = await contactResponseSchema.validate(updateContact, {
    stripUnknown: true,
    abortEarly: false,
  });

  return validatedContact;
};
