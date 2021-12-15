# Aula 2 - Introdução ao HTML 

Esta aula está (ou ao menos estava) disponível [no YouTube](https://www.youtube.com/watch?v=6IMsMX3d8zY).

## Estrutura básica

Se você estiver usando o **Visual Studio Code**, basta criar um novo arquivo `.html`, digital `html` no seu conteúdo e selecionar a opção `html:5`. O VS Code irá inserir automaticamente a estrutura padrão.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta name="description" content="Descrição da página."> <!-- descrição é importante para que os buscadores encontrem sua página -->
         <title>Documento</title>
    </head>
    <body>
        <!-- Testando os tamanhos dos titulos -->
        <h1>Ola mundo!</h1>
        <h2>Ola mundo!</h2>
        <h3>Ola mundo!</h3>
        <h4>Ola mundo!</h4>
        <h5>Ola mundo!</h5>
        <h6>Ola mundo!</h6>
        <!-- Parágrafos -->
        <p>Qualquer texto que eu precisar.</p>
        <!-- Testes com links -->
        <a href="www.google.com">Link para o google.</a>
        <a href="www.youtube.com">Link para o YouTube.</a>
        <!-- Testes com DIVs -->
        <div style="background-color: tomato">
            <h1>Uma DIV aqui</h1>
            <p>Este conteúdo inteiro está dentro da div.</p>
        </div>
    </body>
</html>
```

## Tags

Principais tags

| **TAG** | **Função** |
| --- | --- |
| `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>` | Titulos e subtitulos |
| `<p>` | Parágrafo |
| `<a>` | Tag de link, junto ao atributo `href="url"` |
| `<div>` | define uma divisão (seção) no corpo |
| `<table>` | define uma tabela |
| `<ol>` | lista ordenada |
| `<ul>` | lista não ordenada |
| `<li>` | define um item de uma lista |
| `<form>` | define um formulário |
| `<input>` | define um campo de um formulário |
| `<textarea>` | define uma área de texto em um formulário |
| `<button>` | define um botão de um formulário |

Tags de Formatação

| **TAG** | **Função** |
| --- | --- |
| `<b>` ou `<strong>` | Negrito |
| `<i>` ou `<em>` | Italico |
| `<u>` | Sublinhado |
| `<br/>` | quebra de linha |
| `<sub>` | subescrito Ex. TEXTO<sub>SUBESCRITO</sub> |
| `<sup>` | supraescrito Ex. TEXTO<sup>SUPRAESCRITO</sup> |
| `<del>` | texto cortado |
| `<mark>` | marcar/destacar um texto |
| `<pre>` | definir texto pré formatado |
| `<small>` | definir tamanho menor |

Simbolor e entidades

| **Codigo** | **Simbolo** |
| --- | --- |
| `&copy;` | Simbolo Copyright '&copy;' |
| `&reg;` | Símbolo de marca registrada '&reg;' |
| `&nbsp;` | Espaço em branco '&nbsp;' |
| `&amp;` | E comercial '&amp;' |

## Primeira página

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Authenty | Quem Somos</title>
    </head>
    <body style="background-color: rgb(214, 214, 214);">
        <div style="display: block; padding: 20px; margin:20px 10% 20px 10%; border-radius: 5px; background-color: white;">
            <h1><strong>Quem Somos</strong></h1>
            <p><em>Sistemas e softwares desenvolvidos especialmente para escritórios de arquitetura e engenharia</em></p>
            <h2>História</h2>
            <p>Iniciamos nossa História em 2011 quando criamos um escritório de Engenharia voltado para Projetos de Estruturas, a MDC Projetos. Mas logo de cara nos deparamos com um problema: <strong>QUANTO COBRAR PELOS PROJETOS?</strong> E a partir deste momento, nos dedicamos a encontrar uma maneira simples, prática e assertiva de elaborar nossas propostas. Não foi um trabalho fácil. Ao longo dos anos estudamos muito sobre o assunto e fomos além: Tudo o que implementávamos era testado na prática! Sim, testamos tudo no nosso escritório de Engenharia.</p>
            <h2>Indo além</h2>
            <p>Quando conversávamos com outros profissionais da área percebíamos que essa dificuldade era mais comum do que imaginávamos. Daí surgiu a ideia:</p>
            <p>Porque não transferir esse conhecimento e ajudar nossos colegas?</p>
            <p>E assim começou a <strong>Authenty</strong> em parceria com a MDC, que  continuará sendo sua fonte de inspiração para vivenciar percalços do dia a dia e transformá-los em oportunidades que facilitam a vida de muitos profissionais.</p>
            <p>Se você chegou até aqui é porque compartilha destas dificuldades, portanto, está no lugar certo!</p>
            <p>Temos como objetivo desenvolver constantemente soluções inovadoras para otimizar processos nos escritórios e gostaríamos de convidar você, profissional, para fazer parte da comunidade Authenty e nos dizer: Como podemos te ajudar a melhorar o dia a dia do seu escritório?</p>
        </div>
        <div style="display: block; padding: 20px; margin:20px 10% 20px 10%; border-radius: 5px; background-color: white;">
            <h2><strong>Time</strong></h2>
            <img style="width:50%; border: 5px solid yellow; text-align: center;" src="https://www.authenty.com.br/site/imgs/textos/alexandre-diego-monica-e-willian.JPG">
            <ul style="display:inline-block; vertical-align: top; wigth: 20%; margin: 5%;">
                <li>Alexandre</li>
                <li>Diego</li>
                <li>Monica</li>
                <li>William</li>
            </ul>
        </div>
        
    </body>
</html>
```
