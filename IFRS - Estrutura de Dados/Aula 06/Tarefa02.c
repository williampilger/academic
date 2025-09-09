/**
 * 2 - Crie um programa em linguagem C que:
 *   > Preencha um vetor de 10 posições do tipo registro com dois campos (Nome
 *     e Idade), informados pelo usuário.
 *   > Ordene o vetor pela ordem crescente de Idade.
 *   > Finalize mostrando o vetor na ordem lida e ordenado.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TAMANHO_VETOR 2
#define TAMANHO_NOME 50

struct Pessoa {
    char nome[TAMANHO_NOME];
    int idade;
};

/*
* imprime o vetor
* !!! Se informar dados muito zoados, a formatação vai ser prejudicada
*/
void imprime_vet(struct Pessoa vetor[TAMANHO_VETOR], char titulo[]) {
    printf("\n%s\n", titulo);
    printf("+-----+--------------------------------------------------+-------+\n");
    printf("| Pos | Nome                                             | Idade |\n");
    printf("+-----+--------------------------------------------------+-------+\n");
    
    for (int i = 0; i < TAMANHO_VETOR; i++) {
        printf("| %3d | %-48s | %5d |\n", i, vetor[i].nome, vetor[i].idade);
    }
    
    printf("+-----+--------------------------------------------------+-------+\n");
}

void ordenar_por_idade(struct Pessoa vetor[TAMANHO_VETOR]) {
    struct Pessoa temp;
    
    for (int i = 0; i < TAMANHO_VETOR - 1; i++) {
        for (int j = 0; j < TAMANHO_VETOR - 1 - i; j++) {
            if (vetor[j].idade > vetor[j + 1].idade) {//troca de posição
                temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
}

int main() {
    struct Pessoa pessoas[TAMANHO_VETOR];
    
    printf("Digite os dados de %d pessoas:\n\n", TAMANHO_VETOR);
    
    for (int i = 0; i < TAMANHO_VETOR; i++) {
        printf("Pessoa %d:\n", i + 1);
        
        printf("Nome: ");
        scanf(" %[^\n]", pessoas[i].nome);
        
        printf("Idade: ");
        scanf("%d", &pessoas[i].idade);
        
        printf("\n");
    }
    
    imprime_vet(pessoas, "VETOR NA ORDEM ORIGINAL");
    
    ordenar_por_idade(pessoas);
    
    imprime_vet(pessoas, "VETOR ORDENADO POR IDADE");
    
    return 0;
}

