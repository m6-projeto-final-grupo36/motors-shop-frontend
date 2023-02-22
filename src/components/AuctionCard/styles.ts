import styled from "styled-components";

export const AuctionLi = styled.li`
  width: 19rem;
  height: 24.6875rem;

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  margin: 0px 20px 20px 0px;

  list-style: none;
  color: var(--color-white-fixed);

  &:hover{
    .productImg{
      img{
        filter: brightness(30%);
      }
    }
  }

  .productImg {
    width: 100%;
    height: 100%;

    object-fit: cover;
    position: absolute;
    z-index: -1;

    
    img{
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

    font-weight: 300;
    width: 275px;
  }

  .auctionButton {
    width: 100%;
    height: 3.8125rem;
    padding: 11px 26px 12px 22px;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
      /* margin: 0px 40px 0px 25px; */
    }
  }

  @media (min-width: 1024px) {
      width: 45.9375rem;
      height: 24.25rem;

      .timer{
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

        button:first-child{
          margin-right: 16px;
        }
      }
  }
`;

// export const UserContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   margin-bottom: 25px;

//   .profileIcon {
//     width: 30px;
//     height: 30px;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     border-radius: 150px;
//     background-color: var(--color-brand-1);
//   }

//   .userName {
//     margin-left: 10px;
//   }
// `;

export const ProductInfoContainer = styled.div`
  margin-left: 22px;
  margin-bottom: 33px;
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  span {
    /* margin-right: 10px; */
    padding: 4px 8px;

    font-size: 14px;
    color: var(--color-brand-1);

    background-color: var(--color-brand-4);
    border-radius: 10px;
  }
  span:first-child{
    margin-right: 12px;
  }

  p {
    /* margin-left: auto;
    margin-right: 40px; */
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    margin: 0 41px 50px 36px;
    flex-direction: row;
    justify-content: space-between;

    p{
      margin-top: 0;
    }
  }
`;
