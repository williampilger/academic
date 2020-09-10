
#include <stdio.h>
#define N 5

void main(){
    int m[N][N], i, j, soma, maior[2];
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            scanf("%d", &m[i][j]);
        }
    }
    for(i=0;i<N;i++){
        soma=0;
        for(j=0;j<N;j++){
            soma+=m[i][j];
        }
        if(i==0||soma>maior[0]){
            maior[0]=soma;
            maior[1]=i;
        }
    }
    printf("%d", maior[1]+1);
}