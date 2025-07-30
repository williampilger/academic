# Tarefa 3: Configurar o Balanceador de Carga de Aplicativo

Configure o balanceador de carga de aplicativo para equilibrar o tráfego entre os dois back-ends (`Region 1-mig` em Region 1 e `Region 2-mig` em Region 2), conforme ilustrado no diagrama de rede.

> **Diagrama de rede:** mostra o balanceamento de carga.

---

## 1. Inicie a Configuração

1. No console do Cloud, acesse:  
    **Menu de navegação** → **VER TODOS OS PRODUTOS** → **Rede** → **Serviços de rede** → **Balanceamento de carga**.
2. Clique em **Criar balanceador de carga**.
3. Em **Balanceador de carga de aplicativo HTTP(S)**, clique em **Próxima**.
4. Em **Voltado ao público ou interno**, selecione **Voltado ao público (externo)** e clique em **Próxima**.
5. Em **Implantação global ou de região única**, selecione **Melhor para cargas de trabalho globais** e clique em **Próxima**.
6. Em **Geração de balanceador de carga**, selecione **Balanceador de carga de aplicativo externo global** e clique em **Próxima**.
7. Em **Criar balanceador de carga**, clique em **Configurar**.
8. Defina o **Nome do balanceador de carga** como `http-lb`.

---

## 2. Configure o Front-end

As regras de host e caminho não serão definidas neste laboratório.

### IPv4

- Clique em **Configuração de front-end**.
- Protocolo: **HTTP**
- Versão do IP: **IPv4**
- Endereço IP: **Temporário**
- Porta: **80**
- Clique em **Concluído**.

### IPv6

- Clique em **Adicionar IP e porta do front-end**.
- Protocolo: **HTTP**
- Versão do IP: **IPv6**
- Endereço IP: **Alocação automática**
- Porta: **80**
- Clique em **Concluído**.

> O balanceador aceita endereços IPv4 e IPv6. Solicitações IPv6 são encaminhadas via IPv4 para os back-ends. As solicitações IPv6 do cliente são encerradas na camada de balanceamento de carga global e, depois, são encaminhadas por proxy via IPv4 para seus back-ends.

---

## 3. Configure o Back-end

1. Clique em **Configuração de back-end**.
2. Em **Serviços e buckets de back-end**, clique em **Criar um serviço de back-end**.

### Primeiro Back-end

- Nome: `http-backend`
- Grupo de instâncias: **Region 1-mig**
- Números de portas: **80**
- Modo de balanceamento: **Taxa**
- RPS máximo: **50**
- Capacidade: **100**
- Clique em **Concluído**.

> O balanceador tenta manter cada instância em Region 1 com até 50 RPS.

### Segundo Back-end

- Clique em **Adicionar um back-end**.
- Grupo de instâncias: **Region 2-mig**
- Números de portas: **80**
- Modo de balanceamento: **Utilização**
- Utilização máxima de back-end: **80**
- Capacidade: **100**
- Clique em **Concluído**.

> O balanceador tenta manter cada instância em Region 2-mig com uso de CPU até 80%.

---

## 4. Verificação de Integridade

- Em **Verificação de integridade**, selecione **Criar verificação de integridade**.
- Nome: `http-health-check`
- Protocolo: **TCP**
- Porta: **80**

> A verificação sonda instâncias a cada 5 segundos, com timeout de 5 segundos. Duas tentativas bem-sucedidas consideram a instância íntegra; duas falhas, não íntegra.

- Clique em **Salvar**.
- Marque **Ativar a geração de registros**.
- Defina a **Taxa de amostragem** como **1**.
- Clique em **Criar** para criar o serviço de back-end.
- Clique em **Ok**.

---

## 5. Analise e Crie o Balanceador

1. Clique em **Analisar e finalizar**.
2. Confira os serviços de **Back-end** e **Front-end**.
3. Clique em **Criar**.
4. Aguarde a criação do balanceador.
5. Clique no nome do balanceador (`http-lb`).
6. Anote os endereços **IPv4** e **IPv6** do balanceador para uso na próxima tarefa.  
    - Eles aparecerão como `[LB_IP_v4]` e `[LB_IP_v6]`.

> **Observação:** O endereço IPv6 está no formato hexadecimal.