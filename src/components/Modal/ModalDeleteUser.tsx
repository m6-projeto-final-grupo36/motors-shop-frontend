import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Modal } from ".";
import { UserContext } from "../../Providers/UserProvider";

export const ModalDeleteUser = () => {
  const { isOpenModalDeleteUser, onCloseModalDeleteUser } =
    useContext(UserContext);

  const handleDeleteUser = () => {
    console.log("inserir lógica para deletar usuário logado");
    // api
    //   .delete(`/announcements/${announcementFound.id}`)
    //   .then(() => {
    //     setAnnouncements(() => {
    //       const newAnnouncements = announcements.filter(
    //         (annou) => annou.id !== announcementFound.id
    //       );
    //       return newAnnouncements;
    //     });
    //     onCloseModalDeleteAnnouncement();
    //     onOpenModalSuccessDeleteAnnouncement();
    //   })
    //   .catch(() => {
    //     onCloseModalDeleteAnnouncement();
    //   });
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
