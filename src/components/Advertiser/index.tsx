import { useContext } from "react";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Container } from "./styles";

interface IAdvertiserProfile {
  name: string;
  typeAccount: string;
  description: string;
  page?: string;
}

export const Advertiser = ({
  name,
  typeAccount,
  description,
  page,
}: IAdvertiserProfile) => {
  const { onOpenModalCreateAnnouncement } = useContext(AnnouncementContext);
  return (
    <Container>
      <div className="containerTwo">
        <div className="divImg">
          <p className="pImg">
            {name.split(" ")[0][0]}
            {name.split(" ")[1] && name.split(" ")[1][0]}
          </p>
        </div>
        <div className="divName">
          <p className="pName">{name}</p>
          <span className="spanTypeAccount">{typeAccount}</span>
        </div>
        <div className="divDescription">
          <p className="pDescription">{description}</p>
        </div>
        {page && (
          <button onClick={onOpenModalCreateAnnouncement} className="btn">
            Criar anúncio
          </button>
        )}
      </div>
    </Container>
  );
};
