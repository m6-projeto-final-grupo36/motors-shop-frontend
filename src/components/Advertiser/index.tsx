import { Container } from "./style";

interface IAdvertiserProfile {
  profileImg: string;
  name: string;
  typeAccount: string;
  description: string;
}

export const Advertiser: React.FunctionComponent<any> = ({
  profileImg,
  name,
  typeAccount,
  description,
}) => {
  return (
    <Container>
      <div className="containerTwo">
        <div className="divImg">
          {/* <img src={profileImg} alt="Profile Logo" /> */}
          {/* <p>{name}</p> */}
          <p className="pImg">RZ</p>
        </div>
        <div className="divName">
          {/* <p>{name}</p>
        <span>{typeAccount}</span> */}
          <p className="pName">Richard Zago</p>
          <span className="spanTypeAccount">Anunciante</span>
        </div>
        <div className="divDescription">
          {/* <p>{description}</p> */}
          <p className="pDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            provident repellat asperiores sequi, maiores alias sapiente dicta
            vitae molestiae vero error cumque eveniet veniam animi ipsum tempore
            ad veritatis assumenda.
          </p>
        </div>
        <button className="btn">Criar anuncio</button>
      </div>
    </Container>
  );
};
