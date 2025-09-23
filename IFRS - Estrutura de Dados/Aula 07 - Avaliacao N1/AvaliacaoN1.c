
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define TAM 10

struct Estudante {
    char nome[50];
    float N1,N2,media;
};

int main(void){

    struct Estudante estudantes[TAM];


    for(int i=0; i < TAM; i++){
        printf(" Digite o nome do estudante %d: ", i+1);
        scanf(" %[^\n]", estudantes[i].nome);
        
        printf(" Informe a N1 do estudante %d (0-10): ", i+1);
        scanf("%f", &estudantes[i].N1);
        
        printf(" Informe a N2 do estudante %d (0-10): ", i+1);
        scanf("%f", &estudantes[i].N2);

        //Poder-se-ia calcular a média imediatamente aqui, mas, como o problema pede pra calcular depois, vou fazer mais um laço, só pra garantir
    }

    for(int i=0; i<TAM; i++){
        estudantes[i].media = (estudantes[i].N1 + estudantes[i].N2) / 2;
        //Poder-se-ia calcular a média geral aqui também, mas, pra sermos literais...
    }

    float med = 0;
    for(int i=0;i<TAM;i++){
        med += estudantes[i].media;
    }
    med /= TAM;

    //Ordenação
    bool mudou;
    struct Estudante temp;
    do {
        mudou = false;
        for(int i=0;i<TAM-1;i++){
            if( estudantes[i].media < estudantes[i+1].media ){
                mudou = true;
                temp = estudantes[i];
                estudantes[i] = estudantes[i+1];
                estudantes[i+1] = temp;
            }
        }
    } while (mudou);
    
    //Exibição
    printf("\n +----------------------------------------------------+------+------+------+");
    printf("\n |                                               Nome |  N1  |  N2  | MED. |");
    printf("\n +----------------------------------------------------+------+------+------+");
    for(int i=0;i<TAM;i++){
        printf("\n | %50s | %.2f | %.2f | %.2f |", estudantes[i].nome, estudantes[i].N1, estudantes[i].N2, estudantes[i].media);
        printf("\n +----------------------------------------------------+------+------+------+");
    }
    printf("\n | A média geral da turma é de  %2.2f pontos.                               |", med);
    printf("\n +-------------------------------------------------------------------------+");
    
    printf("\n\n\n Fim do programa!");

}