import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Commentary } from "../Comments";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./styles";

export const RetrieveAnnouncement = () => {
  const { announcementFound } = useContext(AnnouncementContext);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <section>
          <div className="img-announcement">
            <img src={announcementFound.img_cape} alt="Imagem do produto" />
          </div>
          <div className="purchase-info">
            <h3>{announcementFound.title}</h3>
            <div className="other-infos">
              <div className="car-info">
                <span>{announcementFound.year}</span>
                <span>{announcementFound.mileage} KM</span>
              </div>
              <span>
                {announcementFound.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="btn-buy">
              <button>Comprar</button>
            </div>
          </div>
          <div className="description-announcement">
            <h3>Descrição</h3>
            <p>{announcementFound.description}</p>
          </div>
        </section>

        <section>
          <div className="photos-announcement">
            <h3>Fotos</h3>
            <div className="photos">
              {announcementFound.images.length ? (
                announcementFound.images.map((image) => (
                  <div className="photo">
                    {" "}
                    <img src={image} alt="Imagem do produto" />
                  </div>
                ))
              ) : (
                <span>Sem fotos</span>
              )}
            </div>
          </div>
          <div className="advertiser-info">
            <div className="initial-caracters">JS</div>
            <h3>James Silva</h3>
            <div className="advertiser-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="btn-list-advertiser-announcements">
              <button
                onClick={() => {
                  navigate("/advertiser_announcement", { replace: true });
                }}
              >
                Ver todos os anúncios
              </button>
            </div>
          </div>
        </section>
        <div className="fixed"></div>
      </Container>
      <Commentary />
      <Footer />
    </>
  );
};
