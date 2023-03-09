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
  year?: number | "";
  mileage?: number | "";
  price?: number | "";
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
  const {
    setAnnouncementSelected_type,
    setAnnouncementSelected_type_vehicle,
    announcementFound,
    imgsUpdate,
    setImgsUpdate,
    onOpenModalDeleteAnnouncement,
    onCloseModalUpdateAnnouncement,
  } = useContext(AnnouncementContext);

  return (
    <>
      <Grid as="form" onSubmit={handleUpdateAnnouncement} w="100%">
        <VStack mt="15px" spacing="6" alignItems="start">
          <Text fontWeight="500" as="h4">
            Tipo de anúncio
          </Text>

          <InputRadio
            defaultValue={announcementFound.type}
            name="type"
            options={[
              { text: "Venda", value: "sales" },
              { text: "Leilão", value: "auction" },
            ]}
            handleChange={setAnnouncementSelected_type}
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
              defaultValue={announcementFound.title}
            />
            <HStack>
              <Input
                minW={["unset", "100px"]}
                label="Ano"
                placeholder="2018"
                error={errors.year}
                {...register("year")}
                type="number"
                defaultValue={announcementFound.year}
              />

              <Input
                label="Quilometragem"
                placeholder="0"
                error={errors.mileage}
                {...register("mileage")}
                type="number"
                defaultValue={announcementFound.mileage}
              />
            </HStack>
          </Flex>

          <Input
            label="Preço"
            placeholder="50.000,00"
            error={errors.price}
            {...register("price")}
            type="number"
            defaultValue={announcementFound.price}
          />

          <TextArea
            placeholder="Digitar descrição"
            label="Descrição"
            error={errors.description}
            {...register("description")}
            maxH="200px"
            defaultValue={announcementFound.description}
          />

          <Text fontWeight="500" as="h4">
            Tipo de veículo
          </Text>

          <InputRadio
            defaultValue={announcementFound.type_vehicle}
            name="type_vehicle"
            options={[
              { text: "Carro", value: "car" },
              { text: "Moto", value: "motorcycle" },
            ]}
            handleChange={setAnnouncementSelected_type_vehicle}
          />

          <Input
            label="Imagem da capa"
            placeholder="https://image.com"
            error={errors.img_cape}
            {...register("img_cape")}
            defaultValue={announcementFound.img_cape}
          />

          <InputsImages imgs={imgsUpdate} setImgs={setImgsUpdate} />
        </VStack>

        <Flex gap="10px" mt="6" flexDirection={["column", "row"]}>
          <Button
            size="lg"
            whiteSpace="normal"
            color="var(--color-grey-2)"
            bgColor="var(--color-grey-6)"
            type="button"
            onClick={() => {
              onCloseModalUpdateAnnouncement();
              onOpenModalDeleteAnnouncement();
            }}
          >
            Excluir anúncio
          </Button>
          <Button
            bgColor="var(--color-brand-1)"
            color="var(--color-white-fixed)"
            size="lg"
            isLoading={loadingUpdateAnnouncement}
            type="submit"
            whiteSpace="normal"
          >
            Salvar alterações
          </Button>
        </Flex>
      </Grid>
    </>
  );
};
