import styled from "styled-components";

interface IList {
  page?: string;
}

export const Li = styled.li<IList>`
  width: 312px;
  height: ${({ page }) => (page ? "370px" : "328px")};
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;

  .productImg {
    margin: 0 auto;
    width: 100%;
    height: 150px;
    object-fit: cover;

    :hover {
      border: 1px solid var(--color-brand-1);
    }
  }

  .active {
    width: 45px;
    padding: 2px;
    position: absolute;
    margin: 10px 0px 0px 10px;

    background-color: var(--color-brand-1);

    text-align: center;
    font-size: 13px;
    color: var(--color-white-fixed);
  }

  .inactive {
    width: 55px;
    padding: 2px;
    position: absolute;
    margin: 10px 0px 0px 10px;

    background-color: var(--color-grey-4);

    text-align: center;
    font-size: 13px;
    color: var(--color-white-fixed);
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  gap: 10px;

  div {
    display: flex;
    gap: 10px;
  }

  span {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-size: 14px;
    border-radius: 4px;
    padding: 0 3px;
  }

  p {
    margin: auto 5px auto auto;
    font-weight: 600;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
  height: 38px;

  button {
    height: 100%;
    width: 105px;
    padding: 5px;

    border: 2px solid #000;
    border-radius: 4px;

    font-weight: 500;
  }
  button:first-child {
    width: 80px;
    margin-right: 16px;
  }
`;
