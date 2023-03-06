import styled from "styled-components";

export const AuctionLi = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  list-style: none;
  color: var(--color-white-fixed);
  background-color: white;

  border-radius: 4px;
  z-index: 0;

  margin: 0 12px;
  margin-bottom: 50px;

  &:hover {
    .productImg {
      img {
        filter: brightness(30%);
      }
    }
  }

  .productImg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;

    img {
      background-color: white;
      object-fit: contain;
      filter: brightness(70%);
      width: 100%;
      height: 100%;
    }
  }

  .timer {
    width: 123px;
    height: 36px;
    margin: 33px 0px 35px 22px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--color-white-fixed);
    border-radius: 20px;

    color: var(--color-grey-0);
  }

  .productName {
    margin-left: 22px;
    margin-bottom: 24px;

    width: 275px;

    font-size: 20px;
    font-weight: 600;
  }

  .productDescription {
    margin-left: 22px;
    margin-bottom: 28px;
    padding-right: 20px;

    font-weight: 300;
  }

  .auctionButton {
    width: 100%;
    height: 3.8125rem;
    padding: 11px 26px 12px 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-brand-1);

    button {
      font-size: 0.875rem;
      font-weight: 600;
      border: var(--color-grey-10) 0.0938rem solid;
      border-radius: 4px;
      padding: 19px 20px;
      min-height: 38px;
      max-height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:first-child {
      margin-right: 16px;
    }
  }

  .auctionButtonHomePage {
    width: 100%;
    height: 3.875rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: red;

    background-color: var(--color-brand-1);

    p {
      font-size: 1rem;
      font-weight: 600;
      padding: 19px 20px;
      min-height: 38px;
      max-height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p:first-child {
      margin-right: 16px;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 60px;
    width: 45.9375rem;
    height: 24.25rem;

    .timer {
      margin: 24px 0px 69px 36px;
    }

    .productName {
      width: 658px;
      height: 25px;
      margin: 0 41px 16px 36px;
    }

    .productDescription {
      width: 663px;
      height: 28px;
      margin: 0 36px 46px 36px;
    }

    .auctionButton {
      height: 3.875rem;
      padding-left: 36px;
      padding-top: 12px;

      align-items: center;
      justify-content: flex-start;
    }
    .auctionButtonHomePage {
      padding: 31px 36px;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
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

  @media (min-width: 1024px) {
    margin-left: 36px;
  }
`;

export const ProductInfoContainer = styled.div`
  margin-left: 22px;
  margin-bottom: 33px;
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  span {
    padding: 4px 8px;

    font-size: 14px;
    color: var(--color-brand-1);

    background-color: var(--color-brand-4);
    border-radius: 10px;
  }
  span:first-child {
    margin-right: 12px;
  }

  p {
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    margin: 0 41px 50px 36px;
    flex-direction: row;
    justify-content: space-between;

    p {
      margin-top: 0;
    }
  }
`;
