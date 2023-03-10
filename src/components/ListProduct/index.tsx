// import { useEffect, useState } from "react";
import { IAnnouncement } from "../../Providers/AnnouncementProvider";
import { ProductCard } from "../ProductCard";
import { SectionProduct } from "./styles";

interface IListProduct {
  productType: string;
  productList: IAnnouncement[];
  productPage?: string;
  id: string;
}

export const ListProduct = ({
  productType,
  productList,
  productPage,
  id
}: IListProduct) => {

  return (
    <SectionProduct id={id}>
      <h1>{productType}</h1>
      <ul className="listProduct">
        {productList.length ? (
          productList.map((elem) => {
            return (
              <ProductCard
                key={elem.id}
                id={elem.id}
                title={elem.title}
                description={elem.description}
                km={elem.mileage}
                name={elem.user.name}
                productImg={elem.img_cape}
                value={elem.price}
                year={elem.year}
                is_active={elem.is_active}
                page={productPage}
              />
            );
          })
        ) : (
          <span>Sem anúncios</span>
        )}
      </ul>
    </SectionProduct>
  );
};
