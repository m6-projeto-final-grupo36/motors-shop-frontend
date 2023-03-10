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
import { ModalDeleteUser } from "../../components/Modal/ModalDeleteUser";
import { UserContext } from "../../Providers/UserProvider";

interface IProfileProps {
  page?: string;
}

export const ProfileViewUser = ({ page }: IProfileProps) => {
  const { data } = useContext(UserContext);

  const { announcements, announcementFound } = useContext(AnnouncementContext);

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
    (announcement) => 
    {
      if(Object.keys(announcementFound).length){
        return announcement.type_vehicle === "car" && announcement.user.id === announcementFound.user.id
      }
    });

  const motorcycles = announcements.filter(
    (announcement) => 
    {
      if(Object.keys(announcementFound).length){
        return announcement.type_vehicle === "motorcycle" && announcement.user.id === announcementFound.user.id
      }
    }
  );

  const carAnnouncements = announcements.filter(announcement => {
    if(Object.keys(data).length){
      return announcement.type_vehicle === "car" && announcement.user.id === data.user.id
    }
  })

  const motorcyclesAnnouncements = announcements.filter(announcement => {
    if(Object.keys(data).length){
      return announcement.type_vehicle === "motorcycle" && announcement.user.id ===  data.user.id
    }
})
  return (
    <>
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
          subtitleModal="Seu an??ncio foi criado com sucesso!"
          infoModal="Agora voc?? poder?? ver seus neg??cios crescendo em grande escala"
        />

        <Modal
          isOpen={isOpenModalSuccessUpdateAnnouncement}
          onClose={onCloseModalSuccessUpdateAnnouncement}
          titleModal="Sucesso"
          subtitleModal="Seu an??ncio foi atualizado com sucesso!"
          infoModal="Agora voc?? poder?? ver seus neg??cios crescendo em grande escala"
        />

        <Modal
          isOpen={isOpenModalSuccessDeleteAnnouncement}
          onClose={onCloseModalSuccessDeleteAnnouncement}
          titleModal="Sucesso"
          subtitleModal="Seu an??ncio foi deletado com sucesso!"
          infoModal="Voc?? pode fechar a janela e criar um novo an??ncio."
        />

        <ModalDeleteUser />

        <Header />

        <ContainerAdvertiser>
          <Advertiser
            name={page ? data.user.name : announcementFound.user.name}
            description={
              page ? data.user.description : announcementFound.user.description
            }
            typeAccount="Anunciante"
            page={page}
          />
        </ContainerAdvertiser>
        {page && (
          <>
              <h1 id="auction">Leil??o</h1>
              <ul className="list-auctions">
                <AuctionCard
                  username={data.user.name}
                  expiryTime={23}
                  productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
                  productKm={0}
                  productName="Gol"
                  productValue={50000}
                  productYear={2021}
                />
                <AuctionCard
                  username={data.user.name}
                  expiryTime={23}
                  productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
                  productKm={0}
                  productName="Gol"
                  productValue={50000}
                  productYear={2021}
                />
              </ul>
            </>
          )}
          <ListProduct
            id="cars"
            productPage={page}
            productType="Carros"
            productList={page ? carAnnouncements : cars}
          />
          <ListProduct
            id="motorcycles"
            productPage={page}
            productType="Motos"
            productList={page ? motorcyclesAnnouncements : motorcycles}
          />
          <Footer />
        </MainContainer>
    </>
  );
};