import { Container, ContainerInput, Input } from "./styles";

export const Commentary = () => {
  return (
    <>
    <Container>
      <h3 className="title">Comentários</h3>

      <div className="cardCommentary">
        <div className="cardHeader">
          <div className="cardImg">
            <p className="cardNameImg">GH</p>
          </div>
          <div className="cardTitle">Guilherme Hirata</div>
          <p className="point"></p>
          <p className="date">há 3 dias</p>
        </div>
        <div className="cardComments">
          <p className="comments">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus saepe cumque magnam, modi quia numquam libero harum dicta.
            Libero velit repellendus soluta, quisquam voluptatibus iusto. Eum
            molestiae quaerat ipsam!
          </p>
        </div>
      </div>

      <div className="cardCommentary">
        <div className="cardHeader">
          <div className="cardImg2">
            <p className="cardNameImg">JK</p>
          </div>
          <div className="cardTitle">Jorge Kimura</div>
          <p className="point"></p>
          <p className="date">há 7 dias</p>
        </div>
        <div className="cardComments">
          <p className="comments">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus saepe cumque magnam, modi quia numquam libero harum dicta.
            Libero velit repellendus soluta, quisquam voluptatibus iusto. Eum
            molestiae quaerat ipsam!
          </p>
        </div>
      </div>

      <div className="cardCommentary">
        <div className="cardHeader">
          <div className="cardImg3">
            <p className="cardNameImg">MS</p>
          </div>
          <div className="cardTitle">Makson Sillas</div>
          <p className="point"></p>
          <p className="date">há 1 mês</p>
        </div>
        <div className="cardComments">
          <p className="comments">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus saepe cumque magnam, modi quia numquam libero harum dicta.
            Libero velit repellendus soluta, quisquam voluptatibus iusto. Eum
            molestiae quaerat ipsam!
          </p>
        </div>
      </div>

      <div className="cardCommentary">
        <div className="cardHeader">
          <div className="cardImg4">
            <p className="cardNameImg">RZ</p>
          </div>
          <div className="cardTitle">Richard Zago</div>
          <p className="point"></p>
          <p className="date">há 3 mêses</p>
        </div>
        <div className="cardComments">
          <p className="comments">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus saepe cumque magnam, modi quia numquam libero harum dicta.
            Libero velit repellendus soluta, quisquam voluptatibus iusto. Eum
            molestiae quaerat ipsam!
          </p>
        </div>
      </div>
      </Container>
      <ContainerInput>
      <div className="containerInput">
        <div className="cardHeader">
          <div className="cardImg5">
            <p className="cardNameImg">PM</p>
          </div>
          <div className="cardTitle">Paulo Mello</div>
        </div>
        <div className="divInput">
          <Input placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
        </div>

        <div className="divButton">
          <button className="btn">Comentar</button>
        </div>

        <div className="feedbacks">
          <div className="divFeedback">
            <p className="pFeedback">Gostei muito!</p>
            <p className="pFeedback2">Incrível</p>
          </div>

          <div className="divFeedback2">
            <p className="pFeedback3">Recomendarei para os meus amigos!</p>
          </div>
        </div>
      </div>
      </ContainerInput>
      </>
  );
};