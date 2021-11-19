# Iniciando no Electron


## Pré requisitos

Você precisará de duas ferramentas principais, o **NodeJS** e o **NPM**, no MAC o NPM já vem pré instalado (acredito que em todas as versões).
Também é importante ter uma boa IDE, o Visual Studio Code é uma boa opção.

**No Linux (Ubuntu ou semelhantes)**

Instale o NodeJS, e o NPM:

> sudo apt-get -y install nodejs npm

Para o Visual Studio Code:

> sudo snap install code

**No MAC**

Instale o NodeJS:

> brew install node


**No Windows**

Baixe e instale o [NodeJS](https://nodejs.org).
Lembre de marcar a opção **"Install addictional tools"**.
(A instalação das ferramentas adicionais leva bastante tempo)

Baixe e instale o [NCM]


## Criando um "Olá mundo!"

Crie uma pasta para armazenar seu app, navegue até ela no terminal e crie o JSON com os dados iniciais do projeto:


```sh
mkdir ola-mundo
cd ola-mundo
npm init
```

Após executar este comando, você precisará preencher alguns dados, pode dar enter em tudo e deixar padrão, se preferir.

Instale o **electron** no seu projeto:

> npm install electron --save

O parâmetro `--save` preenche os dados da versão instalada no JSON que você criou anteriormente.

Agora, crie seu script, o salve como referir, mas o que vém "pré configurado" é `index.js`.
E dentro deste arquivo coloque seu código:

```js
console.log("Olá Mundo!!");
```

Abra o JSON que você criou, e busque pela chave `"main"`, e altere seu valor para o nome do seu scrit, criado no passo anterior. E **dentro** da chave `"scripts"` adicione uma chave `"start"` com o valor `"electron ."`, onde o `.` indica que o diretório a ser usado é o atual. O seu conteúdo deve ficar semelhando ao abaixo:


```json
{
  "name": "alura-timer",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron ."
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "electron": "^16.0.1"
  }
}
```

Para executar o código, volte ao terminal e digite:

> npm start
