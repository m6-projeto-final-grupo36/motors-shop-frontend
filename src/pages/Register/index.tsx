import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterForm } from "./RegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/user";
import { Box, Flex, Heading, useDisclosure, VStack } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { IRegister, UserContext } from "../../Providers/UserProvider";
import { api } from "../../services/api";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";

export const Register = () => {
  const { account_type } = useContext(UserContext);
  const [loadingButtonRegister, setLoadingButtonRegister] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onOpenModalSuccess,
    onClose: onCloseModalSuccess,
  } = useDisclosure();
  const {
    isOpen: isModalErrorOpen,
    onOpen: onOpenModalError,
    onClose: onCloseModalError,
  } = useDisclosure();

  const handleRegister = (data: IRegister) => {
    setLoadingButtonRegister(true);
    const newData: any = { ...data, account_type };
    delete newData.confirm_password;

    api
      .post("/register", { ...newData })
      .then(() => {
        setLoadingButtonRegister(false);
        onOpenModalSuccess();
      })
      .catch((err) => {
        console.log(err);
        setLoadingButtonRegister(false);
        onOpenModalError();
      });
  };

  return (
    <VStack
      justifyContent="space-between"
      backgroundColor="var(--color-grey-8)"
    >
      <Modal
        titleModal="Sucesso!"
        subtitleModal="Sua conta foi criada com Sucesso!"
        infoModal="Agora você poderá ver seus negócios crescendo em grande escala"
        link_text="Ir para o login"
        link_url="/login"
        isOpen={isModalSuccessOpen}
        onClose={onCloseModalSuccess}
      />
      <Modal
        titleModal="Ops..."
        subtitleModal="Algum erro aconteceu!"
        infoModal="Ocorreu um erro"
        isOpen={isModalErrorOpen}
        onClose={onCloseModalError}
      />
      <Header />
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
    </VStack>
  );
};
