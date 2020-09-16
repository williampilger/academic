/* Júlio César usava um sistema de criptografia, agora conhecido como Cifra de César, que trocava cada
letra pelo equivalente em duas posições à Esquerda no alfabeto (por exemplo, 'C' vira 'A', 'T' vira 'R',
etc.). Ao começo do alfabeto nós voltamos para o fim, isto é 'A' vira 'Y'. Nós podemos, é claro, tentar
trocar as letras com quaisquer número de posições.

Entrada
A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a
quantidade de casos de teste. Cada caso de teste é composto por duas linhas. A primeira linha contém uma
string com até 50 caracteres maiúsculos ('A'-'Z'), que é a sentença após ela ter sido codificada através
desta Cifra de César modificada. A segunda linha contém um número que varia de 0 a 25 e que representa
quantas posições cada letra foi deslocada para a direita.

Saída
Para cada caso de teste de entrada, imprima uma linha de saída com o texto decodificado (transformado
novamente para o texto original) conforme as regras acima e o exemplo abaixo.

6
VQREQFGT                        TOPCODER
2
ABCDEFGHIJKLMNOPQRSTUVWXYZ      QRSTUVWXYZABCDEFGHIJKLMNOP
10
TOPCODER                        TOPCODER
0
ZWBGLZ                          AXCHMA
25
DBNPCBQ                         CAMOBAP
1
LIPPSASVPH                      HELLOWORLD
*/
#include <stdio.h>
#include <string.h>

int main (){
    int n, i;
    char string[51], novastring[51];
    scanf("%d", &n);
    gets(string);
    for(i=0; i<50; i++){
        if(string[i]=='\0'){
            novastring[i]='\0';
            break;
        }
        novastring[i]=string[i]-n;
        if(novastring[i]<'A') novastring[i]+=25;
    }
    puts(novastring);
    return 0;
}
