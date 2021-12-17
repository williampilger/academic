 # Aula 6 - CSS

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=7QgEexLFoVg).

## Icones em .svg

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

## Sobre

By: **will.i.am** | 2021.12.17

**Bom Princípio - RS - Brasil**