import { Button, Grid, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IRecoverPassword } from ".";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface IRecoverForm{
    handlePassword: () => void;
    errors: FieldErrors<IRecoverPassword>;
    register: UseFormRegister<IRecoverPassword>;
}

export const RecoverForm = ({ errors, handlePassword, register }: IRecoverForm) => {

  const [show, setShow] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  
  const handleClickPwd = () => setShow(!show)
  const handleClickConfirm = () => setShowConfirm(!showConfirm)

    return(
        <Grid as="form" onSubmit={handlePassword} w="100%">
        <VStack mt="32px" spacing="6" alignItems="start">
          <InputGroup>
            <Input
              placeholder="Digitar senha"
              label="Senha"
              type={show ? 'text' : 'password'}
              error={errors.password}
              {...register("password")}
              />
            <InputRightElement top='40px' width='5rem'>
              <Button onClick={handleClickPwd}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="Repetir senha"
              label="Confirmar senha"
              type={showConfirm ? 'text' : 'password'}
              error={errors.confirm_password}
              {...register("confirm_password")}
              />
            <InputRightElement top='40px' width='5rem'>
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
          type="submit"
        >
          Redefinir senha
        </Button>
      </Grid>
    )
}