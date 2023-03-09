import { Image } from "@chakra-ui/react";
import { Modal } from "./index";

interface IModalImageVehicle {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalImageVehicle = ({
  isOpen,
  onClose,
  url,
}: IModalImageVehicle) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleModal="Imagem do veículo">
      <Image src={url} paddingBottom="20px" />
    </Modal>
  );
};
