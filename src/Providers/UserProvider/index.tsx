import { useDisclosure } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  account_type: string;
  data: IAuthUser;
  setData: Dispatch<SetStateAction<IAuthUser>>;
  setAccount_type: (str: string) => void;
  signIn: (data: ILogin) => Promise<void>;
  isOpenModalUpdateUser: boolean;
  onOpenModalUpdateUser: () => void;
  onCloseModalUpdateUser: () => void;
  isOpenModalUpdateAddress: boolean;
  onOpenModalUpdateAddress: () => void;
  onCloseModalUpdateAddress: () => void;
  isOpenModalDeleteUser: boolean;
  onOpenModalDeleteUser: () => void;
  onCloseModalDeleteUser: () => void;
  isOpenModalRecoverPassword: boolean;
  onOpenModalRecoverPassword: () => void;
  onCloseModalRecoverPassword: () => void;
  isOpenModalSuccessRecoverPassword: boolean;
  onOpenModalSuccessRecoverPassword: () => void;
  onCloseModalSuccessRecoverPassword: () => void;
  isOpenModalErrorRecoverPassword: boolean;
  onOpenModalErrorRecoverPassword: () => void;
  onCloseModalErrorRecoverPassword: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export interface IRegister {
  name: string;
  email: string;
  cpf: string;
  cell_phone: string;
  birthdate: Date;
  description?: string;
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
  type_account: string;
  password: string;
  confirm_password: string;
}

export interface IUser {
  address: IAddress;
  birthdate: Date;
  cell_phone: string;
  cpf: string;
  created_at: Date;
  description: string;
  email: string;
  id: string;
  name: string;
  type_account: string;
  updated_at: Date;
}

interface IAddress {
  cep: string;
  id?: string;
  city: string;
  complement: string | null | undefined;
  number: number;
  road: string;
  state: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthUser {
  token: string;
  user: IUser;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [data, setData] = useState<IAuthUser>(() => {
    const token = localStorage.getItem("@MotorsShop:token");
    const user = localStorage.getItem("@MotorsShop:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthUser;
  });

  const [account_type, setAccount_type] = useState("buyer");

  const signIn = async ({ email, password }: ILogin) => {
    const response = await api.post("/login", { email, password });
    const { token, user } = response.data;

    localStorage.setItem("@MotorsShop:token", token);
    localStorage.setItem("@MotorsShop:user", JSON.stringify(user));

    setData({ token, user });
  };

  const {
    isOpen: isOpenModalUpdateAddress,
    onOpen: onOpenModalUpdateAddress,
    onClose: onCloseModalUpdateAddress,
  } = useDisclosure();

  const {
    isOpen: isOpenModalDeleteUser,
    onOpen: onOpenModalDeleteUser,
    onClose: onCloseModalDeleteUser,
  } = useDisclosure();

  const {
    isOpen: isOpenModalRecoverPassword,
    onOpen: onOpenModalRecoverPassword,
    onClose: onCloseModalRecoverPassword,
  } = useDisclosure();

  const {
    isOpen: isOpenModalSuccessRecoverPassword,
    onOpen: onOpenModalSuccessRecoverPassword,
    onClose: onCloseModalSuccessRecoverPassword,
  } = useDisclosure();

  const {
    isOpen: isOpenModalErrorRecoverPassword,
    onOpen: onOpenModalErrorRecoverPassword,
    onClose: onCloseModalErrorRecoverPassword,
  } = useDisclosure();

  const {
    isOpen: isOpenModalUpdateUser,
    onOpen: onOpenModalUpdateUser,
    onClose: onCloseModalUpdateUser,
  } = useDisclosure();

  return (
    <UserContext.Provider
      value={{
        account_type,
        data,
        setData,
        setAccount_type,
        signIn,
        isOpenModalUpdateUser,
        onCloseModalUpdateUser,
        onOpenModalUpdateUser,
        isOpenModalUpdateAddress,
        onCloseModalUpdateAddress,
        onOpenModalUpdateAddress,
        isOpenModalDeleteUser,
        onCloseModalDeleteUser,
        onOpenModalDeleteUser,
        isOpenModalRecoverPassword,
        onCloseModalRecoverPassword,
        onOpenModalRecoverPassword,
        isOpenModalSuccessRecoverPassword,
        onCloseModalSuccessRecoverPassword,
        onOpenModalSuccessRecoverPassword,
        isOpenModalErrorRecoverPassword,
        onCloseModalErrorRecoverPassword,
        onOpenModalErrorRecoverPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
