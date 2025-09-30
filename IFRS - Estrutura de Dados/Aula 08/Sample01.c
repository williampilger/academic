/**
 * ! Conteúdo quase 99% gerado por IA (Github Copilot)
 */

#include <stdio.h>
#include <stdlib.h>

typedef struct Lista {
    int val;
    struct Lista *prox;
} no;

int main() {
    no *inicio = NULL, *fim = NULL, *novo = NULL;
    char opcao;
    int valor;
    do {
        printf("Digite um valor inteiro: ");
        scanf("%d", &valor);
        novo = (no*) malloc(sizeof(no));
        if (novo == NULL) {
            printf("Erro de alocação!\n");
            return 1;
        }
        novo->val = valor;
        novo->prox = NULL;
        if (inicio == NULL) {
            inicio = novo;
            fim = novo;
        } else {
            fim->prox = novo;
            fim = novo;
        }
        printf("Deseja inserir outro valor? (S/N): ");
        scanf(" %c", &opcao);
    } while (opcao == 'S' || opcao == 's');

    printf("\nValores inseridos na lista:\n");
    no *atual = inicio;
    while (atual != NULL) {
        printf("%d ", atual->val);
        atual = atual->prox;
    }
    printf("\n");

    // Liberar memória
    atual = inicio;
    while (atual != NULL) {
        no *temp = atual;
        atual = atual->prox;
        free(temp);
    }
    return 0;
}

