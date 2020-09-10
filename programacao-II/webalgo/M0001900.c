/*Faça um algoritmo que leia uma matriz M[1..5,1..5], possivelmente
com elementos repetidos. Leia, a seguir, 5 valores e, para cada um,
verifique se o valor ocorre ou não na matriz, escrevendo a posição
(linha e coluna) em que foi encontrada a primeira ocorrência do mesmo
e, caso ele não exista na matriz, a mensagem "Não tem".*/

#include <stdio.h>

void main(){
    int m[5][5], i, j,k, v;
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            scanf("%d", &m[i][j]);
        }
    }
    for(k=0;k<5;k++){
        scanf("%d", &v);
        for(i=0;i<5;i++){
            for(j=0;j<5;j++){
                if(v==m[i][j]){
                    printf("%d , %d", i+1, j+1);
                    i=100;
                    break;
                }
            }
        }
        if(i!=100) printf("Não tem");
    }
}