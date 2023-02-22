import { Header } from "../../components/Header";
import { Advertiser } from "../../components/Advertiser";
import { ListProduct } from "../../components/ListProduct";
import { Footer } from "../../components/Footer";
import { MainContainer, ContainerAdvertiser } from "./styles";

export const ProfileViewAdmin = () => {
  const array = [
    {
      title: "Chevrolet Prisma 2014",
      description: "Carro sedan da chevrolet, muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-1024x576.jpg",
      name: "Joao",
      is_active: true
    },
    {
      title: "Chevrolet Prisma 2014",
      description: "Carro sedan da chevrolet, muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-1024x576.jpg",
      name: "Joao",
    },
    {
      title: "Chevrolet Prisma 2014",
      description: "Carro sedan da chevrolet, muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-1024x576.jpg",
      name: "Joao",
    },
    {
      title: "Chevrolet Prisma 2014",
      description: "Carro sedan da chevrolet, muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-1024x576.jpg",
      name: "Joao",
    },
    {
      title: "Chevrolet Prisma 2014",
      description: "Carro sedan da chevrolet, muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-1024x576.jpg",
      name: "Joao Paulo",
    },
    {
      title: "Chevrolet Prisma 2014",
      description: "Carro sedan da chevrolet, muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-1024x576.jpg",
      name: "Joao",
    },
  ];
  const array2 = [
    {
      title: "Kawazaki z1000 2023",
      description: "Moto de luxo muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/ativa-consorcios/e279f985802ab8405b8ce09e8e2ebd02.jpg",
      name: "Joao",
    },
    {
      title: "Kawazaki z1000 2023",
      description: "Moto de luxo muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/ativa-consorcios/e279f985802ab8405b8ce09e8e2ebd02.jpg",
      name: "Joao",
    },
    {
      title: "Kawazaki z1000 2023",
      description: "Moto de luxo muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/ativa-consorcios/e279f985802ab8405b8ce09e8e2ebd02.jpg",
      name: "Joao",
    },
    {
      title: "Kawazaki z1000 2023",
      description: "Moto de luxo muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/ativa-consorcios/e279f985802ab8405b8ce09e8e2ebd02.jpg",
      name: "Joao",
    },
    {
      title: "Kawazaki z1000 2023",
      description: "Moto de luxo muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/ativa-consorcios/e279f985802ab8405b8ce09e8e2ebd02.jpg",
      name: "Joao Paulo",
    },
    {
      title: "Kawazaki z1000 2023",
      description: "Moto de luxo muito confortável..",
      km: 0,
      year: 2023,
      value: 80000,
      productImg:
        "https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/ativa-consorcios/e279f985802ab8405b8ce09e8e2ebd02.jpg",
      name: "Joao",
    },
  ];

  return (
    <MainContainer>
      <Header />
      <ContainerAdvertiser>
        <Advertiser
          name="Samuel Leão"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          typeAccount="Anunciante"
        />
      </ContainerAdvertiser>
      <ListProduct productType="Carros" productList={array} />
      <ListProduct productType="Motos" productList={array2} />
      <Footer />
    </MainContainer>
  );
};