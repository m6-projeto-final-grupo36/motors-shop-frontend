import { Modal } from ".";
import {
  IUpdateUserRequest,
  UpdateUserForm,
} from "../../pages/ProfileViewUser/UpdateUserForm";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "../../schemas/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { IUser, UserContext } from "../../Providers/UserProvider";
import { api } from "../../services/api";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";

export const ModalUpdateUser = () => {
  const [isLoadingButtonUpdateUser, setIsLoadingButtonUpdateUser] =
    useState(false);

  const {
    onCloseModalUpdateUser,
    isOpenModalUpdateUser,
    data: { token, user },
    setData,
  } = useContext(UserContext);

  const { getAllAnnouncements } = useContext(AnnouncementContext);

  const {
    formState: { errors: errorsUpdateUser },
    register: registerUpdateUser,
    handleSubmit: handleSubmitUpdateUser,
  } = useForm<IUpdateUserRequest>({
    resolver: yupResolver(updateUserSchema),
  });

  const handleUpdateUser = (data: IUpdateUserRequest) => {
    setIsLoadingButtonUpdateUser(true);

    if (!data.password) {
      delete data.password;
    }

    api
      .patch<IUser>(`/users/${user.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async (res) => {
        localStorage.setItem("@MotorsShop:user", JSON.stringify(res.data));
        setData({ token, user: res.data });
        setIsLoadingButtonUpdateUser(false);
        await getAllAnnouncements();
        onCloseModalUpdateUser();
      })
      .catch((err) => {
        setIsLoadingButtonUpdateUser(false);
        console.log(err);
      });
  };

  return (
    <Modal
      onClose={onCloseModalUpdateUser}
      isOpen={isOpenModalUpdateUser}
      titleModal="Editar perfil"
    >
      <UpdateUserForm
        errors={errorsUpdateUser}
        handleUpdateUser={handleSubmitUpdateUser(handleUpdateUser)}
        loadingUpdateUser={isLoadingButtonUpdateUser}
        register={registerUpdateUser}
      />
    </Modal>
  );
};
