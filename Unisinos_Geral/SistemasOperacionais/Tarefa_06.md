# Atividade 6 - Prática

**1.** Execute os programas feitos em MUTEX e semáforos e descreva em poucas palavras as diferenças na lógica da programação observada.

Códigos utilizados:
- [*filosofos_mutex.c*](Tarefa_06.md-filosofos_mutex.c);
- [*filosofos_sem.c*](Tarefa_06.md-filosofos_sem.c);

Para compilar foi utilizado (obviamente substituindo o nome dos arquivos):

> gcc main.c -o main -lpthread

**R:** Percebi que no exemplo com mutex existe uma condição de corrida não controlada, que é o acesso à variável `refeicoesCount`, que pode ser incrementada por mais de uma thread ao mesmo tempo, me parece.
As principais diferenças que notei foi a forma como as threads "lutam" por acesso aos garfos. Enquanto com o Mutex o programador precisa ficar testando (num while) a disponibilidade dos recursos, e usa-los quando disponíveis, com os semáforos é usada uma técnica parecida, mas que a thread "aguarda" pela disponibilidade do recurso antes de seguir a execução. Pelo que entendi na aula, os semáforos também auxiliam para evitar o busy waiting.


# Atividade 6 - Teórica

**1)** Em um sistema computacional multiprocessado, onde o sistema operacional realiza escalonamento de tarefas do tipo preemptivo, três processos (P1, P2 e P3) compartilham recursos (R1, R2 e R3). Os processos P1 e P2 concorrem entre si ao acesso do recurso R1, enquanto P2 e P3 concorrem entre si ao acesso dos recursos R2 e R3. Os recursos R1 e R3 são preemptíveis, ou seja, podem sofrer preempção; R2 é um recurso não preemptível. Todos os três processos usam o mesmo mecanismo de exclusão mútua para garantir acesso exclusivo em suas seções críticas. Com base nesse cenário, é correto afirmar que:

a) Não é possível ocorrer deadlock entre os três processos.

b) É possível ocorrer deadlock entre P1 e P2.

**c) É possível ocorrer deadlock entre P2 e P3.**

d) É possível ocorrer deadlock entre P1 e P3.

e) É possível ocorrer deadlock com uma espera circular entre P1, P2 e P3.


******

**2)** Analise as seguintes afirmativas.
I. Condições de corrida podem ocorrer se múltiplas threads fazem leituras de um dado compartilhado, mesmo que nenhuma realize escritas.

II. O uso de mutex para a exclusão mútua em seções críticas garante que não haja condição de corrida, porém pode ocasionar deadlocks se não for corretamente empregado.

III. Monitores são baseados em um tipo abstrato de dados e um controle de acesso aos dados. Apenas funções do monitor acessam os dados e apenas uma thread ou processo pode executar funções de um monitor por vez.

IV. Semáforos têm duas operações, P( ) e V( ), sendo que apenas a operação P( ) pode bloquear um processo ou thread.

A análise permite concluir que:

a) apenas as afirmativas I, II e III são verdadeiras.

b) apenas as afirmativas I, III e IV são verdadeiras.

c) apenas as afirmativas II e IV são verdadeiras.

d) apenas as afirmativas II, III e IV são verdadeiras.

e) nenhuma das afirmativas é verdadeira.

**Parece que não vi isso em aula. Dúvidas interessantes, inclusive.**

******

**3)** Explique porque o código a seguir não satisfaz a condição de progresso em problemas de seções críticas.

**R:** Nunca sai do While.




# About

By: **will.i.am** | Bom Princípio - RS 