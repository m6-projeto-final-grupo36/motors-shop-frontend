import { Header } from "../../components/Header";
import { Advertiser } from "../../components/Advertiser";
import { ListProduct } from "../../components/ListProduct";
import { Footer } from "../../components/Footer";
import { MainContainer, ContainerAdvertiser } from "./styles";
import { AuctionCard } from "../../components/AuctionCard";
// import { cars, motorcycles } from "../../database";
import { useContext } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";

interface IProfileProps{
  page?: string
}

export const ProfileViewUser = ({page}: IProfileProps) => {

  const {announcements} = useContext(AnnouncementContext)

  const cars = announcements.filter(announcement => announcement.type_vehicle === 'car')

  const motorcycles = announcements.filter(announcement => announcement.type_vehicle === 'motorcycle')

  return (
    <MainContainer>
      <Header />
      <ContainerAdvertiser>
        <Advertiser
          name="Samuel Leão"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          typeAccount="Anunciante"
          page={page}
        />
      </ContainerAdvertiser>
      {
        page && <>
        <h1>Leilão</h1>
        <AuctionCard 
        expiryTime={23} 
        productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
        productKm={0}
        productName='Gol'
        productValue={50000}
        productYear={2021}
        />
        </>
      }
      <ListProduct productPage={page} productType="Carros" productList={cars} />
      <ListProduct productPage={page} productType="Motos" productList={motorcycles} />
      <Footer />
    </MainContainer>
  );
};