import { useForm } from "react-hook-form";
import { Example } from "../../components/Form/Radio";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Radio } from "@chakra-ui/react";

// interface ITestRadio {
//   tipo: "sim" | "nao" | "talvez";
//   name: string;
// }

// const schema = yup.object().shape({
//   tipo: yup
//     .mixed()
//     .required("Tipo obrigatório")
//     .oneOf(["sim", "nao", "talvez"]),
//   name: yup.string().required("Tipo obrigatório"),
// });

export const Login = () => {
  // const {
  //   formState: { errors },
  //   register,
  //   handleSubmit,
  // } = useForm<ITestRadio>({
  //   resolver: yupResolver(schema),
  // });

  // function testSubmit({ tipo, name }: ITestRadio) {
  //   console.log("tipo", tipo);
  //   console.log("name", name);
  // }

  return (
    <>
      <h1>Login</h1>
      {/* <Example options={["Comprador", "Anunciante"]} /> */}
      {/* <form onSubmit={handleSubmit(testSubmit)}>
        <Input type="text" {...register("name")} />
        <Radio {...register("tipo")} />
        sim
        <input type="radio" value="nao" {...register("tipo")} />
        nao
        <input type="radio" value="talvez" {...register("tipo")} />
        talvez
        <button type="submit">Testar</button>
      </form> */}
    </>
  );
};
