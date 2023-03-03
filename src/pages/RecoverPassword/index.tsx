import { Box, Flex, Heading, VStack } from "@chakra-ui/react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { recoverPasswordSchema } from "../../schemas/user";
import { RecoverForm } from "./RecoverForm";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface IRecoverPassword{
    password: string;
    confirm_password: string;
}

export const RecoverPassword = () => {

    const userId = localStorage.getItem('@userFound')

    const navigate = useNavigate()

    const {
        formState: { errors },
        register,
        handleSubmit,
      } = useForm<IRecoverPassword>({
        resolver: yupResolver(recoverPasswordSchema),
      });

      const handlePassword = (data: IRecoverPassword) => {
        api.patch(`/users/reset_password/${userId}`, {...data})
        .then(res => {
            navigate('/login', {replace: true})
            localStorage.clear()
        })
        .catch(err => console.log(err))
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