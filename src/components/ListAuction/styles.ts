import styled from "styled-components";

export const SectionAuction = styled.section`
  width: 100%;
  height: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 20px;

  h1 {
    position: absolute;
    top: 5px;
  }

  .listAuction{
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .listAuction::-webkit-scrollbar {
    height: 6px;
  }

  .listAuction::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-1);
    border-radius: 20px;
  }
`;
