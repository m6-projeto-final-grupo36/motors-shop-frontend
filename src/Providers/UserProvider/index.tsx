import { ReactNode, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  loadingButtonRegister: boolean;
  handleRegister: (data: IRegister) => void;
  account_type: string;
  setAccount_type: (str: string) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export interface IRegister {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birthdate: Date;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  account_type: string;
  password: string;
  confirm_password: string;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [loadingButtonRegister, setLoadingButtonRegister] = useState(false);
  const [account_type, setAccount_type] = useState("buyer");

  const handleRegister = (data: IRegister) => {
    setLoadingButtonRegister(true);
    const newData = { ...data, account_type };

    setTimeout(() => {
      console.log(newData);
      setLoadingButtonRegister(false);
    }, 3000);
  };

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        setAccount_type,
        account_type,
        loadingButtonRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
