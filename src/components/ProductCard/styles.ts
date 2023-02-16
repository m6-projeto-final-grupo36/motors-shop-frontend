import styled from "styled-components";

export const Li = styled.li`
  width: 312px;
  height: 354px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  .productImg {
    width: 312px;
    height: 152px;
    object-fit: cover;

    :hover {
      border: 1px solid var(--color-brand-1);
    }
  }

  h2 {
    margin: 5px;
    font-weight: 600;
    font-size: 16px;
  }

  .description {
    margin: 5px;

    font-size: 14px;
    line-height: 24px;
  }
`;

export const DivProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;

  .profileIcon {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    border-radius: 150px;
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;

  span {
    width: 51px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    background-color: var(--color-brand-4);
    font-size: 14px;
    color: var(--color-brand-1);
  }

  p {
    margin: auto 5px auto auto;
    font-weight: 600;
  }
`;
