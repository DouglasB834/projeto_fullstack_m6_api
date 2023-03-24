import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail is required").email("Invalid field."),
  password: yup
    .string()
    .required("password required")
    .min(6, "min 8 character"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).required("Name required"),
  email: yup.string().required("E-mail isrequired").email("Invalid field."),
  password: yup
    .string()
    .required("password required")
    .min(6, "min 6 character"),
  passwordConfirmed: yup
    .string()
    .required("Senha obrigatório")
    .oneOf([yup.ref("password")], "password does not check"),
  phone: yup.string().min(10, "min 10 character").required("Phone is required"),
});
