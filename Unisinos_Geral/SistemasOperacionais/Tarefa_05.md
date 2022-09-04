# Atividade 5 - Prática

**1.** Refaça o exercício apresentado em aula, modificando para tornar as threads em loop e descreva os comportamentos considerando os comandos:
`ps –eLf`,`Top ----> shift + H` e `/proc`.

**Obs:** *Fiz algumas alterações no script original, mas caso precise consultar o original, está disponível nas [Anotações da aula 5](NotasDeAula/Aula%2005%20-%2031.08.2022.md).* 

*main.c*
```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

//Configurations. HEADS UP! The NUM must be divisible by THREADS_NUM. 
#define NUM 1000000000 //don't use too large numbers (that fit in a normal int)
#define THREADS_NUM 4

unsigned long soma[THREADS_NUM];

void* thread_fn(void* arg) {

    long part = (long)arg;
    long step = NUM/THREADS_NUM;
    
    long inicio = part * step;
    int i = 0;
    while(i < step) {
        soma[part] += (i + inicio);
        i++;
    }
    return NULL;
}

int main(void) {

    if( NUM % THREADS_NUM != 0 ){
    	printf("Your tapir! The max number bust be divisible by the threads number!\n");
    	return 0;
    }
    pthread_t threads[THREADS_NUM];
    
    for( long i=0 ; i<THREADS_NUM ; i++ ){
        pthread_create(&threads[i], NULL, thread_fn, (void*)i );
    }
    for( int i=0 ; i<THREADS_NUM ; i++ ){
        pthread_join(threads[i], NULL);
    }
    
    printf(" RESULTADOS:\n");
    unsigned long resultado = 0;
    for( int i=0 ; i<THREADS_NUM ; i++ ){
    	printf(" + %ld\n", soma[i]);
        resultado += soma[i];
    }
    
    printf("---------------------------\n = %lu\n", resultado);
    
    return 0;
}
```
*Execução e saída*
```console
wilger@wilger-aspire:~/Downloads$ gcc main.c -o main -lpthread
wilger@wilger-aspire:~/Downloads$ ./main
 RESULTADOS:
 + 31249999875000000
 + 93749999875000000
 + 156249999875000000
 + 218749999875000000
-----------------
 = 499999999500000000
```

**R:** Utilizei o `htop` para ver os processos, pois acho melhor de visualizar.
Realizei os testes em uma máquina com milhares de outros processos rodando, e o `top` não me ajudou muito.
Pude ver o número certinho de processos sendo criado, porém, mesmo com maiores números, a soma em singlethread levou menos tempo para ser executada nos meus testes.


# Atividade 5 - Teórica

## 1

A correta utilização de processos e threads é fundamental para garantir o desempenho e a transparência de sistemas distribuídos. Sobre esse tema, considere as afirmativas a seguir.


I. A sobreposição de threads em um processo é o principal recurso para obtenção de alto grau de transparência de distribuição em redes com longos tempos de propagação de mensagens.

II. A desvantagem de se estruturar um programa para utilizar múltiplas threads é que ele ficará dependente de sistemas multiprocessadores.

III. O modelo de threads implementado pelo sistema operacional deve ser aquele em que o gerenciamento de threads fica inteiramente no espaço de cada processo para evitar trocas de contexto entre processos e o núcleo (kernel) no chaveamento de threads.

IV. Servidores multithreaded têm melhor desempenho se estruturados com ao menos uma thread despachante e várias threads operárias para recebimento e processamento de requisições.


Assinale a alternativa correta.


a) Somente as afirmativas I e II são corretas.

b) Somente as afirmativas I e IV são corretas.

->**c) Somente as afirmativas III e IV são corretas.**

d) Somente as afirmativas I, II e III são corretas.

e) Somente as afirmativas II, III e IV são corretas.


## 2
Considere o seguinte programa com dois processos concorrentes. O escalonador poderá alternar entre um e outro, isto é, eles poderão ser intercalados durante sua execução. As variáveis x e y são compartilhadas pelos dois processos e inicializadas antes de sua execução.

```txt
programa P
int x = 0;
int y = 0;
processo A{
    while (x == 0);
    print("a");
    y = 1;
    y = 0;
    print("b");
    y = 1;
}
processo B{
    print("b");
    x = 1;
    while( y == 0);
    print("c");
}
```

As possíveis saídas são:
(a) adbc ou bcad
(b) badc ou bacd
(c) abdc ou abcd
(d) dbca ou dcab
**(e) Nenhuma das opções anteriores**

*Ao meu ver, vai travar no primeiro while dos processos A e B, e vai printar só `b`. A menos que essas identações e símbolos não estejam corretos.*

# About

By: **will.i.am** | Bom Princípio - RS 