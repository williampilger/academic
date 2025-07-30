# Tarefa 5: Adicionar `siege-vm` à lista de bloqueio

Use o **Cloud Armor** para adicionar a instância `siege-vm` à lista de bloqueio e impedir que ela acesse o balanceador de carga de aplicativo.

---

## 1. Crie a política de segurança

### a. Obtenha o IP externo da `siege-vm`

1. No Console do Google Cloud, acesse:  
    **Menu de navegação** → **Compute Engine** → **Instâncias de VM**.
2. Anote o IP externo da `siege-vm` (referenciado como `[SIEGE_IP]`).

> **Observação:**  
> Você pode identificar o IP externo de clientes analisando registros de fluxo de VPC no BigQuery para detectar alto volume de solicitações.

---

### b. Crie a política no Cloud Armor

1. No Console do Cloud, acesse:  
    **Menu de navegação** → **VER TODOS OS PRODUTOS** → **Rede** → **Segurança da rede** → **Políticas do Cloud Armor**.
2. Clique em **Criar política**.
3. Preencha os campos:
    - **Nome:** `denylist-siege`
    - **Ação de regra padrão:** Permitir
4. Clique em **Próxima etapa**.

---

### c. Adicione uma regra de bloqueio

1. Clique em **Adicionar uma regra**.
2. Preencha os campos:
    - **Condição > Correspondência:** Inserir `[SIEGE_IP]`
    - **Ação:** Recusar
    - **Código de resposta:** 403 (Forbidden)
    - **Prioridade:** 1000
3. Clique em **Salvar alteração na regra**.
4. Clique em **Próxima etapa**.

---

### d. Adicione o destino

1. Clique em **Adicionar destino**.
2. Em **Tipo**, selecione **Serviço de back-end (balanceador de carga de aplicativo externo)**.
3. Em **Destino**, selecione `http-backend` e confirme **Substituir** se solicitado.
4. Clique em **Criar política**.

> **Observação:**  
> Você pode definir a regra padrão como Negar e permitir apenas IPs autorizados, se preferir.

---

## 2. Verifique a política de segurança

### a. Teste o acesso da `siege-vm`

1. No terminal SSH da `siege-vm`, execute:
    ```sh
    curl http://$LB_IP
    ```
    O resultado esperado é:
    ```
    <!doctype html><meta charset="utf-8"><meta name=viewport content="width=device-width, initial-scale=1"><title>403</title>403 Forbidden
    ```
    > Pode levar alguns minutos para a política ser aplicada.

2. Em uma nova guia do navegador, acesse `http://[LB_IP_v4]` (substitua pelo IP do balanceador de carga).
    - O acesso via navegador deve funcionar, pois a regra padrão permite o tráfego.
    - O acesso via `siege-vm` será bloqueado pela regra.

---

### b. Simule uma carga

1. No terminal SSH da `siege-vm`, execute:
    ```sh
    siege -c 150 -t120s http://$LB_IP
    ```
    - O comando não deve gerar resposta.

---

## 3. Analise os registros da política de segurança

1. No Console, acesse:  
    **Menu de navegação** → **Segurança da rede** → **Políticas do Cloud Armor**.
2. Clique em `denylist-siege` → **Registros** → **Conferir os registros da política**.
3. Na página de geração de registros:
    - Apague o texto na **Prévia da consulta**.
    - Selecione o recurso: **Balanceador de carga de aplicativo > http-lb-forwarding-rule > http-lb**.
    - Clique em **Aplicar** e depois em **Executar consulta**.
4. Nos resultados:
    - Expanda a entrada de registro.
    - Em `httpRequest`, confirme que a origem é o IP da `siege-vm`.
    - Em `jsonPayload > enforcedSecurityPolicy`, verifique que a ação (`configuredAction`) é **DENY** e o nome da política é `denylist-siege`.

---

> **Dica:**  
> As políticas do Cloud Armor geram registros detalhados para análise de tráfego negado ou permitido.
