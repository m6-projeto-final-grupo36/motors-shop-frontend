import { Modal } from ".";
import {
  IUpdateUserRequest,
  UpdateUserForm,
} from "../../pages/ProfileViewUser/UpdateUserForm";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "../../schemas/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserProvider";

export const ModalUpdateUser = () => {
  const [isLoadingButtonUpdateUser, setIsLoadingButtonUpdateUser] =
    useState(false);

  const { onCloseModalUpdateUser, isOpenModalUpdateUser } =
    useContext(UserContext);

  const {
    formState: { errors: errorsUpdateUser },
    register: registerUpdateUser,
    handleSubmit: handleSubmitUpdateUser,
  } = useForm<IUpdateUserRequest>({
    resolver: yupResolver(updateUserSchema),
  });

  const handleUpdateUser = (data: IUpdateUserRequest) => {
    console.log(data);
    setIsLoadingButtonUpdateUser(true);
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
