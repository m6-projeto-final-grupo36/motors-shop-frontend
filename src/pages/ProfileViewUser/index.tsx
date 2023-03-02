import { Header } from "../../components/Header";
import { Advertiser } from "../../components/Advertiser";
import { ListProduct } from "../../components/ListProduct";
import { Footer } from "../../components/Footer";
import { MainContainer, ContainerAdvertiser } from "./styles";
import { AuctionCard } from "../../components/AuctionCard";
import { useContext } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Modal } from "../../components/Modal";
import { useDisclosure } from "@chakra-ui/react";
import { ModalCreateAnnouncement } from "../../components/Modal/ModalCreateAnnouncement";
import { ModalDeleteAnnouncement } from "../../components/Modal/ModalDeleteAnnouncement";
import { ModalUpdateAnnouncement } from "../../components/Modal/ModalUpdateAnnouncement";
import { ModalUpdateUser } from "../../components/Modal/ModalUpdateUser";
import { ModalDeleteUser } from "../../components/Modal/ModalDeleteUser";
import { UserContext } from "../../Providers/UserProvider";
import { Navigate } from "react-router-dom";

interface IProfileProps {
  page?: string;
}

export const ProfileViewUser = ({ page }: IProfileProps) => {
  const { announcements } = useContext(AnnouncementContext);
  const { data } = useContext(UserContext);

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

  return (
    <>
      {Object.keys(data).length && data.user.type_account === "advertiser" ? (
        <MainContainer>
          <ModalCreateAnnouncement
            onOpenModalSuccessCreateAnnouncement={
              onOpenModalSuccessCreateAnnouncement
            }
          />

          <ModalUpdateAnnouncement
            onOpenModalSuccessUpdateAnnouncement={
              onOpenModalSuccessUpdateAnnouncement
            }
          />

          <ModalDeleteAnnouncement
            onOpenModalSuccessDeleteAnnouncement={
              onOpenModalSuccessDeleteAnnouncement
            }
          />

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
            isOpen={isOpenModalSuccessDeleteAnnouncement}
            onClose={onCloseModalSuccessDeleteAnnouncement}
            titleModal="Sucesso"
            subtitleModal="Seu anúncio foi deletado com sucesso!"
            infoModal="Você pode fechar a janela e criar um novo anúncio."
          />

          <ModalUpdateUser />

          <ModalDeleteUser />

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
          <ListProduct
            productPage={page}
            productType="Carros"
            productList={cars}
          />
          <ListProduct
            productPage={page}
            productType="Motos"
            productList={motorcycles}
          />
          <Footer />
        </MainContainer>
      ) : (
        <Navigate to="/home" replace={true} />
      )}
    </>
  );
};
