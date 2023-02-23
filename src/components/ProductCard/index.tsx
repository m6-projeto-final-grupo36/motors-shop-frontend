import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { Li, DivProfile, DivInfo, DivButtons } from "./styles";

export interface IProductCard {
  title: string;
  productImg: string;
  description: string;
  name: string;
  km: string;
  year: string;
  value: number;
  is_active?: boolean;
  page?: string;
  id: string
}

export const ProductCard = ({
  title,
  productImg,
  description,
  name,
  km,
  year,
  value,
  is_active,
  id,
  page
}: IProductCard) => {

  const navigate = useNavigate()

  const {listAnnouncement} = useContext(AnnouncementContext)

  return (
    <Li onClick={() => {
        listAnnouncement(id)
        setTimeout(() => {
          navigate('/detail', {replace: true})
        }, 2000);
      }}>
      <img src={productImg} alt={title} className="productImg" />
      {is_active ? <span className="active">Ativo</span> : <span className="inactive">Inativo</span>}
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <DivProfile>
        <p className="profileIcon">
          {name.split(" ")[0][0]}
          {name.split(" ")[1] && name.split(" ")[1][0]}
        </p>
        <p>{name}</p>
      </DivProfile>
      <DivInfo>
        <span>{km} KM</span>
        <span>{year}</span>
        <p>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </DivInfo>
      {page && 
      <DivButtons>
        <button>Editar</button>
        <button>Ver como</button>
      </DivButtons>
      }
 </Li>
  );
};