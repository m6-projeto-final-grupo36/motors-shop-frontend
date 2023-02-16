import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "./RegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { IRegister, UserContext } from "../../Providers/UserProvider";

export const Register = () => {
  const { handleRegister, loadingButtonRegister } = useContext(UserContext);

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
          padding={["44px 20px", "44px 48px"]}
          w="100%"
          maxW="500px"
          backgroundColor="var(--color-white-fixed)"
        >
          <Heading size="lg">Cadastro</Heading>
          <RegisterForm
            errors={errors}
            handleRegister={handleSubmit(handleRegister)}
            loadingRegister={loadingButtonRegister}
            register={register}
          />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};
