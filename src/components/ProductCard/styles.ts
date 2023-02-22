import styled from "styled-components";

export const Li = styled.li`
  width: 312px;
  height: 370px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  position: relative;

  .productImg {
    width: 312px;
    height: 152px;
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

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    padding: 5px;
    
    border: 2px solid #000;
    border-radius: 10px;
    
    font-weight: 500;
  }
`
