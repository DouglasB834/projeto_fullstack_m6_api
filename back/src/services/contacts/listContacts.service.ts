import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/usersEntity";

export const listContactService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.find({
    select: {
      id: true,
      name: true,
      phone: true,
      email: true,
    },
    where: { id: id },
    relations: { contacts: true },
  });

  return user;
};
