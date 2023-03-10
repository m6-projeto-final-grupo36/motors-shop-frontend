import Logo from "../../assets/motors-logo.svg";
import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import { HeaderStyled } from "./styles";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router-dom";
import { IAuthUser, UserContext } from "../../Providers/UserProvider";
import { ModalUpdateAddress } from "../Modal/ModalUpdateAddress";
import { ModalUpdateUser } from "../Modal/ModalUpdateUser";
import { ModalDeleteUser } from "../Modal/ModalDeleteUser";

export const Header = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const { data, setData, onOpenModalUpdateAddress, onOpenModalUpdateUser } =
    useContext(UserContext);

  const dropRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    function handleOutClick(event: MouseEvent) {
      if (!dropRef.current?.contains(event.target as HTMLDivElement)) {
        setIsClick(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("@MotorsShop:token");
    localStorage.removeItem("@MotorsShop:user");
    setData({} as IAuthUser);
    navigate("/", { replace: true });
  };

  const onClickUpdateAddress = () => {
    onOpenModalUpdateAddress();
  };

  return (
    <>
      <ModalUpdateAddress />
      <ModalUpdateUser />
      <ModalDeleteUser />
      <HeaderStyled>
        <div className="logo">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            src={Logo}
            alt="Logo da aplicação"
          />
        </div>
        <div className="desktop">
          <div className="navbar">
            <nav>
              <a href="#cars">Carros</a>
              <a href="#motorcycles">Motos</a>
              <a href="#auction">Leilão</a>
            </nav>
          </div>
          <div className="divider-bar"></div>
          <div className="user">
            {Object.keys(data).length ? (
              <div className="user-logged">
                <Menu>
                  <MenuButton as={Button}>
                    <div className="initial-caracters">
                      <span>
                        {data.user.name.split(" ")[0][0]}
                        {data.user.name.split(" ")[1] &&
                          data.user.name.split(" ")[1][0]}
                      </span>
                    </div>
                    <span>{data.user.name}</span>
                  </MenuButton>
                  <MenuList>
                    <MenuItem as="button" onClick={onOpenModalUpdateUser}>
                      Editar perfil
                    </MenuItem>

                    <MenuItem as="button" onClick={onClickUpdateAddress}>
                      Editar endereço
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        if (data.user.type_account === "advertiser") {
                          navigate("/my_announcements");
                        }
                      }}
                    >
                      {data.user.type_account === "buyer"
                        ? "Minhas compras"
                        : "Meus anúncios"}
                    </MenuItem>
                    <MenuItem onClick={logout}>Sair</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            ) : (
              <div className="no-user">
                <button
                  className="btn-login"
                  onClick={() => {
                    navigate("/login", { replace: true });
                  }}
                >
                  Fazer login
                </button>
                <button
                  className="btn-register"
                  onClick={() => {
                    navigate("/register", { replace: true });
                  }}
                >
                  Cadastrar
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mobile">
          <Menu>
            <MenuButton
              className="btn-open-drop"
              bg="transparent"
              as={Button}
              onClick={() => setIsClick(!isClick)}
            >
              {isClick ? <IoCloseOutline /> : <BiMenu />}
            </MenuButton>
            <MenuList
              borderRadius="0"
              borderLeft="none"
              minW="95vw"
              w="100vmin"
              ref={dropRef}
            >
              <MenuGroup>
                  <a href="#cars" className="mobile-link">Carros</a>
                  <a href="#motorcycles" className="mobile-link">Motos</a>
                  <a href="#auction" className="mobile-link">Leilão</a>
              </MenuGroup>
              <MenuDivider
                border=""
                borderBottom='3px solid var("--color-grey-4")'
              />
              <MenuGroup pl="22px">
                {Object.keys(data).length ? (
                  <div className="user-logged">
                    <Menu>
                      <MenuButton className="btn-user" as={Button}>
                        <div className="initial-caracters">
                          <span>
                            {data.user.name.split(" ")[0][0]}
                            {data.user.name.split(" ")[1] &&
                              data.user.name.split(" ")[1][0]}
                          </span>
                        </div>
                        <span>{data.user.name}</span>
                      </MenuButton>
                      <MenuList>
                        <MenuItem as="button" onClick={onOpenModalUpdateUser}>
                          Editar perfil
                        </MenuItem>
                        <MenuItem as="button" onClick={onClickUpdateAddress}>
                          Editar endereço
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            if (data.user.type_account === "advertiser") {
                              navigate("/my_announcements");
                            }
                          }}
                        >
                          {data.user.type_account === "buyer"
                            ? "Minhas compras"
                            : "Meus anúncios"}
                        </MenuItem>
                        <MenuItem as="button" onClick={logout}>
                          Sair
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                ) : (
                  <div className="no-user">
                    <MenuItem
                      mt="32px"
                      mb="44px"
                      fontWeight="600"
                      pl="12px"
                      color="var(--color-grey-2)"
                      fontSize="16px"
                      onClick={() => {
                        navigate("/login", { replace: true });
                      }}
                    >
                      Fazer login
                    </MenuItem>
                    <MenuItem
                      borderRadius="4px"
                      fontSize="16px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="90%"
                      border="1.5px solid var(--color-grey-4)"
                      mb="32px"
                      pl="12px"
                      onClick={() => {
                        navigate("/register", { replace: true });
                      }}
                    >
                      Cadastrar
                    </MenuItem>
                  </div>
                )}
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </HeaderStyled>
    </>
  );
};
