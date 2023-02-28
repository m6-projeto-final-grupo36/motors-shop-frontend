import Logo from "../../assets/motors-logo.svg";
import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
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

export const Header = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const dropRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // objeto temporario enquanto não houver o objeto usuario da tabela Users
  const new_user_buyer = {
    // id: '100b466f-d302-4fff-bb0c-cf423f60b25e',
    // name: "James Silva",
    // email: 'james.silva@mail.com',
    // cpf: '94784206400',
    // cell_phone: '22936525487',
    // birthdate: '2022-04-05',
    // description: 'Sou um cara legal!',
    // password: '123456As',
    // type_account: 'buyer'
  };

  const new_user_advertiser = {
    id: "59405f88-1c21-4341-ac23-487c598965be",
    name: "James Silva",
    email: "james.silva@mail.com",
    cpf: "94784206400",
    cell_phone: "22936525487",
    birthdate: "2022-04-05",
    description: "Sou um cara legal!",
    password: "123456As",
    type_account: "advertiser",
  };

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

  return (
    <HeaderStyled>
      <div className="logo">
        <img style={{'cursor': 'pointer'}} onClick={() => navigate('/')} src={Logo} alt="Logo da aplicação" />
      </div>
      <div className="desktop">
        <div className="navbar">
          <nav>
            <a href="#">Carros</a>
            <a href="#">Motos</a>
            <a href="#">Leilão</a>
          </nav>
        </div>
        <div className="divider-bar"></div>
        <div className="user">
          {Object.keys(new_user_buyer).length ? (
            <div className="user-logged">
              <Menu>
                <MenuButton as={Button}>
                  <div className="initial-caracters">
                    {/* <span>{new_user_buyer.name.split(' ')[0][0]}{new_user_buyer.name.split(' ')[1][0]}</span> */}
                  </div>
                  {/* <span>{new_user_buyer.name}</span> */}
                </MenuButton>
                <MenuList>
                  <MenuItem>Editar perfil</MenuItem>
                  <MenuItem>Editar endereço</MenuItem>
                  <MenuItem>
                    {
                      // new_user_buyer.type_account === 'buyer' ? 'Minhas compras' : 'Meus anúncios'
                    }
                  </MenuItem>
                  <MenuItem>Sair</MenuItem>
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
              <MenuItem
                fontWeight="600"
                pl="16px"
                color="var(--color-grey-2)"
                mt="32px"
                mb="44px"
                fontSize="16px"
              >
                Carros
              </MenuItem>
              <MenuItem
                fontWeight="600"
                pl="16px"
                color="var(--color-grey-2)"
                mb="44px"
                fontSize="16px"
              >
                Motos
              </MenuItem>
              <MenuItem
                fontWeight="600"
                pl="16px"
                color="var(--color-grey-2)"
                mb="32px"
                fontSize="16px"
              >
                Leilão
              </MenuItem>
            </MenuGroup>
            <MenuDivider
              border=""
              borderBottom='3px solid var("--color-grey-4")'
            />
            <MenuGroup pl="22px">
              {Object.keys(new_user_buyer).length ? (
                <div className="user-logged">
                  <Menu>
                    <MenuButton className="btn-user" as={Button}>
                      <div className="initial-caracters">
                        {/* <span>{new_user_buyer.name.split(' ')[0][0]}{new_user_buyer.name.split(' ')[1][0]}</span> */}
                      </div>
                      {/* <span>{new_user_buyer.name}</span> */}
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Editar perfil</MenuItem>
                      <MenuItem>Editar endereço</MenuItem>
                      <MenuItem>
                        {
                          // new_user_buyer.type_account === 'buyer' ? 'Minhas compras' : 'Meus anúncios'
                        }
                      </MenuItem>
                      <MenuItem>Sair</MenuItem>
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
  );
};
