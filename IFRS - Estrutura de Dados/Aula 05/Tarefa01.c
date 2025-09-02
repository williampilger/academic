#include <stdio.h>
#include <stdlib.h>

#define MAT_DIM 3


int main() {

    int matrix[MAT_DIM][MAT_DIM] = {0};

    for (int i = 0; i < MAT_DIM; i++) {
        for (int j = 0; j < MAT_DIM; j++) {
            printf("Digite o valor para a posicao [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    printf("Matriz digitada:\n");
    for (int i = 0; i < MAT_DIM; i++) {
        for (int j = 0; j < MAT_DIM; j++) { 
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}