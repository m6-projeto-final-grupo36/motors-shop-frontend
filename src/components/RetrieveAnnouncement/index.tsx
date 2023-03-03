import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { UserContext } from "../../Providers/UserProvider";
import { Commentary } from "../Comments";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./styles";

export const RetrieveAnnouncement = () => {
  const { announcementFound } = useContext(AnnouncementContext);

  const {data} = useContext(UserContext)

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
              {
                 Object.keys(data).length ? 
                 <a className="btn" href={`https://api.whatsapp.com/send?phone=${announcementFound.user.cell_phone}`}>Comprar</a>
                 :
                 <button className="btn" disabled>Comprar</button>
              }
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
            <div className="initial-caracters">
              {announcementFound.user.name.split(' ')[0][0]}
              {announcementFound.user.name.split(" ")[1] && announcementFound.user.name.split(" ")[1][0]}
            </div>
            <h3>{announcementFound.user.name}</h3>
            <div className="advertiser-description">
              <p>
                {announcementFound.user.description}
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
      <Commentary comments={announcementFound.comments} announcementId={announcementFound.id}/>  
      <Footer />
    </>
  );
};
