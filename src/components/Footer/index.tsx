import { FooterContainer } from "./styles"

import { IoIosArrowUp } from "react-icons/io"
import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <FooterContainer>
            <p className="title">Motors <span>shop</span></p>
            <p className="copyright">© 2022 - Todos direitos reservados.</p>
            <Link className="homeButton" to={"" /*TO-DO: colocar caminho da página atual*/ }><IoIosArrowUp /></Link> 
        </FooterContainer>
    )
}

