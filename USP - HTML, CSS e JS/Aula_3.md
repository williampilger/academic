# Aula 3 - Listas e semântica em HTML

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=ExlIVyYVw04).

Nesta aula, foram vistos dois grandes conteúdos:

- Listas
- Tags Semânticas

# Listas

## Listas não ordenadas e ordenadas

As tags que formam uma lista são:

| **TAG** | **Função** |
| --- | --- |
| `<ol>` | lista ordenada |
| `<ul>` | lista não ordenada |
| `<li>` | define um item de uma lista |


As listas **ordenadas** tem alguns atributos específicos:

- `reversed`: inverte o sentido da lista;
- `start`: determina o ponto de partida;
- `type`: tipo de numeração:
    - `a`: letras minúsculas;
    - `A`: letras maiúsculas;
    - `i`: algarismos romanos minúsculos;
    - `I`: algarismos romanos maiúsculos;
    - `1`: números;

Veja alguns exemplos:

*******

**Codigo**

Lista não-ordenada

```html
<ul>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ul>
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ul>
    <li>Quarto item</li>
</ul>
```

**Resultado**

<ul>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ul>
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ul>
    <li>Quarto item</li>
</ul>

*******

Lista ordenada

**Codigo**

```html
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ol>
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ol>
    <li>Quarto item</li>
</ol>
```

**Resultado**

<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ol>
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ol>
    <li>Quarto item</li>
</ol>

*******

**Codigo**

```html
<ol reversed start="3">
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ol type="A">
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ol>
    <li>Quarto item</li>
</ol>
```

**Resultado**

<ol reversed start="3">
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ol type="A">
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ol>
    <li>Quarto item</li>
</ol>

A visualização aqui não ficou 100%.

*******

## Listas de Definição

São listas que contém ítens e suas definições. Por exemplo: Um produto e suas especificações.

| **Tag** | **Função** |
| --- | --- |
| `<dl>` | lista de definição |
| `<dt>` | adiciona um título de definição à lista de definição |
| `<dd>` | adiciona um conteúdo de definição à lista de definição |

Veja alguns exemplos:

*******

**Codigo**

```html
<dl>
    <dt>Notebook Acer</dt>
    <dd>Notebook com 1TB de HD, 16Gb de RAM, processador Intel Core i7-11000.</dd>
    <dt>Smartphone Motorole</dt>
    <dd>Motorola Moto X4 (XT1032) 2GB RAM, 64GB ROM, a prova d'água, snapgragon 98562.</dd>
</dl>
```

**Resultado**

<dl>
    <dt>Notebook Acer</dt>
    <dd>Notebook com 1TB de HD, 16Gb de RAM, processador Intel Core i7-11000.</dd>
    <dt>Smartphone Motorole</dt>
    <dd>Motorola Moto X4 (XT1032) 2GB RAM, 64GB ROM, a prova d'água, snapgragon 98562.</dd>
</dl>

*******

# Tags Semânticas

As tags semanticas são utilizadas para delimitar áreas específicas da nossa página, e tem o mesmo comportamento de uma div.
Seu uso não é obrigatório, mas **é uma ótima prática**.
O uso das tags semânticas ajuda na interpretação da sua página para softwares de acessibilidade, por exemplo. O ranqueamento da página no google, por exemplo, certamente será melhor se você utilizar tags semânticas.

Vejmos as principais tags:

| **Tag** | **Função** |
| --- | --- |
| `<header>` | Cabeçalho da página. Área que comunmente contém logotipo, nome da empresa, campode busca, menus padrões, etc. |
| `<nav>` | Menu de navegação. Comunmente na lateral ou no topo da página. |
| `<section>` | Divide a página em seções. |
| `<main>` | É a seção principal da página. |
| `<article>` | É uma seção geralmente usada para exibir artigos, ou grandes áreas de texto (? conferir isso) |
| `<aside>` | Conteúdo de ênfase. Exemplos: listas de patrocinadores, anúncios, contato. Coisas que geralmente não são o objetivo principal da página, mas que precisam de destaque. |
| `<footer>` | Rodapé da página. Em geral contém direitos autorais, endereço, "false conosco", etc. |


## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**