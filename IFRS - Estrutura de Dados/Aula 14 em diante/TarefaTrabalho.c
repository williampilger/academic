#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#define TAM_NOME 30

typedef struct
{
    char nome[TAM_NOME];
    double n1;
    double n2;
    double media;
} Estudante;

typedef struct Lista
{
    Estudante estudante;
    struct Lista *proximo;
} No;

// Globais
No *lista = NULL;

// bool Existe (char nome[TAM_NOME]){
//     if(lista==NULL) return false;
// }

Estudante *NovoEstudante(const char *nome, double n1, double n2)
{
    Estudante *novoEstudante = malloc(sizeof(Estudante));
    if (novoEstudante == NULL)
    {
        fprintf(stderr, "Impossível alocar memória\n\n");
        exit(1); // pra sair com erro
    }
    strcpy(novoEstudante->nome, nome);
    novoEstudante->n1 = n1;
    novoEstudante->n2 = n2;
    novoEstudante->media = (n1 + n2) / 2;
    return novoEstudante;
}

No *NovoNo(Estudante estudante)
{
    No *novoNo = malloc(sizeof(No));
    if (novoNo == NULL)
    {
        fprintf(stderr, "Impossível alocar memória\n");
        exit(1); // pra sair com erro (serve pra nada a essa altura, mas ok)
    }
    novoNo->estudante = estudante;
    novoNo->proximo = NULL;
    return novoNo;
}

void CadastrarEstudante()
{

    char nome[TAM_NOME];
    double n1, n2;

    printf("\n Informe o Nome: ");
    scanf(" %[^\n]", nome);
    printf("\n Informe a N1: ");
    scanf(" %lf", &n1);
    printf("\n Informe a N2: ");
    scanf(" %lf", &n2);

    Estudante *estudante = NovoEstudante(nome, n1, n2);

    if (lista == NULL)
    {
        // Se não tinha, esse é o início da lista
        lista = NovoNo(*estudante);
    }
    else
    {
        No* atual = lista;
        while(true){
            if(atual->proximo == NULL){
                atual->proximo = NovoNo(*estudante);
                break;
            } else {
                atual = atual->proximo;
            }
        }
    }
}

void ListarEstudantes()
{
    if (lista == NULL)
    {
        printf("Lista vazia.\n");
    }
    else
    {
        printf("\n-----------------\n");
        printf("Estudantes:\n");
        No *atual = lista;
        while (atual != NULL)
        {
            printf("Nome: %s | Nota 1: %.2f | Nota 2: %.2f | Média: %.2f\n", atual->estudante.nome, atual->estudante.n1, atual->estudante.n2, atual->estudante.media);
            atual = atual->proximo;
        }
    }
}

int main()
{

    int opcao;
    bool flag = true;

    while (flag)
    {
        printf("-----------------\n");
        printf("Menu\n");
        printf("1 - Cadastrar estudante\n");
        printf("2 - Consultar estudante\n");
        printf("3 - Alterar notas\n");
        printf("4 - Excluir estudante\n");
        printf("5 - Listar estudantes\n");
        printf("6 - Ordenar estudantes por nome\n");
        printf("7 - Mostrar estudantes pela média\n");
        printf("8 - Apresentar 5 melhores estudantes\n");
        printf("9 - Sair\n");

        printf("Escolha a opção: ");
        scanf("%d", &opcao);

        if (opcao == 1)
        {
            CadastrarEstudante();
        }
        else if (opcao == 2)
        {
        }
        else if (opcao == 3)
        {
        }
        else if (opcao == 4)
        {
        }
        else if (opcao == 5)
        {
            ListarEstudantes();
        }
        else if (opcao == 6)
        {
        }
        else if (opcao == 7)
        {
        }
        else if (opcao == 8)
        {
        }
        else if (opcao == 9)
        {
            printf("Saindo...");
            flag = false;
        }
    }
}