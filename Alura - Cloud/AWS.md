# AWS

## Segurança VPCs

Na AWS a criação das redes é bastante manual, e as máquinas **não** se comunicam entre regiões. Cada região tem sua própria subrede. Para se ter um IP público fixo, ele precisa ser comprado. Para criar uma comunicação com a rede externa usa-se uma NAT, e os gateways NAT **também são serviços cobrados**. Veja a [aula da alura](https://cursos.alura.com.br/course/cloud-onboarding-principais-provedores-parte2/task/95373) que falou sobre este conteúdo.

A configuração do acesso WEB às máquinas também não é nada muito intuitivo, e pode ser visto na íntegra [nessa aula da alura](https://cursos.alura.com.br/course/cloud-onboarding-principais-provedores-parte2/task/95409). A configuração do acesso entre as redes pública e privada é configurado [nessa aula da alura](https://cursos.alura.com.br/course/cloud-onboarding-principais-provedores-parte2/task/95410).

