# Aula 3 - Listas e semântica em HTML

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=ExlIVyYVw04).

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
<ul revered start="3">
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ul type="A">
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ul>
    <li>Quarto item</li>
</ul>
```

**Resultado**

<ul revered start="3">
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ul type="A">
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ul>
    <li>Quarto item</li>
</ul>

*******

## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**