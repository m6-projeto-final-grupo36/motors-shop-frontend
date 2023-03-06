import { Container, ExploreSection } from "./styles";
import { Header } from "../../components/Header";
import { AuctionCard } from "../../components/AuctionCard";
import { ListProduct } from "../../components/ListProduct";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const { announcements } = useContext(AnnouncementContext);

  const [cars, setCars] = useState(() => {
    const carsFiltered = announcements.filter((announcement) => announcement.type_vehicle === "car")
    return carsFiltered
  })
  const [motorcycles, setMotorcycles] = useState(() => {
    const motorcyclesFiltered = announcements.filter((announcement) => announcement.type_vehicle === "motorcycle")
    return motorcyclesFiltered
  })

  useEffect(() => {
    setCars(() => {
      const carsFiltered = announcements.filter((announcement) => announcement.type_vehicle === "car")
      return carsFiltered
    })
    setMotorcycles(() => {
      const motorcyclesFiltered = announcements.filter((announcement) => announcement.type_vehicle === "motorcycle")
      return motorcyclesFiltered
    })
  }, [announcements])

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
        <ul className="list-auctions">
          <AuctionCard 
            username="Regina Freitas"
            page='Home'
            expiryTime={23}
            productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
            productKm={0}
            productName="Gol"
            productValue={50000}
            productYear={2021}
          />
          <AuctionCard 
            username="Pedro Guimarães"
            page='Home'
            expiryTime={21}
            productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            productImg="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
            productKm={0}
            productName="Gol 2.0"
            productValue={40000}
            productYear={2021}
          />
        </ul>
      </>
      <ListProduct id="cars" productType="Carros" productList={cars} />
      <ListProduct id="motorcycles" productType="Motos" productList={motorcycles} />
      <Footer />
    </Container>
  );
};
