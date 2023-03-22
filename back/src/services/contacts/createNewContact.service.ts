import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts";
import { Users } from "../../entities/usersEntity";
import { IContactRequest, IContactResponse } from "../../interfaces/users";
import { contactResponseSchema } from "../../schemas/contacts/contacts";

export const createNewContactService = async (
  userId: string,
  dataContat: IContactRequest
): Promise<IContactResponse> => {
  const userRepository = AppDataSource.getRepository(Users);
  const contactRepository = AppDataSource.getRepository(Contacts);

  const user = await userRepository.findOneBy({ id: userId });

  const newContact = contactRepository.create({
    ...dataContat,
    user: user!,
  });

  await contactRepository.save(newContact);
  const validatedContact = await contactResponseSchema.validate(newContact, {
    stripUnknown: true,
    abortEarly: false,
  });

  return validatedContact;
};
