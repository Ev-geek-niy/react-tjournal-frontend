import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../utils/schemas/validations";
import { FormField } from "../FormField";

interface RegisterForm {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterForm> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullname" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
