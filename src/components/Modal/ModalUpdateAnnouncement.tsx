import { useContext, useState } from "react";
import { Modal } from ".";
import {
  IUpdateAnnouncementRequest,
  UpdateAnnouncementForm,
} from "../../pages/ProfileViewUser/UpdateAnnouncementForm";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { updateAnnouncementSchema } from "../../schemas/announcement";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../Providers/UserProvider";

interface IModalUpdateAnnouncement {
  onOpenModalSuccessUpdateAnnouncement: () => void;
}

export const ModalUpdateAnnouncement = ({
  onOpenModalSuccessUpdateAnnouncement,
}: IModalUpdateAnnouncement) => {
  const [
    isLoadingButtonUpdateAnnouncement,
    setIsLoadingButtonUpdateAnnouncement,
  ] = useState(false);

  const {
    announcements,
    setAnnouncements,
    isOpenModalUpdateAnnouncement,
    onCloseModalUpdateAnnouncement,
    announcementSelected_type,
    announcementSelected_type_vehicle,
    imgsUpdate,
    announcementFound,
  } = useContext(AnnouncementContext);

  const {
    data: { token, user },
  } = useContext(UserContext);

  const {
    formState: { errors: errorsUpdateAnnouncement },
    register: registerUpdateAnnouncement,
    handleSubmit: handleSubmitUpdateAnnouncement,
  } = useForm<IUpdateAnnouncementRequest>({
    resolver: yupResolver(updateAnnouncementSchema),
  });

  const handleUpdateAnnouncement = (data: IUpdateAnnouncementRequest) => {
    setIsLoadingButtonUpdateAnnouncement(true);

    const images = imgsUpdate.filter((img) => img);

    const newData: IUpdateAnnouncementRequest = {
      ...data,
      price: data.price && data.price * 100,
      type: announcementSelected_type,
      type_vehicle: announcementSelected_type_vehicle,
      images,
    };

    api
      .patch(`/announcements/${announcementFound.id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAnnouncements(() => {
          const result = announcements.filter(
            (ann) => ann.id !== announcementFound.id
          );
          res.data.user = user;
          return [...result, res.data];
        });
        onOpenModalSuccessUpdateAnnouncement();
        onCloseModalUpdateAnnouncement();
        setIsLoadingButtonUpdateAnnouncement(false);
      })
      .catch(() => {
        setIsLoadingButtonUpdateAnnouncement(false);
      });
  };

  return (
    <Modal
      isOpen={isOpenModalUpdateAnnouncement}
      onClose={onCloseModalUpdateAnnouncement}
      titleModal="Editar anúncio"
    >
      <UpdateAnnouncementForm
        errors={errorsUpdateAnnouncement}
        handleUpdateAnnouncement={handleSubmitUpdateAnnouncement(
          handleUpdateAnnouncement
        )}
        loadingUpdateAnnouncement={isLoadingButtonUpdateAnnouncement}
        register={registerUpdateAnnouncement}
      />
    </Modal>
  );
};
