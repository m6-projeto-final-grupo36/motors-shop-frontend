import { AuctionLi, UserContainer, ProductInfoContainer } from "./styles";
import { useState } from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiTime } from "react-icons/bi";

interface IAuctionCard {
  productImg: string;
  productName: string;
  productDescription: string;
  userName: string;
  productYear: number;
  productKm: number;
  productValue: number;
  expiryTime: number;
}

export const AuctionCard = ({
  productImg,
  productName,
  productDescription,
  userName,
  productYear,
  productKm,
  productValue,
  expiryTime
}: IAuctionCard) => {
  const useCount = (date: string) => {
    const [hour, setHour] = useState<number>();
    const [minute, setMinute] = useState<number>();
    const [second, setSecond] = useState<number>();

    const countdown = () => {
      const countTime = new Date(date).getTime();
      const timeNow = new Date().getTime();

      const interval = countTime - timeNow;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;

      const hourNumber = Math.floor(interval / hour);
      const minuteNumber = Math.floor((interval % hour) / minute);
      const secondNumber = Math.floor((interval % minute) / second);

      setHour(hourNumber)
      setMinute(minuteNumber)
      setSecond(secondNumber)
    };

    setInterval(countdown, 1000);

    return [hour, minute, second]
  };

  const [hour, minute, second] = useCount(`Feb 15, 2023 ${expiryTime}:00:00`);

  return (
    <AuctionLi>
      <img src={productImg} alt="Imagem do produto" className="productImg" />
      <span className="timer"><BiTime color="var(--color-brand-1)" fontSize={20}/>{`${hour}:${minute}:${second}`}</span>
      <h2 className="productName">{productName}</h2>
      <p className="productDescription">{productDescription}</p>
      <UserContainer>
        <p className="profileIcon">{userName[0]}</p>
        <p className="userName">{userName}</p>
      </UserContainer>
      <ProductInfoContainer>
        <span>{productYear}</span>
        <span>{productKm} KM</span>
        <p>
        {productValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </ProductInfoContainer>
      <button className="auctionButton">
        <p>Acessar página do leilão</p>
        <p className="arrow">
          <HiOutlineArrowNarrowRight fontSize={35} />
        </p>
      </button>
    </AuctionLi>
  );
};
