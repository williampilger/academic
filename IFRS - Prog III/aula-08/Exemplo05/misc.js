/*
 * O fato de DAR PRA FAZER algo, não significa que DEVAMOS fazer.
 * O fato de FUNCIONAR, não significa que seja a MELHOR SOLUÇÃO.
 * O fato de SER POSSÍVEL, não significa que seja a MELHOR PRÁTICA.
 * 
 * Não é legal colocar um monte de classes e funções no mesmo arquivo...
 */

export class Teste {

    constructor(frase) {
        this.frase = frase;
    }
    imprimir() {
        console.log(this.frase);
    }
}

export function somar(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}
