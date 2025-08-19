/**
 * Tarefa Aula EAD 2025-08-16
 */

#include <stdio.h>
#define TAM 5// número de pessoas

int main(void) {

    int cadastro[TAM]={0};
    int option=0, valor=0;
    int i;

    do {

        printf(" ----------------------------\n");
        
        for(i=0;i<TAM;i++){
            printf("[%d] ", cadastro[i]);
        }
        
        printf("\n ----------------------------\n");
        printf(" 0 - Sair do Software\n");
        printf(" 1 - Add Número\n");
        printf(" 2 - Remover como PILHA\n");
        printf(" 3 - Remover como FILA\n");
        printf(" ----------------------------\n");
        scanf("%d", &option);

        switch(option){
            case 1://add
                printf("\n Digite o valor:");
                scanf("%d", &valor);
                if(valor == 0){
                    for(int j=0;j<TAM;j++){
                        if(cadastro[j]==0){
                            cadastro[j] = valor;
                            break;
                        }
                    }
                } else {
                    printf("\n >> Não pode ser zero!");
                }
                break;
            case 1://PILHA
                for(int j=TAM-1; j>=0; j--){
                    if(cadastro[j] > 0){
                        cadastro[j] = 0;
                        break;
                    }
                }
                break;
            case 1://FILA
                for(int j=0; j<TAM - 1;j++){
                    cadastro[j] = cadastro[j+1];
                }
                cadastro[TAM-1] = 0;
                break;
        }

    } while(option != 0)

    printf(" >> Software Encerrado! ");

}