
#include <stdio.h>
#define N 5

void main(){
    int m[N][N], i, j, aux;
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            scanf("%d", &m[i][j]);
        }
    }
    for(j=0;j<N;j++){
        aux=m[1][j];
        m[1][j]=m[3][j];
        m[3][j]=aux;
    }
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            printf(" %d ", m[i][j]);
        }
        printf("\n");
    }
}