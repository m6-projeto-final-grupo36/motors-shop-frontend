import { IProductCard, ProductCard } from "../ProductCard";
import { SectionProduct } from "./styles";

interface IListProduct {
    productType: string;
    productList: IProductCard[]
}

export const ListProduct = ({productType, productList}: IListProduct) => {

  return (
    <SectionProduct>
      <h1>{productType}</h1>
      <ul className="listProduct">
        {productList.map((elem) => (
          <ProductCard
            title={elem.title}
            description={elem.description}
            km={elem.km}
            name={elem.name}
            productImg={elem.productImg}
            value={elem.value}
            year={elem.year}
          />
        ))}
      </ul>
    </SectionProduct>
  );
};
