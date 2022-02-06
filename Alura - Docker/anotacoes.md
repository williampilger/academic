# Instalação (Linux x64)

Add repositório e instalar

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install -y docker-ce
#sudo usermod -aG docker $(whoami) #para não precisar usar sudo para rodar o docker (não funcionou)
```

# Comandos Básicos

Depois de instalado e funcionando, podemos:

## Criando (ou baixando) um container

O comando `run` é responsável por criar um novo container com base em outro existente. Você pode encontrar inuúmeros containers prontos no [Docker Hub](https://hub.docker.com/).

Veja como executar o hello-world do docker:

> sudo docker run hello-world

Isso fará a criação e execução imediata do container. Caso precise manter o container rodando no terminal atual, use `-it` para atrelar o terminal ao container:

> sudo docker run -it hello-world

Para forçar a execução do container SEM atribuir o terminal à ele (útil sempre que você criar container que vão executar processos que não acabam após uma simples execução. Ou seja, quase sempre.):

> sudo docker run -d hello-world


## Listando containers

Listar containers ativos:

> sudo docker ps

Ou, listar todos, incluindo os parados:

> sudo docker ps -a


## Iniciando/parando containers já criados

Com o comando acima, ao listar os containers, você verá os identificadores dos seus containers, use eles para disparar comandos para tais:

> sudo docker start ID_DO_SEU_CONTAINER

Para iniciar o container atrelando o terminal a ele, usamos as flags `-a` (atatch), e `-i` (iterable):

> sudo docker start -a -i ID_DO_SEU_CONTAINER

Para parar o container, use:

> sudo docker stop ID_DO_SEU_CONTAINER


## Remover containers

> sudo docker rm ID_DO_SEU_CONTAINER

Para remover todos os containers:

> sudo docker container prune


## Listar imagens

As imagens podem ser listadas com:

> sudo docker images

## Remover imagens

> sudo docker rmi NOME_DA_IMAGEM

Para remover todas

> sudo docker images prune
