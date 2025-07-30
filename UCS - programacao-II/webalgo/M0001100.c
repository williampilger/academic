/*Uma matriz é dita Diagonalmente Dominante se em todas as linhas
o elemento da diagonal principal é maior ou igual à soma dos outros
elementos da linha, e há pelo menos uma linha em que o elemento da
diagonal principal é MAIOR que a soma dos outros elementos da linha
(não basta que seja igual). Faça um algoritmo que leia uma matriz
M[1..4,1..4] e verifique se é diagonalmente dominante escrevendo:
1 - Se é diagonalmente dominante; 0 - Se não é diagonalmente dominante*/

#include <stdio.h>

#define N 4

void main(){
    int m[N][N], i, j, sl, mai, ok;
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            scanf("%d", &m[i][j]);
        }
    }
    ok=1;
    mai=0;
    for(i=0;i<N&&ok;i++){
        sl=0;
        for(j=0;j<N;j++){
            if(i!=j) sl+=m[i][j];
        }
        if(sl<m[i][i]){
            mai=1;
        }else if(sl>m[i][i]){
            ok=0;
            break;
        }
    }
    if(ok&&mai) printf("1");
    else printf("0");
}