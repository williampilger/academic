# Tarefa 1. Configure regras de firewall de verificação de integridade e HTTP

Defina regras de firewall para permitir o tráfego HTTP para os back-ends e o tráfego TCP do verificador de integridade do Google Cloud.

## Acessar a rede `my-internal-app`

A rede `my-internal-app`, com as sub-redes `subnet-a` e `subnet-b`, e as regras de firewall de tráfego RDP, SSH e ICMP já foram configuradas para você.

1. No console, acesse **Menu de navegação > Rede VPC > Redes VPC**.
2. Localize `my-internal-app` com as sub-redes `subnet-a` e `subnet-b`.

> **Nota:** Todo projeto do Google Cloud começa com a rede `default`. A rede `my-internal-app` foi criada para você.

Você criará grupos gerenciados de instâncias nas sub-redes `subnet-a` e `subnet-b`, ambos na região `REGION`, pois o balanceador de carga interno é um serviço regional. Os grupos ficarão em zonas diferentes para alta disponibilidade.

---

## Criar a regra de firewall HTTP

Permita tráfego HTTP do balanceador de carga e da Internet para os back-ends (para instalar o Apache).

1. Em **Rede VPC**, clique em **Firewall** no painel à esquerda.
2. Localize as regras `app-allow-icmp` e `app-allow-ssh-rdp` (já criadas).
3. Clique em **+ Criar regra de firewall**.
4. Preencha os campos:

    | Propriedade              | Valor                       |
    |--------------------------|-----------------------------|
    | Nome                     | app-allow-http              |
    | Rede                     | my-internal-app             |
    | Destinos                 | Tags de destino especificadas |
    | Tags de destino          | lb-backend                  |
    | Filtro de origem         | Intervalos IPv4             |
    | Intervalos IPv4 de origem| 10.10.0.0/16                |
    | Protocolos e portas      | tcp:80                      |

> **Observação:** Inclua `/16` nos intervalos IPv4 de origem para abranger todas as redes.

5. Clique em **Criar**.

---

## Criar as regras de firewall de verificação de integridade

As verificações de integridade vêm dos intervalos `130.211.0.0/22` e `35.191.0.0/16`.

1. Em **Regras de firewall**, clique em **+ Criar regra de firewall**.
2. Preencha os campos:

    | Propriedade              | Valor                       |
    |--------------------------|-----------------------------|
    | Nome                     | app-allow-health-check      |
    | Rede                     | my-internal-app             |
    | Destinos                 | Tags de destino especificadas |
    | Tags de destino          | lb-backend                  |
    | Filtro de origem         | Intervalos IPv4             |
    | Intervalos IPv4 de origem| 130.211.0.0/22 35.191.0.0/16|
    | Protocolos e portas      | tcp                         |

> **Observação:** Insira os dois intervalos IPv4 de origem separados por espaço.

3. Clique em **Criar**.

---

# Tarefa 2. Configure os modelos e crie grupos de instâncias

Um grupo gerenciado de instâncias usa um modelo para criar instâncias idênticas.

## Configurar os modelos de instâncias

1. No console, acesse **Menu de navegação > Compute Engine > Modelos de instância**.
2. Clique em **Criar modelo de instância**.
3. Preencha os campos:

    | Propriedade         | Valor                        |
    |---------------------|------------------------------|
    | Nome                | instance-template-1          |
    | Local               | Global                       |
    | Série               | E2                           |
    | Tipo de máquina     | Núcleo compartilhado > e2-micro |
    | Tags de rede        | lb-backend                   |
    | Rede                | my-internal-app              |
    | Sub-rede            | subnet-a                     |
    | Endereço IPv4 externo | Nenhum                     |

4. Em **Gerenciamento > Metadados**, adicione:

    | Chave              | Valor                                         |
    |--------------------|-----------------------------------------------|
    | startup-script-url | gs://cloud-training/gcpnet/ilb/startup.sh     |

5. Clique em **Criar**.

### Criar modelo para `subnet-b`

1. Copie `instance-template-1` e nomeie como `instance-template-2`.
2. Em **Rede**, selecione `subnet-b`.
3. Clique em **Criar**.

---

## Criar os grupos gerenciados de instâncias

