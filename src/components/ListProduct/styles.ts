import styled from "styled-components";

export const SectionProduct = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  margin-bottom: 50px;

  h1 {
    width: 80px;
    height: 30px;
    margin: 44px 0px 62px 26px;
    font-weight: 600;
    font-size: 24px;
    color: #000000;
  }

  .listProduct {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    min-height: 350px;
    margin-left: 26px;
  }

  li{
    margin-right: 48px;
  }
  li:last-child{
    margin-right: 26px;
  }

  @media (min-width: 1024px) {
    h1{
      margin-left: 60px;
    }
    .listProduct{
      margin-left: 60px;
    }
  }

  .listProduct::-webkit-scrollbar {
    height: 6px;
  }

  .listProduct::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-1);
    border-radius: 20px;
  }
`;