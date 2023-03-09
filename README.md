# Documentação do Projeto Final - Motors Shop

## Iniciando o Projeto

Para inciar este projeto, é necessário instalar as dependências, que foram utilizadas na elaboração do projeto. Portanto utilize o comando abaixo para instalar tais dependências:
````
yarn install
````

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````

## **Antes de rodar a aplicação**
Rode inicialmente o  comando ````yarn dev```` no repositório de Back-End para que possa utilizar corretamente a aplicação.

Repositório de back-end: [https://github.com/m6-projeto-final-grupo36/motors-shop-backend](https://github.com/m6-projeto-final-grupo36/motors-shop-backend)

## **Rodando a aplicação**
Digite o seguinte comando no terminal para rodar a aplicação em sua máquina:

````
yarn start
````

## Rotas

A aplicação possui 7 rotas sendo:
<ul>
  <li>/ - Página Home </li>
  <li>/login - Login de usuários que já possuem uma conta </li>
  <li>/register - Cadastro de usuários </li>
  <li>/advertiser_announcement - Página que contém todos os anúncios de um anunciante </li>
  <li>/my_announcements - Página que o usuário anunciante pode editar/ver seus anúncios - Apenas usuários anunciantes tem acesso </li>
  <li>/detail - Página que o usuário pode ver um anúncio detalhado </li>
  <li>/recover_password - Página para o usuário recuperar a senha - Só é acessada quando o usuário segue as intruções do email </li>
</ul>

Qualquer rota fora dessas redireciona o usuário à página home.

## Idioma do codigo

- Inglês

## Linguagens utilizada

- JavaScript/TypeScript

## Biblioteca principal utilizada

- React.js

## Bibliotecas secundarias utilizadas

- axios
- chakra-ui
- styled-components
- moment
- react
- react-dom
- react-router-dom
- react-hook-form
- react-icons
- react-scripts
- typescript
- web-vitals
- yup

## Conventional Branchs/Commits

### Branchs

##### Main:

    Branch padrão do repositório, só aceitará pull request da branch
    Develop ou de uma branch hotFix

##### Developer:

    Branch de desenvolvimento, todas as branchs de feature serão criadas apartir desta.

##### Feature:

    Branch usada para desenvolver uma nova funcionalidade. Essa
    branch só existem enquanto a funcionalidade está sendo
    desenvolvida, mas será excluida quando o merge for realizado
    para branch develop

##### HotFix:

    Branch para correções emergenciais da branch Master caso esta já
    esteja em produção nesse caso a branch Develop também deve ser
    atualizada, ou para correções emergenciais da branch Develop
    antes que está seja mergeada com a Master

#### Modelo de Branch

    tipoDaBranch/nomeDafuncionalidade (escrito em ingles com camelCase)

### Commits

    Os arquivos deverão ser adicionados individualmente para serem
    commitados evitando o uso de git add .

##### feat:

     Commits, que adicionam um novo recurso

##### fix:

     Commits, que corrige um bug

##### refactor:

    Commits, que reescrevem/reestruturam seu código, porém
    não alteram nenhum comportamento

##### perf:

    são commits de refatoração especiais, que melhoram o desempenho

##### style:

    Commits, que não afetam o significado (espaço em branco,
    formatação, ponto e vírgula ausente etc.)

##### docs:

    Commits, que afetam apenas a documentação

##### build:

    Commits, que afetam componentes de compilação como ferramenta de
    compilação, pipeline ci, dependências, versão do projeto ...

##### chore:

    Commits, Utilizado na atualização para mudanças em
    ferramentas, configurações e bibliotecas.

Atualizações que não ocasionam alteração no código de produção.

## Modelo de Organização das Pastas

![alt Pastas](/doc/img/pastas.png)

### src

    Contém todos as pastas criadas para o projeto

### src/components

    Contém somente os componentes criados para o projeto com styled-components
      - Caso o componente tenha mais de um modelo, eles deveram
        ser dividos em subpastas. que partilham o mesmo style

### src/contexts

    Contém todos os contextos da aplicação

### src/pages

    Contém as paginas da aplicação

### src/routes

    Contém as definições de rotas da aplicação

### src/services

    Contém as configurações do axios para requisições da api

### src/validators

    Contém as validações como yup,resolver, schema

### src/style

    Contém o estilo global da aplicação
        - Variaveis
        - Fontes
        - Reset

### src/assets

    Contém imagens locais utilizadas no projeto

## Estilização do codigo

### Styled-Components

    - O styled (css) deve adotar o modelo de nome ComponentStyle
    (nome do componente html seguindo de Style em camelcase)

    - O styled-Component deve adotar o nome do elemento html com a
    primeira letra MAIUSCULA, Ex: Input, Button, Ul, Li.
    Caso o styled-Component seja mais complexo como o exemplo abaixo:

    _< li >_
    ..._< div >_
    ......_< h1 > Loren < / h1>_
    ......_< span > Ipsun </ span>_
    ..._</ div >_
    ..._< div >_
    ......_< img />_
    ..._</ div>_
    _< /li >_

    o modelo de nome deve segui o mesmo mas sendo a descrição da função do elemento ex:
    Card, DropMenu, Modal, HeaderModal, FormLogin, FormRegister

### Componentes

    Devem ser variaveis
    const Nome () =>{
        return
    }

### Funções

    Devem ser variaveis
    const Nome () =>{
        return
    }

### Formatação do codigo

    Espaços devem ser evitados pois deixam um codigo pequeno, extenso e cansativo de ler

    adotar aspas duplas ( " " )

### Estrutura do html

    Uma <Div /> não é uma tag semantica, ela é apenas para estilização de algo em especifico,
    não devendo ser utilizada sem a devida necessidade

Feito pela Equipe:
<ul>
<li><a href='https://github.com/GuiHirataDev'>Guilherme Hirata</a></li>
<li> <a href='https://github.com/jorgekimura2001'>Jorge Kimura</a></li>
<li><a href='https://github.com/maksonss4'>Makson Sillas</a></li>
<li><a href='https://github.com/richzago97'>Richard Zago</a></li>
</ul>
