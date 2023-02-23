import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  background-color: var(--color-white-fixed);

  .cardHeader {
    display: flex;
    align-items: center;

    gap: 12px;
    min-width: 287px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    gap: 12px;

    color: var(--color-grey-1);
  }

  .cardImg {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    background-color: var(--color-random-1);
  }

  .cardImg2 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    background-color: var(--color-random-4);
  }

  .cardImg3 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    background-color: var(--color-random-9);
  }

  .cardImg4 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    background-color: var(--color-random-3);
  }

  .point {
    width: 7px;
    height: 7px;
    border-radius: 50%;

    background-color: var(--color-grey-4);
  }

  .date {
    color: var(--color-grey-3);
  }

  .cardComments {
    margin-top: 1rem;
  }

  .cardNameImg {
    color: var(--color-white-fixed);
  }

  .comments {
    color: var(--color-grey-2);
  }

  .cardImg5 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    background-color: var(--color-random-10);
  }

  .containerInput {
    margin-top: 5rem;
  }

  .divInput {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .btn {
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);

    margin-top: 1.3rem;
    width: 7rem;
    height: 3rem;

    border: 1.5px solid #4529e6;
    border-radius: 4px;
  }

  .divFeedback {
    display: flex;
    gap: 15px;
    margin-top: 1rem;
  }

  .pFeedback {
    display: flex;
    justify-content: center;

    background-color: var(--color-grey-7);
    color: var(--color-grey-3);
    border-radius: 24px;
    width: 8rem;
  }

  .pFeedback2 {
    display: flex;
    justify-content: center;

    background-color: var(--color-grey-7);
    color: var(--color-grey-3);
    border-radius: 24px;
    width: 5.5rem;
  }

  .pFeedback3 {
    display: flex;
    justify-content: center;

    margin-top: 1rem;

    background-color: var(--color-grey-7);
    color: var(--color-grey-3);

    border-radius: 24px;
    width: 18rem;
    font-size: 15px;
  }
`;

export const Input = styled.textarea`
  border: 2px solid var(--color-grey-7);
  min-height: 8rem;
  min-width: 15rem;
  padding: 1rem;
  text-align: start;

  &::placeholder {
    min-height: 8rem;
    min-width: 100%;

    color: var(--color-grey-5);
    font-size: 1rem;
    margin-top: 0.6rem;
    width: 100%;
  }
`;
