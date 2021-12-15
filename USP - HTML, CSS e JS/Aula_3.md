# Aula 3 - Listas e semântica em HTML

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=ExlIVyYVw04).

## Listas não ordenadas e ordenadas

As tags foram descritas na aula passada. Veja alguns exemplos:

<table>
    <thead>
        <tr>
            <th>Código</th>
            <th>Resultado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                &lt;ul&gt;
                    &lt;li&gt;Primeiro item&lt;/li&gt;
                    &lt;li&gt;Segundo item&lt;/li&gt;
                    &lt;li&gt;Terceiro item&lt;/li&gt;
                    &lt;ul&gt;
                        &lt;li&gt;Primeiro subitem&lt;/li&gt;
                        &lt;li&gt;Segundo subitem&lt;/li&gt;
                        &lt;li&gt;Terceiro subitem&lt;/li&gt;
                    &lt;/ul&gt;
                    &lt;li&gt;Quarto item&lt;/li&gt;
                &lt;/ul&gt;
            </td>
        </tr>
    </tbody>
</table>


| **Codigo** | **Resultado** |
| ```
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
``` | <ul>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <ul>
        <li>Primeiro subitem</li>
        <li>Segundo subitem</li>
        <li>Terceiro subitem</li>
    </ul>
    <li>Quarto item</li>
</ul> | 

## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**