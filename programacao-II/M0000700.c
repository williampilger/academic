
#include <stdio.h>
#define N 5

void main(){
    int m[N][N], i, j;
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            scanf("%d", &m[i][j]);
        }
    }
    int identidade=1;
    for(i=0;i<N&&identidade;i++){
        for(j=0;j<N;j++){
            if(i==j){
                if(m[i][j]!=1){
                    identidade=0;
                    break;
                }
            }else{
                if(m[i][j]!=0){
                    identidade=0;
                    break;
                }
            }
        }
    }
    if(identidade) printf("1");
    else printf("0");
}