import { Button, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IRegister } from ".";

interface IRegisterForm {
  handleRegister: () => void;
  errors: FieldErrors<IRegister>;
  register: UseFormRegister<IRegister>;
  loadingRegister: boolean;
}

export const RegisterForm = ({
  handleRegister,
  errors,
  register,
  loadingRegister,
}: IRegisterForm) => {
  return (
    <>
      <Grid as="form" onSubmit={handleRegister} w="100%">
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

          <Text fontWeight="500" as="h4">
            Informações de endereço
          </Text>

          <Input
            placeholder="00000-000"
            label="CEP"
            error={errors.cep}
            {...register("cep")}
          />

          <HStack>
            <Input
              placeholder="Digitar estado"
              label="Estado"
              error={errors.state}
              {...register("state")}
            />
            <Input
              placeholder="Digitar cidade"
              label="Cidade"
              error={errors.city}
              {...register("city")}
            />
          </HStack>

          <Input
            placeholder="Digitar rua"
            label="Rua"
            error={errors.street}
            {...register("street")}
          />

          <HStack>
            <Input
              placeholder="Digitar número"
              label="Número"
              error={errors.number}
              {...register("number")}
            />
            <Input
              placeholder="Ex: apart 307"
              label="Complemento"
              error={errors.complement}
              {...register("complement")}
            />
          </HStack>
        </VStack>

        <Button mt="6" isLoading={loadingRegister} type="submit">
          Finalizar cadastro
        </Button>
      </Grid>
    </>
  );
};
