/*Faça um algoritmo que leia uma matriz M[1..5,1..5], onde cada
posição contem um número entre 0 e 9 e cada linha da matriz
representa um número de 5 dígitos. O algoritmo deve calcular a
soma dos 5 números contidos na matriz colocando o resultado em um
vetor Soma[1..6]. Escreva ao final o vetor Soma.*/

#include <stdio.h>
#include <math.h>

void main(){
    int m[5][5], i, j, s, soma[6];
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            scanf("%d", &m[i][j]);
        }
    }
    s=0;
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            s=s+m[i][j]*pow(10, 4-j);
        }
    }
    for(i=5;i>=0;i--){
        soma[i]=s%10;
        s/=10;
    }
    for(i=0;i<6;i++){
        printf("%d", soma[i]);
    }
}