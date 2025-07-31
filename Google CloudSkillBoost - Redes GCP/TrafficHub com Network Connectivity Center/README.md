# Configurar o Network Connectivity Center como um hub de tráfego

**Tipo:** Laboratório  
**Duração:** 1 hora 30 minutos  
**Créditos:** 5  
**Nível:** Intermediário  
**Código:** GSP911  

> Este laboratório pode incorporar ferramentas de IA para ajudar no seu aprendizado.

---

## Visão geral

O **Network Connectivity Center** (NCC) permite conectar diferentes redes corporativas externas ao Google Cloud, aproveitando a rede global do Google para fornecer alta confiabilidade e alcance mundial. O tráfego entre redes que não são do Google é chamado de *tráfego de transferência de dados*, podendo ocorrer via Cloud VPN, Interconexão Dedicada ou por Parceiro.

Neste laboratório, você aprenderá a configurar o NCC como um hub de tráfego para roteamento entre duas redes externas ao Google, utilizando a rede backbone do Google.

---

## Arquitetura

O NCC é composto por recursos de **hub** e **spoke**.

### Hub

- Recurso global do Google Cloud.
- Permite anexar múltiplos spokes.
- Facilita a transferência de dados entre spokes, locais físicos e redes VPC.

### Spoke

- Recurso de rede conectado a um hub.
- Direciona tráfego para blocos de endereços de rede remota.
- Permite conectar várias redes remotas.

**Tipos de spokes possíveis:**
- Túneis VPN de alta disponibilidade
- Anexos da VLAN
- Instâncias de dispositivo roteador implantadas no Google Cloud

---

A topologia de rede simulada neste laboratório representa uma implantação típica com filiais em dois locais geográficos distintos:

- **vpc-a** (Região 1)
- **vpc-b** (Região 2)
- **vpc-transit** (hub central)

As filiais (vpc-a e vpc-b) conectam-se à vpc-transit por meio de VPNs de alta disponibilidade, configuradas em regiões próximas às filiais. No mundo real, essas VPNs podem ser substituídas por interconexões.

Você irá configurar o hub do NCC na vpc-transit e conectar as filiais usando túneis VPN de alta disponibilidade como spokes.


![Diagrama do laboratório](resources/img1.png)

---

## Objetivos do laboratório

- Criar uma VPC de hub chamada **vpc-transit**
- Criar duas VPCs de filiais remotas: **vpc-a** e **vpc-b**
- Criar VPNs de alta disponibilidade entre **vpc-a** ↔ **vpc-transit** e **vpc-b** ↔ **vpc-transit**
- Criar um recurso de hub do NCC e anexar as VPNs como spokes
- Testar a configuração de ponta a ponta implantando VMs nas VPCs das filiais remotas

---

## Conteúdo

As tarefas deste laboratório estão [neste outro arquivo](./Tarefas.md), e foram copiadas da página do curso e re-formatadas pelo Copilot (coisa que não revisei).

---

## Anotações e Aprendizados

### 1. Resumo das Atividades Realizadas

A estrutura criada no laboratório foi a descrita no diagrama acima, mas basicamente:

```
├── Internet
│
├── Rede Global (não regional, uma VPC pra unir tudo)
│   └── Conector VPN ─────────────────────────────────────────┬─┐
│                                                             │ │
├── VPC 1 (Rede da região A, contendo um grupo de máquinas)   │ │
│   ├── VM 1                                                  │ │
│   └── Conector VPN ─────────────────────────────────────────┘ │
│                                                               │
└── VPC 2 (Rede da região B, contendo um grupo de máquinas)     │
    ├── VM 2                                                    │
    └── Conector VPN ───────────────────────────────────────────┘

```

- VPNs entre as regiões
- Criação de tuneis de alta disponibilidade, reduzindo a latência entre as regiões
- Configuração básica do Firewall (para ping e SSH)
- Criação de VMs para testar o tráfego de dados


### 2. Anotações

O conteúdo pode ser útil para quando formos hospedar parte da infraestrutura em outras regiões com menor custo de hospedagem, sem perder eficiência por latência.
