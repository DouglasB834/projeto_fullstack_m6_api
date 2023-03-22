import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/usersEntity";

export const listContactService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.findOne({
    where: { id: id },
    relations: { contacts: true },
  });
  // return validatedContact;
  // const ContactsRepository = AppDataSource.getRepository(Contacts);
  // const contact = await ContactsRepository.find();
  // delete user.password;
  return user.contacts;
};
