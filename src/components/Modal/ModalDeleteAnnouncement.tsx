import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Modal } from ".";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { api } from "../../services/api";

interface IModalDeleteAnnouncement {
  onOpenModalSuccessDeleteAnnouncement: () => void;
}

export const ModalDeleteAnnouncement = ({
  onOpenModalSuccessDeleteAnnouncement,
}: IModalDeleteAnnouncement) => {
  const {
    isOpenModalDeleteAnnouncement,
    onCloseModalDeleteAnnouncement,
    announcementFound,
    announcements,
    setAnnouncements,
  } = useContext(AnnouncementContext);

  const handleDeleteAnnouncement = () => {
    api
      .delete(`/announcements/${announcementFound.id}`)
      .then(() => {
        setAnnouncements(() => {
          const newAnnouncements = announcements.filter(
            (annou) => annou.id !== announcementFound.id
          );
          return newAnnouncements;
        });
        onCloseModalDeleteAnnouncement();
        onOpenModalSuccessDeleteAnnouncement();
      })
      .catch(() => {
        onCloseModalDeleteAnnouncement();
      });
  };

  return (
    <Modal
      isOpen={isOpenModalDeleteAnnouncement}
      onClose={onCloseModalDeleteAnnouncement}
      titleModal="Excluir anúncio"
      subtitleModal="Tem certeza que deseja remover este anúncio?"
      infoModal="Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio.
        "
    >
      <Flex justify="space-between" w="100%" gap="10px">
        <Button
          size="lg"
          whiteSpace="normal"
          color="var(--color-grey-2)"
          bgColor="var(--color-grey-6)"
          type="button"
          onClick={onCloseModalDeleteAnnouncement}
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
          onClick={handleDeleteAnnouncement}
        >
          Sim, excluir anúncio
        </Button>
      </Flex>
    </Modal>
  );
};
