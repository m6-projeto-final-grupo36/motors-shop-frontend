import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  background-color: var(--color-white-fixed);

  max-width: 1240px;
  max-height: 406px;
  margin: 0 auto;

  .containerTwo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }

  .divImg {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    background-color: var(--color-brand-1);
  }

  .pImg {
    color: var(--color-white-fixed);
  }

  .divName {
    display: flex;
    gap: 6px;
    margin-top: 1rem;
  }

  .pName {
    color: var(--color-grey-1);
    font-size: 1.2rem;
    font-weight: 600;
  }

  .spanTypeAccount {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-brand-1);
    background-color: var(--color-brand-4);

    font-size: 1rem;
    border-radius: 4px;
    width: 6.5rem;
    height: 1.8rem;
  }

  .divDescription {
    margin-top: 1rem;
  }

  .pDescription {
    color: var(--color-grey-2);
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    color: var(--color-brand-1);
    font-weight: 600;

    border-color: var(--color-brand-1);
    border: 2px solid;

    padding: 1rem;
    width: 10rem;
    height: 3rem;
  }
`;