1. Em **Compute Engine > Grupos de instâncias**, clique em **Criar grupo de instâncias**.
2. Preencha os campos para o primeiro grupo:

    | Propriedade         | Valor                        |
    |---------------------|------------------------------|
    | Nome                | instance-group-1             |
    | Modelo de instância | instance-template-1          |
    | Local               | Única zona                   |
    | Região              | REGION                       |
    | Zona                | ZONE                         |
    | Nº mín. instâncias  | 1                            |
    | Nº máx. instâncias  | 1                            |
    | Tipo de indicador   | Utilização de CPU            |
    | Uso de CPU          | 80                           |
    | Período inicialização | 45                         |

3. Clique em **Criar**.

4. Repita para o segundo grupo, usando `instance-group-2`, `instance-template-2` e uma zona diferente.

---

## Verificar os back-ends

1. Em **Compute Engine > Instâncias de VM**, verifique as instâncias criadas.
2. Crie uma VM utilitária:

    | Propriedade         | Valor                        |
    |---------------------|------------------------------|
    | Nome                | utility-vm                   |
    | Região              | REGION                       |
    | Zona                | ZONE                         |
    | Série               | E2                           |
    | Tipo de máquina     | e2-micro                     |
    | Rede                | my-internal-app              |
    | Sub-rede            | subnet-a                     |
    | Endereço IP interno | 10.10.20.50                  |

3. Clique em **Criar**.

4. Acesse a utility-vm via SSH e execute:

    ```sh
    curl 10.10.20.2
    curl 10.10.30.2
    ```

    > **Nota:** Substitua os IPs se forem diferentes.

    O resultado mostrará:

    - **Client IP:** IP do cliente
    - **Server Hostname:** Nome do servidor
    - **Server Location:** Região e zona

5. Feche o terminal SSH:

    ```sh
    exit
    ```

---

# Tarefa 3. Configure o balanceador de carga interno

Configure o balanceador de carga interno para equilibrar o tráfego entre os dois back-ends.

## Iniciar a configuração

1. No menu de navegação, selecione **Ver todos os produtos > Rede > Serviços de rede**.
2. Selecione **Balanceamento de carga** e clique em **Criar balanceador de carga**.
3. Escolha:

    - **Tipo:** Balanceador de carga de rede (TCP/UDP/SSL)
    - **Proxy ou passagem:** Balanceador de carga de passagem
    - **Voltado ao público ou interno:** Interno

4. Clique em **CONFIGURAR**.
5. Preencha:

    | Propriedade | Valor             |
    |-------------|-------------------|
    | Nome        | my-ilb            |
    | Região      | REGION            |
    | Rede        | my-internal-app   |

---

## Configurar o serviço de back-end regional

1. Clique em **Configuração de back-end**.
2. Adicione:

    - **Grupo de instâncias:** instance-group-1
    - Clique em **Adicionar um back-end** e selecione `instance-group-2`.
    - Em **Verificação de integridade**, clique em **Criar verificação de integridade**:

      | Propriedade | Valor   |
      |-------------|---------|
      | Nome        | my-ilb-health-check |
      | Protocolo   | TCP     |
      | Porta       | 80      |

    - Clique em **Criar**.

---

## Configurar o front-end

1. Clique em **Configuração de front-end**.
2. Preencha:

    | Propriedade | Valor             |
    |-------------|-------------------|
    | Sub-rede    | subnet-b          |
    | IP interno  | Criar endereço IP |

3. Em **Endereço IP**, clique em **Criar endereço IP**:

    | Propriedade         | Valor        |
    |---------------------|--------------|
    | Nome                | my-ilb-ip    |
    | Endereço IP estático| Quero escolher |
    | Endereço IP         | 10.10.30.5   |

4. Clique em **Reservar**.
5. Em **Número da porta**, insira `80`.
6. Clique em **Concluído**.

---

## Analise e crie o balanceador de carga interno

1. Clique em **Analisar e finalizar**.
2. Revise as configurações e clique em **Criar**.

---

# Tarefa 4. Teste o balanceador de carga interno

1. Em **Compute Engine > Instâncias de VM**, acesse a utility-vm via SSH.
2. Execute:

    ```sh
    curl 10.10.30.5
    ```

    O resultado deve mostrar o tráfego sendo encaminhado para os back-ends (`instance-group-1` e `instance-group-2`), alternando entre as zonas.

---

## Resumo

- **Server Location** identifica a localização do backend.
- Os comandos `curl` mostram o IP do cliente, o nome e a localização da instância de VM.

