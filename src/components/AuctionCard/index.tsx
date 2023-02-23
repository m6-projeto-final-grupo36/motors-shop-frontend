import { AuctionLi, ProductInfoContainer, } from "./styles";
import { useState } from "react";
import { BiTime } from "react-icons/bi";

interface IAuctionCard {
  productImg: string;
  productName: string;
  productDescription: string;
  productYear: number;
  productKm: number;
  productValue: number;
  expiryTime: number;
}

export const AuctionCard = ({
  productImg,
  productName,
  productDescription,
  productYear,
  productKm,
  productValue,
  expiryTime
}: IAuctionCard) => {

  const useCount = (date: string) => {
    const [hour, setHour] = useState<string>();
    const [minute, setMinute] = useState<string>();
    const [second, setSecond] = useState<string>();

    const countdown = () => {
      const countTime = new Date(date).getTime();
      const timeNow = new Date().getTime();

      const interval = countTime - timeNow;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;

      const hourNumber = Math.floor(interval / hour).toString();
      const minuteNumber = Math.floor((interval % hour) / minute).toString();
      const secondNumber = Math.floor((interval % minute) / second).toString();

      setHour(hourNumber)
      setMinute(minuteNumber)
      setSecond(secondNumber)
    };

    setInterval(countdown, 1000);

    return [hour, minute, second]
  };

  let [hour, minute, second] = useCount(`Feb 25, 2023 ${expiryTime}:00:00`);

  if(+hour! < 0 ){
    hour = '00'
  }
  if(+minute! < 0){
    minute = '00'
  }
  if(+second! < 0){
    second = '00'
  }

  return (
    <AuctionLi>
      <div className="productImg" >
        <img src={productImg} alt="Imagem do produto" />
      </div>
      <span className="timer"><BiTime color="var(--color-brand-1)" fontSize={20}/>{`${hour ? hour : '00'}:${minute ? (minute.length === 2 ? minute : '0' + minute) : '00'}:${second ? (second.length === 2 ? second : '0' + second) : '00'}`}</span>
      <h2 className="productName">{productName}</h2>
      <p className="productDescription">{productDescription}</p>
      {/* <UserContainer>
        <p className="profileIcon">
          {userName.split(' ')[0][0]}
          {userName.split(" ")[1] && userName.split(" ")[1][0]}  
        </p>
        <p className="userName">{userName}</p>
      </UserContainer> */}
      <ProductInfoContainer>
        <div>
          <span>{productYear}</span>
          <span>{productKm} KM</span>
        </div>
        <p>
        {productValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </ProductInfoContainer>
      <div className="auctionButton">
        <button className="btn-edit-auction">Editar</button>
        <button className="btn-list-auction">Ver como</button>
      </div>
    </AuctionLi>
  );
};
