import * as yup from "yup";

export const createAnnouncementSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  year: yup
    .number()
    .typeError("Precisa ser um número")
    .required("Ano obrigatório"),
  mileage: yup
    .number()
    .typeError("Precisa ser um número")
    .required("Quilometragem obrigatória"),
  price: yup
    .number()
    .typeError("Precisa ser um número")
    .required("Proço obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  img_cape: yup.string().required("Imagem de capa obrigatória"),
  images: yup.array().default([]),
  is_active: yup.boolean().notRequired().default(true),
});

export const updateAnnouncementSchema = yup.object().shape({
  title: yup.string().notRequired(),
  year: yup.string().typeError("Precisa ser um número").notRequired(),
  mileage: yup.string().typeError("Precisa ser um número").notRequired(),
  price: yup.string().typeError("Precisa ser um número").notRequired(),
  description: yup.string().notRequired(),
  img_cape: yup.string().notRequired(),
  images: yup.array().notRequired().default([]),
  is_active: yup.boolean().notRequired().default(true),
});
