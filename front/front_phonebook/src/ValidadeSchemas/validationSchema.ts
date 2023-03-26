import * as yup from "yup";

export const UpdadeSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Invalid field."),
  phone: yup.string(),
  password: yup.string().min(6).required("Password is required"),
});

export const UpdadeContactSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email("Invalid field."),
  phone: yup.string(),
});

// Contacts
export const CreateContactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Invalid field.").required(),
  phone: yup.string().required(),
});
