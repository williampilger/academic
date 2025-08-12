/* Este programa implementa um exemplo de Registro*/

#include <conio.h>
#include <stdio.h>

struct pessoa{
       char  nome[30];
       int   idade;
       char  sexo[1];
       float altura;
	}; 
       
struct pessoa cadastro;

main(){
	printf("\nLeitura dos dados");
	printf("\nNome:   ");
    scanf(" %[^\n]s", &cadastro.nome); 
    printf("\nIdade:  ");
    scanf("%d",       &cadastro.idade);
    printf("\nSexo:   ");
    scanf("%s",       &cadastro.sexo);
    printf("\nAltura: ");
    scanf("%f",       &cadastro.altura);           
	printf("\n\nForam informados os seguintes dados");
	printf("\nNome  : %s",   cadastro.nome);
	printf("\nIdade : %d",   cadastro.idade);
	printf("\nSexo  : %s",   cadastro.sexo);
	printf("\nAltura: %.2f", cadastro.altura);
    getchar();
}