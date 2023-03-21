import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactResponse } from "../../interfaces/users";
import { userResponseSchema } from "../users/userResponse.schema";

export const contactsSchema: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  userId: yup.string(),
});

export const contactResponseSchema: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    createdAt: yup.date().required(),
    user: userResponseSchema,
  });

export const userPetsResponseSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  contacts: yup.array(contactResponseSchema),
});
