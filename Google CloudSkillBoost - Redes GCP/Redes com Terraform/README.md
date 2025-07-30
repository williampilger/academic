# Treinamento: `Como automatizar a implantação de redes com o Terraform`

```
INFO:
    - Laboratório do Google Cloudskillsboost
    - https://www.cloudskillsboost.google/course_templates/764/labs/558261#step1
    - 1h | 5 Créditos | Feito em 2025-07-30
```

O `Terraform` permite criar toda a infraestrutura necessária com arquivos `.tf` que contém as instruções para tal.

No diretório `./tfnet` estão os arquivos criados durante o treinamento.


## Anotações

Pode-se notar que foi criado um modelo de VM (a `instance`, declarada no arquivo `instance/main.tf`);

Cada máquina tem o firewall configurado pelo próprio formulário `.tf` que cria as instâncias.

Se tentarmos fazer um *ping*  entre duas VMs na rede `privatenet` veremos que não funciona, mas na rede `mynetwork` sim, pois o firewall permite.
