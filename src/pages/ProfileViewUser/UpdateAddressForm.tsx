import { Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { UserContext } from "../../Providers/UserProvider";

export interface IUpdateAddressRequest {
  cep?: string;
  state?: string;
  city?: string;
  road?: string;
  number?: string;
  complement?: string;
}

interface IUpdateAddressForm {
  handleUpdateAddress: () => void;
  errors: FieldErrors<IUpdateAddressRequest>;
  register: UseFormRegister<IUpdateAddressRequest>;
  loadingUpdateAddress: boolean;
}

export const UpdateAddressForm = ({
  errors,
  handleUpdateAddress,
  loadingUpdateAddress,
  register,
}: IUpdateAddressForm) => {
  const {
    onCloseModalUpdateAddress,
    data: { user },
  } = useContext(UserContext);

  return (
    <>
      <Grid as="form" onSubmit={handleUpdateAddress} w="100%">
        <VStack mt="32px" spacing="6" alignItems="start">
          <Text fontWeight="500" as="h4">
            Informações de endereço
          </Text>

          <Input
            placeholder="00000-000"
            label="CEP"
            error={errors.cep}
            {...register("cep")}
            defaultValue={user.address.cep}
          />

          <HStack>
            <Input
              placeholder="Digitar estado"
              label="Estado"
              error={errors.state}
              {...register("state")}
              defaultValue={user.address.state}
            />
            <Input
              placeholder="Digitar cidade"
              label="Cidade"
              error={errors.city}
              {...register("city")}
              defaultValue={user.address.city}
            />
          </HStack>

          <Input
            placeholder="Digitar rua"
            label="Rua"
            error={errors.road}
            {...register("road")}
            defaultValue={user.address.road}
          />

          <HStack>
            <Input
              placeholder="Digitar número"
              label="Número"
              error={errors.number}
              {...register("number")}
              defaultValue={user.address.number}
            />
            <Input
              placeholder="Ex: apart 307"
              label="Complemento"
              error={errors.complement}
              {...register("complement")}
              defaultValue={
                user.address.complement ? user.address.complement : ""
              }
            />
          </HStack>
        </VStack>

        <Flex
          justify="space-between"
          direction={["column", "row"]}
          w="100%"
          gap="10px"
          mt="8"
        >
          <Button
            size="lg"
            whiteSpace="normal"
            color="var(--color-grey-2)"
            bgColor="var(--color-grey-6)"
            type="button"
            onClick={onCloseModalUpdateAddress}
          >
            Cancelar
          </Button>
          <Button
            bgColor="var(--color-brand-1)"
            color="var(--color-white-fixed)"
            size="lg"
            isLoading={loadingUpdateAddress}
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
