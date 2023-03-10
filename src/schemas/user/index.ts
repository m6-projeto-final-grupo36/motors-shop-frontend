import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  cpf: yup.string().required("CPF obrigatório"),
  cell_phone: yup.string().required("Celular obrigatório"),
  birthdate: yup.date().required("Data de nascimento obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
  cep: yup.string().required("CEP obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  road: yup.string().required("Rua obrigatória"),
  number: yup.string().required("Número obrigatório"),
  complement: yup.string().notRequired(),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const recoverPasswordSchema = yup.object().shape({
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const sendEmailSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Precisa ser uma email válido"),
});

export const updateUserSchema = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired().email("Email inválido"),
  cpf: yup.string().notRequired(),
  cell_phone: yup.string().notRequired(),
  birthdate: yup.date().notRequired(),
  description: yup.string().notRequired(),
  password: yup.string().notRequired(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const updateAddressSchema = yup.object().shape({
  cep: yup.string().notRequired(),
  state: yup.string().notRequired().max(2, "Máximo 2 caracteres"),
  city: yup.string().notRequired(),
  road: yup.string().notRequired(),
  number: yup.string().notRequired(),
  complement: yup.string().notRequired(),
});
