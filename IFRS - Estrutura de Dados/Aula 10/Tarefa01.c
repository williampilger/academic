/**
 *      Desenvolva um programa em Linguagem de programação C, que crie uma lista encadeada
 *      com alocação dinâmica de memória, para armazenar números inteiros, com as seguintes
 *      rotinas e sequência:
 *      OK - Rotina que solicite números para o usuário e armazene na lista encadeada;
 *      OK - Rotina que permita adiiconar itens no início da lista;
 *      OK - Rotina que mostre o conteúdo da lista na sequência que foram informados.
 *      OK - Rotina que, considerando o conceito de pilha, exclua o último número armazenado. Antes da exclusão o programa deve mostrar o número que será excluído.
 *      OK - Rotina que mostre a lista atualizada após a exclusão do último registro.
 *      OK - Rotina que, considerando o conceito de fila, exclua o primeiro número armazenado. Antes da exclusão o programa deve mostrar o número que será excluído.
 *      OK - Rotina que mostre a lista atualizada após a exclusão do primeiro registro
 */

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

typedef struct lista
{
    int x;
    struct lista *prox;
} no;

void printList( no *inicio ){
    no *atual = inicio;
    while (atual != NULL)
    {
        printf("%d ", atual->x);
        atual = atual->prox;
    }
    printf("\n");
}

int main()
{
    char opcao;
    no *inicio;
    no *proximo;
    inicio = (no *)malloc(sizeof(no));
    if (inicio == NULL)
        exit(1);
    proximo = inicio;
    while (1)
    {
        printf("Informe o valor: ");
        scanf("%d", &proximo->x);
        printf("Continuar? S/N  ");
        scanf(" %c", &opcao);
        opcao = toupper(opcao);
        if (opcao == 'S')
        {
            proximo->prox = (no *)malloc(sizeof(no));
            proximo = proximo->prox;
        }
        else
            break;
    }
    proximo->prox = NULL;
    printf("\nLista preenchida com os valores informados.");

    while (1)
    {
        printf("Deseja adicionar um valor no inicio da lista? S/N  ");
        scanf(" %c", &opcao);
        opcao = toupper(opcao);
        if (opcao == 'S')
        {
            no *novo = (no *)malloc(sizeof(no));
            if (novo == NULL)
                exit(1);
            printf("Informe o valor: ");
            scanf("%d", &novo->x);
            novo->prox = inicio;
            inicio = novo;
        }
        else
            break;
    }

    printf("\n\n\nValores inseridos na lista:\n");
    printList(inicio);

    // Remover o último elemento (pilha)
    proximo = inicio;
    while(proximo->prox->prox != NULL){
        proximo = proximo->prox;
    }
    printf("\nRemovendo o ultimo valor (pilha): %d\n", proximo->prox->x);
    free(proximo->prox);
    proximo->prox = NULL;
    printf("Lista atualizada apos a remocao do ultimo valor:\n");
    printList(inicio);

    // Remover o primeiro elemento (fila)
    printf("\nRemovendo o primeiro valor (lista): %d\n", inicio->x);
    proximo = inicio;
    inicio = inicio->prox;
    free(proximo);
    printf("Lista atualizada apos a remocao do primeiro valor:\n");
    printList(inicio);

    return 0;
}