# Tarefa 4: Testar o Balanceador de Carga de Aplicativo

Agora que você criou o balanceador de carga de aplicativo para seus back-ends, verifique se o tráfego está sendo encaminhado corretamente ao serviço de back-end.

---

**Pergunta:**  
O Application Load Balancer deve encaminhar o tráfego para a região mais próxima de você.  
- [ ] Verdadeiro  
- [ ] Falso

---

## Acessando o Balanceador de Carga de Aplicativo

1. Abra uma nova guia no navegador.
2. Digite o endereço: `http://[LB_IP_v4]`  
    > Substitua `[LB_IP_v4]` pelo endereço IPv4 do balanceador de carga.

> **Observação:** Pode levar até cinco minutos para acessar o balanceador de carga. Durante esse tempo, podem aparecer erros 404 ou 502. Continue tentando até acessar a página de um dos back-ends.

> **Observação:** Dependendo da sua proximidade das regiões (Region 1 e Region 2), o tráfego será encaminhado para uma instância de `Region 1-mig` ou `Region 2-mig`.

Se você tiver um endereço IPv6 local, acesse:  
`http://[LB_IP_v6]`  
(Substitua `[LB_IP_v6]` pelo endereço IPv6 do balanceador de carga.)

---

## Teste de Estresse no Balanceador de Carga

Crie uma nova VM para simular carga usando o utilitário **siege** e verifique se o tráfego é balanceado entre os dois back-ends sob alta carga.

### Passos:

1. No Console do Google Cloud, acesse:  
    **Menu de navegação** → **Compute Engine** → **Instâncias de VM**
2. Clique em **Criar instância**.
3. Configure a máquina com os seguintes valores:

    | Propriedade | Valor         |
    |-------------|--------------|
    | Nome        | siege-vm     |
    | Região      | Region 3     |
    | Zona        | Zone 3       |
    | Série       | E2           |

    > Como Region 3 é mais próxima de Region 1 do que de Region 2, o tráfego deve ser encaminhado para `Region 1-mig`, a menos que a carga seja muito alta.

4. Clique em **Criar** e aguarde a criação da instância.
5. Em `siege-vm`, clique em **SSH** para abrir o terminal.

### Instale o siege:

```sh
sudo apt-get -y install siege
```

### Configure a variável de ambiente com o IP do balanceador:

```sh
export LB_IP=[LB_IP_v4]
```
(Substitua `[LB_IP_v4]` pelo endereço IPv4.)

### Simule carga no balanceador:

```sh
siege -c 150 -t120s http://$LB_IP
```

---

## Monitorando o Balanceador de Carga

1. No Console do Cloud, acesse:  
    **Menu de navegação** → **VER TODOS OS PRODUTOS** → **Rede** → **Serviços de rede** → **Balanceamento de carga**
2. Clique em **Back-ends**.
3. Clique em **http-backend**.
4. Acesse **http-lb**.
5. Clique na guia **Monitoramento**.

Monitore o tráfego de entrada entre a América do Norte e os dois back-ends por 2 a 3 minutos.

- Inicialmente, o tráfego deve ser direcionado para `Region 1-mig`.
- Com o aumento do RPS, o tráfego também será direcionado para `Region 2`.

Isso demonstra que o tráfego é encaminhado para o back-end mais próximo por padrão, mas pode ser distribuído entre os back-ends se a carga aumentar.

---

## Finalizando o Teste

- Volte ao terminal SSH da instância `siege-vm`.
- Pressione `CTRL+C` para interromper o siege, se ainda estiver em execução.

Exemplo de resultado do siege:

```
New configuration template added to /home/student-02-dd02c94b8808/.siege
Run siege -C to view the current settings in that file
{       "transactions":                        24729,
          "availability":                       100.00,
          "elapsed_time":                       119.07,
          "data_transferred":                     3.77,
          "response_time":                        0.66,
          "transaction_rate":                   207.68,
          "throughput":                           0.03,
          "concurrency":                        137.64,
          "successful_transactions":             24729,
          "failed_transactions":                     0,
          "longest_transaction":                 10.45,
          "shortest_transaction":                 0.03
}
```
