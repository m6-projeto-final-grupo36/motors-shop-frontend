import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ModalLink } from "./styles";

interface IModalProps {
  titleModal: string;
  subtitleModal?: string;
  infoModal?: string;
  children?: ReactNode;
  link_url?: string;
  link_text?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({
  isOpen,
  onClose,
  titleModal,
  children,
  infoModal,
  subtitleModal,
  link_url,
  link_text,
}: IModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          color="var(--color-grey-1)"
          as="h2"
          display="flex"
          alignItems="center"
        >
          {titleModal}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="start" spacing="18px">
            {subtitleModal && (
              <Text as="h3" fontWeight="500" color="var(--color-grey-1)">
                {subtitleModal}
              </Text>
            )}
            {infoModal && <Text color="var(--color-grey-2)">{infoModal}</Text>}
            {children && children}
          </VStack>
        </ModalBody>
        {link_url && link_text && (
          <ModalFooter display="flex" flexDirection="row-reverse">
            <ModalLink to={link_url}>{link_text}</ModalLink>
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

// Como utilizar o componente

// const {
//   isOpen: isOpenModal2,
//   onOpen: onOpenMOdal2,
//   onClose: onCloseModal2,
// } = useDisclosure();

// <button onClick={() => onOpenMOdal2()}>Abrir modal2</button>

// <Modal
//   titleModal="Sucesso!"
//   subtitleModal="Sua conta foi criada com Sucesso!"
//   infoModal="Agora você poderá ver seus negócios crescendo em grande escala"
//   link_text="Ir para o login"
//   link_url="/login"
//   isOpen={isOpenModal2}
//   onClose={onCloseModal2}
// >
//   {/* Pode enviar children */}
// </Modal>
