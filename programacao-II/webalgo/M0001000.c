#include <stdio.h>
// Autor : William Pilger
// Data : 26/08/2020

/*Faça um algoritmo que leia uma matriz M[1..5,1..5] e gere dois vetores 
SomaLin[1..5] e SomaCol[1..5], com a soma dos elementos de cada linha e
a soma dos elementos de cada coluna da matriz M. Escreva ao final os vetores
Somalin e Somacol.*/

#define N 5


void main()
{
    int M[N][N], SomaLin[N], SomaCol[N], i, j;

    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            scanf("%d", &M[i][j]);
        }
    }

    for(i=0;i<N;i++){
        SomaLin[i]=SomaCol[i]=0;
        for(j=0;j<N;j++){
            SomaLin[i]+=M[i][j];
            SomaCol[i]+=M[j][i];
        }
    }
/*
    i=0;
    SomaLin[i]=0;
    SomaCol[i]=0;
    for(j=0;i<N; j++){
        if(!j<N){
            j=0;
            if(i<N-1)i++;
            else break;
            SomaLin[i]=0;
            SomaCol[i]=0;
        }
        SomaLin[i]+=M[i][j];
        SomaCol[i]+=M[j][i];
    }
*/
    for(i=0;i<N;i++){
        printf("%d", SomaLin[i]);
    }
    for(i=0;i<N;i++){
        printf("%d", SomaCol[i]);
    }
}

