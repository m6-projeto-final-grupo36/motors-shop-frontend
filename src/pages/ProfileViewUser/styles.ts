import styled from "styled-components";

export const MainContainer = styled.main`
    background-color: var(--color-grey-6);
    h1{
        width: 80px;
        height: 30px;
        margin: 60px 0px 40px 26px;
        font-weight: 600;
        font-size: 24px;
        color: #000000;
    }

    @media (min-width: 1024px) {
        h1{
            margin-left: 60px;
        }
    }
`

export const ContainerAdvertiser = styled.div`    
    background-color: var(--color-brand-1);
`