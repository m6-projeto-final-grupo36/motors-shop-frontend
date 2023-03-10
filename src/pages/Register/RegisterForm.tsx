import {
  Button,
  Grid,
  HStack,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { InputRadio } from "../../components/Form/Radio";
import { TextArea } from "../../components/Form/TextArea";
import { IRegister, UserContext } from "../../Providers/UserProvider";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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
  const { setAccount_type } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClickPwd = () => setShow(!show);

  const handleClickConfirm = () => setShowConfirm(!showConfirm);

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
            error={errors.cell_phone}
            {...register("cell_phone")}
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
            error={errors.road}
            {...register("road")}
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

          <Text fontWeight="500" as="h4">
            Tipo de conta
          </Text>

          <InputRadio
            defaultValue="buyer"
            name="type_account"
            options={[
              { text: "Comprador", value: "buyer" },
              { text: "Anunciante", value: "advertiser" },
            ]}
            handleChange={setAccount_type}
          />

          <InputGroup>
            <Input
              placeholder="Digitar senha"
              label="Senha"
              type={show ? "text" : "password"}
              error={errors.password}
              {...register("password")}
            />
            <InputRightElement top="40px" width="5rem">
              <Button onClick={handleClickPwd}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>

          <InputGroup>
            <Input
              placeholder="Repetir senha"
              label="Confirmar senha"
              type={showConfirm ? "text" : "password"}
              error={errors.confirm_password}
              {...register("confirm_password")}
            />
            <InputRightElement top="40px" width="5rem">
              <Button onClick={handleClickConfirm}>
                {showConfirm ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>

        <Button
          bgColor="var(--color-brand-1)"
          color="var(--color-white-fixed)"
          mt="6"
          size="lg"
          isLoading={loadingRegister}
          type="submit"
        >
          Finalizar cadastro
        </Button>
      </Grid>
    </>
  );
};
