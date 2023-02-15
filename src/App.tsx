import { AuctionCard } from "./components/Auction";
import Global from "./style/global";

export const App = () => {
  return (
    <>
      <Global />
      <AuctionCard
        productImg="https://garagem360.com.br/wp-content/uploads/2021/06/volkswagen_gol_5-door_25.jpeg"
        productName={
          "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
        }
        productDescription="Um belo carro, que chega de 0 a 100 em 3 segundos.."
        userName="Rodrigo Tavares"
        productYear={2013}
        productKm={0}
        productValue={25000}
        expiryTime={24}
      />
    </>
  );
};
