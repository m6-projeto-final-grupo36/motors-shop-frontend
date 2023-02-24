import styled from "styled-components";

export const ExploreSection = styled.section`   
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
    
    background-color: var(--color-brand-2);
    color: var(--color-grey-10);

    h1 {
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        margin-bottom: 50px;
    }

    p {
        line-height: 28px;
        margin-bottom: 50px;
    }

    .buttonContainer {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .buttonContainer button {
        border: 1px solid var(--color-grey-10);
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 15px 0px;

        :hover {
            background-color: var(--color-grey-10);
            color: var(--color-brand-2);
        }
    }

    @media (min-width: 720px) {
        height: 500px;

        .buttonContainer {
            width: 100%;
            flex-direction: row;
            justify-content: center;
        }

        .buttonContainer button {
            padding: 10px 0px;
            width: 200px;
            margin-left: 20px;
        }
    }
`