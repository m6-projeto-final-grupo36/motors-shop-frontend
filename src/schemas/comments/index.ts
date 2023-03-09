import * as yup from "yup";

export interface ICommentUpdate {
  text?: string;
}

export const createCommentSchema = yup.object().shape({
  text: yup.string().required("Comentário é obrigatório"),
});

export const updateCommentSchema: yup.SchemaOf<ICommentUpdate> = yup
  .object()
  .shape({
    text: yup.string().notRequired(),
  });
