/* Programa que cria uma Lista Encadeada Simples, solicitando valores ao
usuário até que ele decida parar.*/

#include<stdio.h>
#include<stdlib.h>
#include <ctype.h>

typedef struct lista {
        int x;
        struct lista *prox;
} no;

int main(){
       char opcao;
       no *inicio;
       no *proximo;
       inicio = (no *)malloc(sizeof(no));
       if (inicio == NULL)
                     exit(1);
       proximo = inicio;
       while (1){
             printf("Informe o valor: ");
             scanf("%d", &proximo->x);
             printf("Continuar? S/N  ");
             scanf(" %c", &opcao);
             opcao = toupper(opcao);
             if (opcao=='S'){
                          proximo->prox = (no *)malloc(sizeof(no));
                          proximo = proximo->prox;
                          }             
             else
                 break;
       }
       proximo->prox = NULL;
       printf("\nLista preenchida com os valores informados");

       printf("\n\n\nValores inseridos na lista:\n");
        no *atual = inicio;
        while (atual != NULL) {
            printf("%d ", atual->x);
            atual = atual->prox;
        }
        printf("\n");
        
        
       return 0;
}