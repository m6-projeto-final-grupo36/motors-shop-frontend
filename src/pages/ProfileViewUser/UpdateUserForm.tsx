import { Button, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/TextArea";
import { UserContext } from "../../Providers/UserProvider";

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  cpf?: string;
  cell_phone?: string;
  birthdate?: string;
  description?: string;
  password?: string;
  confirm_password?: string;
}

interface IUpdateUserForm {
  handleUpdateUser: () => void;
  errors: FieldErrors<IUpdateUserRequest>;
  register: UseFormRegister<IUpdateUserRequest>;
  loadingUpdateUser: boolean;
}

export const UpdateUserForm = ({
  errors,
  handleUpdateUser,
  loadingUpdateUser,
  register,
}: IUpdateUserForm) => {
  const { onCloseModalUpdateUser, onOpenModalDeleteUser, data } =
    useContext(UserContext);
  return (
    <>
      <Grid as="form" onSubmit={handleUpdateUser} w="100%">
        <VStack mt="32px" spacing="6" alignItems="start">
          <Text fontWeight="500" as="h4">
            Informações pessoais
          </Text>
          <Input
            placeholder="Ex: Samuel Leão"
            icon={FaUser}
            label="Nome"
            error={errors.name}
            {...register("name")}
            defaultValue={data.user.name}
          />
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            icon={FaEnvelope}
            label="Email"
            error={errors.email}
            {...register("email")}
            defaultValue={data.user.email}
          />
          <Input
            placeholder="000.000.000-00"
            label="CPF"
            error={errors.cpf}
            {...register("cpf")}
            defaultValue={data.user.cpf}
          />
          <Input
            placeholder="(DDD) x xxxx-xxxx"
            icon={FaPhoneAlt}
            label="Celular"
            error={errors.cell_phone}
            {...register("cell_phone")}
            defaultValue={data.user.cell_phone}
          />
          <Input
            type="date"
            placeholder="00/00/0000"
            label="Data de nascimento"
            error={errors.birthdate}
            {...register("birthdate")}
            // defaultValue={data.user.birthdate}
          />

          <TextArea
            placeholder="Digitar descrição"
            label="Descrição"
            error={errors.description}
            {...register("description")}
            maxH="200px"
            defaultValue={data.user.description}
          />

          <Input
            placeholder="Digitar senha"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
          <Input
            placeholder="Repetir senha"
            label="Confirmar senha"
            error={errors.confirm_password}
            {...register("confirm_password")}
          />
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
            onClick={() => {
              onCloseModalUpdateUser();
              onOpenModalDeleteUser();
            }}
          >
            Excluir conta
          </Button>
          <Button
            size="lg"
            whiteSpace="normal"
            color="var(--color-grey-2)"
            bgColor="var(--color-grey-6)"
            type="button"
            onClick={onCloseModalUpdateUser}
          >
            Cancelar
          </Button>
          <Button
            bgColor="var(--color-brand-1)"
            color="var(--color-white-fixed)"
            size="lg"
            isLoading={loadingUpdateUser}
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
