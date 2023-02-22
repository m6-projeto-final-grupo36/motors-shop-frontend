import { Footer } from "../Footer";
import { Header } from "../Header"
import { Container } from "./styles"

interface IRetrieveAnnouncement{
    img_cape: string;
    title: string;
    year: number;
    productKm: number;
    productValue: number;
    productDescription: string;
    images: string[]; // como foi mudado no db podemos fazer de outra forma também
    advertiser_name: string;
    advertiser_description: string;


}

export const RetrieveAnnouncement = () => {

    const productValue = 240000

    return(
        <>
            <Header />
            <Container>
                <section>
                    <div className="img-announcement">
                        <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                    </div>
                    <div className="purchase-info">
                        <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h3>
                        <div className="other-infos">
                            <div className="car-info">
                                <span>2013</span>
                                <span>0 KM</span>
                            </div>
                            <span>
                            {productValue.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                            </span>
                        </div>
                        <div className="btn-buy">
                            <button>Comprar</button>
                        </div>
                    </div>
                    <div className="description-announcement">
                        <h3>Descrição</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>

                <section>
                    <div className="photos-announcement">
                        <h3>Fotos</h3>
                        <div className="photos">
                            <div className="photo">
                                <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                            </div>
                            <div className="photo">
                                <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                            </div>
                            <div className="photo">
                                <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                            </div>
                            <div className="photo">
                                <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                            </div>
                            <div className="photo">
                                <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                            </div>
                            <div className="photo">
                                <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="advertiser-info">
                        <div className="initial-caracters">
                            JK
                        </div>
                        <h3>
                            Jorge Kimura
                        </h3>
                        <div className="advertiser-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="btn-list-advertiser-announcements">
                            <button>Ver todos os anúncios</button>
                        </div>
                    </div>
                    </section>
                <div className="fixed"></div>
            </Container>
            <Footer />
        </>
    )
}