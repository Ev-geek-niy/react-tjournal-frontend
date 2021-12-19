import * as yup from "yup";

export const LoginFormSchema = yup.object({
  email: yup.string().email("Неверная почта").required("Почта обязательна"),
  password: yup
    .string()
    .min(6, "Длина пароля должна быть не менее 6 символов")
    .required("Пароль обязательный"),
});

export const RegisterFormSchema = yup
  .object({
    fullname: yup.string().required("Имя и фамилия обазательны"),
  })
  .concat(LoginFormSchema);
