import styled from "styled-components";

export const Container = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 45px;

  .comments{
    display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-white-fixed);
  border-radius: 4px;

  margin: 0 auto;
  margin-bottom: 2.625rem;
  width: 90%;

  padding: 0 12px;
  padding-top: 26px;

  .cardHeader {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    min-width: 287px;
    max-width: 287px;
  }

  .cardTitle{
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0 0.5rem;
    min-width: 120px;
    max-width: 120px;
  }

  .title {
    font-size: 1.25rem;
    line-height: 25px;
    font-weight: 600;
    margin-bottom: 1.5rem;

    color: var(--color-grey-1);
  }

  .cardImg {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background-color: var(--color-random-1);
  }

  .cardImg2 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background-color: var(--color-random-4);
  }

  .cardImg3 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background-color: var(--color-random-9);
  }

  .cardImg4 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background-color: var(--color-random-3);
  }

  .point {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 13px;
    background-color: var(--color-grey-4);
  }

  .date {
    color: var(--color-grey-3);
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 24px;
  }

  .cardComments {
    margin-top: 1rem;
    margin-bottom: 2.75rem;
  }

  .cardNameImg {
    color: var(--color-white-fixed);
  }

  .comments {
    color: var(--color-grey-2);
  }

  @media (min-width: 1024px) {
    margin-left: 12px;
  }

  }
  @media (min-width: 1200px) {
    padding: 0 181px;
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

export const ContainerInput = styled.div`
  width: 90%;
  height: 26.25rem;
  margin: 0 auto;
  padding: 0 12px;
  background-color: var(--color-white-fixed);
  margin-bottom: 2.8125rem;
  border-radius: 4px;

  .cardHeader {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    min-width: 287px;
    max-width: 287px;
  }

  .cardTitle{
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0 0.5rem;
    min-width: 120px;
    max-width: 120px;
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

  .cardNameImg {
    color: var(--color-white-fixed);
  }

  .containerInput {
    padding: 36px 0;
    height: 100%;
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
 
  .btn-disabled{
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);

    margin-top: 1.3rem;
    width: 7rem;
    height: 3rem;

    border: 1.5px solid #4529e6;
    border-radius: 4px;
  }
  *:disabled{
    background-color: var(--color-grey-5);
    border: 1.5px solid var(--color-grey-5);
    cursor: not-allowed;
  }

  .feedbacks{
    display: flex;
    flex-flow: column wrap;
  }

  .divFeedback {
    display: flex;
    margin-top: 1rem;
  }

  .pFeedback {
    display: flex;
    justify-content: center;
    margin-right: 8px;

    font-size: 12px;
    font-weight: 500;
    line-height: 24px;

    background-color: var(--color-grey-7);
    color: var(--color-grey-3);
    border-radius: 24px;
    width: 6.3125rem;
  }

  .pFeedback2 {
    display: flex;
    justify-content: center;

    font-size: 12px;
    font-weight: 500;
    line-height: 24px;

    background-color: var(--color-grey-7);
    color: var(--color-grey-3);
    border-radius: 24px;
    width: 4.125rem;
  }

  .pFeedback3 {
    width: 13.625rem;
    display: flex;
    justify-content: center;
    padding: 0 12px;

    margin-top: 1rem;

    background-color: var(--color-grey-7);
    color: var(--color-grey-3);

    border-radius: 24px;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    height: 23rem;
    .feedbacks{
      flex-flow: row wrap;
      align-items: center;
    }

    .pFeedback2{
      margin-right: 8px;
    }

    .pFeedback3{
      width: initial;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 12px;
    height: 18.0625rem;

    .btn{
      position: absolute;
      bottom: 220px;
      right: 130px;
    }
    /* .btn-disabled{
      position: absolute;
      bottom: 220px;
      right: 130px;
    } */
  }

  @media (min-width: 1100px) {
    .btn{
      right: 140px;
    }
    /* .btn-disabled{
      right: 140px;
    } */
  }

  @media (min-width: 1200px) {
    .btn{
      margin-top: 0;
      right: 290px;
    }
    /* .btn-disabled{
      margin-top: 0;
      right: 290px;
    } */
  }
  
  @media (min-width: 1440px) {
    .btn{
      right: 315px;
    }
    /* .btn-disabled{
      right: 315px;
    } */
  }
`