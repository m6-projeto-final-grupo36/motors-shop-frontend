import { Box, Flex, Heading, useDisclosure, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { ILogin, UserContext } from "../../Providers/UserProvider";
import { loginSchema } from "../../schemas";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const [loadingButtonLogin, setLoadingButtonLogin] = useState(false);
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const {
    isOpen: isModalErrorOpen,
    onOpen: onOpenModalError,
    onClose: onCloseModalError,
  } = useDisclosure();

  const handleLogin = (data: ILogin) => {
    setLoadingButtonLogin(true);

    signIn(data)
      .then((_) => {
        setLoadingButtonLogin(false);
        navigate("/home");
      })
      .catch(() => {
        onOpenModalError();
        setLoadingButtonLogin(false);
      });
  };

  return (
    <VStack
      h={["100%", "100vh"]}
      justifyContent="space-between"
      backgroundColor="var(--color-grey-8)"
    >
      <Modal
        titleModal="Ops..."
        subtitleModal="Algum erro aconteceu!"
        infoModal="Ocorreu um erro"
        isOpen={isModalErrorOpen}
        onClose={onCloseModalError}
      />
      <Flex justifyContent="center" w="100%" p="15px">
        <Box
          padding={["44px 20px", "44px 48px"]}
          w="100%"
          maxW="500px"
          backgroundColor="var(--color-white-fixed)"
        >
          <Heading size="lg">Login</Heading>
          <LoginForm
            errors={errors}
            handleLogin={handleSubmit(handleLogin)}
            loadingLogin={loadingButtonLogin}
            register={register}
          />
        </Box>
      </Flex>
      <Footer />
    </VStack>
  );
};
