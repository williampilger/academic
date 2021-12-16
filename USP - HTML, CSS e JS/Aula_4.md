# Aula 4 - HTML (elementos especiais)

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=t0PtQJn3c2Y).

## Tabelas  (`<table>`)

| **Tag** | **Função** |
| --- | --- |
| `<table>` | Cria uma tabela |
| `<tr>` | Linha de uma tabela |
| `<th>` | Coluna de uma tabela |
| `<td>` | Coluna de cabeçalho |

Exemplo:

******

**Codigo**

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Telefone</th>
    </tr>
    <tr>
        <td>Renato</td>
        <td>(51) 99999 9999</td>
    </tr>
    <tr>
        <td>William</td>
        <td>(51) 00000 0000</td>
    </tr>
</table>
```

**Resultado**

<table>
    <tr>
        <th>Nome</th>
        <th>Telefone</th>
    </tr>
    <tr>
        <td>Renato</td>
        <td>(51) 99999 9999</td>
    </tr>
    <tr>
        <td>William</td>
        <td>(51) 00000 0000</td>
    </tr>
</table>

* OBS: A visualização no navegador é **sem as linhas de demarcação**.

******

Para mesclar celulas podemos usar os `colspan` e `rowspan`, como demonstrado abaixo.
Também aproveito o exemplo para mostrar a estilização da tabela, definindo as bordas.

******

**Código**

```html
<table style="border: 1px solid; border-collapse: collapse;">
    <tr style="border: 1px solid;">
        <th style="border: 1px solid;" colspan="2">Petuxos</th>
    </tr>
    <tr style="border: 1px solid;">
        <th style="border: 1px solid;" rowspan="3">Raças</th>
        <td style="border: 1px solid;">Pinscher</td>
    </tr>
    <tr style="border: 1px solid;">
        <td style="border: 1px solid;">Pastor Alemão</td>
    </tr>
    <tr style="border: 1px solid;">
        <td style="border: 1px solid;">Pug</td>
    </tr>
</table>
```

**Resultado**

<table style="border: 1px solid; border-collapse: collapse;">
    <tr style="border: 1px solid;">
        <th style="border: 1px solid;" colspan="2">Petuxos</th>
    </tr>
    <tr style="border: 1px solid;">
        <th style="border: 1px solid;" rowspan="3">Raças</th>
        <td style="border: 1px solid;">Pinscher</td>
    </tr>
    <tr style="border: 1px solid;">
        <td style="border: 1px solid;">Pastor Alemão</td>
    </tr>
    <tr style="border: 1px solid;">
        <td style="border: 1px solid;">Pug</td>
    </tr>
</table>

******

## Imagens (`<img>`)

A tag de imagem não é fechada.
O atributo `alt` é importante, pois contém o texto para exibição alternativa, que também é usado por recursos de acessibilidade.
O atributo `scr` especifica o endereço (link) da sua imagem.
Os atributos `width` e `height` especificam o tamanho, e não são obrigatórias, embora seja uma boa prática sempre informar.

Também é possível definir o tamanho via estilo usando, por exemplo, `style="widht:150px; height:150px;"`. É melhor usar estilo, pois assim você não corre o risco do tamanho ser sobrescrito pelo CSS.

Veja o exemplo:

******

**Código**

```html
<img alt="icone github" scr="https://github.com/fluidicon.png" style="widht:150px; height:150px;">
```

**Resultado**

<img alt="icone github" scr="https://github.com/fluidicon.png" style="widht:150px; height:150px;">

******

## Link (`<a>`)

A tag `<a>` é uma tag de link, e é um desvio, ou seja, causa a troca de página.


## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**