/*Faça um algoritmo que leia uma matriz M[1..5,1..6] e divide todos os
6 elementos de cada linha pelo valor do menor elemento EM MÓDULO da
linha. Escrever a matriz modificada.*/

#include <stdio.h>
#include <math.h>

void main(){
    int m[5][6], i, j, menor[6];
    for(i=0;i<5;i++){
        for(j=0;j<6;j++){
            scanf("%d", &m[i][j]);
            if(j==0){//se tiver no primeiro elemento da linha
                menor[i]=m[i][j];
            }else if(fabs(m[i][j])<fabs(menor[i])) menor[i]=m[i][j];
        }
    }
    for(i=0;i<5;i++){
        for(j=0;j<6;j++){
            m[i][j]=m[i][j]/menor[i];
        }
    }
    for(i=0;i<5;i++){
        for(j=0;j<6;j++){
            printf("%d", m[i][j]);
        }
    }
}

