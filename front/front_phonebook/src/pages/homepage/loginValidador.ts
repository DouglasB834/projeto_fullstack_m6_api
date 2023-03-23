import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail required").email("Invalid field."),
  password: yup
    .string()
    .required("password required")
    .min(8, "min 8 character"),
});
