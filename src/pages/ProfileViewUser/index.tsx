import { Header } from "../../components/Header";
import { Advertiser } from "../../components/Advertiser";
import { ListProduct } from "../../components/ListProduct";
import { Footer } from "../../components/Footer";
import { MainContainer, ContainerAdvertiser } from "./styles";
import { AuctionCard } from "../../components/AuctionCard";
import { useContext, useState } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Modal } from "../../components/Modal";
import {
  CreateAnnouncementForm,
  ICreateAnnouncementRequest,
} from "./CreateAnnouncementForm";
import {
  IUpdateAnnouncementRequest,
  UpdateAnnouncementForm,
} from "./UpdateAnnouncementForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  createAnnouncementSchema,
  updateAnnouncementSchema,
} from "../../schemas/announcement";
import { api } from "../../services/api";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";

interface IProfileProps {
  page?: string;
}

export const ProfileViewUser = ({ page }: IProfileProps) => {
  const [
    isLoadingButtonCreateAnnouncement,
    setIsLoadingButtonCreateAnnouncement,
  ] = useState(false);

  const [
    isLoadingButtonUpdateAnnouncement,
    setIsLoadingButtonUpdateAnnouncement,
  ] = useState(false);

  const {
    announcements,
    setAnnouncements,
    isOpenModalCreateAnnouncement,
    onCloseModalCreateAnnouncement,
    isOpenModalUpdateAnnouncement,
    onCloseModalUpdateAnnouncement,
    announcementSelected_type,
    announcementSelected_type_vehicle,
    imgsCreate,
    imgsUpdate,
    announcementFound,
    isOpenModalDeleteAnnouncement,
    onCloseModalDeleteAnnouncement,
  } = useContext(AnnouncementContext);

  const {
    isOpen: isOpenModalSuccessCreateAnnouncement,
    onOpen: onOpenModalSuccessCreateAnnouncement,
    onClose: onCloseModalSuccessCreateAnnouncement,
  } = useDisclosure();

  const {
    isOpen: isOpenModalSuccessUpdateAnnouncement,
    onOpen: onOpenModalSuccessUpdateAnnouncement,
    onClose: onCloseModalSuccessUpdateAnnouncement,
  } = useDisclosure();

  const {
    isOpen: isOpenModalSuccessDeleteAnnouncement,
    onOpen: onOpenModalSuccessDeleteAnnouncement,
    onClose: onCloseModalSuccessDeleteAnnouncement,
  } = useDisclosure();

  const cars = announcements.filter(
    (announcement) => announcement.type_vehicle === "car"
  );

  const motorcycles = announcements.filter(
    (announcement) => announcement.type_vehicle === "motorcycle"
  );

  const {
    formState: { errors: errorsCreateAnnouncement },
    register: registerCreateAnnouncement,
    handleSubmit: handleSubmitCreateAnnouncement,
  } = useForm<ICreateAnnouncementRequest>({
    resolver: yupResolver(createAnnouncementSchema),
  });

  const {
    formState: { errors: errorsUpdateAnnouncement },
    register: registerUpdateAnnouncement,
    handleSubmit: handleSubmitUpdateAnnouncement,
  } = useForm<IUpdateAnnouncementRequest>({
    resolver: yupResolver(updateAnnouncementSchema),
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
      .post("/announcements", newData)
      .then((res) => {
        setAnnouncements(() => {
          return [...announcements, res.data];
        });
        onOpenModalSuccessCreateAnnouncement();
        onCloseModalCreateAnnouncement();
        setIsLoadingButtonCreateAnnouncement(false);
      })
      .catch(() => {
        setIsLoadingButtonCreateAnnouncement(false);
      });
  };

  const handleUpdateAnnouncement = (data: IUpdateAnnouncementRequest) => {
    setIsLoadingButtonUpdateAnnouncement(true);

    const images = imgsUpdate.filter((img) => img);

    const newData: IUpdateAnnouncementRequest = {
      ...data,
      type: announcementSelected_type,
      type_vehicle: announcementSelected_type_vehicle,
      images,
    };

    api
      .patch(`/announcements/${announcementFound.id}`, newData)
      .then((res) => {
        setAnnouncements(() => {
          const result = announcements.filter(
            (ann) => ann.id !== announcementFound.id
          );
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
    <MainContainer>
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

      <Modal
        isOpen={isOpenModalSuccessCreateAnnouncement}
        onClose={onCloseModalSuccessCreateAnnouncement}
        titleModal="Sucesso"
        subtitleModal="Seu anúncio foi criado com sucesso!"
        infoModal="Agora você poderá ver seus negócios crescendo em grande escala"
      />

      <Modal
        isOpen={isOpenModalSuccessUpdateAnnouncement}
        onClose={onCloseModalSuccessUpdateAnnouncement}
        titleModal="Sucesso"
        subtitleModal="Seu anúncio foi atualizado com sucesso!"
        infoModal="Agora você poderá ver seus negócios crescendo em grande escala"
      />

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

      <Modal
        isOpen={isOpenModalSuccessDeleteAnnouncement}
        onClose={onCloseModalSuccessDeleteAnnouncement}
        titleModal="Sucesso"
        subtitleModal="Seu anúncio foi deletado com sucesso!"
        infoModal="Você pode fechar a janela e criar um novo anúncio."
      />

      <Header />

      <ContainerAdvertiser>
        <Advertiser
          name="Samuel Leão"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          typeAccount="Anunciante"
          page={page}
        />
      </ContainerAdvertiser>
      {page && (
        <>
          <h1>Leilão</h1>
          <AuctionCard
            expiryTime={23}
            productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
            productKm={0}
            productName="Gol"
            productValue={50000}
            productYear={2021}
          />
        </>
      )}
      <ListProduct productPage={page} productType="Carros" productList={cars} />
      <ListProduct
        productPage={page}
        productType="Motos"
        productList={motorcycles}
      />
      <Footer />
    </MainContainer>
  );
};
