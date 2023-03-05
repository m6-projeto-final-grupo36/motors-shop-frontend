import { FooterContainer } from "./styles";
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
  return (
    <FooterContainer>
      <p className="title">
        Motors <span>shop</span>
      </p>
      <p className="copyright">© 2023 - Todos direitos reservados.</p>
      <button onClick={() => window.scrollTo(0, 0)} className="homeButton">
        <IoIosArrowUp />
      </button>
    </FooterContainer>
  );
};
