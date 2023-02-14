import styled from "styled-components"

const Div = styled.div`
    width: 312px;
    height: 354px;
    display: flex;
    flex-direction: column;

    .productImg {
        width: 312px;
        height: 152px;
    }

    h2 {
        margin: 5px;

        font-size: 16px;
    }

    .description {
        margin: 5px;

        font-size: 14px;
        line-height: 24px;
    }
`

const DivProfile = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;

    .profileImg {
        width: 32px;
        height: 32px;
        margin-right: 10px;

        border-radius: 150px;
    }
`

const DivInfo = styled.div`
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
        
        background-color: #EDEAFD; //trocar cor por variável

        font-size: 14px;
        color: #4529E6; //trocar cor por variável
    }

    p {
        margin: auto 5px auto auto;
        font-weight: 600;
    }
`

export { Div, DivProfile, DivInfo }