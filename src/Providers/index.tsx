import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { UserProvider } from "./UserProvider";

export interface IProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IProvidersProps) => {
  return (
    <ChakraProvider>
      <UserProvider>{children}</UserProvider>
    </ChakraProvider>
  );
};
