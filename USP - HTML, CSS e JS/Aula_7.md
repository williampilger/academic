 # Aula 7 - CSS

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=7QgEexLFoVg).

## Icones em .svg

**OBS: Isso foi mostrado na aula, mas não funciona**, ao menos não desta forma.

*HTML*
```html
<span class="icon icon-home" aria-hidden="true">Exemplo de uso</span>
```

*CSS*
```css
.icon {
    width: 1em;
    height: 1em;
    font-size: inherit;
    display: inline-block;
}

.icon::before {
    content: "";
    display: inline-block;
    background-size: cover;
    width: 1em;
    height: 1em;
}

.icon-home::before{
    background-image: url("seu.svg");
    vertical-align: text-top;
}
```

## FlexBox

Para praticar, faça o exercício do [FlexBox Froggy](https://flexboxfroggy.com/).

Um Exemplo (Codigo-fonte disponível [aqui](./projeto_3/)) :

*index.html*
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste FlexBox</title>
    <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>
    <div class="container">
        <div class="box red">VERMELHO</div>
        <div class="box green">VERDE</div>
        <div class="box blue">AZUL</div>
    </div>
</body>
</html>
```

*style.css*
```css
body {
    margin: 0;
    padding: 0;
}

.container {
    border: 10px solid yellow;
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.box {
    height: 150px;
    width: 150px;
    
    /*Centralizar textos nas caixas*/
    display: flex;
    justify-content: center;
    align-items: center;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
.blue {
    background-color: blue;
}
```


## Sobre

By: **will.i.am** | 2021.12.17

**Bom Princípio - RS - Brasil**