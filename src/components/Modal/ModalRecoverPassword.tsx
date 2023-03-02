import { Button, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Modal } from ".";
import { Input } from "../Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendEmailSchema } from "../../schemas/user";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IRecoverPassword {
  email: string;
}

interface IUser {
  email: string;
  name: string;
  id: string;
}

export const ModalRecoverPassword = () => {
  const [isLoading, setIsloading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IRecoverPassword>({
    resolver: yupResolver(sendEmailSchema),
  });

  const navigate = useNavigate()

  const {
    isOpenModalRecoverPassword,
    onCloseModalRecoverPassword,
    onOpenModalSuccessRecoverPassword,
    onOpenModalErrorRecoverPassword,
  } = useContext(UserContext);

  const handleSendEmail = ({ email }: IRecoverPassword) => {
    setIsloading(true);

    api
      .get<IUser[]>("/users")
      .then((res) => {
        setIsloading(false);
        const foundEmail = res.data.find((user) => user.email === email);
        localStorage.setItem('@userFound', `${foundEmail?.id}`)
        if (foundEmail) {
          api.post('/users/forgot_password', {
            email: foundEmail.email,
            name: foundEmail.name
          })
          .then(res => navigate('/'))
          .catch(err => console.log(err))
          onCloseModalRecoverPassword();
          onOpenModalSuccessRecoverPassword();
        } else {
          onCloseModalRecoverPassword();
          onOpenModalErrorRecoverPassword();
        }
      })
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });
  };

  return (
    <Modal
      titleModal="Recupere sua senha"
      infoModal="Após a confirmação, enviaremos um email para recuperação da senha"
      isOpen={isOpenModalRecoverPassword}
      onClose={onCloseModalRecoverPassword}
    >
      <VStack w="100%" onSubmit={handleSubmit(handleSendEmail)} as="form">
        <Input
          placeholder="Digite seu email"
          label="Email"
          error={errors.email}
          type="text"
          {...register("email")}
        />
        <Button
          bgColor="var(--color-brand-1)"
          color="var(--color-white-fixed)"
          mt="6"
          size="lg"
          isLoading={isLoading}
          type="submit"
        >
          Enviar email de recuperação
        </Button>
      </VStack>
    </Modal>
  );
};
