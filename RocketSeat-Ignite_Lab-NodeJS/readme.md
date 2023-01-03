# RocketSeat - Ignite Lab - Node.JS

Neste diretório está disponível o projeto e algumas anotações criadas durante o evento da RocketSeat, o Ignite Lab 2022, sobre a criação de microserviços com Node.JS .


## Documentação

- [https://docs.nestjs.com/](Documentação - Nest);



## Criação do projeto

Para criar o projeto, primeiro instalamos as dependências:

*Nest -> Usado para criar e manipular o projeto*

> sudo npm i -g @nestjs/cli

E em seguida, cliar nosso projeto:

> nest new notifications-service

*Usei o NPM durante a criação...*


É interessante instalar as extenções o VS Code:

- `PKief.material-icon-theme`;
- ``

## Criação do banco de dados

Instale o prisma:

> npm install -D prisma
> npm install @prisma/client

Criando um banco SQLite (que poderá ser qualquer outro):

> npx prisma init --datasource-provider SQLite

Crie seu esquema, de acordo com sua necessidade, e **depois de pronto**, execute o comando para executar a migration no prisma:

> npx prisma migrate dev

E, por fim, para visualizar o banco criado, rode:

> npm prisma studio




## Progress

13/12/2022  |  Aula 1   |  00:00:00 >>> 00:42:00
30/12/2022  |  Aula 1   |  00:42:00 >>> 01:02:00
