import { ExploreSection } from "./styles";
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
    <>
      <Header />
      <ExploreSection>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p>Um ambiente feito para você explorar o seu melhor</p>
        <div className="buttonContainer">
          <button onClick={() => window.scrollTo(0, 1030) /* TO-DO arrumar função */}>Carros</button>
          <button onClick={() => window.scrollTo(0, 1500) /* TO-DO arrumar função */}>Motos</button>
        </div>
      </ExploreSection>
      <>
        <h1 style={{marginLeft: 60, marginBottom: 20, fontWeight: 600, fontSize: 24}}>Leilão</h1>
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
      <ListProduct productType="Carros" productList={cars} />
      <ListProduct productType="Motos" productList={motorcycles} />
      <Footer />
    </>
  );
};
