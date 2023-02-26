import { Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { InputRadio } from "../../components/Form/Radio";
import { TextArea } from "../../components/Form/TextArea";
import { AnnouncementContext } from "../../Providers/AnnouncementProvider";
import { InputsImages } from "./InputsImages";

export interface IUpdateAnnouncementRequest {
  title?: string;
  year?: number;
  mileage?: number;
  price?: number;
  description?: string;
  img_cape?: string;
  images?: string[];
  type?: string;
  type_vehicle?: string;
  is_active?: boolean;
}

interface IUpdateAnnouncementForm {
  handleUpdateAnnouncement: () => void;
  errors: FieldErrors<IUpdateAnnouncementRequest>;
  register: UseFormRegister<IUpdateAnnouncementRequest>;
  loadingUpdateAnnouncement: boolean;
}

export const UpdateAnnouncementForm = ({
  errors,
  handleUpdateAnnouncement,
  loadingUpdateAnnouncement,
  register,
}: IUpdateAnnouncementForm) => {
  const { setAnnouncementCreate_type, setAnnouncementCreate_type_vehicle } =
    useContext(AnnouncementContext);

  return (
    <>
      <Grid as="form" onSubmit={handleUpdateAnnouncement} w="100%">
        <VStack mt="15px" spacing="6" alignItems="start">
          <Text fontWeight="500" as="h4">
            Tipo de anúncio
          </Text>

          <InputRadio
            defaultValue="sales"
            name="type"
            options={[
              { text: "Venda", value: "sales" },
              { text: "Leilão", value: "auction" },
            ]}
            handleChange={setAnnouncementCreate_type}
          />

          <Text fontWeight="500" as="h4">
            Informações do veículo
          </Text>

          <Flex flexDirection={["column", "row"]} gap="8px">
            <Input
              label="Título"
              placeholder="Digitar título"
              error={errors.title}
              {...register("title")}
            />
            <HStack>
              <Input
                minW={["unset", "100px"]}
                label="Ano"
                placeholder="2018"
                error={errors.year}
                {...register("year")}
                type="number"
              />

              <Input
                label="Quilometragem"
                placeholder="0"
                error={errors.mileage}
                {...register("mileage")}
                type="number"
              />
            </HStack>
          </Flex>

          <Input
            label="Preço"
            placeholder="50.000,00"
            error={errors.price}
            {...register("price")}
            type="number"
          />

          <TextArea
            placeholder="Digitar descrição"
            label="Descrição"
            error={errors.description}
            {...register("description")}
            maxH="200px"
          />

          <Text fontWeight="500" as="h4">
            Tipo de veículo
          </Text>

          <InputRadio
            defaultValue="car"
            name="type_vehicle"
            options={[
              { text: "Carro", value: "car" },
              { text: "Moto", value: "motorcycle" },
            ]}
            handleChange={setAnnouncementCreate_type_vehicle}
          />

          <Input
            label="Imagem da capa"
            placeholder="https://image.com"
            error={errors.img_cape}
            {...register("img_cape")}
          />

          <InputsImages request_type="update" />
        </VStack>

        <Button
          bgColor="var(--color-brand-1)"
          color="var(--color-white-fixed)"
          mt="6"
          size="lg"
          isLoading={loadingUpdateAnnouncement}
          type="submit"
          disabled={true}
        >
          Criar anúncio
        </Button>
      </Grid>
    </>
  );
};
