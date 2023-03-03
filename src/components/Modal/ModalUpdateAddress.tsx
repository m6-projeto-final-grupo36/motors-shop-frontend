import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { Modal } from ".";
import {
  IUpdateAddressRequest,
  UpdateAddressForm,
} from "../../pages/ProfileViewUser/UpdateAddressForm";
import { updateAddressSchema } from "../../schemas/user";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Providers/UserProvider";
import { api } from "../../services/api";

export const ModalUpdateAddress = () => {
  const [isLoadingButtonUpdateAddress, setIsLoadingButtonUpdateAddress] =
    useState(false);

  const {
    onCloseModalUpdateAddress,
    isOpenModalUpdateAddress,
    data: { user, token },
    setData,
  } = useContext(UserContext);

  const {
    formState: { errors: errorsUpdateAddress },
    register: registerUpdateAddress,
    handleSubmit: handleSubmitUpdateAddress,
  } = useForm<IUpdateAddressRequest>({
    resolver: yupResolver(updateAddressSchema),
  });

  const handleUpdateAddress = (data: IUpdateAddressRequest) => {
    console.log("------------", data);
    setIsLoadingButtonUpdateAddress(true);

    api
      .patch(`/users/${user.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        user.address = res.data.address;
        setData({ token, user });
        setIsLoadingButtonUpdateAddress(false);
        onCloseModalUpdateAddress();
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingButtonUpdateAddress(false);
        onCloseModalUpdateAddress();
      });
  };

  return (
    <Modal
      onClose={onCloseModalUpdateAddress}
      isOpen={isOpenModalUpdateAddress}
      titleModal="Editar endereço"
    >
      <UpdateAddressForm
        errors={errorsUpdateAddress}
        handleUpdateAddress={handleSubmitUpdateAddress(handleUpdateAddress)}
        loadingUpdateAddress={isLoadingButtonUpdateAddress}
        register={registerUpdateAddress}
      />
    </Modal>
  );
};
