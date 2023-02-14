import { Div, DivProfile, DivInfo } from "./styles"

const ProductCard = ({title, img, description, profileImg, name, km, year, value}: any) => {
    return (
        <Div>
        <img 
            src={img} 
            alt={title} 
            className="productImg"
        />
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <DivProfile>
            <img 
            src={profileImg} 
            alt="Imagem do usuário" 
            className="profileImg"
        />
            <p>{name}</p>
        </DivProfile>
        <DivInfo>
            <span>{km}</span>
            <span>{year}</span>
            <p>{value}</p>
        </DivInfo>
    </Div>
    )
}

export default ProductCard