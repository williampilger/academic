/*
Funcionamento basico....

A NAVEGAÇÃO PELO PROGRAMA É TODA FEITA PELAS CETAS

O programa inicia, fazendo a leitura de um nome, o nome de um arquivo,que o usuario escolhe...
caso o arquivo exista... ele tenta o ler...
caso contrario... tenta criar...
caso uma delar falhe... ele encerra o programa...
se não... le o conteudo do arquivo, se ele ja tiver algum, e o salva na struct agenda...
depois disso, abre um MENU... e durante sua exibição, fica SEMPRE verificando a passagem do tempo...
no menu, o usuario podera escolher entre criar, editar ou deletar um evento...
CASO ALGUM EVENTO ESTEJA COM A DATA E HORA ULTRAPASSADOS, ELE AVISA O USUARIO, E EM SEGUIDA, DELETA O EVENTO.
no menu também, se tera a opcao listar, que vai listar todos os eventos existentes em diverças ordem, que o usuario escolhe.
O programa vai salvando as alterações no arquivo de acordo com a necessidade, para que, quando a pessoa saia, a mesma, não perca seus dados.
*/

//COISAS PARA ARRUMAR:
//VERIFICANDO O DIA.. ELE NÃO ACERTA OS ANOS QUE SÃO BISSESTOS
#include <stdio.h>
#include <stdlib.h>
#include <conio2.h>
#include <string.h>
#include <windows.h>
#include <time.h>
#include <string.h>
//definição de constantes de cores do programa
#define CORMENUCEL 240 //cor que fica o item celecionado no menu
#define CORALERTA 224 //cor que fica algum aviso de campro preenchido incorretamente
#define CORPADRAO 15 //cor do texto em geral no programa
#define CORSIM 180 //cor do item que esta celecionado em algumas das colunas a ser preenchida
#define CORNAO 196 //cor do item que NAO esta celecionado em algumas das colunas do menu
#define CORULTSALV 160 //cor da parte que informa quando foi salvo pela ultima vez
#define CORNOMAGEND 144//cor que aparece o nome "agenda - nomedoarquivo"
//definição de constantes que definem o numero de caracteres que variaveis podem ter
#define NOMEDOEVENTO 80 //numero de caracteres disponiveis para armazenar o nome do evento
#define NOMEDOARQUIVO 200 //numero de caracteres disponiveis para armazenar o nome do arquivo da agenda (coloquei 200 caracteres para caso a pessoa digite um caminho... ex: C:\Banoc_de_dados\Agenda...)
#define DESCRICAODOEVENTO 20 //numero de caracteres disponiveis para escrever a descrição do evento
#define CHARTEMPORARIA 100 //Numero de caracteres disponiveis para a char temporaria
#define SEGTEMPCHAR 2 //numero de caracteres da segunda char temporaria
#define LIMAGENDA 365 //numero de eventos que podem ser armazenados...
#define MAXEVINDIAS 5 //Número maximo de eventos em um mesmo dia
//outras definições
#define NULCICPSAL 1000000 //numero de ciclos que o programa leva para salvar o arquivo da agenda... periodicamente...
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
struct data{
	int dia;
	int mes;
	int ano;
};
struct hora{
	int hora;
	int min;
	int sec;
};
struct  evento{ //"MODELO" de estrutura para armazenar as informações do evento
		char nome[NOMEDOEVENTO];//variavel qie armazena a descrição do evento
		char descri[DESCRICAODOEVENTO];//variavel que armazena o nome do evento
		char tipo;//variavel que armazena o tipo do evento
		struct data evd;//armazena a data do evento
		struct hora evh;//armazena o horario dos eventos
	};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
