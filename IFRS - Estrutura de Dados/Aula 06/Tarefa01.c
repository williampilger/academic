/**
 * 1 Crie um programa em Linguagem C que:
 *  - Receba 16 números inteiros do usuário e os armazene em quatro vetores de
 *    4 posições.
 *  - Preencha uma matriz 4x4 (MatrizA), onde cada vetor corresponderá a uma
 *    linha.
 *  - Preencha uma segunda matriz 4x4 (MatrizB), onde cada vetor
 *    corresponderá a uma coluna.
 *  - Finalize mostrando os quatro vetores e as duas matrizes.
 */

#include <stdio.h>
#include <stdlib.h>

#define MAT_DIM 4

void print_matrix(int matrix[MAT_DIM][MAT_DIM]) {
    printf("+");
    for (int j = 0; j < MAT_DIM; j++) {
        printf("------+");
    }
    printf("\n");
    for (int i = 0; i < MAT_DIM; i++) {
        printf("|");
        for (int j = 0; j < MAT_DIM; j++) { 
            printf(" %4d |", matrix[i][j]);
        }

        if(i < MAT_DIM - 1){
            printf("\n+");
            for (int j = 0; j < MAT_DIM; j++) { 
                printf("------+");
            }
            printf("\n");
        }
    }
    printf("\n+");
    for (int j = 0; j < MAT_DIM; j++) {
        printf("------+");
    }
    printf("\n");
}

int main() { //daqui pra baixo não faz sentido usar a constante MAT_DIM, por que não pode mudar mesmo...

    int vetA[4] = {};
    int vetB[4] = {};
    int vetC[4] = {};
    int vetD[4] = {};
    
    printf("\n\nAo preencher os valores, avite usar mais de 4 casas, isso garante boa formatacao\n");

    for (int i = 0; i < 4; i++) {
        printf("Digite o valor para vetA[%d]: ", i);
        scanf("%d", &vetA[i]);
    }
    for (int i = 0; i < 4; i++) {
        printf("Digite o valor para vetB[%d]: ", i);
        scanf("%d", &vetB[i]);
    }
    for (int i = 0; i < 4; i++) {
        printf("Digite o valor para vetC[%d]: ", i);
        scanf("%d", &vetC[i]);
    }
    for (int i = 0; i < 4; i++) {
        printf("Digite o valor para vetD[%d]: ", i);
        scanf("%d", &vetD[i]);
    }

    int MatrizA[4][4] = {0};
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) { 
            int val;
            switch(j){
                case 0:
                    val = vetA[i];
                    break;
                case 1:
                    val = vetB[i];
                    break;
                case 2:
                    val = vetC[i];
                    break;
                case 3:
                    val = vetD[i];
                    break;
            }
            MatrizA[j][i] = val;
        }
    }

    int MatrizB[4][4] = {0};
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) { 
            int val;
            switch(j){
                case 0:
                    val = vetA[i];
                    break;
                case 1:
                    val = vetB[i];
                    break;
                case 2:
                    val = vetC[i];
                    break;
                case 3:
                    val = vetD[i];
                    break;
            }
            MatrizB[i][j] = val;
        }
    }


    printf("\n\nMatriz A\n");
    print_matrix(MatrizA);

    printf("\n\nMatriz B\n");
    print_matrix(MatrizB);    
    
}