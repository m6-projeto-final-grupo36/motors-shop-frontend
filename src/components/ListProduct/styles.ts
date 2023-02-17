import styled from "styled-components";

export const SectionProduct = styled.section`
  width: 100%;
  height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    position: absolute;
    top: 10px;
    margin-left: 30px;
  }

  .listProduct {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .listProduct::-webkit-scrollbar {
    height: 6px;
  }

  .listProduct::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-1);
    border-radius: 20px;
  }
`;
