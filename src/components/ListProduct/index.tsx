import { IAnnouncement } from "../../Providers/AnnouncementProvider";
import { IProductCard, ProductCard } from "../ProductCard";
import { SectionProduct } from "./styles";

interface IListProduct {
    productType: string;
    productList: IAnnouncement[]
    productPage?: string;
}

export const ListProduct = ({productType, productList, productPage}: IListProduct) => {

  return (
    <SectionProduct>
      <h1>{productType}</h1>
      <ul className="listProduct">
        {productList.map((elem) => (
          <ProductCard
            key={elem.id}
            id={elem.id}
            title={elem.title}
            description={elem.description}
            km={elem.mileage}
            name='Rodrigo Castro'
            productImg={elem.img_cape}
            value={elem.price}
            year={elem.year}
            is_active={elem.is_active}
            page={productPage}
          />
        ))}
      </ul>
    </SectionProduct>
  );
};
