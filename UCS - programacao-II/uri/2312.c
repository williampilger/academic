#include <stdio.h>
#include <string.h>

#define DIGNOME 50//maximo de digitos disponpiveis para preencher no nome da equipe
#define MAXTIMES 500 //maximo de times que poderao ser digitados
#define TEXTOS 0//setar em 1 quando for para ir printando as orientaçõe na tela

struct equipe{
	char nome[DIGNOME];
	int ouro;//numero de medalhas
	int prata;//numero de medalhas
	int bronze;//numero de medalhas
};

typedef struct equipe EQUIPE;

void le_times(EQUIPE ranking[MAXTIMES], int n){
	//recebe: struct com os dados, inteiro com o numero de times que deve ser lido
	int j;
	for(j=0;j<n;j++){
		if(TEXTOS) printf("\nDigite o nome do time (%d):", j+1);
		//gets(ranking[j].nome);
		scanf("%s", &ranking[j].nome);//não é possível usar espaços desta forma, mas o outr não esta funcionando
		if(TEXTOS) printf("\nDigite o numero de madalhas de ouro do time %s: ", ranking[j].nome);
		scanf("%d", &ranking[j].ouro);
		if(TEXTOS) printf("\nDigite o numero de madalhas de prata do time %s: ", ranking[j].nome);
		scanf("%d", &ranking[j].prata);
		if(TEXTOS) printf("\nDigite o numero de madalhas de bronze do time %s: ", ranking[j].nome);
		scanf("%d", &ranking[j].bronze);
	}
}

int stringcompara(char str1[DIGNOME], char str2[DIGNOME]){
	//recebe duas strings;
	//retorna 0 se forem iguais
	//retorna 1 se a primeira for alfabeticamente antes
	//retorna 2 se a segunda tiver antes na ordem alfabetica
	int j;
	for(j=0;j<DIGNOME;j++){
		if(str1[j]=='\0'){
			if(str2=='\0') return 0;
			return 1;
		}
		if(str2=='\0') return 2;
		if(str1[j]>str2[j]) return 2;
		if(str1[j]<str2[j]) return 1;
	}
	return 0;
}

void ordena_times(EQUIPE ranking[MAXTIMES], int n){
	//recebe: struct com os dados, inteiro com o numero de times que deve ser ordenado
	int i,j, troca;
	EQUIPE aux;
	for (i=0; i<n-1; i++){
		for (j=0; j<n-i-1; j++){
			troca=0;
			if (ranking[j].ouro < ranking[j+1].ouro){
				troca=1;
			}else if(ranking[j].ouro == ranking[j+1].ouro){
				if(ranking[j].prata < ranking[j+1].prata){
					troca=1;
				}else if(ranking[j].prata == ranking[j+1].prata){
					if(ranking[j].bronze < ranking[j+1].bronze){
						troca=1;
					}else if(ranking[j].bronze == ranking[j+1].bronze){
						if(stringcompara(ranking[j].nome,ranking[j+1].nome)==2) troca=1;
					}
				}
			}
			if(troca){
				aux = ranking[j];
				ranking[j] = ranking[j+1];
				ranking[j+1] = aux;
			}
		}
	}
}

void printf_ranking(EQUIPE ranking[MAXTIMES], int n){
	//recebe: struct com os dados, inteiro com o numero de times que deve ser printado
	int j;
	for(j=0; j<n ; j++){
		printf("\n%s %d %d %d", ranking[j].nome, ranking[j].ouro, ranking[j].prata, ranking[j].bronze);
	}
	printf("\n");
}

int main(){
	int n;
	EQUIPE ranking[MAXTIMES];
	if(TEXTOS) printf("Informe a quantidade de times que fazem parte do Ranking:");
	scanf("%d", &n);//le o numero de times que devera ser lido na sequencia
	le_times(ranking, n);
	ordena_times(ranking, n);
	printf_ranking(ranking, n);
}
