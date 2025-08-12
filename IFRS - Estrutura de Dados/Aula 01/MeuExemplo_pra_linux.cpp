/**
 * Este é o exemplo ajustado para usar coisas padrão do Linux
 */

 #include <stdio.h>
#include <stdlib.h>

struct pessoa {
    char nome[30];
    int idade;
    char sexo[2]; // Ajustado para 2 posições
    float altura;
};

struct pessoa cadastro;

int main() {
    printf("\nLeitura dos dados");
    printf("\nNome: ");
    scanf(" %[^\n]s", cadastro.nome);
    
    printf("\nIdade: ");
    scanf("%d", &cadastro.idade);
    
    printf("\nSexo: ");
    scanf(" %s", cadastro.sexo); // Adicionado espaço antes do %s
    
    printf("\nAltura: ");
    scanf("%f", &cadastro.altura);
    
    printf("\n\nForam informados os seguintes dados");
    printf("\nNome: %s", cadastro.nome);
    printf("\nIdade: %d", cadastro.idade);
    printf("\nSexo: %s", cadastro.sexo);
    printf("\nAltura: %.2f", cadastro.altura);
    
    printf("\n\nPressione ENTER para sair...");
    fflush(stdin); // Limpa o buffer de entrada (funciona no Windows)
    while (getchar() != '\n'); // Limpa o buffer no Linux e Windows
    getchar(); // Espera por uma tecla
    
    return 0;
}
