import { Button, Grid, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import { ILogin } from "../../Providers/UserProvider";
import { FieldErrors, UseFormRegister } from "react-hook-form";

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

          <Input
            placeholder="Digitar senha"
            label="Senha"
            error={errors.password}
            {...register("password")}
            type="password"
          />
        </VStack>
        <Text
          w="100%"
          textAlign="end"
          paddingRight="25px"
          fontSize="14px"
          color="var(--color-grey-2)"
          mt="10px"
        >
          Esqueci minha senha
        </Text>
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
