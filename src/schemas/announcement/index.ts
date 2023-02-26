import * as yup from "yup";

export const createAnnouncementSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  year: yup
    .number()
    .typeError("Precisa ser um número")
    .required("Ano obrigatório"),
  // .max(4, "Máximo 4 dígitos"),
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
  // type_vehicle: yup
  //   .mixed()
  //   .notRequired()
  //   .oneOf(["car", "motorcycle"])
  //   .default("car"),
  // type: yup.mixed().notRequired().oneOf(["sales", "auction"]).default("sales"),
  images: yup.array().default([]),
  is_active: yup.boolean().notRequired().default(true),
});
