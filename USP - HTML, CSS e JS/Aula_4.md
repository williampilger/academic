# Aula 4 - HTML (elementos especiais)

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=t0PtQJn3c2Y).

## Tabelas

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

## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**