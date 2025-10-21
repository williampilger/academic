/**
 * Desenvolva um programa em Linguagem de programação C, que crie uma lista encadeada com alocação dinâmica de memória, para armazenar registros com nome e idade, com as seguintes rotinas e sequência:
 *   Rotina para inserir registros em uma lista encadeada com alocação dinâmica de memória;
 *   Rotina para consultar um registro da lista, indicado pelo usuário pelo nome;
 *   Rotina para alterar a idade de um registro da lista, indicado pelo usuário pelo nome;
 *   Rotina para excluir um registro da lista, indicado pelo usuário pelo nome;
 *   Rotina para ordenar a lista em ordem alfabética pelo nome;
 *   Rotina para mostrar o conteúdo atualizado da lista.
 *  Adicionar uma rotina principal que implemente um menu (em um laço while) para permitir que o usuário chame as quatro rotinas em qualquer ordem, até escolher uma opção de "Sair".
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#define MAX_NOME 50

struct Registro {
    char nome[MAX_NOME];
    int idade;
    struct Registro* proximo;
};

struct Registro* inicio = NULL;

void addRegistro(const char* nome, int idade) {
    struct Registro* novoRegistro = malloc(sizeof(struct Registro));
    if (novoRegistro == NULL) {
        fprintf(stderr, "Impossível alocar memória\n");
        exit(1);//pra sair com erro (serve pra nada a essa altura, mas ok)
    }
    strncpy(novoRegistro->nome, nome, sizeof(novoRegistro->nome) - 1);
    novoRegistro->nome[sizeof(novoRegistro->nome) - 1] = '\0';
    novoRegistro->idade = idade;
    novoRegistro->proximo = inicio;
    inicio = novoRegistro;
}
bool editaIdade(const char* nome, int novaIdade) {
    struct Registro* atual = inicio;
    while (atual != NULL) {
        if (strcmp(atual->nome, nome) == 0) {
            atual->idade = novaIdade;
            return true;
        }
        atual = atual->proximo;
    }
    return false;
}

bool rmRegistro(const char* nome) {
    struct Registro* atual = inicio;
    struct Registro* anterior = NULL;

    while (atual != NULL && strcmp(atual->nome, nome) != 0) {
        anterior = atual;
        atual = atual->proximo;
    }

    if (atual == NULL) {
        printf("Registro nao encontrado.\n");
        return false;
    }

    if (anterior == NULL) {
        inicio = atual->proximo;
    } else {
        anterior->proximo = atual->proximo;
    }

    free(atual);
    return true;
}
bool printList() {
    if( inicio == NULL ) {
        return false;
    }
    struct Registro* atual = inicio;
    printf("\n Registros na lista:");
    while (atual != NULL) {
        printf("\n  - Nome: %s, Idade: %d", atual->nome, atual->idade);
        atual = atual->proximo;
    }
    return true;
}

bool ordenaLista(){

    if (inicio == NULL) {
        return false;
    }
    int trocou;
    do {
        trocou = 0;
        struct Registro* atual = inicio;
        while (atual->proximo != NULL) {
            if (strcmp(atual->nome, atual->proximo->nome) > 0) { // troca >>>>> ordem alfabética
                char tempNome[MAX_NOME];
                int tempIdade;
                //testand
                strncpy(tempNome, atual->nome, MAX_NOME);
                tempIdade = atual->idade;
                strncpy(atual->nome, atual->proximo->nome, MAX_NOME);
                atual->idade = atual->proximo->idade;
                strncpy(atual->proximo->nome, tempNome, MAX_NOME);
                atual->proximo->idade = tempIdade;
                trocou = 1;
            }
            atual = atual->proximo;
        }
    } while (trocou);
    return true;
}

int main() {
    int escolha;
    char nome[MAX_NOME];
    int idade;
    system("clear || cls");
    while (1) {
        printf("\nMenu:");
        printf("\n 1. Adicionar registro");
        printf("\n 2. Remover registro");
        printf("\n 3. Alterar idade");
        printf("\n 4. Ordenar lista por idade");
        printf("\n 5. Mostrar registros");
        printf("\n 0. Sair");
        printf("\n\nEscolha uma opcao: ");
        scanf("%d", &escolha);

        system("clear || cls");//impede de acumular, mas talvez eu tenha q tirar daqui

        switch (escolha) {
            case 1:
                printf("\n Informe o nome: ");
                scanf(" %[^\n]", nome);
                printf("\n Informe a idade: ");
                scanf("%d", &idade);
                addRegistro(nome, idade);
                system("clear || cls");
                printf("\n Registro adicionado!!");
                break;
            case 2:
                printf("\n Informa o nome pra remover: ");
                scanf(" %[^\n]", nome);
                if( rmRegistro(nome) ){
                    printf("\n Registro removido com sucesso!");
                } else {
                    printf("\n Registro nao encontrado.");
                }
                break;
            case 3:
                printf("\n Informa o nome pra alterar a idade: ");
                scanf(" %[^\n]", nome);
                printf("\n Informe a nova idade: ");
                scanf("%d", &idade);
                if(editaIdade(nome, idade)){
                    printf("\n Idade alterada com sucesso!");
                } else {
                    printf("\n Registro nao encontrado.");
                }
                break;
            case 4:
                if(ordenaLista()){
                    printf("\n  Lista ordenada!");
                } else {
                    printf("\n  Lista vazia!");
                }                
                break;
            case 5:
                if( !printList() ){
                    printf("\n lista vazia!");
                }
                break;
            case 0:
                return 0;
            default:
                printf("Opcao invalida. Tente novamente.");
        }
    }
    return 0;
}
