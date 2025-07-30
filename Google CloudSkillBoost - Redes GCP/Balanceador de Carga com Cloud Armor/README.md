# Treinamento: `Balanceador de carga de aplicativo com o Cloud Armor`

## Informações do Laboratório

- **Laboratório:** Google Cloud Skills Boost - GSP215  
- **Link:** [Cloud Skills Boost - GSP215](https://www.cloudskillsboost.google/course_templates/764/labs/558262)  
- **Duração:** 1h  
- **Créditos:** 5  
- **Data de conclusão:** 2025-07-30

---

*Neste laboratório, você irá configurar um balanceador de carga de aplicativo com back-ends globais, conforme o diagrama abaixo. Em seguida, realizará um teste de estresse no balanceador de carga e utilizará o Cloud Armor para adicionar o IP do teste à lista de bloqueio.*

![Diagrama do laboratório](resources/img1.png)

---

## Conteúdo

As tarefas deste laboratório estão organizadas nos links abaixo:

- [Tarefa 1](./Tarefa%201.md)
- [Tarefa 2](./Tarefa%202.md)
- [Tarefa 3](./Tarefa%203.md)
- [Tarefa 4](./Tarefa%204.md)
- [Tarefa 5](./Tarefa%205.md)

---


## Anotações e Aprendizados

### 1. Stress HTTP/HTTPS com `siege`

O [`siege`](https://www.joedog.org/siege-home/) é uma ferramenta poderosa para gerar stress HTTP em servidores.
Também faz parte do conjunto de ferramentas oferecidas no [repositório do kali](https://www.kali.org/tools/siege/).

**Instalação no Linux:**
```bash
sudo apt install siege
```

---

### 2. Resumo das Atividades Realizadas

A estrutura criada no laboratório foi:

```
Balanceador de Carga
├── Grupo de Instâncias - Região 1
│   ├── VM 1
│   └── VM 2
├── Grupo de Instâncias - Região 2
│   ├── VM 1
│   └── VM 2
└── VM Teste
```

- O tráfego foi gerado da **VM Teste** para o balanceador de carga.
- Observou-se qual das VMs respondia às requisições.
- À medida que o tráfego aumentava, o balanceador distribuía as requisições entre as VMs.
- O direcionamento do tráfego também considerava a proximidade geográfica do cliente (quando não sob stress).

---