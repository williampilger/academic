# Aula 1

## Configurando GIT

Instale o GIT, e o Visual Studio Code, normalmente.

Configurando o seu nome e email para os commits

> git config --global user.name "<seu nome>"
> git config --global user.email "<seu email>"

Configurando o VS Code como editor de texto padrão

> git config --global core.editor "code -wait"

## Criando um repositório

Dentro de uma pasta, dê o comando para criar um repositório local:

> git init

Obter o status do seu repositório

> git status

Adicionar arquivos ao seu repositório:

> git add fileName.c

Você pode adicionar arquivos usando `git add .` para adicionar tudo, ou usar `git add /pasta/**/*.js`  por exemplo.

Criar um commit:

> git commit -m "mensagem de commit"

Para ver seu histórico de commits, use:

> git log

Criando uma branch

> git branch nome_da_branch

Você também poderá ver em qual chanch está digitando apenas `git branch`.

Migrar para uma branch:

> git checkout nome_da_branch

Ou ainda, pode criar e migrar para uma branch com um único comando:

> git checkout -b nome_da_branch

Para deletar uma branch use:

> dig branch -D nome_da_branch