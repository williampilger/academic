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

    printf("Informe o Nome: ");
    scanf(" %[^\n]", nome);
    printf("Informe a N1: ");
    scanf(" %lf", &n1);
    printf("Informe a N2: ");
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
            printf("Nome: %s | Nota 1: %.2lf | Nota 2: %.2lf | Média: %.2lf\n", atual->estudante.nome, atual->estudante.n1, atual->estudante.n2, atual->estudante.media);
            atual = atual->proximo;
        }
        printf("\n");
    }
}

void ConsultarEstudante()
{
    char nomeBusca[TAM_NOME];
    No *atual = lista;
    bool encontrado = false;

    printf("-----------------\n");
    printf("Informe o nome de busca: ");
    scanf(" %[^\n]", nomeBusca);

    while(atual != NULL){
        if(strcmp(atual->estudante.nome, nomeBusca) == 0){
            encontrado = true;
            printf("Registro encontrado!\n");
            printf("Nome: %s | Nota 1: %.2lf | Nota 2: %.2lf | Média: %.2lf\n", atual->estudante.nome, atual->estudante.n1, atual->estudante.n2, atual->estudante.media);
            break;
        }
        atual = atual->proximo;
    }

    if(!encontrado){
        printf("Registro não encontrado!\n");
    }
}

void AlterarNotas()
{
    char nomeBusca[TAM_NOME];
    No *atual = lista;
    bool encontrado = false;

    printf("-----------------\n");
    printf("Informe o nome de busca: ");
    scanf(" %[^\n]", nomeBusca);

    while(atual != NULL){
        if(strcmp(atual->estudante.nome, nomeBusca) == 0){
            encontrado = true;
            printf("Registro encontrado!\n");
            printf("Nome: %s | Nota 1: %.2lf | Nota 2: %.2lf | Média: %.2lf\n", atual->estudante.nome, atual->estudante.n1, atual->estudante.n2, atual->estudante.media);
            printf("Informe a N1: ");
            scanf(" %lf", &atual->estudante.n1);
            printf("Informe a N2: ");
            scanf(" %lf", &atual->estudante.n2);
            atual->estudante.media = (atual->estudante.n1 + atual->estudante.n2) / 2;
            printf("Nome: %s | Nota 1: %.2lf | Nota 2: %.2lf | Média: %.2lf\n", atual->estudante.nome, atual->estudante.n1, atual->estudante.n2, atual->estudante.media);
            printf("Registro alterado com sucesso!\n");
            break;
        }
        atual = atual->proximo;
    }

    if(!encontrado){
        printf("Registro não encontrado!\n");
    }
}

void ExcluirEstudante()
{
    char nomeBusca[TAM_NOME];
    No *atual = lista;
    No *anterior = NULL;
    bool encontrado = false;

    printf("-----------------\n");
    printf("Informe o nome de busca: ");
    scanf(" %[^\n]", nomeBusca);
    
    while (atual != NULL) {
        if (strcmp(atual->estudante.nome, nomeBusca) == 0) {
            encontrado = true;
            if (anterior == NULL) {
                lista = atual->proximo;
            } else {
                anterior->proximo = atual->proximo;
            }
            free(atual);
            printf("Registro excluído com sucesso.\n");
            break;
        }
        anterior = atual;
        atual = atual->proximo;
    }
    if (!encontrado){
        printf("Registro não encontrado!\n");
    }
}

/**
 * Ordena os estudante
 * 1 - por nome
 * 2 - por média
 */
void OrdenarEstudantes(int criterio)
{
    if (lista == NULL || lista->proximo == NULL)
    {
        printf("Lista vazia ou com um elemento. Nada a ordenar.\n");
        return;
    }

    bool trocou;
    No *atual;

    do
    {
        trocou = false;
        atual = lista;
        while (atual->proximo != NULL)
        {
            bool trocar = false;
            
            if (criterio == 1) { // por nome
                trocar = strcmp(atual->estudante.nome, atual->proximo->estudante.nome) > 0;
            } else if(criterio==2) { //por média
                trocar = atual->estudante.media < atual->proximo->estudante.media;
            } else {
                printf("Critério inválido.\n");
                return;
            }

            if (trocar)
            {
                Estudante temp = atual->estudante;
                atual->estudante = atual->proximo->estudante;
                atual->proximo->estudante = temp;
                trocou = true;
            }
            atual = atual->proximo;
        }
    } while (trocou);

    printf("Lista ordenada por nome.\n");
    ListarEstudantes();
}

// apresentar os 5 melhores SEM MODIFICAR o array original
void CincoMelhoresEstudantes(){
    if (lista == NULL)
    {
        printf("Lista vazia.\n");
        return;
    }

    // Criar uma cópia da lista original
    No *copiaLista = NULL;
    No *atual = lista;
    while (atual != NULL)
    {
        No *novoNo = NovoNo(atual->estudante);
        novoNo->proximo = copiaLista;
        copiaLista = novoNo;
        atual = atual->proximo;
    }

    bool trocou;
    do
    {
        trocou = false;
        atual = copiaLista;
        while (atual->proximo != NULL)
        {
            if (atual->estudante.media < atual->proximo->estudante.media)
            {
                Estudante temp = atual->estudante;
                atual->estudante = atual->proximo->estudante;
                atual->proximo->estudante = temp;
                trocou = true;
            }
            atual = atual->proximo;
        }
    } while (trocou);

    printf("\n-----------------\n");
    printf("5 Melhores Estudantes:\n");
    atual = copiaLista;
    for (int i = 0; i < 5 && atual != NULL; i++)
    {
        printf("Nome: %s | Nota 1: %.2lf | Nota 2: %.2lf | Média: %.2lf\n", atual->estudante.nome, atual->estudante.n1, atual->estudante.n2, atual->estudante.media);
        atual = atual->proximo;
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
        printf("7 - Ordenar estudantes pela média\n");
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
            ConsultarEstudante();
        }
        else if (opcao == 3)
        {
            AlterarNotas();
        }
        else if (opcao == 4)
        {
            ExcluirEstudante();
        }
        else if (opcao == 5)
        {
            ListarEstudantes();
        }
        else if (opcao == 6)
        {
            OrdenarEstudantes(1);
        }
        else if (opcao == 7)
        {
            OrdenarEstudantes(2);
        }
        else if (opcao == 8)
        {
            CincoMelhoresEstudantes();
        }
        else if (opcao == 9)
        {
            printf("Saindo...");
            flag = false;
        }
    }
}
