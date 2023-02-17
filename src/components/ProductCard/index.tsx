import { Li, DivProfile, DivInfo } from "./styles";

export interface IProductCard {
  title: string;
  productImg: string;
  description: string;
  name: string;
  km: number;
  year: number;
  value: number;
}

export const ProductCard = ({
  title,
  productImg,
  description,
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
    </Li>
  );
};
