import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-grey-10);
  border-bottom: 1px solid var(--color-grey-6);

  padding: 0 16px;

  .desktop {
    display: none;
  }

  .mobile {
    .btn-open-drop {
      background: transparent;
      height: 46px;
      font-size: 18px;
    }

    .mobile-link{
      font-weight:600;
      padding-left:16px;
      color:var(--color-grey-2);
      margin-top:32px;
      margin-bottom:44px;
      font-size:16px;
      display: flex;
    }

    hr {
      border: 0.0938rem solid var(--color-grey-4);
    }
    .dropdown-mobile {
      position: absolute;
      top: 60px;
      right: 80px;
    }
    .no-user {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .btn-user {
      width: 100%;
      background-color: transparent;
      align-items: center;
      justify-content: center;
      span:first-child {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        .initial-caracters {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white-fixed);
          height: 32px;
          width: 32px;
          border-radius: 100%;
          background-color: var(--color-brand-2);
          padding: 16px 7px;
          margin-right: 8px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 0 60px;
    justify-content: space-between;

    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      align-items: center;

      .divider-bar {
        height: 80px;
        width: 2px;
        background-color: var(--color-grey-6);
        margin-right: 44px;
      }

      .navbar nav a {
        margin-right: 2.75rem;
        font-weight: 600;
        font-size: 16px;
      }

      .no-user {
        display: flex;
        align-items: center;
        color: var(--color-grey-2);

        .btn-login {
          font-weight: 600;
          font-size: 16px;
          margin-right: 44px;
        }

        .btn-register {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 90%;
          padding: 24px 28px;
          height: 3rem;

          border: 1.5px solid var(--color-grey-4);
          border-radius: 4px;

          font-size: 16px;
          font-weight: 600;
        }
      }

      .user button {
        width: 100%;
        background-color: transparent;
        align-items: center;
        justify-content: center;

        span:first-child {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;

          .initial-caracters {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-white-fixed);
            height: 32px;
            width: 32px;
            border-radius: 100%;
            background-color: var(--color-brand-2);
            padding: 16px 7px;
            margin-right: 8px;
          }
        }
      }
    }
  }
`;
