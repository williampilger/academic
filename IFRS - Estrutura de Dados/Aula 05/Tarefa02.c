#include <stdio.h>
#include <stdlib.h>

#define MAT_DIM 3

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

int main() {

    int matrix_a[MAT_DIM][MAT_DIM] = {0};
    int matrix_b[MAT_DIM][MAT_DIM] = {0};

    printf("Preencha a matriz A:\n");
    for (int i = 0; i < MAT_DIM; i++) {
        for (int j = 0; j < MAT_DIM; j++) {
            printf("  Digite o valor para a posicao [%d][%d]: ", i, j);
            scanf("%d", &matrix_a[i][j]);
        }
    }
    printf("Preencha a matriz B:\n");
    for (int i = 0; i < MAT_DIM; i++) {
        for (int j = 0; j < MAT_DIM; j++) {
            printf("  Digite o valor para a posicao [%d][%d]: ", i, j);
            scanf("%d", &matrix_b[i][j]);
        }
    }

    printf("Matriz A:\n");
    print_matrix(matrix_a);
    printf("Matriz B:\n");
    print_matrix(matrix_b);

    
    int matrix_c[MAT_DIM][MAT_DIM] = {0};
    printf("Matrizes SOMADAS:\n");
    for (int i = 0; i < MAT_DIM; i++) {
        for (int j = 0; j < MAT_DIM; j++) { 
            matrix_c[i][j] = matrix_a[i][j] + matrix_b[i][j];
        }
    }
    print_matrix(matrix_c);

    int matrix_d[MAT_DIM][MAT_DIM] = {0};
    printf("Matriz Resultado TRANSPOSTA:\n");
    for (int i = 0; i < MAT_DIM; i++) {
        for (int j = 0; j < MAT_DIM; j++) { 
            matrix_d[i][j] = matrix_c[j][i];
        }
    }
    print_matrix(matrix_d);
}