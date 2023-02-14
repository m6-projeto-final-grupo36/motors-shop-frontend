import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IProvidersProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
