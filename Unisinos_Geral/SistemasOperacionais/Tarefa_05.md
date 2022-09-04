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

