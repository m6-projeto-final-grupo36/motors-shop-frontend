import {
  Button,
  Flex,
  Grid,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import { ILogin, UserContext } from "../../Providers/UserProvider";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface ILoginForm {
  handleLogin: () => void;
  errors: FieldErrors<ILogin>;
  register: UseFormRegister<ILogin>;
  loadingLogin: boolean;
}

export const LoginForm = ({
  handleLogin,
  errors,
  register,
  loadingLogin,
}: ILoginForm) => {
  const [show, setShow] = useState(false);

  const handleClickPwd = () => setShow(!show);

  const { onOpenModalRecoverPassword } = useContext(UserContext);

  return (
    <>
      <Grid as="form" onSubmit={handleLogin} w="100%">
        <VStack mt="32px" spacing="6" alignItems="start">
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            icon={FaEnvelope}
            label="Email"
            error={errors.email}
            {...register("email")}
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
        </VStack>
        <Flex justifyContent="end">
          <Text
            _hover={{ textDecoration: "underline" }}
            textAlign="end"
            mr="25px"
            fontSize="14px"
            color="var(--color-grey-2)"
            mt="10px"
            as="button"
            type="button"
            onClick={onOpenModalRecoverPassword}
          >
            Esqueci minha senha
          </Text>
        </Flex>
        <Button
          bgColor="var(--color-brand-1)"
          color="var(--color-white-fixed)"
          mt="6"
          size="lg"
          isLoading={loadingLogin}
          type="submit"
        >
          Entrar
        </Button>
      </Grid>
    </>
  );
};
