import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/usersEntity";
import AppError from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas";

export const createUserService = async (body: IUserRequest) => {
  const userRepo = AppDataSource.getRepository(Users);
  const { email } = body;
  const user = await userRepo.findOne({
    where: { email: email },
    withDeleted: true,
  });

  if (user && !user.isActive) {
    throw new AppError("User already exists, but is inactive", 409);
  }

  if (user) {
    throw new AppError("User already exists", 409);
  }

  const newUser = userRepo.create(body);

  const hashedPassword = await hash(newUser.password, 10);
  newUser.password = hashedPassword;

  await userRepo.save(newUser);

  const validateResponse = await userResponseSchema.validate(newUser, {
    stripUnknown: true,
  });

  return validateResponse;
};
