# Redes do Docker

Para facilitar a comunicação entre containers, é interessante criar uma rede docker, e configurar certos containers para se conectarem a esta.

## Criando uma rede

> sudo docker network create --driver bridge minha-rede

Esse comando cria uma rede nomeada `minha-rede` do tipo Bridge.

## Listando redes

> sudo docker network ls

## Associar um container à rede criada

> sudo docker run --network minha-rede hello-world
