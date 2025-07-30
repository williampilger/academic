/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */

/**
 * 
 * @param pswd Senha a ser testada.
 * @param config JSON com configurações
 *          minDigs - Número mínimo de dígitos.
 *          letrasMin - Exigir letras minúscolas
 *          letrasMai - Exigir letras minúscolas
 *          numOuSimbol - Exigir número OU simbolo (não usar isso com conjunto com os abaixo)
 *          numeros - Exigir números
 *          simbolos - Exigir simbolos especiais (!@#$%¨&*(){}[]/?;:><.,\|'"-_)
 * @returns True se senha passa.
 */
export const PSWDvalidator = (pswd:string, config:{minDigs:number, letrasMin:boolean, letrasMai:boolean, letrasMaiMin:boolean, numOuSimbol:boolean,numeros:boolean,simbolos:boolean}):boolean => {

    if (pswd.length < config.minDigs) return false;
    if(config.letrasMai && !pswd.match(/[A-Z]/)) return false;
    if(config.letrasMin && !pswd.match(/[a-z]/)) return false;
    if(config.letrasMaiMin && (!pswd.match(/[a-z]/) && !pswd.match(/[A-Z]/))) return false;
    if(config.numOuSimbol && !pswd.match(/[., ,,~, !, @, #, $, %, &, *, ^, -, _, +, =, ?, >, <, [, \], {, }, (, ),0-9]/)) return false;
    if(config.numeros && !pswd.match(/[0-9]/)) return false;
    if(config.simbolos && !pswd.match(/[., ,,~, !, @, #, $, %, &, *, ^, -, _, +, =, ?, >, <, [, \], {, }, (, )]/)) return false;
    
    return true;
}

