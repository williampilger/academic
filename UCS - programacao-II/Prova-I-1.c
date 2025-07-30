/*
MULTIPLICAÇÃO DE MATRIZES

  A           B                      C                                               C
a   b       e   f       (a*e)+(b*g)     (a*f)+(b*h)     A[0,0]*B[0,0]+A[0,1]*B[1,0]     A[0,0]*B[0,1]+A[0,1]*B[1,1]
        x           =                                =
c   d       g   h       (c*e)+(d*g)     (c*f)+(d*h)     A[1,0]*B[0,0]+A[1,1]*B[1,0]     A[1,0]*B[0,1]+A[1,1]*B[1,1]

N=4 (0-4)

LOGO: C[l][c]=A[l][0]*B[0][c]+A[l][N]*B[N][c]

*/

#include <stdio.h>

#define N 5

void lematriz(int mat[N][N]){
    int c, l;
    for(l=0;l<N;l++){
        for(c=0;c<N;c++){
            scanf("%d", &mat[l][c]);//não entendi por que só funcionou depois que usei o "&", uma vez que vetores e matrizes já são ponteiros
        }
    }
}

void printamatriz(int mat[N][N]){
    int l, c;
    for(l=0;l<N;l++){
        for(c=0;c<N;c++){
            printf(" %3d ", mat[l][c]);
        }
        printf("\n");
    }
}

int main(){
    int A[N][N], B[N][N], C[N][N];
    int l, c;
    lematriz(A);
    lematriz(B);
    for(l=0;l<N;l++){
        for(c=0;c<N;c++){
            C[l][c]=A[l][0]*B[0][c]+A[l][N-1]*B[N-1][c];
        }
    }
    printf("\n\nMatriz C:\n");
    printamatriz(C);
}