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

> sudo socker run hello-world

## Listando containers

Listar containers ativos:

> sudo docker ps

Ou, listar todos, incluindo os parados:

> sudo docker ps -a
