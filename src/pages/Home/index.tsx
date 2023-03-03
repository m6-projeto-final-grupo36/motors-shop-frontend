import { Container, ExploreSection } from "./styles";
import { Header } from "../../components/Header";
import { AuctionCard } from "../../components/AuctionCard";
import { ListProduct } from "../../components/ListProduct";
import { useContext } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const { announcements } = useContext(AnnouncementContext);

  const cars = announcements.filter(
    (announcement) => announcement.type_vehicle === "car"
  );

  const motorcycles = announcements.filter(
    (announcement) => announcement.type_vehicle === "motorcycle"
  );

  return (
    <Container>
      <Header />
      <ExploreSection>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p>Um ambiente feito para você explorar o seu melhor</p>
        <div className="buttonContainer">
          <a href="#cars">Carros</a>
          <a href="#motorcycles">Motos</a>
        </div>
      </ExploreSection>
      <>
        <h1 className="title-auction" id="auction">Leilão</h1>
        <AuctionCard
          page='Home'
          expiryTime={23}
          productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
          productKm={0}
          productName="Gol"
          productValue={50000}
          productYear={2021}
        />
      </>
      <ListProduct id="cars" productType="Carros" productList={cars} />
      <ListProduct id="motorcycles" productType="Motos" productList={motorcycles} />
      <Footer />
    </Container>
  );
};
