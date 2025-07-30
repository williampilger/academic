//William Pilger
//2020.12.09

/*
Escreva um programa em C que leia o nome de um arquivo binário e realize o seguinte processamento
no mesmo. O arquivo binário armazena um número indefinido de valores do tipo inteiro, com os
conceitos (1, 2, 3, 4 ou 5) dos alunos de uma turma. Após, o programa deverá gerar um arquivo texto
com um histograma com os conceitos. Por exemplo,  se o arquivo binário de entrada possui o conteúdo:
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define TAMNOMEARQ 50//max. caracteres que pode ter o nome do arquivo a ser aberto


void sair(int erro){
	system("cls");
	switch(erro){
		case 1:
			printf("ERRO-1: Algum valor lido no arquivo nao corresponde com o intervalo esperado.");
			break;
		case 2:
			printf("ERRO-2: Nao foi possivel criar um arquivo. Verifique as permissoes do programa.");
			break;
		case 0:
			printf("TAREFA REALIZADA COM SUCESSO");
		default:
			printf("ERRO DESCONHECIDO.");
			break;
	}
	printf("\nO PROGRAMA SERA FINALIZADO.");
	system("pause");
	exit(erro);
}

int main(){
	int cont[5]={0,0,0,0,0};
	FILE *fluxo;
	char arquivo[TAMNOMEARQ];
	int nota, x;
	while(1){
		printf("\nDigite o nome do arquivo(NAO UTILIZAR ESPACOS: )");
		scanf("%s", arquivo);
		if((fluxo=fopen(arquivo,"rb"))!=NULL) break;
		printf("\nOOPS! Isto nao funcionou. Vamos tentar novamente.");
	}//saindo desse while, o arquivo existe e foi aberto.
	while(fread(&nota, sizeof(int), 1, fluxo)){
		if(nota>0&&nota<6){
			cont[nota-1]++;
		}
		else sair(1);
	}
	fclose(fluxo);
	if((fluxo=fopen("histograma.txt","wt"))==NULL) sair(2);
	x=0;
	while(x<5){
		fprintf(fluxo, "%d   ", x+1);
		while(cont[x]>0){
			fprintf(fluxo, "*");
			cont[x]--;
		}
		fprintf(fluxo, "\n");
		x++;
	}
	fclose(fluxo);
	sair(0);
}
