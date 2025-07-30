# Tarefa 1. Configure regras de firewall de verificação de integridade e HTTP
Defina regras de firewall para permitir o tráfego HTTP para os back-ends e o tráfego TCP do verificador de integridade do Google Cloud.

## Crie a regra de firewall HTTP

Crie uma regra de firewall para permitir o tráfego HTTP nos back-ends.

1. No console do Cloud, acesse **Menu de navegação** > **Rede VPC** > **Firewall**.
2. Veja as regras de firewall atuais: ICMP, interna, RDP e SSH.
    - Cada projeto do Google Cloud começa com a rede default e essas regras de firewall.
3. Clique em **Criar regra de firewall**.
4. Defina os valores a seguir e mantenha os demais como padrão:
    -   | Propriedade           | Valor (digite o valor ou selecione a opção conforme especificado)      |
        |-----------------------|------------------------------------------------------------------------|
        | Nome                  | default-allow-http                                                     |
        | Rede                  | default                                                                |
        | Destinos              | Tags de destino especificadas                                          |
        | Tags de destino       | http-server                                                            |
        | Filtro de origem      | Intervalos IPv4                                                        |
        | Intervalos IPv4 de origem | `0.0.0.0/0`                                                          |
        | Protocolos e portas   | Em "Portas e protocolos especificados", marque TCP e digite: 80        |
        Inclua **/0** nos **intervalos IPv4 de origem** para especificar todas as redes.

5. Clique em Criar.

## Crie as regras de firewall de verificação de integridade.
As verificações de integridade determinam quais instâncias de um balanceador de carga podem receber novas conexões. No balanceamento de carga de aplicativo, as sondagens de verificação de integridade para as instâncias com carga balanceada são provenientes de endereços nos intervalos entre `130.211.0.0/22` e `35.191.0.0/16`. Suas regras de firewall precisam permitir essas conexões.

1. Ainda na página **Políticas de firewall**, clique em **Criar regra de firewall**.
2. Defina os valores a seguir e mantenha os demais como padrão:
      - | Propriedade             | Valor (digite o valor ou selecione a opção conforme especificado)         |
        |-------------------------|---------------------------------------------------------------------------|
        | Nome                    | default-allow-health-check                                                |
        | Rede                    | default                                                                   |
        | Destinos                | Tags de destino especificadas                                             |
        | Tags de destino         | http-server                                                               |
        | Filtro de origem        | Intervalos IPv4                                                           |
        | Intervalos IPv4 de origem | `130.211.0.0/22`, `35.191.0.0/16`                                           |
        | Protocolos e portas     | Em "Portas e protocolos especificados", marque TCP                        |
        **Observação**: insira os dois **intervalos IPv4 de origem**, um de cada vez, e adicione um espaço entre eles.
3. Clique em **Criar**.

