import { Li, DivProfile, DivInfo } from "./styles";

interface IProductCard {
  title: string;
  productImg: string;
  description: string;
  profileImg: string;
  name: string;
  km: number;
  year: number;
  value: number;
}

export const ProductCard = ({
  title,
  productImg,
  description,
  profileImg,
  name,
  km,
  year,
  value,
}: IProductCard) => {
  return (
    <Li>
      <img src={productImg} alt={title} className="productImg" />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <DivProfile>
        <img src={profileImg} alt="Imagem do usuário" className="profileImg" />
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
    </Li>
  );
};
