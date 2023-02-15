import styled from "styled-components";

export const AuctionLi = styled.li`
  width: 735px;
  height: 368px;

  display: flex;
  flex-direction: column;
  position: relative;

  list-style: none;
  color: var(--color-white-fixed);

  .productImg {
    width: 735px;
    height: 368px;

    position: absolute;
    z-index: -1;

    filter: brightness(30%);
  }

  .timer {
    width: 105px;
    height: 30px;
    margin: 25px 0px 45px 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--color-white-fixed);
    border-radius: 20px;

    color: var(--color-grey-0);
  }

  .productName {
    margin-left: 25px;
    margin-bottom: 25px;

    font-size: 20px;
    font-weight: 600;
  }

  .productDescription {
    margin-left: 25px;
    margin-bottom: 25px;

    font-weight: 300;
  }

  .auctionButton {
    height: 55px;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-brand-1);

    p {
      margin: 0px 40px 0px 25px;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 25px;

  .profileIcon {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 150px;
    background-color: var(--color-brand-1);
  }

  .userName {
    margin-left: 10px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  margin-left: 25px;

  span {
    margin-right: 10px;
    padding: 5px;

    font-size: 14px;
    color: var(--color-brand-1);

    background-color: var(--color-brand-4);
    border-radius: 10px;
  }

  p {
    margin-left: auto;
    margin-right: 40px;
  }
`;
