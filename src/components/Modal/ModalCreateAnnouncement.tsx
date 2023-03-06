import { Modal } from ".";
import { useForm } from "react-hook-form";
import {
  CreateAnnouncementForm,
  ICreateAnnouncementRequest,
} from "../../pages/ProfileViewUser/CreateAnnouncementForm";
import { createAnnouncementSchema } from "../../schemas/announcement";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { api } from "../../services/api";
import { UserContext } from "../../Providers/UserProvider";

interface IModalCreateAnnouncement {
  onOpenModalSuccessCreateAnnouncement: () => void;
}

export const ModalCreateAnnouncement = ({
  onOpenModalSuccessCreateAnnouncement,
}: IModalCreateAnnouncement) => {
  const [
    isLoadingButtonCreateAnnouncement,
    setIsLoadingButtonCreateAnnouncement,
  ] = useState(false);

  const {
    announcements,
    setAnnouncements,
    isOpenModalCreateAnnouncement,
    onCloseModalCreateAnnouncement,
    announcementSelected_type,
    announcementSelected_type_vehicle,
    imgsCreate,
  } = useContext(AnnouncementContext);

  const {
    data: { token },
  } = useContext(UserContext);

  const {
    formState: { errors: errorsCreateAnnouncement },
    register: registerCreateAnnouncement,
    handleSubmit: handleSubmitCreateAnnouncement,
  } = useForm<ICreateAnnouncementRequest>({
    resolver: yupResolver(createAnnouncementSchema),
  });

  const handleCreateAnnouncement = (data: ICreateAnnouncementRequest) => {
    setIsLoadingButtonCreateAnnouncement(true);

    const images = imgsCreate.filter((img) => img);

    const newData: ICreateAnnouncementRequest = {
      ...data,
      type: announcementSelected_type,
      type_vehicle: announcementSelected_type_vehicle,
      images,
    };

    api
      .post("/announcements", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAnnouncements(() => {
          return [...announcements, res.data];
        });
        onOpenModalSuccessCreateAnnouncement();
        onCloseModalCreateAnnouncement();
        setIsLoadingButtonCreateAnnouncement(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingButtonCreateAnnouncement(false);
      });
  };

  return (
    <Modal
      isOpen={isOpenModalCreateAnnouncement}
      onClose={onCloseModalCreateAnnouncement}
      titleModal="Criar anúncio"
    >
      <CreateAnnouncementForm
        handleCreateAnnouncement={handleSubmitCreateAnnouncement(
          handleCreateAnnouncement
        )}
        register={registerCreateAnnouncement}
        loadingCreateAnnouncement={isLoadingButtonCreateAnnouncement}
        errors={errorsCreateAnnouncement}
      />
    </Modal>
  );
};
