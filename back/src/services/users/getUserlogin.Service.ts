import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/usersEntity";
import { userResponseSchema } from "../../schemas";

export const getUserloginService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(Users);

  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
  });

  const validateResponse = await userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};
