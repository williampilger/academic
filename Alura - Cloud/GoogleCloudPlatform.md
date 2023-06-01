# Google Cloud Platform

## Segurança VPCs

As VPCs (Redes virtuais) entre as máquinas já existe automaticamente dentro do projeto. As máquinas entre as zonas automaticamente já se comunicam.

Importante conferir o **Firewall** do _projeto_. O acesso SSH costuma ser liberado para qualquer IP do mundo, isso deve ser ajustado. A chave SSH para acesso à máquina deve ser trocada na máquina virtual para a sua(Não usando mais a criada automaticamente para o acesso via browser). É interessante fazer uma limpa nas regras de firewall para remover coisas que você não vai usar mas que são criadas automaticamente. Veja a [aula da alura](https://cursos.alura.com.br/course/cloud-onboarding-principais-provedores-parte2/task/95372) que falou sobre isso.


