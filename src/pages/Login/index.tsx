import { Box, Flex, Heading, useDisclosure, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { ModalRecoverPassword } from "../../components/Modal/ModalRecoverPassword";
import { ILogin, UserContext } from "../../Providers/UserProvider";
import { loginSchema } from "../../schemas/user";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const [loadingButtonLogin, setLoadingButtonLogin] = useState(false);
  const {
    signIn,
    isOpenModalSuccessRecoverPassword,
    onCloseModalSuccessRecoverPassword,
    isOpenModalErrorRecoverPassword,
    onCloseModalErrorRecoverPassword,
  } = useContext(UserContext);
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
    <>
      <Modal
        titleModal="Ops..."
        subtitleModal="Algum erro aconteceu!"
        infoModal="Ocorreu um erro"
        isOpen={isModalErrorOpen}
        onClose={onCloseModalError}
      />

      <ModalRecoverPassword />

      <Modal
        titleModal="Sucesso!"
        subtitleModal="Email de recuperação de senha enviado com sucesso"
        infoModal="Verifique seu email e siga os passos para alterar sua senha"
        isOpen={isOpenModalSuccessRecoverPassword}
        onClose={onCloseModalSuccessRecoverPassword}
      />

      <Modal
        titleModal="Ops..."
        subtitleModal="Email não encontrado"
        infoModal="Email fornecido não é registrado, faça o cadastro"
        isOpen={isOpenModalErrorRecoverPassword}
        onClose={onCloseModalErrorRecoverPassword}
      />

      <VStack
        minH="100vh"
        justifyContent="space-between"
        backgroundColor="var(--color-grey-8)"
      >
        <Header />
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
    </>
  );
};
