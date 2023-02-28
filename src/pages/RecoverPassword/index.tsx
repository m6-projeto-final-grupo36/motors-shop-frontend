import { Box, Flex, Heading, VStack } from "@chakra-ui/react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { recoverPasswordSchema } from "../../schemas/user";
import { RecoverForm } from "./RecoverForm";

export interface IRecoverPassword{
    password: string;
    confirm_password: string;
}

export const RecoverPassword = () => {

    const {
        formState: { errors },
        register,
        handleSubmit,
      } = useForm<IRecoverPassword>({
        resolver: yupResolver(recoverPasswordSchema),
      });

      const handlePassword = (data: IRecoverPassword) => {
        console.log(data)
        // TO-DO realizar requisição de atualização de usuário
        // Dependo do estado que terá as informações do usuário quando o próprio colocar o email
        // Irei utilizar do id para atualizar a senha
        // Após a troca da senha levar o usuário à página /login
      }

    return(
        <VStack
        minH="100vh"
        justifyContent="space-between"
        backgroundColor="var(--color-grey-8)"
        >
            <Header/>
            <Flex justifyContent="center" w="100%" p="15px">
                <Box
                padding={["44px 20px", "44px 48px"]}
                w="100%"
                maxW="500px"
                backgroundColor="var(--color-white-fixed)"
                >
                <Heading size="lg">Recuperar senha</Heading>
                <RecoverForm
                    errors={errors}
                    handlePassword={handleSubmit(handlePassword)}
                    register={register}
                />
                </Box>
            </Flex>
            <Footer/>
        </VStack> 
        
    )
}