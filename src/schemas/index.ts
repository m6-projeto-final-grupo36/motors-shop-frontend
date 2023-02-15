import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  cpf: yup.string().required("CPF obrigatório"),
  phone_number: yup.string().required("Celular obrigatório"),
  birthdate: yup.date().required("Data de nascimento obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
  cep: yup.string().required("CEP obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  street: yup.string().required("Rua obrigatória"),
  number: yup.string().required("Número obrigatório"),
  complement: yup.string().notRequired(),
  account_type: yup
    .mixed()
    .required("Tipo de conta obrigatório")
    .oneOf(["buyer", "seller"], "Anunciante ou comprador"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});
