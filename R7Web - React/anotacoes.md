# Curso de React


## Iniciando

Primeiro, instale o NodeJS na sua máquina, não vou descrever este processo.

## Criando meu primeiro projeto React com CRA

Abra o terminal onde deseja criar o projeto, e digite:

> npx create-react-app seu-projeto --template typescript

Isso já cria o projeto com o template certo.

Para executar, use:

> npm start


## Criando meu primeiro projeto React com Vite

Abra o terminal onde deseja criar o projeto, e digite:

> npm init vite seu-projeto -- --template react-ts

Isso usa o template `react-ts`, que é uma aplicação react com typescript

Em seguida, navegue até seu projeto e instale as bibliotecas.

> cd seu-projeto

> npm install

Para executar, use:

> npm run dev


## Styled-Components

É uma forma de criar componentes estilizados de modo bastante fácil, e bem modular.

Viside [o site](https://styled-components.com/).

Cada componente pode receber propriedades, e facilmente estilizado, com CSS puro, individualmente. Bastante interessante.


### Instalação

É instalado via **npm** também.

> npm install --save styled-components


## TailWindCSS

O [TailWindCSS](https://tailwindcss.com/) é uma for a de estilizar a página com apenas utilizando classes.

Para utiliza-lo será sempre necessário estar com a documentação aberta, pois são uma infinidade de classes pré existentes.

Quando o projeto é compilado para a produção, a aplicação do TailWind percorre todo o código, e repassa para publicação apenas as classes utilizadas por você ao longo do código.

**ATENÇÃO**: Se você estiver usando ferramentas como o **Vite**, **React** ou outras formas específicas de criar projetos, veja o tutorial correto para instalação (ele existe no site).

### Instalação

Ele é instalado via **npm**, e as orientações completas estão na [página de instalação, na própria documentação](https://tailwindcss.com/docs/installation).

São vários passos para instalação e configuraçao, portanto, siga as etapas do site.