void tamanho_tela(int larg, int alt)  // Função para definir o tamanho da tela (copia do professor) 
{
    HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD consoleSize;
    consoleSize.X = larg;
    consoleSize.Y = alt;
    SetConsoleScreenBufferSize(console, consoleSize);
    ShowWindow(GetForegroundWindow(), SW_MAXIMIZE );
}
int vdata(int dia, int mes, int ano)
{
	char quantdmeses[12]={31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	ano=ano+2000;//adiciona 2000 à data que o usuario digitou para que nao se precise digitar '2015' por exemplo... precisamos so do '15'
	if(mes>12) return(0);
	if(ano%4!=0) quantdmeses[1]--;//caso a ano não seja bissesto dievh.minui um dia de fevereiro
	if((dia<=quantdmeses[mes-1])&(dia>0)){ //verifica se o dia existe
		return(1); //retorna 1 se sim
	}
	else return(0); //retorna 0 se nao
}

int vhora(struct evento *p){//testa se a hora REGISTRADA é válida
	if((p->evh.hora>23)^(p->evh.hora<0)) return(0);//se a hora for maior que 24 ou menos que zero... retorna 0
	else{
		if((p->evh.min>59)^(p->evh.min<0)) return(0);//se tiver maiss de 60 min ou menos de zero... retorna zero
		else{
			if((p->evh.sec>59)^(p->evh.sec<0)) return(0);//se tiver maiss de 60 seg ou menos de zero... retorna zero
			else return(1);//se a hora for valida... retorna 1 ou verdadeiro...
		}
	}
}
void escdata(struct evento *p, char tempchar[CHARTEMPORARIA]){//escreve a data DIGITADA PELO USUARIO na struct
	char segtempchar[SEGTEMPCHAR]={0};
	segtempchar[0]=tempchar[0];
	segtempchar[1]=tempchar[1];
	p->evd.dia=atoi(segtempchar);
	segtempchar[0]=tempchar[2];
	segtempchar[1]=tempchar[3];
	p->evd.mes=atoi(segtempchar);
	segtempchar[0]=tempchar[4];
	segtempchar[1]=tempchar[5];
	p->evd.ano=atoi(segtempchar);
}
void eschora(struct evento *p, char tempchar[CHARTEMPORARIA]){//escreve a hora DIGITADA PELO USUARIO na struct
	char segtempchar[SEGTEMPCHAR]={0};
	segtempchar[0]=tempchar[0];
	segtempchar[1]=tempchar[1];
	p->evh.hora=atoi(segtempchar);
	segtempchar[0]=tempchar[2];
	segtempchar[1]=tempchar[3];
	p->evh.min=atoi(segtempchar);
	segtempchar[0]=tempchar[4];
	segtempchar[1]=tempchar[5];
	p->evh.sec=atoi(segtempchar);
}
int vevent(struct evento *p){//verifica se um evento ja esta ultrapassado...retorna 1 se o dia ja passou
	//OBS: novamente... o codigo parece repetitivo... mas são coisas que nao da para fazer em uma função, pois precisam de um taratmento um pouco diferente...
	char datasistema[8], horasistema[8], tempchar[CHARTEMPORARIA]={0};
	int ano, mes, dia, hora, min, sec;
	time_t currentTime; //precisa definir, para atualizar a hora e a data depois...
	struct tm *timeinfo; //criando um ponteiro para a struct que ja existe DENTRO DO "time.h"
	time(&currentTime); //pega a data do sistema
	timeinfo=localtime(&currentTime); //atualiza data e hora
	sec=timeinfo->tm_sec;
	min=timeinfo->tm_min;
	hora=timeinfo->tm_hour;
	mes=(timeinfo->tm_mon)+1;
	ano=(timeinfo->tm_year)-100;
	dia=timeinfo->tm_mday;
	//printf("TESTEADO\n Ano: %d  Mes: %d,   DIA: %d,\n\n\nHora: %i,    min:%i    seg: %i", ano, mes, dia, hora, min, sec);
	//getch();
	if(p->evd.ano>ano) return(0);
	if(p->evd.ano<ano) return(1);
	if(p->evd.ano==ano){
		if(p->evd.mes>mes) return(0);
		if(p->evd.mes<mes) return(1);
		if(p->evd.mes==mes){
			if(p->evd.dia>dia) return(0);
			if(p->evd.dia<dia) return(1);
			if(p->evd.dia==dia){
				if(p->evh.hora>hora) return(0);
				if(p->evh.hora<hora) return(1);
				if(p->evh.hora==hora){
					if(p->evh.min>min) return(0);
					if(p->evh.min<min) return(1);
					if(p->evh.min==min){
						if(p->evh.sec>sec) return(0);
						if(p->evh.sec<=sec) return(1);
					}
				}
			}
		}
	}
}
int tesdia(struct evento *p, int dia, int mes, int ano, char tipo){//função para testar se um dia ja tem feriado ou o limite estourado... 
	//Retorna 0 para dia com feriado
	//retorna 1 para dia disponivel
	//retorna 2 para dia lotado
	//retorna 3 para dia com evento (escolar ou medico)caso a pessoa queira cadastrar um feriado
	int x=0;//x serve para "orientar" o coisa...
	int quantdias=0;
	while(x<LIMAGENDA){//cuida para que o limite de dias cadastrados na agenda sejam todos "verificados"
		if(p->evd.dia==dia){
			if(p->evd.mes==mes){
				if(p->evd.ano==ano){//um evento no dia foi encontrado
					if(p->tipo!=0){//aqui ele verifica se o que tem nesse dia é algo valido
						if(p->tipo==5){
							if((tipo==1)^(tipo==2)) return(0);
							quantdias++;
						}
						else {
							quantdias++;
						}
						if((tipo==5)&((p->tipo==1)^(p->tipo==2))){
							clrscr();
							printf("\nO EVENTO '%s' ESTA CADASTRADO NESTE DIA.\nAO CADASTRAR UM FERIADO, O SISTEMA ELIMINA ESTES EVENTOS.\n\n\nDESEJA CONTINUAR?(S/N)", p->nome);
							char dig=getch();
							if((dig==115)^(dig==83)){
								p->tipo=0;
							}
							else return(3);
						}
					}
				}
			}
		}
		//printf("\n%d  %d", p->evd.dia, dia);
		x++;
		p++;
	}
	if(quantdias>(MAXEVINDIAS)) return(2);//OBS: aqui foi usado o ">" ao inves de ">=", por que ai ele ja conta o evento que esta sendo cadastrado 'agora'...
	else return(1);
}
int novo_evento(struct evento *pa, int ti){
	char quantdmeses[13]={0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	char datasistema[8], horasistema[8];
	int opcao=1, positempchar=0, x=0;//variavel x, para usar para fins diverços... 
	//positempchar - responçavel pela posição do curor na variavel char temporaria
	char tempchar[CHARTEMPORARIA]={0}, segtempchar[SEGTEMPCHAR]={0};
	int tempint;//variavel int para usar para fins variados dentro do programa...
	unsigned char dig=0;
	int dataerro=0, horaerro=0; //cria uma variavel que armazena a informação de 'se existe arro na data ou na hora'
	//O PROGRAM PREENCHE OS CAMPOS DATA E HOR AUTOMATIVAMENTE COM A DATA E HORA DDO MOMENTO... MAS PODE SER ALTERADO FACILMENTE DEPOIS...
	struct evento *p;
	if((ti==1)^(ti==3)){
		p=pa;
		while(x<LIMAGENDA){//calcula a posição do evento na matris de structs"
			if(p->tipo==0) break;
			p++;
			x++;
			//printf("%d", x);
			//getch();
		}
		x=0;
		if(x>=LIMAGENDA){
			printf("\n\n\n\n\nO limite de eventos foi atingido...\n\nNão será possivem continuar...");
			getch();
			return(0);
		}
	}
	else p=pa;
	x=0;
	while(x<CHARTEMPORARIA){//essa função ta ai para que a variavel tepraria seja limpa toda vez que nao esteja sendo usada...
		tempchar[x]=0;
		x++;
	}
	if(ti==1){
		strcpy(p->nome, tempchar);
		strcpy(p->descri, tempchar);
		p->tipo=0;
		p->evd.dia=0;
		p->evd.mes=0;
		p->evd.ano=0;
		p->evh.hora=0;
		p->evh.min=0;
		p->evh.sec=0;
	}
	if(ti==3){
		strcpy(p->nome, tempchar);
		strcpy(p->descri, tempchar);
		p->tipo=0;
		time_t currentTime; //precisa definir, para atualizar a hora e a data depois...
		struct tm *timeinfo; //criando um ponteiro para a struct que ja existe DENTRO DO "time.h"
		time(&currentTime); //pega a data do sistema
		timeinfo=localtime(&currentTime); //atualiza data e hora
		p->evd.dia=timeinfo->tm_mday;
		p->evd.mes=(timeinfo->tm_mon)+1;
		p->evd.ano=(timeinfo->tm_year)-100;
		p->evh.hora=timeinfo->tm_hour;
		p->evh.min=timeinfo->tm_min;;
		p->evh.sec=timeinfo->tm_sec;
		if(p->evd.ano%4!=0) quantdmeses[1]=28;
		else quantdmeses[1]=29;
	}
	while(1){
			clrscr();
			textcolor(CORPADRAO);
			printf("\n");
			printf("\n                                  CRIANDO NOVO EVENTO");
			if(opcao==1) textcolor(CORMENUCEL);
			printf("\n     Dia do evento------------------------   ");
			textcolor(CORPADRAO);
			printf("%2i/%2i/%2i", p->evd.dia, p->evd.mes, p->evd.ano);
			if(dataerro==1) {
				textcolor(CORALERTA);
				printf("Data invalida");
				textcolor(CORPADRAO);
			}
			if(opcao==2) textcolor(CORMENUCEL);
			printf("\n     Horario------------------------------   ");
			textcolor(CORPADRAO);
			printf("%2i:%2i:%2i", p->evh.hora, p->evh.min, p->evh.sec);
			if(horaerro==1){
				textcolor(CORALERTA);
				printf("HORARIO INVALIDO");
				textcolor(CORPADRAO);
			}
			textcolor(CORPADRAO);
			if(opcao==3) textcolor(CORMENUCEL);
			printf("\n     Nome do evento-----------------------   ");
			textcolor(CORPADRAO);
			printf("%s", p->nome);
			if(opcao==4) textcolor(CORMENUCEL);
			printf("\n     Descricao do evento------------------   ");
			textcolor(CORPADRAO);
			printf("%s", p->descri);
			if(opcao==5) textcolor(CORMENUCEL);
			printf("\n     Tipo de evento-----------------------   ");
			if(p->tipo==1) textcolor(CORSIM); else textcolor(CORNAO);
			printf(" ESCOLAR ");
			if(p->tipo==2) textcolor(CORSIM); else textcolor(CORNAO);
			printf(" MEDICO ");
			if(p->tipo==3) textcolor(CORSIM); else textcolor(CORNAO);
			printf(" FAMILIAR ");
			if(p->tipo==4) textcolor(CORSIM); else textcolor(CORNAO);
			printf(" AMIGOS ");
			if(p->tipo==5) textcolor(CORSIM); else textcolor(CORNAO);
			printf(" FERIADO ");
			if(opcao==6) textcolor(CORMENUCEL); else textcolor(CORPADRAO);
			printf("\n           Voltar/Cancelar (Esc)            ");
			textcolor(CORPADRAO);
			dig=getch();
			if(positempchar<1){
				x=0;
				while(x<CHARTEMPORARIA){//essa função ta ai para que a variavel tepraria seja limpa toda vez que nao esteja sendo usada...
					tempchar[x]=0;
					x++;
				}
			}
			switch (dig){
				case 224:
					dig=getch();
					positempchar=0;
					if(dig==72){//tecla para cima
						if(opcao>1){
							opcao--; //Movimenta o "cursor" para baixo
							dig=0;
						}	
					}
					if(dig==80){//tecla para baixo
						if(opcao<5) {
							opcao++;// movimenta o cursor para para cima
						}
					}
					if(dig==77){//para a direita
						switch(opcao){
							case 5://para escolher o tipo de evento
								if(p->tipo<5) p->tipo++;//altera o tipo de eevento para um proximo... se ele existir
								break;
							case 1:
								if((p->evd.dia)>=(quantdmeses[p->evd.mes])){
									if(p->evd.mes>=12){
										p->evd.ano++;
										p->evd.mes=1;
										p->evd.dia=1;
										if(p->evd.ano%4!=0) quantdmeses[2]=28;
										else quantdmeses[2]=29;
									}
									else {
										p->evd.mes++;
										p->evd.dia=1;
									}
								}
								else p->evd.dia++;
								break;
							case 2:
								if(p->evh.sec>=59){
									if(p->evh.min>=59){
										if(p->evh.hora>=23){
											p->evh.hora=0;
											p->evh.min=0;
											p->evh.sec=0;
										}
										else {
											p->evh.hora++;
											p->evh.min=0;
											p->evh.sec=0;
										}
									}
									else {
										p->evh.min++;
										p->evh.sec=0;
									}
								}
								else p->evh.sec++;
								break;
							default:
								break;
						}
					}
					if(dig==75){
						switch(opcao){//ceta para aesquerda
							case 5://alterar o tipo de evento
								if(p->tipo>1) p->tipo--;//muda o tipo para um anterior.. se possível
								break;
							case 1:
								if((p->evd.dia)<=1){
									if(p->evd.mes<=1){
										p->evd.ano--;
										p->evd.mes=12;
										p->evd.dia=quantdmeses[p->evd.mes];
										if(p->evd.ano%4!=0) quantdmeses[2]=28;
										else quantdmeses[2]=29;
									}
									else {
										p->evd.mes--;
										p->evd.dia=quantdmeses[p->evd.mes];
									}
								}
								else p->evd.dia--;
								break;
							case 2://aumenta a hora quando uma pessoa pressiona a tecla p a direita sodre a hora
								if(p->evh.sec<=0){
									if(p->evh.min<=0){
										if(p->evh.hora<=0){
											p->evh.hora=23;
											p->evh.min=59;
											p->evh.sec=59;
										}
										else {
											p->evh.hora--;
											p->evh.min=59;
											p->evh.sec=59;
										}
									}
									else {
										p->evh.min--;
										p->evh.sec=59;
									}
								}
								else p->evh.sec--;
								break;
							default:
								break;
						}
					}
					break;
				case 27:
					opcao=6;
					break;
				case 8:
					switch (opcao){
						case 1: //deletar caracteres da DATA
							if(positempchar>0) positempchar--;
							tempchar[positempchar]=255; //sobrescreve o que tem no ponto da variavel temporaria, quando o usuario preciona black space
							escdata(p, tempchar);
							dataerro=!(vdata(p->evd.dia, p->evd.mes, p->evd.ano)); //verifica validade da data digitada
							break;
						case 2://deletar caracteres da HORA
							if(positempchar>0) positempchar--;
							tempchar[positempchar]=255; //sobrescreve o que tem no ponto da variavel temporaria, quando o usuario preciona black space
							eschora(p, tempchar);
							horaerro=!(vhora(p));
							break;
						case 3://apaga caracteres do nome do evento
							if(positempchar>0) positempchar--;
							tempchar[positempchar]=255; //sobrescreve o que tem no ponto da variavel temporaria, quando o usuario preciona black space
							strcpy(p->nome,tempchar);
							break;
						case 4: //apaga caracteres da escrição o evento
							if(positempchar>0) positempchar--;
							tempchar[positempchar]=255; //sobrescreve o que tem no ponto da variavel temporaria, quando o usuario preciona black space
							strcpy(p->descri,tempchar);
							break;
						default:
							break;
					}
					break;
				case 13://pessoa digitou enter...
					x=0;
					clrscr();
					if(opcao==6) {
						p->tipo=0;
						return(0); //sai da janela de criar nova terefa @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
					}
					if(dataerro==1){//verifica se a data é valida
						printf("\nA DATA INFORMADA E INVALIDA");
						x=1;//dis que tem algum erro...
					}
					if(horaerro==1){//verifica se a hora é valida
						printf("\nA HORA INFORMADA NAO E VALIDA");
						x=1;//indica um erro
					}
					if(p->tipo==0){//verifica se o tipo foi celecionado
						printf("\nTIPO DE EVENTO NAO CELECIONADO");
						x=1;//diz que há um erro
					}
					if((p->nome[0]==0)^(p->nome[0]==225)){
						printf("\nNOME NAO PREENCHIDO");
						x=1;//afirma um erro
					}
					if(vevent(p)){
						printf("\nDATA E HORA EXPIRRADOS");
						x=1;//informa um erro...
					}
					tempint=tesdia(pa, p->evd.dia, p->evd.mes, p->evd.ano, p->tipo);//atribui o valor a temchar para nao precisar criar outra variavel
					if(tempint==0){
						if((p->tipo==1)^(p->tipo==2)){
							printf("\nNESTE DIA ESTA CADASTRADO UM FERIADO - NAO PODES CADASTRAR EVENTO MEDICO OU ESCOLAR");
							x=1;//dis que tem um erro
						}
					}
					if(tempint==2){
						printf("\nO DIA JA TEM O MAXIMO DE EVENTOS CADASTRADOS");
						x=1; //INFORMA UM ERRO
					}
					if(tempint==3){
						printf("\nEXISTE ALGUM EVENTO MEDICO OU ESCOLAR NESTE DIA");
						x=1;
					}
					if(x==1) {
						printf("\n\n\nVERIFIQUE OS DADOS LISTADOS ACIMA... E VOLTE...");
						getch();
						break;
					}
					return(1);//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
					break;
				default://pega a perte dos numeros e letras que a pessoa digita...
					switch(opcao){
						case 1://parte onde o usuario digita a DATA
							if(dig>47&dig<58){//o programa verifica se esão sendo digitados somente NUMEROS
								if(positempchar<6){//controle do limite de caracteres no dia
									tempchar[positempchar]=dig;//pasa o que ja tem para as variaveis definitivas
									dataerro=!(vdata(p->evd.dia, p->evd.mes, p->evd.ano)); //verifica se o dia existe
									positempchar++;//soma mais um a esta variavel para que na proxima, ele escreva no seguinte espaço
									escdata(p, tempchar);//escreve a data nas variaveis definitivas
								}
							}
							break;
						case 2:
							if(dig>47&dig<58){//verifica se ção digitados somente numeros
								if(positempchar<6){//controle de limite de caracteres
									tempchar[positempchar]=dig;//escreve o digito na char temporaria
									eschora(p, tempchar);//passa esse valor para as variaveis oficiais
									horaerro=!(vhora(p));//testa se a hora é valida
									positempchar++;//soma um à variavel responsável pela contagem dos bits preenchidos...
								}
							}
							break;
						case 3://escrever nome do evento
							if(positempchar<NOMEDOEVENTO){//testa se ainda 'cabem' caracteres no nome do arquivo
								tempchar[positempchar]=dig;//adiciona o caracter pressionado ao nome do evento
								strcpy(p->nome,tempchar);//escreve o nome do evento na struct definitiva
								positempchar++;//faz a contagem dos bits digitados
							}
							break;
						case 4://escrever descrição
							if(positempchar<DESCRICAODOEVENTO){//testa se ainda 'cabem' caracteres no nome do arquivo
								tempchar[positempchar]=dig;//adiciona o caracter pressionado à descrição do evento
								strcpy(p->descri,tempchar);//escreve à descrição do evento na struct definitiva
								positempchar++;//faz a contagem dos bits digitados
							}
							break;
						default:
							break;
					}
					break;
			}
	}
}
int editar_evento(struct evento *p){
	char tempchar[CHARTEMPORARIA]={0}, dig=0;
	char segtempchar[SEGTEMPCHAR]={0};
	int x, dia, mes, ano;
	int ecreev=0, evenc=0;
	clrscr();
	while(1){
		printf("\n\n\nProcurar eventos por nome, descricao ou tipo");
		printf("\n\nPara pesquisar por nome ou por descricao, basta digitar a mesma...");
		printf("\n\nPara pesquisar por tipo, use:");
		printf("\n                      1 para Escolar");
		printf("\n                      2 para Medico");
		printf("\n                      3 para Familiar");
		printf("\n                      4 para Amigos");
		printf("\n                      5 para Feriado");
		printf("\n\n\nDigite sua pesquisa, precione enter para pesquisar");
		printf("\n\n\nPressione ENTER para iniciar a pesquisa\nOu ESC para retornar");
		while(1){
			dig=getch();
			if(dig==13) break;
			if(dig==27) return(-1);
		}
		printf("\n\nDigite sua pesquisa-- ");
		scanf("%s", &tempchar[0]);
		x=0;
		ecreev=0;
		evenc=0;
		clrscr();
		while(x<LIMAGENDA){
			if((strcmp(p->nome, tempchar))==0){
				ecreev=1;
			}
			if(p->tipo==atoi(tempchar)){
				ecreev=1;
			}
			if((strcmp(p->descri, tempchar))==0){
				ecreev=1;
			}
			if((p->tipo<1)^(p->tipo>5)) {
				ecreev=0;
			}
			if(ecreev==1){
				printf("\n\n**************************************************************************************************");
				printf("\n* %4d *     Nome do evento: %s", x, p->nome);
				printf("\n********     Descricao: %s", p->descri);
				printf("\n             Data: %d/%d/%d", p->evd.dia, p->evd.mes, p->evd.ano);
				printf("\n             Tipo: %d", p->tipo);
				printf("\n**************************************************************************************************");
				ecreev=0;
				evenc++;
			}
			p++;
			x++;
		}
		if(evenc==0){
			printf("\n\n\nNenhum evento encontrado...");
			return(-1);
		}
		else{
			printf("\n\n\nAcima estao listados os eventos encontrados...\n\nPara prosseguir, informe o numero do evento:\n(INFORMADO NO CANTO SUP. DIREITO, DE CADA EVENTO)");
			printf("\n\n\nCASO SEJA INFORMADO O NUMERO ERRADO, VOCE SERA DIRECIONADO PARA OUTRO EVENTO QUALQUER!!!\n\nDigite o numero do evento---");
			scanf("%i", &x);
			return(x);
		}
	}
}
int lista_eventos(struct evento *p, int tipo){
	struct evento *pa; //é um ponteir que vai ficar SEMPRE apontando para o inicio da estrutura
	pa=p;
	int x=0, ano, mes, dia, sem;
	char limmes[13]={0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	time_t currentTime; //precisa definir, para atualizar a hora e a data depois...
	struct tm *timeinfo; //criando um ponteiro para a struct que ja existe DENTRO DO "time.h"
	time(&currentTime); //pega a data do sistema
	timeinfo=localtime(&currentTime); //atualiza data e hora
	mes=(timeinfo->tm_mon)+1;
	ano=(timeinfo->tm_year)-100;
	dia=timeinfo->tm_mday;
	sem=timeinfo->tm_wday;
	sem=6-sem;
	clrscr();
	printf("Lista de Eventos:");
	while(1){
		if((p->tipo>0)&(p->tipo<5)){
			if(p->evd.ano==ano){
				if(p->evd.mes==mes){
					if(p->evd.dia==dia){
						printf("\n\n********************************************************************");
						printf("\nEvento: %s", p->nome);
						printf("\nDescricao: %s", p->descri);
						printf("\nTipo: %d", p->tipo);
						printf("\nData: %2d/%2d/%2d", p->evd.dia, p->evd.mes, p->evd.ano);
						printf("\nHorario: %2d:%2d:%2d", p->evh.hora, p->evh.min, p->evh.sec);
						printf("\n********************************************************************");
					}
				}
			}
		}
		if(x==LIMAGENDA){
			x=-1;
			p=pa;
			p--;
			if(tipo==1) return(0);
			if(tipo==2){
				if(sem==0) return(0);
				sem--;
			}
			if(dia>=limmes[mes]){
				if(tipo==3) return(0);
				dia=1;
				if(mes>=12){
					if(tipo==4) return(0);
					mes=1;
					if(ano%4!=0) limmes[2]=28;//caso a ano não seja bissesto dievh.minui um dia de fevereiro
					else limmes[2]=29;
					ano++;
				}
				else mes++;
			}
			else dia++;
		}
		x++;
		p++;
	}
}
int main(void)
{
	char nomarq[NOMEDOARQUIVO]={0}, tempchar[CHARTEMPORARIA], ultsalvamente[9]={0}, config[2]={0};
	int opcao=1, atua=1, x=0, dye=0, tiplist=1, nessalv=0;
	unsigned char dig=0;
	tamanho_tela(100,30);//define o tamanho da tela
	struct evento agenda[LIMAGENDA]={0};//cria a struct que armazena os evetos
	struct evento temp={0};
	struct evento *p;//cria o ponteiro para a struct
	while(1){
		clrscr();
		printf("\n\n\n                                      Agenda...");
		printf("\n\n\n                         Desenvolvido por William Pilger");
		printf("\n                Ultima compilacao em   %s   às   %s", __DATE__, __TIME__);
		printf("\n\n\n\nDigite o nome do arquivo da agenda:");
		scanf("%s", &nomarq);
		FILE *fluxo;
		strcat(nomarq,".txt");
		if((fluxo=fopen(nomarq, "rt"))==NULL){//aqui há uma coisa errada... quqndo o arquivo nao existe.. ele não retorna isso... simplesmente cria ele...
			printf("\n\n\nArquivo de agenda nao encontrado...\n\nDeseja criar um novo?(S/N)");
			dig=getch();
			if((dig==115)^(dig==83)){
				if((fluxo=fopen(nomarq, "wt"))==NULL){
					printf("\n\n\nNao foi possivel criar um novo aruivo com este nome...");
					exit(0);
				}
				else{//criado novo arquivo de agenda...
					fluxo=fopen(nomarq, "wt");
					break;
				}
			}
		}
		else {
			fluxo=fopen(nomarq, "rt");
			fread(&agenda[0], sizeof(struct evento), LIMAGENDA, fluxo);
			fread(&config[0], sizeof(int), 2, fluxo);
			fclose(fluxo);
			break;
		}
	}
	while(1){
		if(config[0]==1){
			if(nessalv==1){//esta funcção espera um certo "tempo" para salvar o arquivo da agenda... sempre periodicamente...
				FILE *fluxo;
				fluxo=fopen(nomarq, "wt");
				fwrite(&agenda[0], sizeof(struct evento), LIMAGENDA, fluxo);
				fwrite(&config[0], sizeof(int), 2, fluxo);
				_strtime(ultsalvamente);//informa a pessoa que os dados acabaram de ser salvos...
				fclose(fluxo);
				atua=1;
				nessalv=0;
			}
		}
		if(atua==1){
			clrscr();
			textcolor(CORPADRAO);
			printf("                                                                                         ");
			textcolor(CORNOMAGEND);
			printf("Agenda - %s", nomarq);
			textcolor(CORPADRAO);
			printf("\n\n                                                                                    ");
			textcolor(CORULTSALV);
			if(config[0]==1) printf("Ultimo salvamento: %9s\n\n", ultsalvamente);
			if(config[0]==0) printf("Para salvar, pressione 'S'   -   Ultimo salvamento: %9s\n\n", ultsalvamente);
			if(opcao==1) textcolor(CORMENUCEL);
			else textcolor(CORPADRAO);
			printf("\n        Novo evento        ");
			if(opcao==2) textcolor(CORMENUCEL);
			else textcolor(CORPADRAO);
			printf("\n  Editar evento existente  ");
			if(opcao==3) textcolor(CORMENUCEL);
			else textcolor(CORPADRAO);
			printf("\nExcluir um evento existente");
			if(opcao==4) textcolor(CORMENUCEL);
			else textcolor(CORPADRAO);
			printf("\n       Listar eventos      ");
			if(tiplist==1) textcolor(CORSIM);
			else textcolor(CORNAO);
			printf("  HOJE  ");
			if(tiplist==2) textcolor(CORSIM);
			else textcolor(CORNAO);
			printf("  SEMANA  ");
			if(tiplist==3) textcolor(CORSIM);
			else textcolor(CORNAO);
			printf("    MES   ");
			if(tiplist==4) textcolor(CORSIM);
			else textcolor(CORNAO);
			printf("    ANO   ");
			if(opcao==5) textcolor(CORMENUCEL);
			else textcolor(CORPADRAO);
			printf("\n       Configuracoes       ");
			textcolor(CORPADRAO);
			if(opcao==6) textcolor(CORMENUCEL);
			else textcolor(CORPADRAO);
			printf("\n          Sair(Esc)        ");
			textcolor(CORPADRAO);
			atua=0;//seta a variavel, dizendo que a tel ja esta atualizada
		}
		if(kbhit()){
			dig=getch();
			switch(dig){
				case 224:
					dig=getch();
					switch(dig){
						case 72://tecla para cima
							if(opcao>1) opcao--;//desloca o cursor
							atua=1;//seta a variavel que atualiza a tela...
							break;
						case 80://tecla para baixo
							if(opcao<5) opcao++;//desloca o cursor
							atua=1;//manda atualizar a tela...
							break;
						case 77://para a direita
							if(opcao==4){
								if(tiplist<4) tiplist++;
								atua=1;
							}
							break;
						case 75://para esquerda
							if(opcao==4){
								if(tiplist>1) tiplist--;
								atua=1;
							}
							break;
						default:
							break;
					}
					break;
				case 27://pessoa aperta esc
					opcao=6;
					atua=1;
					break;
				case 13:
					switch(opcao){
						case 1://criar evento
							p=&agenda[0];//salva o endereço da struct no ponteiro
							if(config[1]==0) novo_evento(p, 1);//cria um novo evento
							if(config[1]==1) novo_evento(p, 3);//cria um novo evento, sem preencher a data e a hora...
							nessalv=1;
							atua=1;
							break;
						case 2://editar evento
							p=&agenda[0];
							x=editar_evento(p);
							if(x==-1){
								clrscr();
								printf("Nada foi alterado...\n\nPressione qualquer tecla para continuar...");
								getch();
							}
							else{
								p=&agenda[x];
								novo_evento(p, 2);
								printf("\n\n\n\nO evento '%s' foi editado...\n\nPrecione qualquer tecla para continuar...", agenda[x].nome);
								nessalv=1;
								getch();
							}
							atua=1;
							break;
						case 3://excluir evento
							p=&agenda[0];
							x=editar_evento(p);
							if((x<0)^(x>LIMAGENDA)){
								clrscr();
								printf("Nada foi alterado...\n\nPressione qualquer tecla para continuar...");
								getch();
							}
							else{
								clrscr();
								agenda[x].tipo=0;
								printf("\n\n\n\nO evento '%s' foi removido...\n\nPrecione qualquer tecla para continuar...", agenda[x].nome);
								getch();
								nessalv=1;//para salvar o arquivo
							}
							atua=1;
							break;
						case 4://listar eventos
							p=&agenda[0];
							lista_eventos(p, tiplist);
							printf("\n\n\nQualquer tecla para retornar...");
							getch();
							atua=1;
							break;
						case 5:
							opcao=1;
							while(1){
								clrscr();
								if(opcao==1) textcolor(CORMENUCEL);
								else textcolor(CORPADRAO);
								printf("\n         Salvamento automatico-             ");
								if(config[0]==1) textcolor(CORSIM);
								else textcolor(CORNAO);
								printf(" Ativado ");
								if(config[0]==0) textcolor(CORSIM);
								else textcolor(CORNAO);
								printf(" Desativado ");
								if(opcao==2) textcolor(CORMENUCEL);
								else textcolor(CORPADRAO);
								printf("\n   Preencimento automatico da data e hora - ");
								if(config[1]==1) textcolor(CORSIM);
								else textcolor(CORNAO);
								printf(" Ativado ");
								if(config[1]==0) textcolor(CORSIM);
								else textcolor(CORNAO);
								printf(" Desativado ");
								textcolor(CORPADRAO);
								printf("\n\n                  Voltar (Esc)                ");
								dig=getch();
								if(dig==224){//pressionou alguma tecla
									dig=getch();
									switch(dig){
										case 72://tecla para cima
											if(opcao>1) opcao--;
											break;
										case 80://tecla para baixo
											if(opcao<2) opcao++;
											break;
										case 77://tecla para direita
											switch(opcao){
												case 1:
													config[0]=0;
													break;
												case 2:
													config[1]=0;
													break;
												default:
													break;
											}
											break;
										case 75://tecla para esquerda
											switch(opcao){
												case 1:
													config[0]=1;
													break;
												case 2:
													config[1]=1;
													break;
												default:
													break;
											}
											break;
										default:
											break;
									}
								}
								if(dig==27) break;
							}
							break;
						case 6:
							exit(0);
							break;
						default:
							break;
					}
					break;
				case 83:
				case 115:
					FILE *fluxo;
					fluxo=fopen(nomarq, "wt");
					fwrite(&agenda[0], sizeof(struct evento), LIMAGENDA, fluxo);
					fwrite(&config[0], sizeof(int), 2, fluxo);
					_strtime(ultsalvamente);//informa a pessoa que os dados acabaram de ser salvos...
					fclose(fluxo);
					atua=1;
					break;
				default:
					break;
			}
		}
		if((agenda[dye].tipo!=0)){
			p=&agenda[dye];
			if(vevent(p)){
				clrscr();
				printf("\n*************************Voce tem um evento agora!*************************  %i", dye);
				printf("\n*  Nome do evento: %s", agenda[dye].nome);
				printf("\n*  Descricao: %s", agenda[dye].descri);
				if(agenda[dye].tipo==1){
					printf("\n*\n*  Evento Escolar");
				}
				if(agenda[dye].tipo==2){
					printf("\n*\n*  Evento Medico");
				}
				if(agenda[dye].tipo==3){
					printf("\n*\n*  Evento Familiar");
				}
				if(agenda[dye].tipo==4){
					printf("\n*\n*  Evento com Amigos");
				}
				if(agenda[dye].tipo==5){
					printf("\n*\n*  Feriado Cadastrado");
				}
				printf("\n*************************Voce tem um evento agora!*************************");
				printf("\n\n\n\n\n\n\nQualquer tecla para retornar...");
				sprintf(tempchar, "echo msgBox\"Va para a Agenda... Voce tem algum evento agora...\" > mesn.vbs", p->descri, p->nome);
				system(tempchar);
				system("start mesn.vbs");
				getch();
				system("del /q mesn.vbs");
				atua=1;
				agenda[dye].tipo=0;
				nessalv=1;//ceta uma variavel que mostra que o arquivo precisa ser salvo...
			}
		}
		dye++;
		if(dye==LIMAGENDA) dye=0;
	}
}
