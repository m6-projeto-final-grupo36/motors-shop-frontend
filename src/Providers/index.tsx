import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AnnouncementProvider } from "./AnnouncementProvider";
import { UserProvider } from "./UserProvider";

export interface IProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IProvidersProps) => {
  return (
    <ChakraProvider>
      <UserProvider>
        <AnnouncementProvider>{children}</AnnouncementProvider>
      </UserProvider>
    </ChakraProvider>
  );
};
