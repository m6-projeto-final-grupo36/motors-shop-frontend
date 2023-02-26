import { Header } from "../../components/Header";
import { Advertiser } from "../../components/Advertiser";
import { ListProduct } from "../../components/ListProduct";
import { Footer } from "../../components/Footer";
import { MainContainer, ContainerAdvertiser } from "./styles";
import { AuctionCard } from "../../components/AuctionCard";
// import { cars, motorcycles } from "../../database";
import { useContext, useState } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Modal } from "../../components/Modal";
import {
  CreateAnnouncementForm,
  ICreateAnnouncementRequest,
} from "./CreateAnnouncementForm";
import { UpdateAnnouncementForm } from "./UpdateAnnouncementForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createAnnouncementSchema } from "../../schemas/announcement";
import { api } from "../../services/api";

interface IProfileProps {
  page?: string;
}

export const ProfileViewUser = ({ page }: IProfileProps) => {
  const [
    isLoadingButtonCreateAnnouncement,
    setIsLoadingButtonCreateAnnouncement,
  ] = useState(false);

  const {
    announcements,
    isOpenModalCreateAnnouncement,
    onCloseModalCreateAnnouncement,
    isOpenModalUpdateAnnouncement,
    onCloseModalUpdateAnnouncement,
    announcementCreate_type,
    announcementCreate_type_vehicle,
  } = useContext(AnnouncementContext);

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

  const handleCreateAnnouncement = (data: ICreateAnnouncementRequest) => {
    setIsLoadingButtonCreateAnnouncement(true);
    const inputImages = document.getElementsByClassName("new_image_links");

    const new_images: string[] = [];

    for (let i = 0; i < inputImages.length; i++) {
      const input: HTMLInputElement = inputImages[i] as HTMLInputElement;
      new_images.push(input.value);
    }

    const newData: ICreateAnnouncementRequest = {
      ...data,
      type: announcementCreate_type,
      type_vehicle: announcementCreate_type_vehicle,
      images: new_images,
    };

    api
      .post("/announcements", newData)
      .then((res) => {
        onCloseModalCreateAnnouncement();
        setIsLoadingButtonCreateAnnouncement(false);
        console.log(res);
      })
      .catch((err) => {
        setIsLoadingButtonCreateAnnouncement(false);
        console.log(err);
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
        <UpdateAnnouncementForm />
      </Modal>
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
