import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from ".";
import { IUser, UserContext } from "../../Providers/UserProvider";
import { api } from "../../services/api";

export interface IAuthUser {
  token: string;
  user: IUser;
}

export const ModalDeleteUser = () => {
  const { isOpenModalDeleteUser, onCloseModalDeleteUser, data, setData } =
    useContext(UserContext);

  const navigate = useNavigate();

  const handleDeleteUser = () => {
    api
      .delete(`/users/${data.user.id}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })
      .then(() => {
        localStorage.removeItem("@MotorsShop:token");
        localStorage.removeItem("@MotorsShop:user");
        setData({} as IAuthUser);
        onCloseModalDeleteUser();
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        onCloseModalDeleteUser();
      });
  };

  return (
    <Modal
      titleModal="Confirmação de exclusão de conta"
      subtitleModal="Tem certeza que deseja excluir sua conta?"
      infoModal="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
      "
      isOpen={isOpenModalDeleteUser}
      onClose={onCloseModalDeleteUser}
    >
      <Flex justify="space-between" w="100%" gap="10px">
        <Button
          size="lg"
          whiteSpace="normal"
          color="var(--color-grey-2)"
          bgColor="var(--color-grey-6)"
          type="button"
          onClick={onCloseModalDeleteUser}
        >
          Cancelar
        </Button>
        <Button
          type="button"
          paddingY="10px"
          size="lg"
          whiteSpace="normal"
          bgColor="var(--color-feedback-alert-2)"
          color="var(--color-feedback-alert-1)"
          onClick={handleDeleteUser}
        >
          Sim, excluir conta
        </Button>
      </Flex>
    </Modal>
  );
};
