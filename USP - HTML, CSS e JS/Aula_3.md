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

Veja abaixo a página criada na aula:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Petuxos</title>
</head>
<body style="font-family:Verdana, Geneva, Tahoma, sans-serif;">
    <header style="text-align: center;">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxIHBhYPERMWFhMWFx0ZFxcZGBgZGRMYGBwZGhYfGRwZHioiGRwnIh0XIzUjJys6PT0xGiE2OzYvOiowMS4BCwsLDw4PHRERHTAiISgwMDIwMDIwMDAwODAwMDAwMDAwMjAyMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAIoBbAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABGEAACAgECBAQEAgUJAw0AAAABAgADEQQFBhIhMQcTQVEiMmFxgZEUQlJyoRUjNmJzgrGzwXSi8RYXJjVUY4OSk8LD0+H/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIEBQYD/8QALxEAAgIBAwICCQQDAAAAAAAAAAECEQMEEiExQQVhEyJRcYGRobHBMkLh8BQj0f/aAAwDAQACEQMRAD8A7NERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREATHZatSFmIAHckgAfiZknN/EDVVbVvTXaxS9bIh04I5lDLkWIqn4VbPK3Me4bv8ADPLPkeODkouXkupfHDfKm6LXZxhoa35f0hW64LIGsRT/AF3QFUH1YiTgM5btO7pv2iNT02UrYrBecYW1cYfkbABxkZA95ILut25rSnm2V+Xp/wCc8s8pe1bHqYk4zgeWSB/XmDDxClP00du2nXV0+5kS0v6djuzocSi1anWabqmrdv6ttdbj81Ct/vSR0HFFqalKtTUoDsEW2okrzscKHRviTJ6ZBbv1xPXB4jp8zUYypvs+P4KT02SCtotMTyezOMcREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDHbatNZZiFUdySAB9yZB63ijbyCrXV3FT8tam8g/u1hiDInxl076jgw8oyFurLD6ZKjP05ipkRwtso2PbBX3dvisYdi2PT6Dt/xmBrtatNFcW30Rk6fT+l78EnxLvA3nRhKNNd5i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" alt="Logo Petuxos">
        <h1 style="color: saddlebrown;">Petuxos - seu petShop online</h1>
        <form>
            <label>O que procuras?</label>
            <input type="text">
            <input type="submit" value="Buscar">
        </form>
        <nav>
            <ul>
                <a href="">Inicio</a>
                <a href="">Quem Somos</a>
                <a href="">Produtos</a>
                <a href="">Contato</a>
            </ul>
        </nav>
    </header>
    <aside style="background-color: darkcyan; color: aliceblue;">
        <h2>Seja um colaborador Petuxo!</h2>
        <section>
            <h3>Nossos especialistas</h3>
            <dl>
                <dt>Dra. Mônica</dt>
                <dd><small>Médica clínica</small></dd>
                <dt>Dr. Diego</dt>
                <dd><small>Médico dermatologista</small></dd>
                <dt>Dr. William</dt>
                <dd><small>Cardiologista</small></dd>
                <dt>Dr. Alexandre</dt>
                <dd><small>Humorista</small></dd>
                <dd><small>Adestrador</small></dd>
            </dl>
        </section>
    </aside>
    <main>
        <h3>Cardápio de Produtos</h3>
        <p>Encontre os melhores produtos com a gente!</p>
        <div>
            <ol type="I">
                <li>Shampoo</li>
                <br>
                <li>Ração Premium
                    <ul>
                        <li>Marca 1</li>
                        <li>Marca 2</li>
                    </ul>
                </li>
                <br>
                <li>Roupinhas</li>
            </ol>
        </div>
    </main>
    <footer style="background-color: chartreuse;">
        <ul>
            <li>Rua dos pets, 686</li>
            <li><a href="">Quem somos</a></li>
            <li><a href="">Contato</a></li>
        </ul>
        <div style="text-align: center;">
            <p>Desenvolvido por mim!</p>
            <p><small>Copyright &copy; 2021</small></p>
        </div>
    </footer>
</body>
</html>
```


## Sobre

By: **will.i.am**

**Bom Princípio - RS - Brasil**
