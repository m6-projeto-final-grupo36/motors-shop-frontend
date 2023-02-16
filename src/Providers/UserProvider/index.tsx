import { ReactNode, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  account_type: string;
  accessToken: string;
  user: IUser;
  setAccount_type: (str: string) => void;
  signIn: (data: ILogin) => Promise<void>;
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

interface IUser {
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
}

export interface ILogin {
  email: string;
  password: string;
}

interface IAuthUser {
  accessToken: string;
  user: IUser;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [data, setData] = useState<IAuthUser>(() => {
    const accessToken = localStorage.getItem("@MotorsShop:accessToken");
    const user = localStorage.getItem("@MotorsShop:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as IAuthUser;
  });

  const [account_type, setAccount_type] = useState("buyer");

  const signIn = async ({ email, password }: ILogin) => {
    const response = await api.post("/login", { email, password });
    const { accessToken, user } = response.data;

    localStorage.setItem("@MotorsShop:accessToken", accessToken);
    localStorage.setItem("@MotorsShop:user", JSON.stringify(user));

    setData({ accessToken, user });
  };

  return (
    <UserContext.Provider
      value={{
        account_type,
        user: data.user,
        accessToken: data.accessToken,
        setAccount_type,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
