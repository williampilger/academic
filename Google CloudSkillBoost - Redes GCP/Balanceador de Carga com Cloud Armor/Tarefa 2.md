# Tarefa 2: Configure os Modelos e Crie Grupos de Instâncias

Um **grupo gerenciado de instâncias** utiliza um modelo para criar instâncias idênticas. Esses modelos definem tipo de máquina, imagem, sub-rede, rótulos e outras propriedades.

---

## 1. Configure os Modelos de Instâncias

Crie um modelo para cada região:

### Modelo para *Region 1*

1. No Console do Cloud, acesse:  
    **Menu de navegação** → **Compute Engine** → **Modelos de instâncias** → **Criar modelo de instância**
2. Preencha os campos:
    - **Nome:** `Region 1-template`
    - **Local:** Global
    - **Série:** E2
    - **Tipo de máquina:** e2-micro
3. Clique em **Opções avançadas** → **Rede**:
    - **Tags de rede:** `http-server`
4. Em **Interfaces de rede**:
    - **Rede:** default
    - **Sub-rede:** default Region 1
    - Clique em **Concluído**
    - > A tag `http-server` garante aplicação das regras de firewall HTTP e de verificação de integridade.
5. Na guia **Gerenciamento**:
    - Em **Metadados**, clique em **+ADICIONAR ITEM**:
      - **Chave:** `startup-script-url`
      - **Valor:** `gs://cloud-training/gcpnet/httplb/startup.sh`
    - > O script instala o Apache e personaliza a página inicial. [Veja o script](./resources/startup.sh).
6. Clique em **Criar** e aguarde a criação.

---

### Modelo para *Region 2*

1. Selecione `Region 1-template` e clique em **+CRIAR SIMILAR**.
2. Altere:
    - **Nome:** `Region 2-template`
    - **Sub-rede:** default Region 2 (em **Interfaces de rede**)
3. Confirme as demais configurações (Global, E2, e2-micro, tag `http-server`).
4. Clique em **Concluído** e depois em **Criar**.

---

## 2. Crie os Grupos Gerenciados de Instâncias

Crie um grupo em cada região:

### Grupo em *Region 1*

1. No menu do **Compute Engine**, clique em **Grupos de instâncias** → **Criar grupo de instâncias**.
2. Preencha conforme a tabela:

    | Propriedade                         | Valor              |
    |-------------------------------------|--------------------|
    | Nome                                | Region 1-mig       |
    | Modelo de instância                 | Region 1-template  |
    | Local                               | Várias zonas       |
    | Região                              | Region 1           |
    | Número mínimo de instâncias         | 1                  |
    | Número máximo de instâncias         | 2                  |
    | Indicadores de escalonamento        | Uso de CPU         |
    | Meta de uso da CPU (%)              | 80                 |
    | Período de inicialização (segundos) | 45                 |

    - Em **Indicadores de escalonamento automático**, selecione **Uso de CPU** e defina a meta para **80**. Clique em **Concluído**.

3. Clique em **Criar**.

> **Dica:** O escalonamento automático ajusta o número de instâncias conforme a carga.

---

### Grupo em *Region 2*

1. Repita o procedimento acima.
2. Use os valores:

    | Propriedade                         | Valor              |
    |-------------------------------------|--------------------|
    | Nome                                | Region 2-mig       |
    | Modelo de instância                 | Region 2-template  |
    | Local                               | Várias zonas       |
    | Região                              | Region 2           |
    | Número mínimo de instâncias         | 1                  |
    | Número máximo de instâncias         | 2                  |
    | Indicadores de escalonamento        | Uso de CPU         |
    | Meta de uso da CPU (%)              | 80                 |
    | Período de inicialização (segundos) | 45                 |

3. Clique em **Criar**.

---

## Verifique os Back-ends

Verifique se as instâncias de VM estão sendo criadas nas duas regiões e acesse os sites HTTP.

1. Ainda em **Compute Engine**, clique em **Instâncias de VM** no menu à esquerda.
2. Confira as instâncias que começam com `Region 1-mig` e `Region 2-mig`. Elas fazem parte dos grupos gerenciados de instâncias.
3. Clique no IP externo de uma instância em `Region 1-mig`. Você verá:
    - IP do cliente (seu endereço IP)
    - Nome do host (começa com `Region 1-mig`)
    - Local do servidor (uma zona de Region 1)
4. Clique no IP externo de uma instância em `Region 2-mig`. Você verá:
    - IP do cliente (seu endereço IP)
    - Nome do host (começa com `Region 2-mig`)
    - Local do servidor (uma zona de Region 2)

> **Observação:** Nome do host e Local do servidor indicam para onde o balanceador de carga de aplicativo envia tráfego.
