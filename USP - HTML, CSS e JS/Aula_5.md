 # Aula 5 - Introdução ao CSS

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=W8ssbk872ZU).


## Cores

Existem três formas de trabalhar com cores em CSS.

**Cores nomeadas**

```css
.class {
    color: red;
    background-color: white;
}
```

**Hexadecimal**

```css
.class {
    color: #FFFFFF;
    background-color: #000000;
}
```

Cores Hexadecimais são formadas por um `#` seguido 8, 6 ou 3 dígitos.
Os 6 digitos são separados em três grupos (R, G e B) de cores e um, opcional, de transparência, que variam de `00` a `FF`.
Quando os dois algarismos de cada grupo forem iguais, podem ser escritos apenas 3 dígitos.

Por exemplo: `FFFFFF` = `FFF` ou `99CC22` = `9C2`.

Pode-se ainda adicionar dois algarismos para definir a transparência.
Ex: `FFCCCC55`, onde 55 é a transparência.

**rgb() e rgba()**

```css
.class {
    color: rgba(255,255,255);
    background-color: rgb(0,0,0, 0.5);
}
```

  Repare que `rgba()` inclui a transparência, enquanto `rgb()` são apenas cores sólidas.

As cores podem ser representadas em intervalos de `0` a `255`.
Do mesmo modo que no hexadecimal, o quarto, e opcional, grupo, é a transparência, e varia de 0 a 1. 

## Tipografia

A tipografia é referente às configurações de fonte, como tipo e família, estilo e tamanho.

**font-size**

Informa o tamanho da fonte em `px` (pixels), em `em` ou `rem`, sendo o segundo dinâmico, e varia conforme as configurações do navegador do usuário, e o último baseado nas configurações do index da sua página.

```css
.class{
    color: #000000;
    font-size: 50px;
}
.class2{
    color: rgb(0,0,255);
    font-size: 2em;
}
```

**font-weight**

Configura o "peso" da fonte. Podem ser informados numericamente, ou com palavras-chave como `normal`, `bold`, etc.

```css
.class{
    color: #000000;
    font-size: 50px;
    font-weight: bold;
}
.class2{
    color: rgb(0,0,255);
    font-size: 2em;
    font-weight: 500;
}
```

**font-family**

Configura a familia da fonte.
Além da familia da fonte, podemos configurar se ela é ou não serifada, com `serif` (é) ou `sans-serif` (não é).

```css
.class{
    color: #000000;
    font-size: 50px;
    font-family: 'Adamina', serif;
    font-weight: bold;
}
.class2{
    color: rgb(0,0,255);
    font-size: 2em;
    font-weight: 500;
    font-family: 'Arial', sans-serif;
}
```

**font-style**

Configura o estilo da fonte.
Os estilos mais conhecidos são `italic`, `oblique`, `bold`, etc.

```css
.class{
    color: #000000;
    font-size: 50px;
    font-family: 'Adamina', serif;
    font-weight: bold;
    font-style: italic;
}
.class2{
    color: rgb(0,0,255);
    font-size: 2em;
    font-weight: 500;
    font-family: 'Arial', sans-serif;
    font-style: oblique;
}
```

## Seletores

Seletores são as formas que temos de referenciar os componentes do HTML aos quais queremos atribuir o estilo CSS criado.

**tag**

Quando referenciamos o CSS à todas as TAGs do mesmo tipo:

Exemplo:

html
```html
<div>
    <h3>Teste</h3>
</div>
```

css
```css
h3{
    color: red;
}
```

**id**

Quando usamos um ID para isso:

Exemplo:

html
```html
<div id="meuid">
    <h3>Teste</h3>
</div>
```

css
```css
#meuid{
    color: red;
}
```

**class**

Para atribuir o mesmo estilo a mais itens do html, usamos classes.

Exemplo:

html
```html
<div class="minhaclasse">
    <h3>Teste</h3>
</div>
```

css
```css
.minhaclasse{
    color: red;
}
```

**pseudo-class**

As pseudo-classes são complementares às classes, e servem para variar o estilo com base em determinados gatilhos

Exemplo:

html
```html
<div class="minhaclasse">
    <h3>Teste</h3>
</div>
```

css
```css
.minhaclasse{
    color: red;
    :hover {
        color: blue;
    }
}
```

## Display

Display define como e quanto espaço seu conteúdo ocupa.

**Externo**

Pode ser `block`, `inline`, `inline-block` ou outros. Faz o componente se ajustar ao seu componente *externo*.

| **tipo** | **função** |
| --- | --- |
| `block` | O componente ocupa toda a largura da página. |
| `inline` | É dimencionado automaticamente para o tamanho do seu conteúdo. Não pode ter tamanho definido. |
| `inline-block` | É dimencionado automaticamente para o tamanho do seu conteúdo, mas pode ter dimenções definidas. |

**none**

Quando meu objeto tem setado `display: none` não é renderizado pelo navegador.

**interno**

Pode ser `list-item`, `table`, ou outros. Faz o componente se ajustar ao seu componente *interno*.

**flex**

Útil para facilitar organização do seu conteúdo interno.
Pesquisar sobre para saber mais.

**grid**

Transforma sua página em uma espécie de tabela, facilita muito a organização e posicionamento dos componentes em uma página.
Pesquisar sobre para saber mais. 

## Margens

Box model:

<img src="https://www.alura.com.br/artigos/assets/entendendo-como-funciona-box-model-e-o-box-sizing/box-model-no-devtools.png">

| **parametro** | **função** |
| --- | --- |
| `margin` | Configura a margem externa do componente. A distância que os componentes externos precisam ficar do componente. |
| `border` | Define a espeçura da borda do componente. |
| `padding` | Define a distância do componente em relação aos seus componenter internos. |
| `width` e `height` | Definem o tamanho do proprio componente |

## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**