import { AuctionCard } from "../AuctionCard";
import { SectionAuction } from "./styles";

export const ListAuction = () => {
  const mockedAuctionData = [
    {
        id: 0,
        expiryTime: 24,
        productDescription: "O T-Cross é o primeiro SUV produzido pela Volkswagen no Brasil. E chegou para revolucionar os padrões do segmento.",
        productImg: "https://i0.statig.com.br/bancodeimagens/b7/zx/92/b7zx9217u14w5079b4zd4sv3v.jpg",
        productKm: 5000,   
        productName: "Volkswagem T-Cross 1.0 200 TSI Comfortline",
        productValue: 131800,
        productYear: 2020,
        userName: "João Carlos"
    },
    {
        id: 1,
        expiryTime: 24,
        productDescription: "Silhueta dinâmica e linhas orgânicas se unem, criando um design único: moderno, forte e provocante. Luzes Diurnas em LED com efeito 3D realçam a assinatura do design.​",
        productImg: "http://conteudo.imguol.com.br/c/galeria/50/2022/08/23/citroen-c4-cactus-shine-pack-1661262617513_v2_16x9.jpg",
        productKm: 6400,   
        productName: "CITROËN C4 CACTUS",
        productValue: 84990,
        productYear: 2021,
        userName: "João Carlos"
    },
  ]

  return (
    <SectionAuction>
      <h1>Leilão</h1>
      <ul className="listAuction">
        {mockedAuctionData.map((elem) => (
          <AuctionCard
            expiryTime={elem.expiryTime}
            productDescription={elem.productDescription}
            productImg={elem.productImg}
            productKm={elem.productKm}
            productName={elem.productName}
            productValue={elem.productValue}
            productYear={elem.productYear}
            userName={elem.userName}
            key={elem.id}
          />
        ))}
      </ul>
    </SectionAuction>
  );
};
