# Aula 4 - HTML (elementos especiais)

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=t0PtQJn3c2Y).

## Tabelas  (`<table>`)

| **Tag** | **Função** |
| --- | --- |
| `<table>` | Cria uma tabela |
| `<tr>` | Linha de uma tabela |
| `<th>` | Coluna de cabeçalho |
| `<td>` | Coluna de uma tabela |

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
<img alt="icone github" src="https://github.com/fluidicon.png" style="width:50px; height:50px;">
```

**Resultado**

<img alt="icone github" src="https://github.com/fluidicon.png" style="width:50px; height:50px;">

******

## Link (`<a>`)

A tag `<a>` é uma tag de link, e é um desvio, ou seja, causa a troca de página.
O atributo `href` deve conter o endereço da página para onde o link leva. `href` é obrigatório, e pode apontar para links relativos ou absolutos.
Podem também ser usados outros protocolos, como `mailto`, `tel`, entre outros.

O atributo `target` define como o link será aberto, e pode assumir dois valores, `_self` (padrão), e `_blank`, configurando o link para abrir o conteúdo na mesma guia, ou em uma nova guia, respectivamente.

Alguns exemplos:

```html
<a href="contato.html">Contato</a>
<a href="https://www.google.com.br" target="_brank">Ir para google</a>
<a href="mailto:teste@teste.com.br">Enviar e-mail para teste@teste.com.br</a>
<a href="tel:+5551999999999">Ligar para +55 51 99999 9999</a>
```

## Formulários (`<form>`)

| **Tag** | **Função** |
| --- | --- |
| `<form>` | Define um formulário |
| `<input>` | entrada para o usuário |
| `<label>` | Label de texto |
| `<select>` | Dropdown menu |
| `<textarea>` | Entrada de texto grande |
| `<button>` | Botão, pode ser dos tipos `button`, `submit` ou `reset` |

As tags `<input>` possuem um atributo obrigatório `type`, que pode assumir vários valores:

Para ver a descrição completa e listas com mais itens e características, acesse [W3Schools](https://www.w3schools.com/html/html_form_input_types.asp).

| **type** | **Função** |
| --- | --- |
| `button` | Botão genérico |
| `checkbox` | Checkbox |
| `color` | Selecionar cor |
| `date` | Campo para preenchimento de data |
| `datetime-local` | Campo para preenchimento de data + hora |
| `email` | Campo para e-mail (um `@` é exigido no preenchimento) |
| `file` | Botão seleção de um arquivo local |
| `hidden` | Campo que não é exibido para o usuário, mas seu conteúdo é enviado no submit |
| `image` |  |
| `month` | Campo para seleção de mês e ano |
| `number` | Campo para inserção de números |
| `password` | Entrada de texto, que exibe apenas bolinhas |
| `radio` | Radio button, usado para selecionar uma entre N opções |
| `range` |  |
| `reset` | Recarrega campos do formulário para estado original. |
| `search` |  |
| `submit` | Botão submit. Em geral envia o formulário |
| `tel` |  |
| `text` | (padrão) Entrada de texto |
| `time` |  |
| `url` |  |
| `week` |  |

Todos os inputs devem ter os atributos `name` e `values`. Onde o **name** é o nome como o parametro será enviado ao servidor, e **value** é o valor do parametro.

Em um *GET* por exemplo, teremos um envio smelhante a `http://seusite.com.br/teste.php?name=value`.

## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**