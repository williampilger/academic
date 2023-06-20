# Front-End Authenty-Store

Este arquivo contém orientações sobre a criação do projeto, utilização de bibliotecas, instalação de dependências, e orientações para a publicação desta aplicação. **TODOS OS PROCEDIMENTOS PARA PUBLICAÇÃO DEVEM SER DESCRITOS AQUI**, afinal, você não vai viver pra sempre, e na tua memória as bagaça não ficam mais de 30 minutos!


## Desenvolvimento

Front criado com Node, projeto React PWA em TypeScript:

> npx create-react-app reactts-app-pwa --template cra-template-pwa-typescript

Bibliotecas instaladas:

```sh
cd reactts-app-pwa
npm install --save-dev @reduxjs/toolkit axios react-redux react-redux-dom redux sass
npm install styled-components @types/styled-components
```

Para resolver problemas com a instalação, pode-se:
 - Excluir a pasta node_modules;
 - Excluir o package-lock.json;
 - Executar `npm i --package-lock-only`;
 - Executar `npm install`;


Para poder usar `imports`/`export` no SCSS, precisamos criar um arquivo nomeado `shims-scss.d.ts` com o conteúdo abaixo:

```ts
declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}
```

Dentro dos arquivos scss dos quais você quer exportar uma variável, por exemplo, use:
```scss
:export {//Este export permite importação das variáveis via Javascript/Typescript
    accentColor1:$accentColor1;
    accentColor1Light:$accentColor1Light;
}
```

## Executando localmente

Para executar o front localmente use:

```sh
cd reactts-app-pwa
npm install #se ainda não tiver feito uma vez
npm start
```



## Listagem de licenças de terceiros

Para listas as licenças, instale o `license-report` globalmente na sua máquina:

> sudo npm install -g license-report

E para gerar o HTML das licenças de terceiros use:

> license-report --output=html > public/third-party-licenses.html



## Adicionando idiomas

Para adicionar idiomas, não basta adicionar a tradução ao JSON da tradução, mas o mesmo também precisa ser cadastrado do array de "idiomas dispóníveis" nas configurações, precisa-se cadastrar sua bandeira e mais algumas observações.
Então, siga os seguintes passos para adicionar uma tradução:

 - **1** - Traduzir o JSON.
    - Acesse o arquivo `/src/config/translate.json`;
    - Copie o item `pt-BR` e crie uma cópia para o novo idioma;
    - Faça as traduções adequadas;
 - **2** - Adicionar a bandeira:
    - Baixe (ou crie) um SVG com a bandeira correspondente
    - Cole o SVG em `/src/resources/images/flags/`;
 - **3** - Criar funções no redux
    - Acesse o arquivo `/src/store/reducers/dictionary.ts`;
    - Crie o *case* adequado nas funções:
        - `GetDict`
        - `GetFlag`
 - **4** - Cadastrar o idioma no array de idiomas:
    - Acesse `/src/config/constants.json`;
    - Adicione o nome do idioma no array `arrayIdiomas`;

Para que um idioma não seja listado, basta remove-lo do array de idiomas.




## Publicando a aplicação

**Antes de publicar**:

`1` - confira se os campos `homepage` e `home` estão corretos em `./src/package.json`.
Não seria exagero conferir os dados em `./src/config/constants.json`.
Os idiomas devem ser configurados em `./src/config/translate.json`;

`2` - Gerar a lista de licenças de terceiros, conforme o item acima;


**Compilar**:

```sh
cd reactts-app-pwa
npm install #se ainda não tiver feito uma vez
npm run build
```

**Carregar**:

Carregar para o FTP o conteúdo de:

**LOCAL**: `site/reactts-app-pwa/build` -> **FTP**: `ROOT/store/home`;


# About

By: **authentyAE** | 2022

Bom Princípio - RS - Brasil - América do Sul - Terra - Via Láctea