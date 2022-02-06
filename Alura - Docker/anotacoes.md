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

Para executar o container, publicando seu conteúdo (no caso de ser um site estático, por exemplo) use (lembrando que o nome da imagem é apenas um exemplo):

> sudo docker run -d -P dockersamples/static-site

Ou, caso queira escolher a porta manualmente, use `-p` minúscula, seguida das portas externa e interna, separadas por `:`, veja:

> sudo docker run -d -p 1234:80 dockersamples/static-site

Para verificar as portas usadas, você pode usar:

> sudo docker port ID_DO_SEU_CONTAINER

Você também pode nomear seu container, para não precisar ficar usando o ID para atuar sobre seu container, usando a flag `--name XXXXX`:

> sudo docker run -d -P --name meu-container dockersamples/static-site

Caso seja necessário informar algum valor para uma variável de ambiente (interna ao container), pode-se faze-lo usando a flag `-e`. Um exemplo dessa utilidade é:

> sudo docker run -d -P --name meu-container -e AUTHOR="WilliamPilger" dockersamples/static-site

Você pode encontrar mais informações sobre os comando usando `sudo docker run --help`.

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

Por padrão, o stop aguarda 10s para ser executado. Você pode ver essas contigurações usando o `docker stop --help`. Mas isso pode ser alterado usando a flag `-t`:

> sudo docker stop -t 0 ID_DO_SEU_CONTAINER


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


# Exemplos

Mais fácil do que explicar todos os funcionamentos possíveis, vamos à alguns exemplos:

## Rodando site com node

Comando completo:

> sudo docker run -d -p 8080:3000 -v "C:\Users\User\Desktop\MeuAppExemplo:/var/www" -w "/var/www" node npm start

Onde:
   - `-d` para não render o terminal atual;
   - `-p 8080:3000` Para direcionar a porta 3000 do container (configurado no meu app, por exemplo) para a porta 8080;
   - `-v "C:\Users\User\Desktop\MeuAppExemplo:/var/www"` para vincular a pasta do meu projeto (no PC local, físico) ao endereço `/var/www` do container;
   - `-w "/var/www"` para definir o diretório de início do container (work directory);
   - `node` nesse caso, nome da imagem que será usada;
   - `npm start` comando (rodado no work directory) que inicia o node dentro do container.
