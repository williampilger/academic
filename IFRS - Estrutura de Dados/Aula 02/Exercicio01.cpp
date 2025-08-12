/**
 * Tarefa 1
 */

#include <stdio.h>

#define TAM 5// número de pessoas

typedef struct {
    char nome[30];
    int idade;
} pessoa;


int main(void) {

    pessoa cadastro[TAM];
    
    int i;
    for (i = 0; i < TAM; i++) {
        printf("\n\nDigite o nome da pessoa %d/%d: ", i + 1, TAM);
        scanf(" %[^\n]", cadastro[i].nome);
        printf("Digite a idade da pessoa %d/%d: ", i + 1, TAM);
        scanf("%d", &cadastro[i].idade);
    }

    printf("\nPessoas cadastradas:\n");
    printf("+----+--------------------------------+-----+\n");
    printf("| ID | Nome                           |Idade|\n");
    printf("+----+--------------------------------+-----+\n");
    for (i = 0; i < TAM; i++) {
        printf("| %2d | %30s | %3d |\n", i + 1, cadastro[i].nome, cadastro[i].idade);
    }
    printf("+----+--------------------------------+-----+\n");
}