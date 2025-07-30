#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define NUMDIGCOD 7//numero de digictos do codigo
#define NUMDIGTIT 45//numero de digitos do titulo 
#define NUMDIGAUT 30//numero de digitos do nome do autor
#define NUMDIGMES 1//numero de digitos do mes de publicacao
#define NUMDIGANO 4//numero de digitos do ano de publicacao
#define TAMBUFF 5000//tamanho "padrao" do espaco a ser alocado para armazenas os livros (mesmo tamanho que sera acrescentado sempre que o buffer foi aumentado)
#define NUMDIGARQ 50//tamanho max. do nome do arquivo fonte

void sair(int erro){
    switch(erro){
        case 1:
            printf("\nPASSAGEM DE PARAMETROS INVALIDA");
        case 2:
            printf("\nNAO FOI POSSIVEL ABRIR O ARQUIVO");
            break;
        case 3:
            printf("\nALGUM DADO NAO FOI INFORMADO, OU FOI INFORMADO DE FORMA INCORRETA NO ARQUIVO LIDO");
            break;
        default:
            printf("\nERRO DESCONHECIDO");
            break;
    }
    printf("\nO PROGRAMA SERA FINALIZADO!");
    system("pause");
    exit(erro);
}

struct livro{
    int codigo;
    char titulo[NUMDIGTIT+1];
    char autor[NUMDIGAUT+1];
    int mes;
    int ano;
};
typedef struct livro LIVRO;

int atualbuff=TAMBUFF;//global, nao se pode perder este valor
LIVRO *aloca(int modo, LIVRO *velho){
    //recebe:
    //  modo: 1 - Aloca novo
    //        2 - Aumenta espaco
    //  *velho: ponteiro dos dados antigos
    LIVRO *novo;
    int i;
    switch(modo){
        case 1:
            novo = (LIVRO*) calloc(atualbuff, sizeof(LIVRO));
            break;
        case 2:
            novo = (LIVRO*) calloc(atualbuff+TAMBUFF, sizeof(LIVRO));
            //transferindo todos os dados de uma para a outra
            for(i=0;i<atualbuff;i++){
                novo[i].codigo=velho[i].codigo;
                strcpy(novo[i].titulo,velho[i].titulo);
                strcpy(novo[i].autor,velho[i].autor);
                novo[i].mes=velho[i].mes;
                novo[i].ano=velho[i].ano;
            }
            atualbuff = atualbuff+TAMBUFF;
            free(velho);//libera memoria alocada no espaço anterior
            break;
        default:
            sair(1);
            break;
    }
    return novo;
}

LIVRO *ledados(LIVRO *banco, char arquivo[NUMDIGARQ]){
    FILE *fluxo;
    char dig;
    int passo=0, registro=0, x;
    char tempcod[NUMDIGCOD+1];
    char tempmes[NUMDIGMES+1];
    char tempano[NUMDIGANO+1];
    if((fluxo=fopen(arquivo, "rt"))==NULL) sair(2);
    while(!feof(fluxo)){
        dig=getc(fluxo);
        //printf("%c", dig);
        if(passo<NUMDIGCOD){//coletando codigo
            tempcod[passo]=dig;
        }else if(passo<(NUMDIGCOD+NUMDIGTIT)){//coletando titulo
            banco[registro].titulo[passo-NUMDIGCOD]=dig;
        }else if(passo<(NUMDIGCOD+NUMDIGTIT+NUMDIGAUT)){//coletando autor
            banco[registro].autor[passo-NUMDIGCOD-NUMDIGTIT]=dig;
        }else if(passo<(NUMDIGCOD+NUMDIGTIT+NUMDIGAUT+NUMDIGMES)){//coletando mes
            tempmes[passo-NUMDIGCOD-NUMDIGTIT-NUMDIGAUT]=dig;
        }else if(passo<(NUMDIGCOD+NUMDIGTIT+NUMDIGAUT+NUMDIGMES+NUMDIGANO)){//coletando ano
            tempano[passo-NUMDIGCOD-NUMDIGTIT-NUMDIGAUT-NUMDIGMES]=dig;
        }else if(dig=='\n'){//finalizou leitura de uma linha
			tempcod[NUMDIGCOD]='\0';
            banco[registro].codigo=atoi(tempcod);
            for(x=NUMDIGTIT;x<=0;x--){
                if(banco[registro].titulo[x]!=32){
                    banco[registro].titulo[x+1]='\0';
                    break;
                }else if(x==0) sair(3);
            }
            for(x=NUMDIGAUT;x<=0;x--){
                if(banco[registro].autor[x]!=32){
                    banco[registro].autor[x+1]='\0';
                    break;
                }else if(x==0) sair(3);
            }
            //printf("\nteste%s", banco[registro].autor);
            tempmes[NUMDIGMES]='\0';
            banco[registro].mes=atoi(tempmes);
            tempano[NUMDIGANO]='\0';
            banco[registro].ano=atoi(tempano); //printf("\nteste%s", tempano);
            registro++;
            if(registro>=atualbuff) banco = aloca(2, banco);
            passo=-1;
        }
		passo++;
    }
    fclose(fluxo);
    return(banco);
}

void escrevetudo(LIVRO *dados, int quant){
    int i;
    for(i=0; i<quant; i++){
        printf("\n%d", dados[i].codigo);
        printf("\n%s", dados[i].titulo);
        printf("\n%s", dados[i].autor);
        printf("\n%d/%d\n", dados[i].mes, dados[i].ano);
    }
}

int main(){
    LIVRO *banco;
    banco = aloca(1, NULL);
    banco = ledados(banco, "livros_final.txt");
    escrevetudo(banco, atualbuff);
}
