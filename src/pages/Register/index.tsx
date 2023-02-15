import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "./RegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";

export interface IRegister {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birthdate: Date;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  account_type: string;
  password: string;
  confirm_password: string;
}

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = ({ name }: IRegister) => {
    setLoading(true);

    setTimeout(() => {
      console.log(name);
      setLoading(false);
    }, 3000);
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <Flex
        justifyContent="center"
        w="100%"
        p="15px"
        backgroundColor="var(--color-grey-8)"
      >
        <Box
          padding="44px 48px"
          w="100%"
          maxW="500px"
          backgroundColor="var(--color-white-fixed)"
        >
          <Heading size="lg">Cadastro</Heading>
          <RegisterForm
            errors={errors}
            handleRegister={handleSubmit(handleRegister)}
            loadingRegister={loading}
            register={register}
          />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};
