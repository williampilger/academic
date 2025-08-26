/*Programa que simula uma calculadora de quatro operacoes */

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include <stdbool.h>

#define HIST_LEN 100

struct registro {
    char operacao;
    float num1;
    float num2;
    float resultado;
};

char operacao, continua;
float num1, num2, resultado;
struct registro historico[HIST_LEN];
int hist_index = 0;

//Assinaturas das funções
float adicao(float val1, float val2);
float subtracao(float val1, float val2);
float divisao(float val1, float val2);
float multiplicacao(float val1, float val2);
void salvahistorico(float val1, float val2, char op, float res);
void mostrahistorico();

int main() {
    printf("\nESTE PROGRAMA IMPLEMENTA O FUNCIONAMENTO DE UMA\nCALCULADORA COM AS QUATRO OPERACOES BASICAS");
    do {
        printf("\n\nDigite dois numeros quaisquer. Apos, escolha a operacao que deseja realizar");
        printf("\n\nPrimeiro numero: ");
        scanf("%f", &num1);
        printf("\nSegundo numero: ");
        scanf("%f", &num2);
        printf("\n Informe a operacao que deseja realizar, digitando o sinal correspondente \n\n + Adicao \n - Subtracao \n / Divisao \n * Multiplicacao \n H Histórico \n\n");
        scanf(" %c", &operacao);
        switch (operacao) {
            case '+':
                resultado = adicao(num1, num2);
                break;
            case '-':
                resultado = subtracao(num1, num2);
                break;
            case '/':
                if (num2 == 0) {
                    printf("\nErro: Divisao por zero. Calculo nao efetuado.");
                    resultado = 0;
                } else {
                    resultado = divisao(num1, num2);
                }
                break;
            case '*':
                resultado = multiplicacao(num1, num2);
                break;
            default:
                printf("\nOperacao invalida. \nCalculo nao efetuado.");
                break;
        }
        if (operacao != ' '){
            // printf("\n \n Resultado: %.2f", resultado);
            salvahistorico(num1, num2, operacao, resultado);
            mostrahistorico();
        }
        printf("\n\nDeseja fazer nova operacao: S/N\n");
        scanf(" %c", &continua);
        continua = toupper(continua);
    } while (continua == 'S');
    return 0;
}

float adicao(float val1, float val2) {
    float adicao = val1 + val2;
    return adicao;
}

float subtracao(float val1, float val2) {
    float subtracao = val1 - val2;
    return subtracao;
}

float divisao(float val1, float val2) {
    float divisao = val1 / val2;
    return divisao;
}

float multiplicacao(float val1, float val2) {
    float multiplicacao = val1 * val2;
    return multiplicacao;
}

void salvahistorico(float val1, float val2, char op, float res) {
    if (hist_index < HIST_LEN) {
        historico[hist_index].num1 = val1;
        historico[hist_index].num2 = val2;
        historico[hist_index].operacao = op;
        historico[hist_index].resultado = res;
        hist_index++;
    } else {
        printf("\nHistorico cheio. Nao e possivel salvar mais operacoes.");
    }
}

void mostrahistorico() {
    printf("\nHistorico de operacoes:\n");
    for(int i=0; i<HIST_LEN && i<hist_index; i++) {
        if(historico[i].operacao != '\0') {
            printf("%.2f %c %.2f = %.2f\n", historico[i].num1, historico[i].operacao, historico[i].num2, historico[i].resultado);
        }
    }
}
