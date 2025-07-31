# Tarefa 1: criar a vpc-transit

No console do Google Cloud, na barra de ferramentas do canto superior direito, clique no botão **Ativar o Cloud Shell** e execute o comando a seguir para excluir a rede padrão.

```sh
gcloud compute networks delete default
```

No console do Google Cloud, acesse o menu de navegação e clique em **Rede VPC**.

1. Clique em **CRIAR REDE VPC**.
2. Insira um nome para a rede: `vpc-transit`.
3. Não é necessário criar uma sub-rede para a vpc-transit. Clique em **Excluir** ao lado de "Nova sub-rede".
4. Escolha **Global** como o modo de roteamento dinâmico da rede VPC.
    > Observação: saiba mais sobre o roteamento dinâmico na [documentação do modo de roteamento dinâmico](https://cloud.google.com/vpc/docs/dynamic-routing).
5. Clique em **Criar**.

Clique em **Verificar meu progresso** para conferir o objetivo.

---

## Criar a rede vpc-transit

---

# Tarefa 2: criar as VPCs das filiais remotas

No console do Google Cloud, no menu de navegação, acesse **Rede VPC**.

1. Clique em **CRIAR REDE VPC**.
2. Insira um nome para a rede: `vpc-a`.
3. Escolha **Personalizado** para o modo de criação da sub-rede.
4. Na seção "Nova sub-rede", especifique:
    - **Nome da sub-rede:** `vpc-a-sub1-use4`
    - **Região:** `us-east4`
    - **Intervalo de endereços IP:** `10.20.10.0/24`
    - Clique em **Concluído**.
5. Escolha **Regional** como o modo de roteamento dinâmico da rede VPC.
6. Clique em **Criar**.

Para adicionar a segunda VPC de filial remota:

1. Clique em **CRIAR REDE VPC**.
2. Insira um nome para a rede: `vpc-b`.
3. Escolha **Personalizado** para o modo de criação da sub-rede.
4. Na seção "Nova sub-rede", especifique:
    - **Nome da sub-rede:** `vpc-b-sub1-usw2`
    - **Região:** `us-west2`
    - **Intervalo de endereço IP:** `10.20.20.0/24`
    - Clique em **Concluído**.
5. Escolha **Regional** como o modo de roteamento dinâmico da rede VPC.
6. Clique em **Criar**.

Agora o console de redes VPC vai mostrar as 3 VPCs que você criou.

Clique em **Verificar meu progresso** para conferir o objetivo.

---

## Criar as VPCs das filiais remotas: vpc-a e vpc-b

---

# Tarefa 3: configurar uma VPN de alta disponibilidade entre as VPCs das filiais remotas e a VPC do hub de tráfego

> Observação: neste laboratório, você está simulando as filiais remotas como VPCs do Google Cloud e, por isso, vai usar as etapas descritas em [Criar uma VPN de alta disponibilidade entre redes do Google Cloud](https://cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn).

Antes de configurar as VPNs de alta disponibilidade, crie Cloud Routers associados a cada rede VPC.

> Observação: saiba mais sobre os Cloud Routers na [documentação de visão geral do Cloud Router](https://cloud.google.com/network-connectivity/docs/router/concepts/overview).

---

## Etapa 1: criar Cloud Routers

Para cada VPC, especifique:

1. No console do Google Cloud, pesquise **Conectividade de rede**.
2. Clique em **Fixar** ao lado de Conectividade de rede.
3. Selecione **Cloud Router** e clique em **Criar roteador**.
4. Preencha conforme abaixo:

| Nome                      | Rede        | Região    | ASN do Cloud Router |
|---------------------------|-------------|-----------|---------------------|
| cr-vpc-transit-use4-1     | vpc-transit | us-east4  | 65000               |
| cr-vpc-transit-usw2-1     | vpc-transit | us-west2  | 65000               |
| cr-vpc-a-use4-1           | vpc-a       | us-east4  | 65001               |
| cr-vpc-b-usw2-1           | vpc-b       | us-west2  | 65002               |

Selecione **Anunciar todas as sub-redes visíveis para o Cloud Router (padrão)** e clique em **Criar**.

---

## Etapa 2: criar gateways de VPN de alta disponibilidade

Crie um gateway de VPN de alta disponibilidade na rede `vpc-transit` para a região `us-east4`:

1. No menu de navegação, acesse **Conectividade de rede** > **VPN**.
2. Clique em **Criar conexão VPN**.
3. Selecione **VPN de alta disponibilidade (HA)** e clique em **Continuar**.
4. Nome do gateway de VPN: `vpc-transit-gw1-use4`
5. Rede: `vpc-transit`
6. Região: `us-east4`
7. Clique em **Criar e continuar**.
8. Na página Adicionar túneis VPN, clique em **Cancelar**.
9. Selecione **Gateways do Cloud VPN** e clique em **Criar gateway de VPN**.

Crie os outros gateways de VPN:

| Nome do gateway de VPN | Rede VPC    | Região    |
|------------------------|-------------|-----------|
| vpc-transit-gw1-usw2   | vpc-transit | us-west2  |
| vpc-a-gw1-use4         | vpc-a       | us-east4  |
| vpc-b-gw1-usw2         | vpc-b       | us-west2  |

Clique em **Verificar meu progresso** para conferir o objetivo.

---

## Criar roteadores de nuvem e gateways de VPN de alta disponibilidade

---

## Etapa 3: criar um par de túneis VPN entre vpc-transit e vpc-a

### Adicionar túneis VPN da vpc-transit para a vpc-a

1. Na página **VPN**, clique em **Gateways do Cloud VPN** e selecione `vpc-transit-gw1-use4`.
2. Clique em **Adicionar túnel VPN**.
3. Para o gateway de VPN de peering, selecione **Gateways do Google Cloud VPN**.
4. Selecione o ID do projeto associado ao laboratório.
5. Selecione o gateway de VPN remoto `vpc-a-gw1-use4`.
6. Para alta disponibilidade, selecione **Criar um par de túneis VPN**.
7. Selecione o Cloud Router `cr-vpc-transit-use4-1`.
8. Preencha os detalhes dos túneis:

    - **Túnel 1**
      - Nome: `transit-to-vpc-a-tu1`
      - Versão do IKE: IKEv2
      - Chave IKE pré-compartilhada: `gcprocks`
    - **Túnel 2**
      - Nome: `transit-to-vpc-a-tu2`
      - Versão do IKE: IKEv2
      - Chave IKE pré-compartilhada: `gcprocks`

9. Clique em **Criar e continuar**.

### Adicionar sessões do BGP para cada túnel VPN configurado da vpc-transit para a vpc-a

- **Túnel transit-to-vpc-a-tu1**
  - Nome da sessão do BGP: `transit-to-vpc-a-bgp1`
  - ASN de peering: 65001
  - Alocar endereço IPv4 do BGP: Manualmente
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.1
  - Endereço IPv4 de peering do BGP: 169.254.1.2

- **Túnel transit-to-vpc-a-tu2**
  - Nome da sessão do BGP: `transit-to-vpc-a-bgp2`
  - ASN de peering: 65001
  - Alocar endereço IPv4 do BGP: Manualmente
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.5
  - Endereço IPv4 de peering do BGP: 169.254.1.6

Clique em **Salvar a configuração do BGP** e em **OK**.

---

### Adicionar túneis VPN da vpc-a para a vpc-transit

1. Na página **VPN**, clique em **Gateways do Cloud VPN** e selecione `vpc-a-gw1-use4`.
2. Clique em **Adicionar túnel VPN**.
3. Para o gateway de VPN de peering, selecione **Gateways do Google Cloud VPN**.
4. Selecione o ID do projeto associado ao laboratório.
5. Selecione o gateway de VPN remoto `vpc-transit-gw1-use4`.
6. Para alta disponibilidade, selecione **Criar um par de túneis VPN**.
7. Selecione o Cloud Router `cr-vpc-a-use4-1`.
8. Preencha os detalhes dos túneis:

    - **Túnel 1**
      - Nome: `vpc-a-to-transit-tu1`
      - Versão do IKE: IKEv2
      - Chave IKE pré-compartilhada: `gcprocks`
    - **Túnel 2**
      - Nome: `vpc-a-to-transit-tu2`
      - Versão do IKE: IKEv2
      - Chave IKE pré-compartilhada: `gcprocks`

9. Clique em **Criar e continuar**.

### Adicionar sessões do BGP para cada túnel VPN configurado da vpc-a para a vpc-transit

- **Túnel vpc-a-to-transit-tu1**
  - Nome da sessão do BGP: `vpc-a-to-transit-bgp1`
  - ASN de peering: 65000
  - Alocar endereço IPv4 do BGP: Manualmente
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.2
  - Endereço IPv4 de peering do BGP: 169.254.1.1

- **Túnel vpc-a-to-transit-tu2**
  - Nome da sessão do BGP: `vpc-a-to-transit-bgp2`
  - ASN de peering: 65000
  - Alocar endereço IPv4 do BGP: Manualmente
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.6
  - Endereço IPv4 de peering do BGP: 169.254.1.5

Clique em **Salvar a configuração do BGP** e em **OK**.

Após a conclusão dessa etapa, o status do túnel VPN será **Estabelecido**, e o status do BGP será **BGP estabelecido**.

---

## Etapa 4: criar um par de túneis VPN entre vpc-transit e vpc-b

Repita as instruções da etapa 3 para criar os túneis VPN bidirecionais de alta disponibilidade entre as redes `vpc-transit` e `vpc-b` usando os detalhes abaixo.

### Adicionar túneis VPN da vpc-transit para a vpc-b

- **Nome do gateway de VPN de peering:** `vpc-b-gw1-usw2`
- **Cloud Router:** `cr-vpc-transit-usw2-1`
- **Túnel VPN 1:** `transit-to-vpc-b-tu1` (Chave pré-compartilhada: `gcprocks`)
- **Túnel VPN 2:** `transit-to-vpc-b-tu2` (Chave pré-compartilhada: `gcprocks`)

#### Sessões do BGP

- **Túnel transit-to-vpc-b-tu1**
  - Sessão do BGP: `transit-to-vpc-b-bgp1`
  - ASN de peering: 65002
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.9
  - Endereço IPv4 de peering do BGP: 169.254.1.10

- **Túnel transit-to-vpc-b-tu2**
  - Sessão do BGP: `transit-to-vpc-b-bgp2`
  - ASN de peering: 65002
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.13
  - Endereço IPv4 de peering do BGP: 169.254.1.14

---

### Adicionar túneis VPN da vpc-b para a vpc-transit

- **Nome do gateway de VPN de peering:** `vpc-transit-gw1-usw2`
- **Cloud Router:** `cr-vpc-b-usw2-1`
- **Túnel VPN 1:** `vpc-b-to-transit-tu1` (Chave pré-compartilhada: `gcprocks`)
- **Túnel VPN 2:** `vpc-b-to-transit-tu2` (Chave pré-compartilhada: `gcprocks`)

#### Sessões do BGP

- **Túnel vpc-b-to-transit-tu1**
  - Sessão do BGP: `vpc-b-to-transit-bgp1`
  - ASN de peering: 65000
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.10
  - Endereço IPv4 de peering do BGP: 169.254.1.9

- **Túnel vpc-b-to-transit-tu2**
  - Sessão do BGP: `vpc-b-to-transit-bgp2`
  - ASN de peering: 65000
  - Endereço IPv4 do BGP do Cloud Router: 169.254.1.14
  - Endereço IPv4 de peering do BGP: 169.254.1.13

---

## Etapa 5: verificar o status de todas as conexões VPN na página "VPN"

Role a página para baixo e confirme se todas as conexões estão boas.

> Página da VPN em que todos os status de túnel VPN mostram "Estabelecido" e os status de sessão do BGP mostram "BGP estabelecido".

Clique em **Verificar meu progresso** para conferir o objetivo.

---

## Criar um par de túneis VPN entre vpc-transit, vpc-a e vpc-b

---

# Tarefa 4: criar recursos de hub do NCC e anexar as VPNs de alta disponibilidade como spokes

Nesta seção, você vai criar uma VPC e duas sub-redes dentro dela usando comandos da gcloud CLI no Google Cloud Shell.

Antes de executar qualquer tarefa do Network Connectivity Center, é necessário ativar a API Network Connectivity.

1. No menu de navegação, pesquise **API e serviços**.
2. Clique em **Biblioteca** e pesquise **API Network Connectivity**.
3. Selecione a **API Network Connectivity** e clique em **Ativar**.

No Cloud Shell, execute:

```sh
gcloud auth list
```

Clique em **Autorizar**.

---

## Etapa 1: criar um hub do NCC

```sh
gcloud alpha network-connectivity hubs create transit-hub \
    --description=Transit_hub
```

---

## Etapa 2: criar o spoke da filial 1

```sh
gcloud alpha network-connectivity spokes create bo1 \
     --hub=transit-hub \
     --description=branch_office1 \
     --vpn-tunnel=transit-to-vpc-a-tu1,transit-to-vpc-a-tu2 \
     --region=us-east4
```

---

## Etapa 3: criar o spoke da filial 2

```sh
gcloud alpha network-connectivity spokes create bo2 \
     --hub=transit-hub \
     --description=branch_office2 \
     --vpn-tunnel=transit-to-vpc-b-tu1,transit-to-vpc-b-tu2 \
     --region=us-west2
```

Clique em **Verificar meu progresso** para conferir o objetivo.

---

## Criar recursos de hub do NCC e anexar as VPNs de alta disponibilidade como spokes

---

# Tarefa 5: testar a configuração de ponta a ponta implantando VMs nas VPCs das filiais remotas

Depois de configurar o hub e os spokes, você poderá transmitir tráfego da instância de VM em branch office1 para a instância de VM em branch office2.

---

## Etapa 1: criar uma regra de firewall para a vpc-a

No console do Cloud Platform, acesse **Rede VPC > Firewall**.

Clique em **CRIAR REGRA DE FIREWALL** e especifique os detalhes conforme mostrado.

Da mesma forma, crie a regra de firewall `fw-b` para `vpc-b`.

---

## Etapa 2: criar uma VM na vpc-a

No menu de navegação, clique em **Compute Engine > Instâncias de VM** e depois em **Criar instância**.

Parâmetros:

| Campo         | Valor                                 |
|---------------|---------------------------------------|
| Nome          | vpc-a-vm-1                            |
| Região        | us-east4                              |
| Zona          | us-east4-b                            |
| Série         | E2                                    |
| Máquina       | e2-medium                             |
| SO            | Debian GNU/Linux 11 (bullseye) x86/64 |
| Tipo de disco | disco permanente equilibrado          |
| Tamanho (GB)  | 10 GB                                 |
| Rede          | vpc-a                                 |
| Sub-rede      | vpc-a-sub1-use4                       |

Após configurar, clique em **Criar**.

Da mesma forma, crie outra VM na `vpc-b`:

| Campo         | Valor                                 |
|---------------|---------------------------------------|
| Nome          | vpc-b-vm-1                            |
| Região        | us-west2                              |
| Zona          | us-west2-a                            |
| Série         | E2                                    |
| Máquina       | e2-medium                             |
| SO            | Debian GNU/Linux 11 (bullseye) x86/64 |
| Tipo de disco | disco permanente equilibrado          |
| Tamanho (GB)  | 10 GB                                 |
| Rede          | vpc-b                                 |
| Sub-rede      | vpc-b-sub1-usw2                       |

Após a criação, as duas VMs aparecerão na página **Instâncias de VM**.

Copie o IP interno de `vpc-b-vm-1`.

Clique em **Verificar meu progresso** para conferir o objetivo.

---

## Criar VMs nas VPCs das filiais remotas

---

## Etapa 3: executar o comando ping e verificar a conectividade com bo2 via tráfego do NCC

1. Estabeleça uma conexão SSH com `vpc-a-vm-1` clicando em **SSH**.
2. Execute um teste de ping da `vpc-a-vm-1` para o IP interno da `vpc-b-vm-1`:

```sh
ping -c 5 <INTERNAL_IP_OF_VPC-B-VM-1>
```

---

Terminal de linha de comando mostrando estatísticas de ping.

