import { Button, Grid, Text, VStack } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/TextArea";

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  cpf?: string;
  phone_number?: string;
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
          />
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            icon={FaEnvelope}
            label="Email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            placeholder="000.000.000-00"
            label="CPF"
            error={errors.cpf}
            {...register("cpf")}
          />
          <Input
            placeholder="(DDD) x xxxx-xxxx"
            icon={FaPhoneAlt}
            label="Celular"
            error={errors.phone_number}
            {...register("phone_number")}
          />
          <Input
            type="date"
            placeholder="00/00/0000"
            label="Data de nascimento"
            error={errors.birthdate}
            {...register("birthdate")}
          />

          <TextArea
            placeholder="Digitar descrição"
            label="Descrição"
            error={errors.description}
            {...register("description")}
            maxH="200px"
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

        <Button
          bgColor="var(--color-brand-1)"
          color="var(--color-white-fixed)"
          mt="6"
          size="lg"
          isLoading={loadingUpdateUser}
          type="submit"
        >
          Finalizar cadastro
        </Button>
      </Grid>
    </>
  );
};
