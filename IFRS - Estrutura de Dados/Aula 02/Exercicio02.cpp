/**
 * Tarefa 2
 * Ordenação de dados: Método Bolha
 * (mesmo que a primeira, mas ordenando os dados com método Bolha)
 */

#include <stdio.h>
#include <string.h>

#define TAM 5// número de pessoas

typedef struct {
    char nome[30];
    int idade;
} pessoa;

void printaVetor(pessoa cadastro[]) {
    printf("+----+--------------------------------+-----+\n");
    printf("| ID | Nome                           |Idade|\n");
    printf("+----+--------------------------------+-----+\n");
    for (int i = 0; i < TAM; i++) {
        printf("| %2d | %30s | %3d |\n", i + 1, cadastro[i].nome, cadastro[i].idade);
    }
    printf("+----+--------------------------------+-----+\n");
}

int main(void) {

    pessoa cadastro[TAM];
    pessoa temp;
    int i;

    for (i = 0; i < TAM; i++) {
        printf("\n\nDigite o nome da pessoa %d/%d: ", i + 1, TAM);
        scanf(" %[^\n]", cadastro[i].nome);
        printf("Digite a idade da pessoa %d/%d: ", i + 1, TAM);
        scanf("%d", &cadastro[i].idade);
    }

    printf("\nCadastro Original:\n");
    printaVetor(cadastro);

    // Ordenação usando o método Bolha
    bool trocou;
    do {
        trocou = false;
        for (i = 0; i < TAM - 1; i++) {
            if (strcmp(cadastro[i].nome, cadastro[i + 1].nome) > 0) {
                temp = cadastro[i];
                cadastro[i] = cadastro[i + 1];
                cadastro[i + 1] = temp;
                trocou = true;
            }
        }
    } while (trocou);

    printf("\nCadastro ordenado por NOME:\n");
    printaVetor(cadastro);

}